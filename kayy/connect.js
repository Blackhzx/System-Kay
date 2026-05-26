const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    fetchLatestWaWebVersion,
    jidDecode,
    Browsers
} = require("@systemzero/baileys");
const pino = require("pino");
const { Boom } = require("@hapi/boom");
const fs = require("fs-extra");
const chalk = require("chalk");
const figlet = require("figlet");
const path = require("path");
const readline = require("readline");

const _NOISE = /Closing open session|closing session|closed session|SessionEntry|chainKey|registrationId|currentRatchet|ephemeralKeyPair|lastRemoteEphemeralKey|rootKey|indexInfo|baseKey|remoteIdentityKey|pendingPreKey|Bad MAC|Retry count|retrying/i;
const _w = process.stdout.write.bind(process.stdout);
const _e = process.stderr.write.bind(process.stderr);
process.stdout.write = (c, enc, cb) => { if (_NOISE.test(c)) { if (typeof cb === 'function') cb(); return true; } return _w(c, enc, cb); };
process.stderr.write = (c, enc, cb) => { if (_NOISE.test(c)) { if (typeof cb === 'function') cb(); return true; } return _e(c, enc, cb); };
let isReconnecting = false;
let currentSocket = null;
let handler = null;
function getHandler() {
    if (!handler) {
        handler = require("./index");
    }
    return handler;
}

const store = {
    contacts: {},
    messages: {},
    chats: {
        all: () => [],
        get: (id) => null
    },
    bind: (ev) => {
        ev.on('contacts.update', (contacts) => {
            for (const contact of contacts) {
                store.contacts[contact.id] = Object.assign(store.contacts[contact.id] || {}, contact);
            }
        });
        ev.on('messages.upsert', ({ messages }) => {
            for (const msg of messages) {
                if (!msg.key?.remoteJid) continue;
                if (!store.messages[msg.key.remoteJid]) store.messages[msg.key.remoteJid] = {};
                store.messages[msg.key.remoteJid][msg.key.id] = msg;
            }
        });
    },
    loadMessage: async (jid, id) => {
        return store.messages[jid]?.[id] || null;
    }
};

const question = (text) => {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: true
        });
        process.stdout.write(text);
        rl.once("line", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};

async function clearOldSessionFiles(sessionPath) {
    try {
        if (!fs.existsSync(sessionPath)) return;
        const files = await fs.readdir(sessionPath);
        const agora = Date.now();
        const umDia = 24 * 60 * 60 * 1000;
        for (const file of files) {
            if (file === 'creds.json') continue;
            if (file.startsWith('pre-key-') || file.startsWith('session-') || file.startsWith('sender-key-')) {
                const filePath = path.join(sessionPath, file);
                const stats = await fs.stat(filePath);
                if (agora - stats.mtimeMs > umDia) await fs.remove(filePath);
            }
        }
    } catch (e) {}
}

async function startSystemZR() {
    if (isReconnecting) {
        console.log(chalk.yellow("Ja tentando reconectar, aguarde..."));
        return;
    }
    isReconnecting = true;

    const sessionPath = path.resolve(__dirname, "session");

    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);

    const _origKeysSet = state.keys.set.bind(state.keys);
    state.keys.set = async (data) => {
        let totalKeys = 0;
        for (const cat in data) totalKeys += Object.keys(data[cat]).length;

        if (totalKeys > 10) {
            process.stdout.write(chalk.cyan(`\nSalvando chaves de sessao (${totalKeys} chaves)...\n`));
            let saved = 0;
            let lastPct = -1;
            const BATCH = 100;
            const entries = [];
            for (const cat in data) {
                for (const id in data[cat]) {
                    entries.push([cat, id, data[cat][id]]);
                }
            }
            for (let i = 0; i < entries.length; i += BATCH) {
                const chunk = entries.slice(i, i + BATCH);
                const batchData = {};
                for (const [cat, id, val] of chunk) {
                    if (!batchData[cat]) batchData[cat] = {};
                    batchData[cat][id] = val;
                }
                await _origKeysSet(batchData);
                saved += chunk.length;
                const pct = Math.min(100, Math.floor((saved / entries.length) * 100));
                if (pct !== lastPct) {
                    lastPct = pct;
                    const filled = Math.floor(pct / 5);
                    const bar = chalk.green('█'.repeat(filled)) + chalk.gray('░'.repeat(20 - filled));
                    process.stdout.write(`\r[${bar}] ${chalk.bold(pct + '%')}   `);
                }
            }
            process.stdout.write('\n\n');
        } else {
            await _origKeysSet(data);
        }
    };

    const _origKeysGet = state.keys.get.bind(state.keys);
    state.keys.get = async (type, ids) => {
        const result = {};
        const BATCH = 100;
        const total = ids.length;
        const showLoader = total > 100;
        let lastPct = -1;
        if (showLoader) process.stdout.write(chalk.cyan(`\nCarregando chaves (${type}, ${total})...\n`));
        for (let i = 0; i < total; i += BATCH) {
            const chunk = ids.slice(i, i + BATCH);
            const partial = await _origKeysGet(type, chunk);
            Object.assign(result, partial);
            if (showLoader) {
                const pct = Math.min(100, Math.floor(((i + chunk.length) / total) * 100));
                if (pct !== lastPct) {
                    lastPct = pct;
                    const filled = Math.floor(pct / 5);
                    const bar = chalk.green('█'.repeat(filled)) + chalk.gray('░'.repeat(20 - filled));
                    process.stdout.write(`\r[${bar}] ${chalk.bold(pct + '%')}   `);
                }
            }
        }
        if (showLoader) process.stdout.write('\n\n');
        return result;
    };

    const { version } = await (async () => {
        try {
            const live = await fetchLatestWaWebVersion();
            if (live?.version) {
                console.log(chalk.cyan(`[WA] versao web: ${live.version.join('.')}`));
                return live;
            }
        } catch (_) {}
        try {
            const github = await fetchLatestBaileysVersion();
            if (github?.version) {
                console.log(chalk.cyan(`[WA] versao GitHub: ${github.version.join('.')}`));
                return github;
            }
        } catch (_) {}
        const fallback = [2, 3000, 1023141645];
        console.log(chalk.yellow(`[WA] versao local: ${fallback.join('.')}`));
        return { version: fallback };
    })();

    console.log(chalk.cyan(figlet.textSync("Kay System", { font: "Small", horizontalLayout: "default" })));
    console.log(chalk.green(`\nIniciando System Zero & Kay System v1.0.0...\n`));

    const systemZR = makeWASocket({
        version,
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        auth: state,
        browser: Browsers.ubuntu("Chrome"),
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 60000,
        keepAliveIntervalMs: 25000,
        shouldSyncHistoryMessage: () => false,
        generateHighQualityLinkPreview: false,
        syncFullHistory: false,
        emitOwnEvents: false,
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id);
                return msg?.message || undefined;
            }
            return { conversation: "Ola, sou o System Zero & Kay System!" };
        }
    });

    currentSocket = systemZR;
    setInterval(() => clearOldSessionFiles(sessionPath), 3600000);

    if (!systemZR.authState.creds.registered) {
        console.log(chalk.yellow("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"));
        console.log(chalk.yellow("  CONEXAO VIA CODIGO DE PAREAMENTO"));
        console.log(chalk.yellow("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"));
        console.log(chalk.white("Siga os passos abaixo para conectar o bot:\n"));
        console.log(chalk.white("1. Abra o WhatsApp no seu celular"));
        console.log(chalk.white("2. Va em: Aparelhos Conectados > Conectar com numero de telefone"));
        console.log(chalk.white("3. Digite o codigo que sera gerado aqui\n"));
        console.log(chalk.yellow("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"));

        let phoneNumber = await question(chalk.cyan("Digite o numero do WhatsApp (ex: 5511999999999): "));
        phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

        if (!phoneNumber || phoneNumber.length < 10) {
            console.log(chalk.red("\nNumero invalido. Reinicie o bot e tente novamente.\n"));
            process.exit(1);
        }

        console.log(chalk.yellow(`\nGerando codigo de pareamento para: +${phoneNumber}...`));

        await new Promise(resolve => setTimeout(resolve, 3000));

        try {
            const code = await systemZR.requestPairingCode(phoneNumber);
            console.log(chalk.yellow("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"));
            console.log(chalk.white("SEU CODIGO DE PAREAMENTO E:"));
            console.log(chalk.bold.green(`\n   ${code}\n`));
            console.log(chalk.white("Insira este codigo no WhatsApp agora."));
            console.log(chalk.yellow("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"));
        } catch (e) {
            console.log(chalk.red("\nErro ao solicitar codigo: "), e.message || e);
        }
    }

    store.bind(systemZR.ev);

    systemZR.ev.on("messages.upsert", async (chatUpdate) => {
        try {
            const mek = chatUpdate.messages[0];
            if (!mek) return;
            if (!mek?.message && !mek?.messageStubType) return;
            if (mek.key?.remoteJid === "status@broadcast") return;
            await getHandler()(systemZR, chatUpdate);
        } catch (err) {
            console.error(chalk.red("[Erro messages.upsert]:"), err.message);
        }
    });

    systemZR.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === "close") {
            const statusCode = new Boom(lastDisconnect?.error)?.output.statusCode;
            const reason = lastDisconnect?.error?.message || statusCode || "Motivo desconhecido";

            console.log(chalk.red(`\nConexao fechada: ${reason}`));

            if (statusCode === DisconnectReason.loggedOut) {
                console.log(chalk.red("Dispositivo desconectado. Delete a pasta 'session' e reinicie.\n"));
                process.exit(1);
            } else {
                console.log(chalk.yellow(`Reconectando em 5 segundos... (codigo: ${statusCode})\n`));
                isReconnecting = false;
                setTimeout(() => {
                    if (currentSocket) {
                        currentSocket.end(() => {});
                        currentSocket = null;
                    }
                    startSystemZR();
                }, 5000);
            }
        } else if (connection === "open") {
            console.log(chalk.green("\nSystem Zero & Kay System conectado com sucesso!\n"));
            isReconnecting = false;
        }
    });

    systemZR.ev.on("creds.update", saveCreds);

    systemZR.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            const decode = jidDecode(jid) || {};
            return decode.user && decode.server ? decode.user + "@" + decode.server : jid;
        }
        return jid;
    };

    return systemZR;
}

startSystemZR();
