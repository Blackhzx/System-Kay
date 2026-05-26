const baileys = require("@systemzero/baileys");
const { NumberDono, prefix, NickDono, NomeBot, SHIZUKU_KEY, SHIZUKU_SITE, sysite, syskey } = require("./dono/dono");
const ytSearch = require('yt-search');
const chalk = require('chalk');
const { version } = require("./package");

const { 
fetchJson, 
colors, 
hora, 
data, 
getBuffer,
 fs, 
SimilarComandos, 
ListaComandos, 
getGroupAdmins, 
getMembros, 
moment, 
msg,
axios,
kyun,
infoSystem,
os,
menu,
menus, 
FotoMenu,
Config,
Config2,
linkfy,
util,
exec,
jpzinhhomi,
Shizukuu,
sleep,
ShizukuStile,
Cmd,
BuscarNogpt,
BaixarNoYt,
ttkdl,
instadl,
METADINHAS,
ANT_LTR_MD_EMJ,
dono1,
dono2,
dono3,
dono4,
dono5,
dono6,
sendImageAsSticker2,
 sendVideoAsSticker2,
 getFileBuffer,
 downloadContentFromMessage,
 prepareWAMessageMedia,
 jidNormalizedUser
} = require("./consts");

module.exports = async function (conn, upsert) {
  try {
const info = upsert?.messages && upsert?.messages[0];
if (!info) return;
const from = info?.key?.remoteJid;
const isGroup = from.endsWith('@g.us');
const pushname = info?.pushName || await conn?.user?.name || "Usuário";
const content = JSON.stringify(info.message);
const quoted = info.quoted ? info.quoted : info
const sender = jidNormalizedUser(isGroup ? info?.key?.participantPn || 
info?.key?.senderPn || 
await conn?.user?.id || 
info?.key?.participant : info?.key?.senderPn || 
info?.key?.participant ||
info?.key?.remoteJid 
);


const botNumber = jidNormalizedUser(await conn.user.id || await conn.user.lid);
const Numero1 = jidNormalizedUser(`${dono1}@s.whatsapp.net`);
const Numero2 = jidNormalizedUser(`${dono2}@s.whatsapp.net`);
const Numero3 = jidNormalizedUser(`${dono3}@s.whatsapp.net`);
const Numero4 = jidNormalizedUser(`${dono4}@s.whatsapp.net`);
const Numero5 = jidNormalizedUser(`${dono5}@s.whatsapp.net`);
const Numero6 = jidNormalizedUser(`${dono6}@s.whatsapp.net`);
const MeuNumero = jidNormalizedUser(`${NumberDono}@s.whatsapp.net`);
const IsCreator = jpzinhhomi?.includes(sender);
const SoCriador = Shizukuu?.includes(sender);
const SoBot = botNumber?.includes(sender)
const So_Dono = MeuNumero?.includes(sender) || 
Numero1?.includes(sender) ||
Numero2?.includes(sender) || 
Numero3?.includes(sender) ||
Numero4?.includes(sender) ||
Numero5?.includes(sender) ||
Numero6?.includes(sender) ||
SoBot || 
SoCriador ||
IsCreator;

const moment = require("moment-timezone");

const date = moment().tz("America/Sao_Paulo").format("DD/MM/YYYY");
const hora = moment().tz("America/Sao_Paulo").format("HH:mm:ss");

const type = baileys.getContentType(info?.message);
let body =
  info?.message?.conversation ||
  info?.message?.extendedTextMessage?.text ||
  info?.message?.imageMessage?.caption ||
  info?.message?.videoMessage?.caption ||
  info?.message?.documentWithCaptionMessage?.message?.documentMessage?.caption ||
  info?.message?.buttonsResponseMessage?.selectedButtonId ||
  info?.message?.templateButtonReplyMessage?.selectedId ||
  info?.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
  info?.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson ||
  info?.text ||
  "";
  
if (info?.message?.listResponseMessage) {
body = info?.message?.listResponseMessage?.singleSelectReply?.selectedRowId;
}
if (info?.message?.interactiveResponseMessage) {
try {const botn = JSON.parse(info?.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson);
if (botn?.id) body = botn?.id;
} catch {}
}

//CONSTS IMPORTANTES
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

///{ constantes muito importantes}\\
const budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';
const Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""
const PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const args = body.trim().split(/ +/).slice(1);
const arg = body.trim().split(/ +/).slice(1);
const q = args.join(' ');
const isCmd = body.trim().startsWith(prefix);
const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

//INFO DE GRUPOS!!
const Infos_Do_Grupo = isGroup ? await conn.groupMetadata(from) : {} || '';
const NomeGrupo = Infos_Do_Grupo?.subject || '';
const DescGp = Infos_Do_Grupo?.desc || '';
const MembrosGP = Infos_Do_Grupo?.participants || [];
const TotalAdmins = MembrosGP[0]?.admin || '';
const TotalMembros = MembrosGP.length || 0;
const Dono_Do_Grupo = Infos_Do_Grupo?.subjectOwnerJid || '';

const So_Admins = isGroup ? getGroupAdmins(MembrosGP) : ''
const somembros = isGroup ? getMembros(MembrosGP) : ''

const dirGroup = `./DATABASE2/GRUPOS/ATIVACOES/${from}.json`

if(isGroup && !fs.existsSync(dirGroup)){
var dataGp2 = [{
name: NomeGrupo,
groupId: from, 
antilinkhard: false, 
So_Admins: false,
bangp: false,
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo(a) ao Grupo: *#nomedogp#*, Kay lhe deseja as boas vindas 🕸️",
legendasaiu: "Adeus, #numerodele#, espero que não se arrependa pela sua decisão. "
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo(a) ao Grupo: *#nomedogp#*, kay lhe deseja as boas vindas 🕸️",
legendasaiu: "Adeus, #numerodele#, espero que não se arrependa pela sua decisão. "
}],
}]
fs.writeFileSync(dirGroup, JSON.stringify(dataGp2, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

const isBemvindo = isGroup ? dataGp[0]?.wellcome[0]?.bemvindo1 : undefined 
const isBemvindo2 = isGroup ? dataGp[0]?.wellcome[1]?.bemvindo2 : undefined
const isAntiLinkHard = isGroup ? dataGp[0]?.antilinkhard : undefined
const SoAdmins = isGroup ? dataGp[0]?.So_Admins : undefined 
const isBanGrupo = isGroup ? dataGp[0]?.bangp : undefined 

const BotOff = Config2.botoff 
const isVerificado = Config2.verificado

//DEFINIÇÕES UTEIS
const selo = Config2.verificado ? {key: {fromMe: false, remoteJid: from, id: "META",
participant: "13135550002@s.whatsapp.net"
}, message: { contactMessage: { displayName: pushname,
 vcard: `BEGIN:VCARD
VERSION:3.0
N:Meta AI;;;;
FN:Meta AI
TEL;waid=13135550002:+1 313 555 0002
END:VCARD`
}
}
} : info


async function reply(texto){
try {
return conn.sendMessage(from, {text: texto, contextInfo: ShizukuStile}, {quoted: selo})
} catch (E) {
return reply("Erro ao enviar msg");
};
};

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
conn.sendMessage(idgp, reactionMessage)
}

var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
conn.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const hora2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(hora2 > "00:00:00" && hora2 < "05:00:00"){
var tempo = 'Boa noite'
} if(hora2 > "05:00:00" && hora2 < "12:00:00"){
var tempo = 'Bom dia'
} if(hora2 > "12:00:00" && hora2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(hora2 > "18:00:00"){
var tempo = 'Boa noite'
}


const isBotGroupAdmins = So_Admins?.includes(botNumber) || false;
const isGroupAdmins = So_Admins.includes(sender) || false || So_Dono ||SoBot || IsCreator || SoCriador

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\
//FUNÇÃO BY: NKZIN-DEV, NÃO TIRA OS CRÉDITOS DESGRAÇA!!
let menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant || '';
if (menc_prt.includes('@lid') && Infos_Do_Grupo?.participants) {
menc_prt = Infos_Do_Grupo.participants.find(v => v.lid === menc_prt)?.jid || '';
}
const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
if (menc_jid2?.[0]?.includes('@lid') && Infos_Do_Grupo?.participants) {
menc_jid2[0] = Infos_Do_Grupo.participants.find(v => v.lid === menc_jid2[0])?.jid || '';
}
const menc_os2 = q.includes("@") ? (Array.isArray(menc_jid2) && menc_jid2.length > 0 ? menc_jid2[0] : null) : menc_prt;
const menc_jid = jidNormalizedUser(menc_os2 || sender);
const sender_ou_n = q.includes("@") ? menc_jid2?.[0] : (menc_prt || sender);
const normalizar = alvo => {
if (alvo?.includes('@lid') && Infos_Do_Grupo?.participants) {
return Infos_Do_Grupo.participants.find(v => v.lid === alvo)?.jid || alvo;
}
return alvo;
};//FUNÇÃO BY: NKZIN-DEV, NÃO TIRA OS CRÉDITOS DESGRAÇA!!
const numClean = txt => txt.replace(/[()+\-\/\s]/g, '') + '@s.whatsapp.net';
const mrc_ou_numero  = q.length > 6  && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const marc_tds       = q.includes('@')                 ? normalizar(menc_jid) : q.length > 6  && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const menc_prt_nmr   = q.length > 12 && !q.includes('@') ? numClean(q)  : normalizar(menc_prt);
const menc_prt3 = info.message?.extendedTextMessage?.contextInfo?.participant
const menc_jid3 = args?.join(" ").replace("@", "") + "@s.whatsapp.net"
const menc_jid23 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid
const sender_ou_n3 = q.includes("@") ? menc_jid : sender
const mrc_ou_numero3 = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os23 = q.includes("@") ? menc_jid : menc_prt 
const marc_tds3 = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_prt_nmr3 = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt
//============================//
if(BotOff && !So_Dono) return;

if(isGroup && isCmd && SoAdmins && !So_Dono && !isGroupAdmins) return;

if(isGroup && isCmd && isBanGrupo && !So_Dono) return


let tipoMsg = "Texto";

if (info?.message?.imageMessage) tipoMsg = "📸 Imagem";
else if (info?.message?.videoMessage) tipoMsg = "🎥 Vídeo";
else if (info?.message?.audioMessage) tipoMsg = "🎧 Áudio";
else if (info?.message?.stickerMessage) tipoMsg = "🔖 Figurinha";
else if (info?.message?.documentMessage) tipoMsg = "📄 Documento";
else if (info?.message?.buttonsResponseMessage) tipoMsg = "🔘 Botão";
else if (info?.message?.listResponseMessage) tipoMsg = "📋 Lista";
else if (info?.message?.reactionMessage) tipoMsg = "💬 Reação";

function linha(label, value) {
  return `${chalk.gray("│")} ${chalk.hex("#9ca3af")(label)} ${chalk.white(value)}`;
}

if (!isGroup && isCmd) {
  console.log(chalk.hex("#7c3aed")("\n╭────〔 ⚡ COMANDO PRIVADO 〕──╮"));
  console.log(linha("🧠 Comando:", command));
  console.log(linha("👤 Usuário:", pushname));
  console.log(linha("📱 Número:", sender.split("@")[0]));
  console.log(linha("🕒 Hora:", hora2));
  console.log(linha("📆 Data:", data));
  console.log(linha("👑 Dono:", So_Dono ? chalk.green("Sim") : chalk.red("Não")));
  console.log(chalk.hex("#7c3aed")("╰───────────────────────────────╯\n"));
}

if (isGroup && isCmd) {
  console.log(chalk.hex("#2563eb")("\n╭────〔 👥 COMANDO EM GRUPO 〕──╮"));
  console.log(linha("🧠 Comando:", command));
  console.log(linha("👤 Usuário:", pushname));
  console.log(linha("📱 Número:", sender.split("@")[0]));
  console.log(linha("👥 Grupo:", NomeGrupo));
  console.log(linha("🕒 Hora:", hora2));
  console.log(linha("👑 Dono:", So_Dono ? chalk.green("Sim") : chalk.red("Não")));
  console.log(chalk.hex("#2563eb")("╰───────────────────────────────╯\n"));
}

if (isGroup && !isCmd && !info.key.fromMe) {
  console.log(chalk.hex("#06b6d4")("\n╭────〔 💬 MENSAGEM EM GRUPO 〕──╮"));
  console.log(linha("👤 Usuário:", pushname));
  console.log(linha("📱 Número:", sender.split("@")[0]));
  console.log(linha("👥 Grupo:", NomeGrupo));
  console.log(linha("📦 Tipo:", tipoMsg));
  console.log(linha("🕒 Hora:", hora2));
  console.log(linha("📎 Texto:", body?.slice(0, 60) || "—"));
  console.log(chalk.hex("#06b6d4")("╰───────────────────────────────╯\n"));
}

if (info?.message?.reactionMessage) {
  console.log(chalk.hex("#facc15")("\n╭────〔 😂 REAÇÃO DETECTADA 〕──╮"));
  console.log(linha("👤 Usuário:", pushname));
  console.log(linha("📱 Número:", sender.split("@")[0]));
  if (isGroup) console.log(linha("👥 Grupo:", NomeGrupo));
  console.log(linha("😄 Emoji:", info.message.reactionMessage.text));
  console.log(chalk.hex("#facc15")("╰───────────────────────────────╯\n"));
}

//==={ANTI LINK} ===\\
let isTrueFalse = Array('tiktok', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await conn.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ') 
}
if(isCmd && isTrueFalse) return reply("o Erro ta aq")
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1200);
conn.groupSettingUpdate(from, 'announcement')
setTimeout(() => {
conn.groupSettingUpdate(from, 'not_announcement')
}, 1200)
if(!JSON.stringify(MembrosGP).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}//FIM


//EVAL E EXECUÇÕES 
if(body.startsWith('π')){
try {
if(info.key.fromMe) return 
if(!So_Dono) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return conn.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(body.startsWith(':)')){
try {
if(info.key.fromMe) return   
if(!So_Dono) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return conn.sendMessage(from, {text: bang}, {quoted: info})
}

conn.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', hora, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}

//EXECUÇÕES EVAL
if(body.startsWith('¥')) {
if(info.key.fromMe) return 
if(!So_Dono) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}//FIM

const MSG = Cmd(command, NomeGrupo, prefix);
const SoLink = q?.includes("http:") || q?.includes("https:");

if(budy2.startsWith("prefixo")){
await reply(`*_Aqui esta o meu prefixo: ${prefix}_*`);
}

if(budy.startsWith(tempo)) {
await reply(`Ola, ${tempo} ${pushname}, Como você está? 😄`);
}

//==COMANDOS COM PREFIXO ABAIXO 
if (!isCmd) return;// ISSO AQUI VAI PARA SE VIER SÓ MENSAGEM SEM PREFIXO, OK?

switch (command) {

//COMANDOS DE ADMIN'S!!
case 'rebaixar':  case 'promover':
if (!isGroupAdmins) return reply(msg.SoAdmin);
if (!isBotGroupAdmins) return reply(msg.BotAdmin)
if (!menc_os2 || menc_jid2.length > 1) return reply("Marque a mensagem do usuário ou mencione apenas um @.");
 if (!JSON.stringify(MembrosGP).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar.");
 if (botNumber.includes(menc_os2)) return reply('Não sou besta de rebaixar eu mesmo né 🙁, mas estou decepcionado com você.');
if(command === 'rebaixar') {
await conn.groupParticipantsUpdate(from, [menc_os2], "demote");
await conn.sendMessage(from, { 
 text: `@${menc_os2.split("@")[0]} foi rebaixado para *"MEMBRO COMUM"*`,
mentions: [menc_os2] 
});
} else if(command === 'promover') {
await conn.groupParticipantsUpdate(from, [menc_os2], "promote");
await conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} foi promovido(a) para o cargo de administrador`,
mentions: [menc_os2]
});
}
break;

case 'ban': case 'banir': case 'kick': case 'avadakedavra':
if (!isGroupAdmins && !SoDono) return reply(msg.SoAdmin);
if (!isBotGroupAdmins) return reply(msg.BotAdmin);
try {

if (!menc_os2 || menc_jid2[1]) 
return reply("Marque a mensagem do usuário ou mencione o @ dele. Apenas um usuário por vez.");
if (!JSON.stringify(MembrosGP).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar.");
 
if (botNumber.includes(menc_os2)) {
await conn.groupParticipantsUpdate(from, [sender], "demote");
return reply("Você tentou me banir! Agora perdeu o cargo de administrador.");
}

if (NumberDono.includes(menc_os2)) {
await conn.groupParticipantsUpdate(from, [sender], "demote");
return reply("Você tentou banir meu dono,  Agora perdeu o cargo de administrador.");
}

await conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} foi removido(a) com sucesso.`, mentions: [menc_os2] });
await conn.groupParticipantsUpdate(from, [menc_os2], "remove");  
 } catch (e) {
console.error(e);
reply("Ocorreu um erro ao tentar remover o usuário.");
 }
break; // by: Lopes 

case 'perfil': {
    try {
        await systemZR.sendMessage(m.chat, { 
            react: { text: "👤", key: m.key } 
        });

        let avatarUrl;

        try {
            const ppUrl = await yuta.profilePictureUrl(sender, "image");
            avatarUrl = ppUrl || imgperfil;
        } catch {
            avatarUrl = imgperfil;
        }

        let status;
        try {
            const recadoUser = await yuta.fetchStatus(sender);
            status = recadoUser[0]?.status?.status || "*sem bio*";
        } catch {
            status = "*bio oculta ou indisponível*";
        }

        const conselho = (advices?.commonAdvices?.length)
            ? advices.commonAdvices[Math.floor(Math.random() * advices.commonAdvices.length)]
            : "não confie nem na sua sombra...";

        const num = () => Math.floor(Math.random() * 9) + 1;
        const pct = () => `${num()}${num()}%`;
        const programa = (Math.floor(Math.random() * 9000) + 1000).toLocaleString('pt-BR');

        let dadosUser = { 
            messages: 0, cmd_messages: 0, figus: 0, 
            imagens: 0, videos: 0, audios: 0, documentos: 0 
        };

        if (isGroup && groupIdscount.includes(from)) {
            let indGrupo = groupIdscount.indexOf(from);
            let grupoData = countMessage[indGrupo];
            let userData = grupoData.numbers.find(u => u.id === sender);

            if (userData) {
                dadosUser = {
                    messages: userData.messages || 0,
                    cmd_messages: userData.cmd_messages || 0,
                    figus: userData.figus || 0,
                    imagens: userData.imagens || 0,
                    videos: userData.videos || 0,
                    audios: userData.audios || 0,
                    documentos: userData.documentos || 0
                };
            }
        }

        const imgBuff = await getBuffer(avatarUrl);
        if (!imgBuff) throw new Error("Imagem não carregada");

        let perfilMsg = `╭━━━『 👤 PERFIL 』━━━⬣
┃ 👤 *Nome:* ${pushname}
┃ 📱 *Número:* ${sender.split("@")[0]}
┃ 📝 *Bio:* ${status}
┃ ⭐ *VIP:* ${isChVip ? "Sim" : "Não"}
┃ 🏷 *Cargo:* ${isCargo || "Usuário"}
┃
┃ 💬 *Msgs:* ${dadosUser.messages}
┃ ⚙️ *Cmds:* ${dadosUser.cmd_messages}
┃ 🖼 *Figurinhas:* ${dadosUser.figus}
┃ 📷 *Imagens:* ${dadosUser.imagens}
┃ 🎥 *Vídeos:* ${dadosUser.videos}
┃ 🎧 *Áudios:* ${dadosUser.audios}
┃ 📄 *Docs:* ${dadosUser.documentos}
┃
┃ 📊 *Nível:* ${pct()}
┃ 🧠 *QI:* ${programa}
┃ 💡 *Dica:* ${conselho}
╰━━━━━━━━━━━━━━━━━━⬣`;

        await yuta.sendMessage(from, {
            image: imgBuff,
            caption: perfilMsg,
            contextInfo: { ...NkChannelKk }
        }, { quoted: selo });

        await systemZR.sendMessage(m.chat, { 
            react: { text: "✅", key: m.key } 
        });

    } catch (e) {
        console.log(e);

        await systemZR.sendMessage(m.chat, { 
            react: { text: "❌", key: m.key } 
        });

        await yuta.sendMessage(from, { 
            text: "❌ Erro ao carregar perfil." 
        }, { quoted: selo });
    }
}
break;

case 'pg':
case 'postargp': {
    if (!isGroup) return reply('Este comando funciona apenas em grupos.');
    if (!So_Dono && !isGroupAdmins) return reply('Apenas admins ou o dono podem usar.');
    if (!q) return reply(`Uso: ${prefix}${command} Seu texto de status aqui`);

    await reagir(from, "⏳");

    try {
        const crypto = require('crypto'); // Necessário para gerar o secret da mensagem
        const messageSecret = crypto.randomBytes(32);

        // Monta a estrutura exata do status de grupo usando baileys nativo
        const msg = baileys.generateWAMessageFromContent(from, {
            messageContextInfo: { messageSecret },
            groupStatusMessageV2: {
                message: { 
                    conversation: q, // Aqui vai o seu texto
                    messageContextInfo: { messageSecret } 
                }
            }
        }, {});

        // Envia o status para o grupo
        await conn.relayMessage(from, msg.message, { messageId: msg.key.id });
        await reagir(from, "✅");

    } catch (e) {
        console.error("Erro no postargp:", e);
        await reagir(from, "❌");
        reply('Erro ao postar status no grupo.');
    }
}
break;

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(msg.SoEmGrupo)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('O recurso de antilink hardcore já está ativado.')
dataGp[0].antilinkhard = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('O recurso de antilink hardcore já está desativado.')
dataGp[0].antilinkhard = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'rvisu':
case 'revelar': {
  await reagir(from, "👀")

  try {
    const quoted = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage

    // ================== VIDEO ==================
    let video = quoted?.videoMessage || 
                quoted?.viewOnceMessageV2?.message?.videoMessage || 
                quoted?.viewOnceMessage?.message?.videoMessage

    if (video) {
      let buff = await getFileBuffer(video, 'video')

      return await conn.sendMessage(from, {
        video: buff,
        mimetype: 'video/mp4',
        contextInfo: ShizukuStile
      }, { quoted: selo })
    }

    // ================== IMAGEM ==================
    let image = quoted?.imageMessage || 
                quoted?.viewOnceMessageV2?.message?.imageMessage || 
                quoted?.viewOnceMessage?.message?.imageMessage

    if (image) {
      let buff = await getFileBuffer(image, 'image')

      return await conn.sendMessage(from, {
        image: buff,
        contextInfo: ShizukuStile
      }, { quoted: selo })
    }

    // ================== AUDIO ==================
    let audio = quoted?.audioMessage || 
                quoted?.viewOnceMessageV2Extension?.message?.audioMessage

    if (audio) {
      let buff = await getFileBuffer(audio, 'audio')

      return await conn.sendMessage(from, {
        audio: buff,
        mimetype: 'audio/mpeg',
        ptt: false,
        contextInfo: ShizukuStile
      }, { quoted: selo })
    }

    reply("• Marque uma imagem, vídeo ou áudio de visualização única.")

  } catch (err) {
    console.log('❌ Erro no revelar:', err)
    reply("Erro ao revelar mídia.")
  }

  break;
}

case 'totag':
case 'cita':
case 'hidetag':
case 'citar': {
  if (!isGroup) return reply(msg.SoEmGrupo)
  if (!isGroupAdmins) return reply(msg.SoAdmin)
  if (!isBotGroupAdmins) return reply(msg.BotAdmin)

  const quotedMsg = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage
  const TDS_GP = MembrosGP.map(i => i.id || i.jid)

  // ================== ENQUETE ==================
  if (quotedMsg?.pollCreationMessageV3) {
    const poll = quotedMsg.pollCreationMessageV3
    const titulo = poll.name
    const opcoes = poll.options.map(o => o.optionName)

    const aviso = await conn.sendMessage(from, {
      text: q || "📊 Nova enquete marcada:",
      contextInfo: {
        mentionedJid: TDS_GP,
        ...ShizukuStile
      }
    })

    return await conn.sendMessage(from, {
      poll: {
        name: titulo,
        values: opcoes,
        selectableCount: poll.selectableCount || 1
      },
      mentions: TDS_GP,
      contextInfo: ShizukuStile
    }, { quoted: aviso })
  }

  // ================== TEXTO DIRETO ==================
  if (!quotedMsg && args.length > 0) {
    return await conn.sendMessage(from, {
      text: args.join(" "),
      mentions: TDS_GP,
      contextInfo: ShizukuStile
    }, { quoted: selo })
  }

  // ================== MÍDIA CITADA ==================
  if (quotedMsg) {

    const tipos = [
      'imageMessage',
      'videoMessage',
      'audioMessage',
      'documentMessage'
    ]

    for (let type of tipos) {
      let msgMidia =
        quotedMsg?.viewOnceMessageV2?.message?.[type] ||
        quotedMsg?.viewOnceMessage?.message?.[type] ||
        quotedMsg?.[type]

      if (msgMidia) {

        if (msgMidia.caption) {
          msgMidia.caption = args.length > 0
            ? args.join(" ")
            : msgMidia.caption
        }

        return await conn.sendMessage(from, {
          [type.replace('Message','')]: await getFileBuffer(msgMidia, type.replace('Message','')),
          caption: msgMidia.caption || "",
          mentions: TDS_GP,
          contextInfo: ShizukuStile
        }, { quoted: selo })
      }
    }

    return await conn.sendMessage(from, {
      forward: {
        key: info.key,
        message: quotedMsg
      },
      mentions: TDS_GP,
      contextInfo: ShizukuStile
    }, { quoted: selo })
  }

  return reply(
`*Use o comando de duas formas:*
1. Marque uma mensagem (foto, vídeo, áudio, etc)
2. Ou digite: *${prefix + command} texto*`
  )
}
break;

case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(msg.SoEmGrupo)
if(!isGroupAdmins && !SoDono) return reply(msg.SoAdmin)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isBemvindo) return reply('Ja esta ativo')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!isBemvindo) return reply('Ja esta Desativado')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'legendabv':  
if(!isGroup) return reply(msg.SoEmGrupo)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isBemvindo) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isBemvindo) {
dataGp[0].wellcome[0].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`
)
}
break

case 'welcome2':
case 'bemvindo2':  
if(!isGroup) return reply(msg.SoEmGrupo)
if(!isGroupAdmins && !So_Dono) return reply(msg.SoDono)
if(args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isBemvindo2) return reply('O recurso já está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply(MSG.Ativado)
} else if(Number(args[0]) === 0) {
if(!isBemvindo2) return reply('O recurso não está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply(MSG.Desativado)
} else {
reply(`Digite da forma correta, ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'legendabv2':  
if(!isGroup) return reply(msg.SoEmGrupo)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isBemvindo2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendasaiu2':
if(!isGroup) return reply(msg.SoEmGrupo)
if(!isGroupAdmins) return reply(msg.SoAdmin)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isBemvindo2) {
dataGp[0].wellcome[1].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`
)
}
break

case 'linkgp':
if(!isGroupAdmins) return reply(msg.SoAdmins);
if(!isGroup) return reply(msg.SoEmGrupos)
if(!isBotGroupAdmins) return reply(msg.BotAdmin);
linkgc = await conn.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'so_adm':
if(!isGroup) return reply(msg.SoEmGrupo)
if(!isGroupAdmins) return reply(msg.SoAdmins)
if(!isBotGroupAdmins) return reply(msg.BotAdmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(SoAdmins) return reply('Ja esta ativo')
dataGp[0].So_Admins = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de só adm utilizar comandos neste grupo.')
} else if(Number(args[0]) === 0) {
if(!SoAdmins) return reply('Ja esta Desativado')
dataGp[0].So_Admins = false
setGp(dataGp)
reply('Desativou o recurso de só adm utilizar comandos neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

//COMANDOS PARA GRUPOS
case 'dono':
case 'bot':{
if(command === 'bot') {
await reagir(from, "🇪🇸");
await reply(`Bot: ${NomeBot}\n\nContato: wa.me/${botNumber.split("@")[0]}`);
} else if(command === 'dono') {
await reagir(from, "👑");
await reply(`Dono: ${NickDono}\n\nContato: wa.me/${NumberDono}`);
}
}
break;

case 'menu': {
try {
await reagir(from, "💛");

// SOCKET
const sock = global.sock || conn || client || this;

// UPLOAD SAFE
let upload;
try {
  upload = sock?.waUploadToServer || sock?.upload;
} catch {
  upload = undefined;
}

// IMG
const mediaMenu = await prepareWAMessageMedia(
{ image: { url: "./dono/menus/Foto-menu/img-menu.jpg" } },
upload ? { upload } : {}
);

// 📂 LISTA COM CATEGORIAS
const listaMenus = {
title: "🐦‍🔥⃞ ᴍᴇɴᴜ-ʟɪsᴛᴀs ⃞🐦‍🔥",
sections: [

{
title: "🇪🇸⃞ ᴄᴀᴛᴇɢᴏʀɪᴀs ⃞🇪🇸",
highlight_label: `${NickDono}`,
rows: [

{
header: "🔥 ᴍᴇɴᴜ",
title: "🍁 MENU PRINCIPAL",
description: "Comandos básicos do bot",
id: prefix + "menuu"
},
{
header: "🔞 ᴍᴇɴᴜ",
title: "🍁 MENU +18",
description: "Funções VIP",
id: prefix + "menu18"
},
{
header: "📥 ᴍᴇɴᴜ",
title: "🍁 MENU DOWNLOAD",
description: "Baixar músicas e vídeos",
id: prefix + "menudown"
},
{
header: "🎭 ᴍᴇɴᴜ",
title: "🍁 MENU FIGURINHAS",
description: "Criar e editar stickers",
id: prefix + "menufig"
},
{
header: "👑 ᴍᴇɴᴜ",
title: "🍁 MENU DONO",
description: "Comandos do dono",
id: prefix + "menudono"
},
{
header: "🛡️ ᴍᴇɴᴜ",
title: "🍁 MENU ADM",
description: "Controle de grupos",
id: prefix + "menuadm"
}

]
}

]
};

// 🔘 BOTÕES (2 URL)
const botoes = [

{
name: "single_select",
buttonParamsJson: JSON.stringify(listaMenus)
},

{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "🇪🇸 ᴅᴇᴠ ʟᴀʙ 💙",
url: "https://whatsapp.com/channel/0029VbCWtIVBKfiAYcNekT3N"
})
},

{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "📞 ᴄᴏɴᴛᴀᴛᴏ ᴅᴏ ᴄʀɪᴀᴅᴏʀ",
url: "https://wa.me/556798229189"
})
}

];

// 🧠 TEXTO ESTILIZADO (MESMA PEGADA)
const textok = `┏╾ׁ═╼✵╾ᷓ═╼֡͜✯⃘✯╾═╼✵╾ᷓ═╼┓
┃ 👤 *Usuário:* ${pushname}
┃ 📅 *Data:* ${date}
┃ ⏰ *Hora:* ${hora2}
┗╾ׁ═╼✵╾ᷓ═╼֡͜✯⃘✯╾═╼✵╾ᷓ═╼┛

🍁 *Respiração da Névoa* 🍁
*Oitava Forma: Nuvens obscuras*

🇪🇸⃞ sᴇʟᴇᴄɪᴏɴᴇ ᴜᴍ ᴍᴇɴᴜ ᴀʙᴀɪxᴏ ⃞🇪🇸`;

// 🎴 CARD
const carouselMessage = {
cards: [
{
header: { hasMediaAttachment: true, imageMessage: mediaMenu.imageMessage },
headerType: "IMAGE",
body: { text: textok },
footer: { text: `© ${NickDono}` },
nativeFlowMessage: { buttons: botoes }
}
]
};

// 🚀 ENVIO
await sock.relayMessage(
from,
{
interactiveMessage: {
contextInfo: {
participant: from,
quotedMessage: { conversation: "🧡" }
},
body: { text: "🧡 ᴍᴇɴᴜ ᴄᴀʀʀᴇɢᴀᴅᴏ 🧡" },
carouselMessage
}
},
{}
);

} catch (e) {
console.error(e);
reply(mess.error());
}
break;
}

case 'menuu': { await reagir(from, "❤️‍🔥")
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menu(prefix, sender, NickDono, NomeBot, data, hora, NumberDono, version), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
}break;

case 'menufigurinhas': case 'menufig': { await reagir(from, "🇪🇸");
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menuStickers(prefix, sender), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
} break 

case 'menuadm':{ await reagir(from, "👑")
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menuadm(prefix, sender), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
} break;

case 'menu18':{ await reagir(from, "🔞")
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menu18(prefix, sender), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
} break;

case 'menudono':{ await reagir(from, "🤴")
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menuDono(prefix, sender), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
} break;

case 'menudown':{ await reagir(from, "🎶")
await conn.sendMessage(from, {image: FotoMenu, caption: menus?.menuDown(prefix, sender), mentions: [sender, info?.key?.remoteJid], contextInfo: ShizukuStile}, {quoted: info});
} break;

//COMAMDOS DE IA
case 'chatgpt': case 'gpt':{
if(!q.trim()) return reply("Falta a question!");
await reagir(from, "👀");
let resposta = await BuscarNogpt(q, SHIZUKU_SITE, SHIZUKU_KEY);
await reply(resposta);
}
break;

case "cardney":
case "neymarcard": {
try {

if (!q) return reply("🧾 Coloca um texto aí!");
if (q.length > 40) return reply("⚠️ Máx 40 caracteres!");

// 🎴 REAÇÃO
await reagir(from, "🎴");

// 🔗 API
let img = `http://node3.tedhost.com.br:3027/cardney?text=${encodeURIComponent(q)}`;

// 🎤 FRASES
const frases = [
"Nunca desista dos seus sonhos",
"O segredo é acreditar",
"Eu jogo por amor ao futebol",
"Seja ousado sempre",
"A pressão faz parte",
"Treine enquanto eles dormem",
"A vitória é consequência",
"Confie no seu talento",
"Humildade sempre",
"Deus no comando",
"Se cair, levante mais forte",
"O impossível é só opinião",
"Jogue com alegria",
"A mente é tudo",
"Se arrisque mais",
"O sucesso vem com esforço",
"Faça história",
"Persistência vence talento",
"Seja diferente",
"O topo é o objetivo",
"Acredite até o fim",
"Nada vem fácil",
"Seja sua melhor versão",
"O foco é vencer",
"Nunca pare de evoluir",
"O jogo muda rápido",
"Dê o seu máximo",
"Seja protagonista",
"A vida é desafio",
"Viva o momento"
];

let frase = frases[Math.floor(Math.random() * frases.length)];

// 📥 BAIXAR IMAGEM (FORÇADO)
const buffer = await getBuffer(img);

if (!buffer || buffer.length < 1000) {
return reply("❌ Erro: API não retornou imagem válida");
}

// 📤 ENVIAR DIRETO (SEM BUG)
await conn.sendMessage(from, {
image: buffer,
caption: `🧾 *CARD DO NEYMAR*\n\n"${q}"\n\n💬 ${frase}\n\n_${NomeBot} 🚀_`
}, { quoted: info });

// ✅ FINAL
await reagir(from, "✅");

} catch (e) {
console.log("Erro cardney:", e);
await reagir(from, "❌");
reply("❌ Erro ao gerar card");
}
}
break;

case '8d': {

const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const { downloadContentFromMessage } = require('@systemzero/baileys')

try {

// ========================
// PEGAR ÁUDIO
// ========================

const quoted = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage

let audioMessage = null

if (quoted?.audioMessage) {
  audioMessage = quoted.audioMessage
}

// ========================
// SEM ÁUDIO
// ========================

if (!audioMessage) {
return reply(`╔══════════════════╗
║ 🎧 AUDIO VIP
╚══════════════════╝

❌ Responda um áudio.

📌 Exemplos:
${prefix}8d 1
${prefix}8d 2
${prefix}8d grave
${prefix}8d demonio
${prefix}8d robot
${prefix}8d nightcore`)
}

// ========================
// REAÇÃO
// ========================

await conn.sendMessage(from, {
react: { text: "🎧", key: info.key }
})

// ========================
// EFEITO
// ========================

const efeito = args[0]?.toLowerCase() || '1'

let filtro = ''
let nome = ''

switch (efeito) {

case '1':
nome = '🎧 8D LEVE'
filtro = 'apulsator=hz=0.08'
break

case '2':
nome = '🔥 8D FORTE'
filtro = 'apulsator=hz=0.12,volume=1.4'
break

case '3':
nome = '💀 8D EXTREMO'
filtro = 'apulsator=hz=0.15,bass=g=15'
break

case 'grave':
nome = '🔊 SUPER GRAVE'
filtro = 'bass=g=20'
break

case 'demonio':
nome = '👹 VOZ DEMÔNIO'
filtro = 'asetrate=44100*0.7,atempo=1.1'
break

case 'robot':
nome = '🤖 VOZ ROBÔ'
filtro = 'afftfilt=real=hypot(re\\,im):imag=0'
break

case 'nightcore':
nome = '⚡ NIGHTCORE'
filtro = 'asetrate=48000*1.25,atempo=1.1'
break

default:
nome = '🎧 8D PADRÃO'
filtro = 'apulsator=hz=0.08'

}

// ========================
// MSG PROCESSO
// ========================

await conn.sendMessage(from, {
text: `╔══════════════════╗
║ 👑 AUDIO VIP
╚══════════════════╝

${nome}

⏳ Processando áudio...`
}, { quoted: info })

// ========================
// TEMP
// ========================

const tempDir = path.resolve("./temp")
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir)

const id = Date.now()
const input = path.join(tempDir, `${id}.ogg`)
const output = path.join(tempDir, `${id}.mp3`)

// ========================
// BAIXAR ÁUDIO
// ========================

const stream = await downloadContentFromMessage(audioMessage, 'audio')

let buffer = Buffer.from([])
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

fs.writeFileSync(input, buffer)

// ========================
// FFMPEG
// ========================

// 🔥 suporta Windows e Linux
const ffmpeg = fs.existsSync("./lib/ffmpeg.exe")
  ? "./lib/ffmpeg.exe"
  : "ffmpeg"

// ========================
// EXECUTAR
// ========================

const cmd = `"${ffmpeg}" -y -i "${input}" -af "${filtro}" "${output}"`

exec(cmd, async (err) => {

if (err) {
console.log(err)
return reply('❌ Erro ao aplicar efeito.')
}

try {

if (!fs.existsSync(output)) {
return reply('❌ Áudio não processado.')
}

// ========================
// ENVIAR
// ========================

await conn.sendMessage(from, {
audio: fs.readFileSync(output),
mimetype: 'audio/mpeg',
ptt: false
}, { quoted: info })

// ========================
// FINAL
// ========================

await conn.sendMessage(from, {
text: `╔══════════════════╗
║ ✅ EFEITO APLICADO
╚══════════════════╝

${nome}

🔥 Áudio processado com sucesso.`
}, { quoted: info })

// ========================
// LIMPAR
// ========================

if (fs.existsSync(input)) fs.unlinkSync(input)
if (fs.existsSync(output)) fs.unlinkSync(output)

// ========================
// REAÇÃO FINAL
// ========================

await conn.sendMessage(from, {
react: { text: "✅", key: info.key }
})

} catch (e) {
console.log(e)
}

})

} catch (err) {
console.log(err)
reply('❌ Erro no comando 8d.')
}

}
break;

case 'pin':
case 'pinterest': {
try {

if (!q) return reply(`Uso: ${prefix}${command} <termo> [qtd]\nEx: ${prefix}${command} gato 6`);

const args = q.trim().split(/\s+/);

let limit = 6;
if (/^\d+$/.test(args[args.length - 1])) {
    limit = Math.max(1, Math.min(10, parseInt(args.pop(), 10)));
}

const query = args.join("");

// 🔎 REAÇÃO
await reagir(from, "🔎");

// 📡 API
const axios = require("axios");

const { data } = await axios.get(
    `${sysite}/api/pinterest`,
    {
        params: { q: query, limit: 50 },
        timeout: 120000
    }
);

const results = Array.isArray(data?.results) ? data.results : [];

if (!results.length) {
    await reagir(from, "❌");
    return reply("Nenhum resultado encontrado.");
}

// 📦 BAILEYS IMPORTS
const { generateWAMessageFromContent, prepareWAMessageMedia } = require("@systemzero/baileys");

const cards = [];

// 🖼️ CARDS
for (let i = 0; i < Math.min(limit, results.length); i++) {

    const img = results[i]?.image_url;
    if (!img) continue;

    const media = await prepareWAMessageMedia(
        { image: { url: img } },
        { upload: conn.waUploadToServer }
    );

    cards.push({
        header: {
            title: `📌 Pinterest • ${query} (${i + 1}/${limit})`,
            hasMediaAttachment: true,
            imageMessage: media.imageMessage
        },
        body: {
            text: "Toque nos botões abaixo 👇"
        },
        nativeFlowMessage: {
            buttons: [
                {
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Abrir imagem",
                        url: img
                    })
                },
                {
                    name: "cta_copy",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Copiar URL",
                        copy_code: img
                    })
                }
            ]
        }
    });
}

// 📤 MESSAGE FINAL
const msg = generateWAMessageFromContent(from, {
    viewOnceMessage: {
        message: {
            interactiveMessage: {
                header: { title: "📌 Pinterest Search" },
                body: {
                    text: `🔎 Pesquisa: *${query}*\n🖼️ Resultados: *${cards.length}*`
                },
                footer: {
                    text: `${NomeBot} 🚀`
                },
                carouselMessage: { cards }
            }
        }
    }
}, { userJid: conn.user.id });

// 🚀 ENVIO
await conn.relayMessage(from, msg.message, { messageId: msg.key.id });

// ✅ FINAL
await reagir(from, "✅");

} catch (e) {
console.log("Erro pinterest:", e);

await reagir(from, "❌");
reply("❌ Erro ao buscar imagens no Pinterest.");
}
}
break;

case 'play': {
try {
if (!q) return reply('❌ Digite o nome da música/vídeo');

await reagir(from, "🎧");

// busca vídeo
let search = await ytSearch(q);
let video = search.videos[0];
if (!video) return reply('❌ Nenhum resultado encontrado');

// sections (vídeos similares)
let sections = [
{
title: "Resultados",
rows: search.videos.slice(0, 5).map(v => ({
title: v.title,
description: `⏱ ${v.timestamp} • ${v.author.name}`,
id: `${prefix}play ${v.url}`
}))
}
];

// menu
let RG = `╔━᳀『 Play Downloader 』═᳀
⌬ *Título :* ${video.title}
⌬ *Duração :* ${video.timestamp}
⌬ *Canal :* ${video.author.name}
⌬ *Status : Selecione o formato abaixo*
╚═━═━═━═━═━═━═━═━═━═᳀`;

await conn.sendMessage(from, { 
interactiveMessage: {
title: RG,
footer: "© Kay System • Clique para baixar",
thumbnail: video.thumbnail, // A MÁGICA ESTÁ AQUI: Passar apenas a string do link!
nativeFlowMessage: {
messageParamsJson: JSON.stringify({
limited_time_offer: {
text: "© Kay System",
url: "https://wa.me/",
copy_code: "© Kay System",
expiration_time: Date.now() + (86400000 * 30)
},
bottom_sheet: {
in_thread_buttons_limit: 3,
divider_indices: [1, 2, 3, 999],
list_title: "Opções de Download",
button_title: "Selecionar"
},
tap_target_configuration: {
title: "Play Downloader",
description: "Sistema de download",
canonical_url: "https://wa.me/",
domain: "https://kay-system.app",
button_index: 0
}
}),
buttons: [
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "🎵 Baixar Áudio",
id: `${prefix}playdl ${video.url}`
})
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "🎬 Baixar Doc",
id: `${prefix}pdoc ${video.url}`
})
},
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "🔎 Vídeos Similares",
sections: sections
})
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "📢 Canal",
url: "https://whatsapp.com/channel/"
})
},
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "📋 Copiar link",
copy_code: video.url
})
}
]
}
}
}, { quoted: info }); 

} catch (e) {
console.log(e);
reply('❌ Erro ao executar comando');
}
}
break;

case 'pdoc':
try {
if(!q?.trim()) return reply("Por favor adicione um link do YouTube!")
await reagir(from, "📤");
const audiobct = await getBuffer(`${SHIZUKU_SITE}/download/ytmp3?&link=${encodeURIComponent(q?.trim())}&apitoken=${SHIZUKU_KEY}`)
await conn.sendMessage(from, {document: audiobct,
mimetype: "audio/mpeg", fileName: "audio.mp3", ptt: false, contextInfo: ShizukuStile}, {quoted: info});
} catch (e) {
reply("Error...") 
} break 



//DOWNLOADS
case 'playdl': {
try {
if (!q) return reply(`Exemplo: ${prefix + command} [link-youtube]`);

await reagir(from, "⏳");

const axios = require('axios');
const { data: res } = await axios.get(`${sysite}/v2/player`, {
  params: {
    text: q,
    apikey: syskey
  }
});

if (!res || !res.status) 
  return reply('Erro ao baixar música.');

await conn.sendMessage(from, {
  audio: { url: res.download_url },
  mimetype: 'audio/mpeg',
  fileName: `${res.title}.mp3`,
  contextInfo: ShizukuStile
}, { quoted: selo });

await reagir(from, "✅");

} catch (e) {
console.log(e);
await reagir(from, "❌");
reply('Erro ao processar download do YouTube.');
}
}
break;

case 'spotify': {
    if (!q) return reply(`Exemplo: ${prefix}${command} Slash Inferno`);
    await reagir(from, "🔍");
    
    try {
        const { data: res } = await axios.get(`${sysite}/api/search/spotify`, {
            params: { q: q, limit: 10, apikey: syskey }
        });
 
        if (!res?.result?.length) return reply('❌ Nenhum resultado encontrado.');
 
        await conn.sendMessage(from, {
            interactiveMessage: {
                title: `╔━᳀『 Sᴘᴏᴛɪғʏ Sᴇᴀʀᴄʜ 』═᳀\n⌬ *Busca:* ${q}\n⌬ *Resultados:* ${res.result.length}\n╚═━═━═━═━═━═━═━═━═᳀`,
                footer: "© Kay System",
                thumbnail: res.result[0].thumb,
                nativeFlowMessage: {
                    buttons: [{
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                         title: "🎵 Selecionar Música",
                        sections: [{
                          title: "Resultados do Spotify",
                        rows: res.result.map((t, i) => ({
                          title: `${i + 1}. ${t.title}`,
                        description: `${t.artists} | ⏱ ${t.duration}`,
                          id: `${prefix}spotify2 ${t.url}`
             }))
           }]
           })
          }]
         }
        }
       }, { quoted: info });
    } catch (e) {
        reply('❌ Erro ao buscar no Spotify.');
    }
}
break;
 
case 'spotify2': {
    if (!q) return reply(`Exemplo: ${prefix}${command} [link-spotify]`);
    await reagir(from, "⏳");
    try { const { data: res } = await axios.get(`${sysite}/api/v1/spotify`, {
          params: { text: q, apikey: syskey }
        });
        if (!res?.status) throw new Error('Falha API');
        await conn.sendMessage(from, { 
            audio: { url: res.download_url.replace(/^http:\/\//i, 'https://') }, 
            mimetype: 'audio/mpeg', 
            fileName: `${res.title}.mp3` 
        }, { quoted: info });
        await reagir(from, "✅");
    } catch (e) {
        await reagir(from, "❌");
    }
}
break;

case 'playtik': {
  const axios = require('axios')

  const text = q

  if (!text) return reply(`Exemplo: ${prefix}${command} MTG pra ficar feliz`)

  await conn.sendMessage(from, {
    react: { text: "🎧", key: info.key }
  })

  try {
    const { data } = await axios.get(
      "http://node3.tedhost.com.br:3027/playtik",
      {
        params: { q: text },
        timeout: 10000
      }
    )

    if (!data?.status || !data?.results?.length) {
      return reply("❌ Nada encontrado.")
    }

    const v = data.results[0]

    const msg =
`🎧 *PLAYTIK*

🎵 ${v.title}
👤 ${v.author}
🎶 ${v.music || "sem info"}
`

    await conn.sendMessage(from, {
      image: { url: v.cover },
      caption: msg
    }, { quoted: info })

    // ⚠️ "Áudio"
    // TikTok não fornece mp3 real → usamos vídeo como fallback
    await conn.sendMessage(from, {
      video: { url: v.video },
      mimetype: "video/mp4",
      caption: "🎧 Áudio/Video"
    }, { quoted: info })

  } catch (e) {
    console.log(e)
    reply("❌ Erro no playtik.")
  }
}
break;

case 'play_video':
if(!q.trim()) return reply("coloca o nome da música kpt");
await reply(msg.Download);
try {
const Video = await BaixarNoYt(q, tipo = 'ytmp4');
await conn.sendMessage(from, {video: {url: Video}, mimetype: "video/mp4", contextInfo: ShizukuStile, ptt: false}, {quoted: info})
} catch (e) {
reply(`${e}`)
} break;



case 'ttkdl': case 'tiktokdl': {
try {
if(!q?.trim()) { 
return reply("*_Cade o url do video?_*") 
}
if(!SoLink)  return reply("*_Apenas links_*") 
await reply(msg.Download)
await ttkdl(q, conn, from, info, quoted, ShizukuStile, SHIZUKU_SITE, SHIZUKU_KEY);
await reagir(from, "✅");
} catch (e) {
reply("Erro") 
}
}break;

case 'instadl': {
try {
if(!q.trim()) {
return reply("*_Cade o link do vídeo do Instagram?_*")
} 
if(!SoLink) return reply("*_Apenas links_*");
await reply(msg.Download);
await instadl(q, conn, from, info, quoted, ShizukuStile, SHIZUKU_SITE, SHIZUKU_KEY) 
await reagir(from, "✅");
} catch (e) {
await reply("Erro ao buscar resultados");
}
}
break;

case 'tiktoksearch':
case 'searchtiktok':
case 'tts': {//✧･ﾟ: ᴅᴇᴠʟᴀʙ ✧･ﾟ:
try {

const axios = require('axios');

if (!q) return reply(`⚠️ *ᴇxᴇᴍᴘʟᴏ ᴅᴇ ᴜsᴏ:* ${prefix + command} mc kevin`);

// 🔍 REAÇÃO
await reagir(from, '🔍');

// 📡 REQUEST
const resu = await axios({
method: "POST",
url: "https://tikwm.com/api/feed/search",
headers: {
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
'Accept': 'application/json, text/javascript, */*; q=0.01',
'X-Requested-With': 'XMLHttpRequest',
'User-Agent': 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 Chrome/130.0.0.0 Mobile Safari/537.36',
'Referer': 'https://www.tikwm.com/'
},
data: {
keywords: q,
count: 12,
cursor: 0,
web: 1,
hd: 1
}
});

const videos = resu.data?.data?.videos;

if (!videos || videos.length === 0) {
await reagir(from, "❌");
return reply('❌ *ɴᴇɴʜᴜᴍ ᴠɪ́ᴅᴇᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ*');
}

// 🎲 RANDOM VIDEO
const data = videos[Math.floor(Math.random() * videos.length)];

// 📤 SEND VIDEO
await conn.sendMessage(from, {
video: { url: `https://tikwm.com${data.play}` },
caption:
`🎬 *ᴛɪᴋᴛᴏᴋ sᴇᴀʀᴄʜ*

📌 *ᴛɪ́ᴛᴜʟᴏ:* ${data.title || 'sᴇᴍ ᴛɪ́ᴛᴜʟᴏ'}
⏱️ *ᴅᴜʀᴀᴄ̧ᴀ̃ᴏ:* ${data.duration || 0}s
👤 *ᴀᴜᴛᴏʀ:* ${data.author?.nickname || 'ᴅᴇsᴄᴏɴʜᴇᴄɪᴅᴏ'}`
}, { quoted: info });

// ✅ REAÇÃO FINAL
await reagir(from, "✅");

} catch (e) {
console.log(e);

await reagir(from, "❌");
reply('❌ *ᴇʀʀᴏ ᴀᴏ ʙᴜsᴄᴀʀ ᴠɪ́ᴅᴇᴏ*');
}
}
break;//✧･ﾟ: ᴅᴇᴠʟᴀʙ ✧･ﾟ:

case 'gimage': case 'img': case 'imagem': {
if (!q) return reply(`Uso: ${prefix}${command} gatos|5`);
let [busca, qtd] = q.split('|'); busca = busca.trim();
let limite = qtd ? parseInt(qtd.trim()) : 1;
if (isNaN(limite) || limite < 1) limite = 1; if (limite > 50) limite = 50;
await reagir(from, "⏳");
try {
const { data: res } = await axios.get(`${sysite}/api/search/gimage2`, { params: { query: busca, limite: limite, apikey: syskey } });
if (!res?.status || !res?.resultados?.length) return reply('Nenhum resultado encontrado.');
for (let i = 0; i < res.resultados.length; i++) {
await conn.sendMessage(from, { image: { url: res.resultados[i].url }, caption: `Busca: ${busca} (${i + 1}/${res.resultados.length})\nTítulo: ${res.resultados[i].title}` }, { quoted: info });
await sleep(1000); }
await reagir(from, "✅");
} catch (e) { console.error(e); reply('Erro ao buscar a imagem.'); } }
break;

case 'clima':
case 'tempo': {
try {

// 📡 REAÇÃO
await reagir(from, "📡");

// ❌ SEM ARG
if (!q) {
return reply(`*Sintaxe correta:* ${prefix + command} nome da cidade\n• Retire acentos se necessário`);
}

// 📡 API
const axios = require("axios");

const clima = await axios.get(
`https://api.openweathermap.org/data/2.5/weather`, {
params: {
q: q,
appid: "f5c0840c2457fbb64188a6d4be05618f",
units: "metric",
lang: "pt_br"
}
});

// ❌ ERRO API
if (!clima?.data || clima.data.cod !== 200) {
await reagir(from, "❌");
return reply("❌ Cidade não encontrada.");
}

// 📊 DADOS
const d = clima.data;

const texto =
`🌞 *Temperatura:* ${d.main.temp}ºC
🏙️ *Cidade:* ${d.name}
🔥 *Máxima:* ${d.main.temp_max}ºC
❄ *Mínima:* ${d.main.temp_min}ºC
🌦 *Clima:* ${d.weather[0].description}
💧 *Umidade:* ${d.main.humidity}%
🌫 *Vento:* ${d.wind.speed} m/s

👤 *Solicitado por:* ${pushname}`;

// 📤 ENVIO
await conn.sendMessage(from, {
text: texto
}, { quoted: info });

// ✅ FINAL
await reagir(from, "✅");

} catch (e) {
console.log("Erro clima:", e);

await reagir(from, "❌");
reply("❌ Erro ao buscar clima.");
}
}
break;

case 'nuke': {
try {

// 🔒 PERMISSÕES
if (!So_Dono) return reply("❌ Apenas meu dono pode usar isso.");
if (!isGroup) return reply("❌ Apenas em grupos.");
if (!isBotGroupAdmins) return reply("❌ Preciso ser admin.");

// ⚠️ REAÇÃO
await reagir(from, "💣");

// 📝 ALTERAR NOME/DESC
await conn.groupUpdateSubject(from, `ARQUIVED BY: ${NickDono}`);
await conn.groupUpdateDescription(from, `Another one for my collection of archived groups 🤷‍♂️\nby ${NickDono}`);

// 🔗 RESET LINK
await conn.groupRevokeInvite(from);

// 📊 METADATA
const groupMetadata = await conn.groupMetadata(from);
const groupMembers = groupMetadata.participants.map(i => i.id).filter(Boolean);

// 👑 IDs IMPORTANTES
const groupOwnerId = groupMetadata.owner || "";
const donosFixos = [
`${NumberDono}@s.whatsapp.net`,
`${dono1}@s.whatsapp.net`,
`${dono2}@s.whatsapp.net`,
`${dono3}@s.whatsapp.net`,
`${dono4}@s.whatsapp.net`,
`${dono5}@s.whatsapp.net`,
`${dono6}@s.whatsapp.net`
];

// 🚫 NÃO REMOVER
const botId = conn.user.id;

// 🎯 FILTRAR MEMBROS
const membersToRemove = groupMembers.filter(id =>
id !== botId &&
id !== groupOwnerId &&
!donosFixos.includes(id)
);

// ❌ NADA PRA REMOVER
if (membersToRemove.length === 0) {
await reagir(from, "⚠️");
return reply("*Não há ninguém para remover.*");
}

// ⚡ AVISO
await conn.sendMessage(from, {
text: `💣 *NUKE ATIVADO*

Removendo ${membersToRemove.length} membros...`
}, { quoted: info });

// ⏳ PEQUENO DELAY
await new Promise(r => setTimeout(r, 1000));

// 🚀 REMOVER TODOS
await conn.groupParticipantsUpdate(from, membersToRemove, 'remove');

// ✅ FINAL
await reagir(from, "🔥");

} catch (e) {
console.error("Erro nuke:", e);

await reagir(from, "❌");
reply("❌ Erro ao executar nuke.");
}
}
break;

case 'shazam': {
try {

// 🎧 VERIFICAR ÁUDIO
if ((isMedia && isAudio) || isQuotedAudio) {

await reagir(from, "✨");

let encmedia;

// 📥 PEGAR ÁUDIO
if (isQuotedAudio) {
encmedia = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage;
} else {
encmedia = info.message.audioMessage;
}

// 🔎 IDENTIFICAR MÚSICA
const infoMusica = await identificarMusica(
encmedia,
arcloud,
ytAudio,
DLT_FL,
getRandom,
getExtension,
getFileBuffer
);

// 📝 TEXTO
let txt = mess.shazam(infoMusica).trim();

// 📸 ENVIO CAPA
await conn.sendMessage(from, {
image: { url: infoMusica.thumbYT },
caption: txt
}, { quoted: info });

// 🎧 ENVIO ÁUDIO (SE TIVER)
if (infoMusica?.infoYT?.download?.url) {

await conn.sendMessage(from, {
audio: { url: infoMusica.infoYT.download.url },
mimetype: "audio/mpeg",
fileName: `${infoMusica.tituloYT || "musica"}.mp3`
}, { quoted: info });

} else {
reply("❌ Não foi possível baixar o áudio.");
}

// ✅ FINAL
await reagir(from, "✅");

} else {
reply('*ᴍᴀʀǫᴜᴇ ᴜᴍ ᴀᴜᴅɪᴏ 🙇‍♂️*');
}

} catch (e) {
console.log("Erro shazam:", e);

await reagir(from, "❌");
reply("❌ Erro ao identificar música.");
}
}
break;
//METADINHAS
case 'metadinhas': {await reagir(from, "🧑‍🤝‍🧑");
try {await METADINHAS(conn, from, info,quoted, SHIZUKU_KEY, SHIZUKU_SITE);
} catch (e) {reply("Error..") }
} break 

//COMANDOS DE DONO!!
case 'setprefix':
if (!So_Dono) return reply(msg.SoDono);
if (!q) return reply("Digite o novo prefixo. Ex: *!setprefix .*");
const novoPrefix = q.trim();
Config.prefix = novoPrefix;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ Prefixo alterado para: *${novoPrefix}*`);
break;

case 'nick-dono':
if (!So_Dono) return reply(msg.SoDono);
const novaNick = q.trim();
Config.NickDono = novaNick;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ Nick do dono alterado para: *${novaNick}*`);
break;

case 'nome-bot':
if (!So_Dono) return reply(msg.SoDono);
const novoNome = q.trim();
Config.NomeBot = novoNome;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ Nome do bot alterado para: *${novoNome}*`);
break;

case 'novo-dono':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!setdono 551199999999*");
const novoDn = q.split("@")[0] || menc_os2.split("@")[0];
if (novoDn.length < 10) return reply("Número inválido.");
const novoDono = novoDn;
Config.NumberDono = novoDono;
fs.writeFileSync("./dono/dono.json", JSON.stringify(Config, null, 4));
reply(`✔ *Número do dono atualizado!*\nNovo dono: wa.me/${novoDono}`);
break;

case 'dono1':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono1 551199999999*");
const novodn1 = q.split("@")[0] || menc_os2.split("@")[0];
if (novodn1.length < 10) return reply("Número inválido.");
const Dono1 = novodn1;
Config2.dono1 = Dono1;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Pronto mestre!*\n${NomeBot} agora tem um novo dono!\n\n👑 Dono 1: wa.me/${Dono1}`);
break;


case 'dono2':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono2 551199999999*");
const novodn2 = q.split("@")[0] || menc_os2.split("@")[0];
if (novodn2.length < 10) return reply("Número inválido.");
const Dono2 = novodn2;
Config2.dono2 = Dono2;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 2: wa.me/${Dono2}`);
break;


case 'dono3':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono3 551199999999*");
const novodn3 = q.split("@")[0] || menc_os2.split("@")[0];
if (novodn3.length < 10) return reply("Número inválido.");
const Dono3 = novodn3;
Config2.dono3 = Dono3;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 3: wa.me/${Dono3}`);
break;


case 'dono4':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono4 551199999999*");
const novodn4 = q.split("@")[0] || menc_os2.split("@")[0];
if (novodn4.length < 10) return reply("Número inválido.");
const Dono4 = novodn4;
Config2.dono4 = Dono4;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 4: wa.me/${Dono4}`);
break;


case 'dono5':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono5 551199999999*");
const novodn5 = q.split("@")[0] || menc_os2.split("@")[0];
if (novodn5.length < 10) return reply("Número inválido.");
const Dono5 = novodn5;
Config2.dono5 = Dono5;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 5: wa.me/${Dono5}`);
break;


case 'dono6':
if (!So_Dono) return reply(msg.SoDono);
if (!q && !menc_os2) return reply("Digite o novo número do dono. Ex: *!dono6 551199999999*");
const novodn6 = q.split("@")[0] || menc_os2.split("@")[0];
if (novodn6.length < 10) return reply("Número inválido.");
const Dono6 = novodn6;
Config2.dono6 = Dono6;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`✔ *Número do dono atualizado!*\n\n👑 Dono 6: wa.me/${Dono6}`);
break;

case 'botoff':
case 'boton': {
if(!So_Dono) return reply(msg.SoDono);
if(command === 'botoff') {
if (BotOff === true) return reply(`❌ *${NomeBot} já está DESLIGADO, mestre...*`);
Config2.botoff = true;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
return reply(
`⛔ *SISTEMA DESATIVADO*

✅ Somente você poderá usar meus comandos agora.
🕸️ *kay entrou no modo silencioso...*`);
}
if(command === 'boton') {
if(BotOff === false) return reply(`⚠️ *${NomeBot} já está ATIVO, mestre!*`);
Config2.botoff = false;
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
return reply(
`✅ *SISTEMA REATIVADO*

💖 Todos os usuários agora podem usar meus comandos novamente.
🔥 *kay voltou ao combate!*`);
}
}
break;

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(msg.SoEmGrupo)
if(!So_Dono) return reply(msg.SoDono)
if(command == 'bangp'){
if(isBanGrupo) return reply(`Este grupo já está banido.`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`Grupo banido com sucesso`)
} else {
if(!isBanGrupo) return reply(`Este grupo não está mais banido.`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbanido...`)
}
break

case 'reiniciar': case 'r':{
if(!So_Dono) return reply(msg.SoDono)
setTimeout(async () => {
reply("Reiniciando...")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
}
break

case 'donos':
case 'listadonos': {
let texto = `🍁 *LISTA OFICIAL DE DONOS — ${NomeBot}* ❄️

🇪🇸 *Dono Principal*
👑 ${NickDono}
📞 wa.me/${NumberDono}

━━━━━━━━━━━━━━━━━━

🐦‍🔥 *Donos Adicionais:*`;

let donos = [
  Config2?.dono1,
  Config2?.dono2,
  Config2?.dono3,
  Config2?.dono4,
  Config2?.dono5,
  Config2?.dono6
];

donos.forEach((dono, i) => {
  if(dono && dono !== "undefined" && dono !== "") {
    texto += `\n🇪🇸 Dono ${i+1}: wa.me/${dono}`;
  }
});

texto += `

━━━━━━━━━━━━━━━━━━
> *${NomeBot}: Às vezes a vida pesa, tudo parece confuso… mas mesmo nos dias mais escuros, existe algo dentro de você que continua lutando em silêncio — e é essa força que prova que você ainda não desistiu, mesmo quando tudo parecia impossível.* 🇪🇸
`;

conn?.sendMessage(from, {image: FotoMenu, caption: texto, contextInfo: ShizukuStile}, {quoted: info});
}
break;

case 'verificado':
if(!So_Dono) return reply(msg.SoDono)
if(!isVerificado) {
Config2.verificado = true
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`O verificado foi Ativado`)
} else if(isVerificado) {
Config2.verificado = false
fs.writeFileSync("./dono/dados-donos.json", JSON.stringify(Config2, null, 4));
reply(`O verificado foi Desativado`)
}
break

case 'totalcases':
try {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
const cont = caseNames.length;
await reply(`${cont}`)
} catch (error) {
console.log(error)
reply("Erro ao obter o total de comandos");
}
break;

case 'cases':
if(!So_Dono) return reply("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("Nenhuma case encontrada.") } }
conn.sendMessage(from, { text: listCases() }, { quoted: info });
} catch (e) {
console.log(e)
reply('Ocorreu um erro ao obter as cases.') }
break

case 'getcase': {
  if (!So_Dono) return reply('❌ Apenas o dono pode usar.')

  if (!q) {
    return reply(`❌ Exemplo:
${prefix + command} menu`)
  }

  try {
    const fs = require('fs')

    const path = './index.js'
    const data = fs.readFileSync(path, 'utf8')

    const regex = new RegExp(
      `case ['"]${q}['"]:(.*?)break`,
      'gs'
    )

    const match = regex.exec(data)

    if (!match) {
      return reply('❌ Case não encontrada.')
    }

    return reply(`${match[0]}break`)

  } catch (e) {
    console.log('❌ Erro no getcase:', e)
    return reply('❌ Erro ao pegar a case.')
  }
}
break;



case 'statusgp': {
if (!isGroup) return reply('❌ *ᴀᴘᴇɴᴀs ᴇᴍ ɢʀᴜᴘᴏs.*')
if (!So_Dono) return reply(mess.only.dono)
const qm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
if (!qm) {
return reply('❌ *ʀᴇsᴘᴏɴᴅᴀ ᴜᴍᴀ ᴍᴇɴsᴀɢᴇᴍ ᴘᴀʀᴀ ᴘᴏsᴛᴀʀ.*')
}
try {
await conn.relayMessage(
from,
{
groupStatusMentionMessage: {
message: qm
}
},
{}
)
reply('✅ *sᴛᴀᴛᴜs ᴅᴏ ɢʀᴜᴘᴏ ᴘᴏsᴛᴀᴅᴏ.*')
} catch (e) {
console.log(e)
reply('❌ *ᴇʀʀᴏ ᴀᴏ ᴘᴏsᴛᴀʀ sᴛᴀᴛᴜs.*')
}
}
break;


//OUTROS COMANDOS INFORMATIVOS 
case 'ping': {
  try {

    const uptime = process.uptime();
    const r = (Date.now() / 1000) - info.messageTimestamp;

    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const usedPercent = (usedMem / totalMem) * 100;

    const totalRamGB = (totalMem / 1024 / 1024 / 1024).toFixed(2);
    const freeRamGB = (freeMem / 1024 / 1024 / 1024).toFixed(2);
    const usedRamGB = (usedMem / 1024 / 1024 / 1024).toFixed(2);

    const texto = `- *🏓 | STATUS PING - KAY SYSTEM*
> ${tempo}, ${pushname}!!
•
- *⏳ | ${NomeBot} está online por:* 
- → ${kyun(uptime)}
- *⚡ | velocidade:* → ${r.toFixed(3)}s
- *📊 | Ram Total:* → ${totalRamGB}GB
- *📉 | Ram usada:* → ${usedRamGB}GB
- *📈 | Ram Disponível:* → ${freeRamGB}GB
- *🧾 | processo:* → ${usedPercent.toFixed(1)}%`;

    // === FOTO LOCAL ===
    const media = await prepareWAMessageMedia(
      { image: FotoMenu },
      { upload: conn.waUploadToServer }
    );

    // === BOTÕES ===
    const botoes = [
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "🔁 Atualizar",
          id: `${prefix}ping`
        })
      },
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "📋 Menu",
          id: `${prefix}menu`
        })
      }
    ];

    // === CARD ===
    const card = {
      header: {
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      },
      headerType: "IMAGE",
      body: { text: texto },
      footer: { text: "Kay system" },
      nativeFlowMessage: { buttons: botoes }
    };

    // === ENVIO ===
    await conn.relayMessage(
      from,
      {
        interactiveMessage: {
          contextInfo: {
            participant: sender,
            quotedMessage: {
              extendedTextMessage: { text: "STATUS ATUAL" }
            }
          },
          body: { text: "🏓 Status do bot" },
          carouselMessage: { cards: [card] }
        }
      },
      {quoted: selo}
    );

  } catch (e) {
    console.log(e);
    reply("Erro ao mostrar ping.");
  }
}
break;

//PLAQUINHAS 
case 'plaq1':
case 'plaq2':
case 'plaq3':
case 'plaq4':
case 'plaq5':
case 'plaq6':
case 'plaq7':
case 'plaq8':
case 'plaq9':
case 'plaq10':
case 'plaq11':
try {
if(!q.trim()) return reply(`ex: ${prefix+command} Jpzinh`);
await reply(isGroup ? "*_Enviando plaquinha no seu pv_*." : "*_Enviando.._*")

const Imagem = await getBuffer(`${SHIZUKU_SITE}/api/${command}?query=${encodeURIComponent(q.trim())}&apitoken=${SHIZUKU_KEY}`)

await conn.sendMessage(sender, {image: Imagem, caption: "Plaquinha criada com sucesso!"}, {quoted: info});
} catch (e) {
reply("Erro ao criar plaquinha")
} break;

//FIGURINHAS 
case 'figu_raiva': case 'figu_roblox': case 'figu_engracada':
case 'figu_memes': case 'figu_anime': case 'figu_coreana': case 'figu_bebe': case 'figu_desenho': case 'figu_animais':
case 'figu_flork': case 'figu_emoji':{
if (!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 20`)
if (q >= 20) return reply("Coloque abaixo de 20..")
await reply(isGroup ? `⌛ | *_Estou enviando ${q} figurinhas no seu PV, águarde..._*` : `⌛ | *_Enviando..._*`)
await conn.sendMessage(from, {react: {text: "💖", key: info?.key}})         
async function figu_figura() {
const figura = await getBuffer(`${SHIZUKU_SITE}/sticker/${command}?apitoken=${SHIZUKU_KEY}`)
conn.sendMessage(sender, {sticker: figura, contextInfo: ShizukuStile}, {quoted: info})
}
for (i = 0; i < q; i++) {
await sleep(1000)
figu_figura()
}
break
}

case 'figurinhas': 
case 'figuale': {
  if (!Number(q)) 
    return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix + command} 5`)

  if (q >= 20) 
    return reply("Coloque abaixo de 20..")

  await reply(isGroup 
    ? `⌛ | *_Estou enviando ${q} figurinhas no seu PV, aguarde..._*` 
    : `⌛ | *_Enviando..._*`
  )

  await conn.sendMessage(from, {
    react: { text: "🇪🇸", key: info?.key }
  })

  // 🔥 Função corrigida
  async function figu_Jpzinh() {
    try {
      const url = `${SHIZUKU_SITE}/sticker/aleatorio?apitoken=${SHIZUKU_KEY}`

      const figura = await getBuffer(url)

      // 🚨 VALIDAÇÃO (ESSENCIAL)
      if (!figura || figura.length < 10) {
        console.log('❌ Buffer inválido:', url)
        return
      }

      await conn.sendMessage(sender, {
        sticker: figura,
        contextInfo: ShizukuStile
      }, { quoted: info })

    } catch (err) {
      console.log('❌ Erro ao enviar figurinha:', err)
    }
  }

  // 🔁 Loop corrigido (AGORA ESPERA)
  for (let i = 0; i < q; i++) {
    await sleep(1000)
    await figu_Jpzinh()
  }

  break
}

case 'nick':
case 'fazernick': {
  try {
    if (!q) return reply('❌ Digite um nick');

    let nick = q;

    let estilos = [
      `𝐍𝐞𝐠𝐫𝐢𝐭𝐨: ${nick}`,
      `𝘐𝘵𝘢́𝘭𝘪𝘤𝘰: ${nick}`,
      `𝔾ó𝕥𝕚𝕔𝕠: ${nick}`,
      `ᖴᗩᑎᑕY: ${nick}`
    ];

    let texto = `🎨 *GERADOR DE NICK*\n\n`;
    estilos.forEach(e => texto += `• ${e}\n`);

    await conn.sendMessage(from, {
      text: texto
    }, { quoted: m });

  } catch (e) {
    console.error('ERRO REAL:', e);
    reply('❌ Deu erro ainda.');
  }
}
break;


case 'ativar': {
if(!isGroupAdmins || !So_Dono) return reply(msg.SoAdmins);
  try {
const fotogp = await conn.profilePictureUrl(from, 'image')
const fotogpt = await getBuffer(fotogp).catch(_ => FotoMenu)

    const media = await prepareWAMessageMedia(
      { image: fotogpt },
      { upload: conn.waUploadToServer }
    );

    const texto = `*SISTEMAS DO GRUPO*

Selecione o sistema que deseja ativar:`

    const botoes = [
      {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
          title: "Gerenciar Sistemas",
          sections: [
            {
              title: "Funções",
              rows: [
                { title: "Anti - link", id: `${prefix}antilink 1` },
                { title: "Bem - vindo 1", id: `${prefix}bemvindo 1` },
                { title: "Bem - vindo 2", id: `${prefix}bemvindo2 1`},
                { title: "So Admins", id: `${prefix}so_adm 1`}
              ]
            }
          ]
        })
      }
    ];

    const card = {
      header: {
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      },
      headerType: "IMAGE",
      body: { text: texto },
      footer: { text: "Kay system" },
      nativeFlowMessage: { buttons: botoes }
    };

    await conn.relayMessage(from, {
      interactiveMessage: {
        carouselMessage: { cards: [card] },
        body: { text: "Escolha um sistema 👇" }
      }
    }, {})

  } catch (e) {
    console.log(e)
    reply("Erro ao mostrar sistemas.")
  }
}
break;

case 'desativar': {
if(!isGroupAdmins || !So_Dono) return reply(msg.SoAdmins);
  try {
const fotogp = await conn.profilePictureUrl(from, 'image')
const fotogpt = await getBuffer(fotogp).catch(_ => FotoMenu)

 const media = await prepareWAMessageMedia(
      { image: fotogpt },
      { upload: conn.waUploadToServer }
    );

    const texto = `*SISTEMAS DO GRUPO*

Selecione o sistema que deseja desativar:`

    const botoes = [
      {
        name: "single_select",
        buttonParamsJson: JSON.stringify({
          title: "Gerenciar Sistemas",
          sections: [
            {
              title: "Funções",
              rows: [
                { title: "Anti - link", id: `${prefix}antilink 0` },
                { title: "Bem - vindo 1", id: `${prefix}bemvindo 0` },
                { title: "Bem - vindo 2", id: `${prefix}bemvindo2 0`},
                { title: "So Admins", id: `${prefix}so_adm 0`}
              ]
            }
          ]
        })
      }
    ];

    const card = {
      header: {
        hasMediaAttachment: true,
        imageMessage: media.imageMessage
      },
      headerType: "IMAGE",
      body: { text: texto },
      footer: { text: "Kay system" },
      nativeFlowMessage: { buttons: botoes }
    };

    await conn.relayMessage(from, {
      interactiveMessage: {
        carouselMessage: { cards: [card] },
        body: { text: "Escolha um sistema 👇" }
      }
    }, {})

  } catch (e) {
    console.log(e)
    reply("Erro ao mostrar sistemas.")
  }
}
break;

case 'rename':
case 'roubar': {
    try {
        if (!isQuotedSticker) {
            return reply('❌ *ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ғɪɢᴜʀɪɴʜᴀ ᴘᴀʀᴀ ʀᴇɴᴏᴍᴇᴀʀ.*');
        }

        if (!q) {
            return reply(`❌ *ꜰᴏʀᴍᴀᴛᴏ ɪɴᴠᴀʟɪᴅᴏ!*\n\n📌 Exemplo:\n${prefix + command} Pack/Autor`);
        }

        const [pack, author2] = q.split("/");

        if (!pack || !author2) {
            return reply(`❌ *ᴠᴏᴄᴇ ᴘʀᴇᴄɪꜱᴀ ᴅᴇꜰɪɴɪʀ ᴘᴀᴄᴋ ᴇ ᴀᴜᴛᴏʀ!*\n\n📌 Exemplo:\n${prefix + command} Nk/Petrov`);
        }

        await systemZR.sendMessage(m.chat, { react: { text: "🎭", key: m.key } });

        // pegar sticker
        const encmediats = await getFileBuffer(
            info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage,
            'sticker'
        );

        const base64 = `data:image/webp;base64,${encmediats.toString('base64')}`;

        // converter
        const result = await convertSticker(base64, author2, pack);
        const stickerBuffer = Buffer.from(result, 'base64');

        // enviar
        await yuta.sendMessage(from, {
            sticker: stickerBuffer,
            contextInfo: NkChannelKk
        }, { quoted: selo });

        await systemZR.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

    } catch (e) {
        console.error(e);
        await systemZR.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
        reply('❌ *Erro ao renomear figurinha.*');
    }
}
break;

case 'fakemsg':
case 'fakechat': {
    try {
        if (!q) {
            return reply(`❌ *Formato incorreto!*\n\n📌 Exemplo:\n${prefix + command} @user|mensagem fake|sua resposta`);
        }

        // bloquear uso de prefixo
        if ([prefix, "-", "/", "#", "+"].includes(q.trim())) {
            return reply('❌ *Não é permitido usar comandos no fake chat.*');
        }

        const mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
        const [_, tarrget, bott] = q.split("|");

        if (!mentioned || !tarrget || !bott) {
            return reply(`❌ *Preencha tudo corretamente!*\n\n📌 Exemplo:\n${prefix + command} @user|mensagem fake|sua resposta`);
        }

        await systemZR.sendMessage(m.chat, { react: { text: "🎭", key: m.key } });

        await yuta.sendMessage(from, {
            text: bott
        }, {
            quoted: {
                key: {
                    fromMe: false,
                    participant: mentioned
                },
                message: {
                    conversation: tarrget
                }
            }
        });

        await systemZR.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

    } catch (e) {
        console.error(e);
        await systemZR.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
        reply('❌ *Erro ao criar fake chat.*');
    }
}
break;

case 'modoia': {

  if (!q) return reply(`❌ Use:\n${prefix}modoia on\n${prefix}modoia off`)

  if (q.toLowerCase() === 'on') {
    modoIA = true
    return reply(`🧠 *IA ativada!*`)
  }

  if (q.toLowerCase() === 'off') {
    modoIA = false
    return reply(`🧠 *IA desativada!*`)
  }

  reply(`❌ Use: on ou off`)
}
break;

case 'st':
case 'stk':
case 'sticker':
case 's':
await conn.sendMessage(from, {react: {text: `⌛`, key: info.key}})
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
var pack = ` ➲ ꜱᴏʟɪᴄɪᴛᴀᴅᴏ ᴩᴏʀ  ➠\n ➲ ɴᴏᴍᴇ ᴅᴏ ʙᴏᴛ ➠\n ➲ ɴɪᴄᴋ ᴅᴏɴᴏ ➠`
var author2 = ` 「 ${pushname} 」 \n「 ${NomeBot} 」\n「 ${NickDono} 」`
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(conn, from, owgi, selo, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var pack = `➲ꜱᴏʟɪᴄɪᴛᴀᴅᴏ ᴩᴏʀ➠`
var author2 = ` ${pushname}`
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(conn, from, owgi, selo, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
return reply(`Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando ${prefix+command}`)
}
break

case 'bratvid': {
await conn.sendMessage(from, {react: {text: `🎬`, key: info.key}})

if (!q) return reply(`Exemplo: ${prefix+command} Seu texto aqui`)

try {

var pack = `➲ꜱᴏʟɪᴄɪᴛᴀᴅᴏ ᴩᴏʀ➠`
var author2 = ` ${pushname}`

// sua API
const url = `http://node3.tedhost.com.br:3027/bratvid?text=${encodeURIComponent(q)}`

// baixa o vídeo
let buffer = await getBuffer(url)

// envia como figurinha animada
await sendVideoAsSticker2(conn, from, buffer, selo, {
packname: pack,
author: author2
})

} catch (e) {
console.log(e)
reply('❌ Erro ao gerar bratvid.')
}
}
break

case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
reply(msg.Download)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
conn.sendMessage(from, {image: buff}, {quoted: selo}).catch(e => {
console.log(e);
reply('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
reply("Erro, tente mais tarde!")
}
break

case 'nome':
case 'consulta-nome': {
  const axios = require('axios')

  if (!q) return reply(`❌ use: ${prefix}nome Lula`)

  if (!getModo(from, "consultas", sender)) {
    return reply("🚫 *ᴍᴏᴅᴏ ᴄᴏɴsᴜʟᴛᴀs ᴅᴇsᴀᴛɪᴠᴀᴅᴏ* 🙅")
  }

  await reagir(from, "🔎")

  try {

    const { data } = await axios.get(
      `http://node.tconect.xyz:1116/api/consulta/nome/v1`,
      {
        params: {
          apikey: "dataprimefree2026",
          nome: q
        }
      }
    )

    if (!data?.resultado?.resultados?.length) {
      return reply("❌ nenhum resultado encontrado.")
    }

    const lista = data.resultado.resultados.slice(0, 10)

    let texto = `╭─ᰮ╍⛧─֟፝͜⚡͜──ֹ֟፝┅꯭─ֹ╍ׅ 𖤐⃨𖤐 ׅ╍ׄ─꯭┅֟፝ׄ─⛧─͜⚡֟፝͜─╍ׅ̈─ׄ
├─◍᳝࣪.⋕ 👤 𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐀 𝐍𝐎𝐌𝐄
╰─ᰮ╍⛧─֟፝͜⚡͜──ֹ֟፝┅꯭─ֹ╍ׅ 𖤐⃨𖤐 ׅ╍ׄ─꯭┅֟፝ׄ─⛧─͜⚡֟፝͜─╍ׅ̈─ׄ\n\n`

    lista.forEach((r, i) => {
      texto += `╎▧⃯⃟৴.• *${i + 1}*
╎👤 Nome: ${r.nome}
╎🆔 CPF: ${r.cpf}
╎👩 Mãe: ${r.mae || "-"}
╎🎂 Nasc: ${r.nascimento?.split(" ")[0] || "-"}
╎🚻 Sexo: ${r.sexo || "-"}
╎──────────────\n`
    })

    texto += `╰─ᰮ╍⛧─֟፝͜⚡͜──ֹ֟፝┅꯭─ֹ╍ׅ 𖤐⃨𖤐 ׅ╍ׄ─꯭┅֟፝ׄ─⛧─͜⚡֟፝͜─╍ׅ̈─ׄ
 ${NomeBot}`

    await conn.sendMessage(from, {
      text: texto,
      contextInfo: ShizukuStile
    }, { quoted: info })

    await reagir(from, "✅")

  } catch (err) {
    console.log("NOME ERROR:", err)
    await reagir(from, "❌")
    reply("❌ erro na consulta por nome.")
  }
}
break

case 'casev': {
try {
const { prepareWAMessageMedia, generateWAMessageFromContent } = require('@systemzero/baileys')
const idLcn = `120363427096286754@newsletter`
let texto = (body || '')
.replace(new RegExp(`^\\${prefix}${command}\\s*`, 'i'), '')
.trim();

if (!texto || !texto.includes('|')) {
return reply(`❌ Use assim:\n\n${prefix}cases nome | descrição | urldacase`)
}

const [nomeCase, descCase, urlBtn] =
texto.split('|').map(v => v.trim());

const media = await prepareWAMessageMedia({
image: {
url: 'https://i.ibb.co/qMMMCw0L/7ac681e5e162.jpg'
}}, {
upload: conn.waUploadToServer
});

const imageMessage = media.imageMessage;

const msg = generateWAMessageFromContent(idLcn, {
interactiveMessage: {
header: {
title: 'ᴅᴇᴠʟᴀʙ',
subtitle: 'ᴄᴀꜱᴇ',
hasMediaAttachment: true,
imageMessage
},
body: {
text:
`🔥 ᴄᴀꜱᴇ: ${nomeCase}

📌 ᴅᴇꜱᴄʀɪçãᴏ: ${descCase}

⬇️ ᴄʟɪQᴜᴇ ᴀʙᴀɪxᴏ`
},
footer: {
text: 'ᴄʀɪᴀᴅᴏ ᴘᴏʀ ᴅᴇᴠʟᴀʙ'
},
nativeFlowMessage: {
buttons: [
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "📂 ᴀʙʀɪʀ ᴄᴀꜱᴇ 📂",
url: urlBtn
})
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "✧･ﾟ: ᴅᴇᴠʟᴀʙ ɢʀᴏᴜᴘ ✧･ﾟ:",
url: "https://chat.whatsapp.com/IjRfYRBt2pq8d7pcYDCRVb?mlu=2&s=cl&p=a"
})
}
]
}
}
}, { userJid: idLcn });

await conn.relayMessage(idLcn, msg.message, {
messageId: msg.key.id
});

reply('✅ Case enviada pro canal com sucesso!');

} catch (err) {
console.log(err);
reply('❌ Erro ao enviar a case.\n\n' + err.message);
}
}
break;

//FINAL DE COMANDOS 
default:

const similares = ListaComandos(command).slice(0, 5);

const sections = [
{
title: "🟡✨ Sugestões de Comandos ✨🟡",
rows: similares.map((cmd, i) => ({
title: `🟡 ${prefix + cmd.command}`,
description: `📊 Compatibilidade: ${cmd.similarity.toFixed(1)}%`,
rowId: `${prefix + cmd.command}`
}))
}
];

await conn.sendMessage(from, {
text: `╭═━──━〔 🟡✨ COMANDO NÃO ENCONTRADO ✨🟡 〕━──━═╮

┃ 🟡 Você digitou:
┃ ╰➤ 「 ${prefix + command} 」

┃ ╌╌╌╌╌╌╌╌╌╌

┃ 🟡 Escolha uma sugestão abaixo 👇

╰═━──━〔 🇪🇸 KAY SYSTEM 🇪🇸 〕━──━═╯`,
footer: `🟡 ${NomeBot}`,
buttonText: "🟡 Ver Sugestões",
sections,
contextInfo: ShizukuStile
}, { quoted: info });

break;

}
}catch (e) {
console.log("Erro geral no index:", e);

if (String(e).includes(SHIZUKU_KEY)) {
console.log("A API caiu ou não foi possível executar esta ação.");
}

 if (String(e).includes("aborted")) {
let file = require.resolve("./connect");
delete require.cache[file];
require(file);
}
}
};

