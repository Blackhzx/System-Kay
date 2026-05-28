// Bot desenvolvido por: Lopes' & Josué & Dark
// proibido venda !!!
// essa base foi feita para ajudar vcs y testar novos comandos da Baileys @systemzero.
// canal KAY SYSTEM 🇪🇸 
// https://whatsapp.com/channel/0029Vb5nzxV7dmehsyILK70Z

// Canal system zero🐦‍🔥
// https://whatsapp.com/channel/0029VaqUb9aGk1FxqeKKOd2i

//=============[ COMEÇO DE TUDO ]=============\\

const { menumemb, menubrink } = require("./dono/menus/menu");
const { promoverUser, rebaixarUser } = require('./lopes');
const baileys = require("@systemzero/baileys");
const { NumberDono, prefix, NickDono, NomeBot, SHIZUKU_KEY, SHIZUKU_SITE, sysite, syskey } = require("./dono/dono");
const ytSearch = require('yt-search');
const chalk = require('chalk');
const { version } = require("./package");
const {
    sistemaVerificacao
} = require('./database/verificacao');
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
play_video,
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
const So_Dono =
sender === MeuNumero ||
sender === Numero1 ||
sender === Numero2 ||
sender === Numero3 ||
sender === Numero4 ||
sender === Numero5 ||
sender === Numero6 ||
sender === botNumber ||
IsCreator ||
SoCriador;

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


let isBotGroupAdmins = So_Admins?.includes(botNumber) || false;
let isGroupAdmins    = So_Admins.includes(sender) || false || So_Dono || SoBot || IsCreator || SoCriador;

const executorJid            = info.key.participant || info.key.remoteJid || sender;
const executorJidNormalizado = jidNormalizedUser(executorJid);

const verificarGlobal = isGroup
    ? await sistemaVerificacao(conn, from, executorJidNormalizado, { numerodono: NumberDono }, botNumber)
    : null;

if (isGroup && verificarGlobal) {
    isGroupAdmins    = verificarGlobal.isSenderAdmin || verificarGlobal.isDonoBot || false;
    isBotGroupAdmins = verificarGlobal.isBotAdmin    || false;
}
// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\
//FUNÇÃO BY: Lopes' , NÃO TIRA OS CRÉDITOS DESGRAÇA!!
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
};//FUNÇÃO BY: Lopes', NÃO TIRA OS CRÉDITOS DESGRAÇA!!
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
  console.log(chalk.hex("#7c3aed")("╰────────────────────────────────╯\n"));
}

// VERIFICAÇÃO DE MUTE — adicionar ANTES do "if (!isCmd) return"
if (isGroup && !info.key.fromMe) {
  const dirMute = `./DATABASE2/GRUPOS/MUTE/${from}.json`;
  if (fs.existsSync(dirMute)) {
    const dataMute = JSON.parse(fs.readFileSync(dirMute));
    const grupoMute = dataMute[0];

    const estaSilenciado = grupoMute.silenciados.includes(sender);
    const estaMutado = grupoMute.mutados.includes(sender);

    if (estaSilenciado) {
      conn.sendMessage(from, {
        delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }
      });
      return; // apaga a mensagem silenciosamente
    }

    if (estaMutado && isCmd) {
      conn.sendMessage(from, {
        delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }
      });
      await mention(`*@${sender.split('@')[0]} ᴇsᴛᴀ ᴍᴜᴛᴀᴅᴏ ᴇ ɴᴀᴏ ᴘᴏᴅᴇ ᴜsᴀʀ ᴄᴏᴍᴀɴᴅᴏs 🚫*`);
      return;
    }
  }
}

if (isGroup && isCmd) {
  console.log(chalk.hex("#2563eb")("\n╭────〔 👥 COMANDO EM GRUPO 〕──╮"));
  console.log(linha("🧠 Comando:", command));
  console.log(linha("👤 Usuário:", pushname));
  console.log(linha("📱 Número:", sender.split("@")[0]));
  console.log(linha("👥 Grupo:", NomeGrupo));
  console.log(linha("🕒 Hora:", hora2));
  console.log(linha("👑 Dono:", So_Dono ? chalk.green("Sim") : chalk.red("Não")));
  console.log(chalk.hex("#2563eb")("╰────────────────────────────────╯\n"));
}

if (isGroup && !isCmd && !info.key.fromMe) {
  console.log(chalk.hex("#06b6d4")("\n╭────〔 💬 MENSAGEM EM GRUPO 〕──╮"));
  console.log(linha("👤 Usuário:", pushname));
  console.log(linha("📱 Número:", sender.split("@")[0]));
  console.log(linha("👥 Grupo:", NomeGrupo));
  console.log(linha("📦 Tipo:", tipoMsg));
  console.log(linha("🕒 Hora:", hora2));
  console.log(linha("📎 Texto:", body?.slice(0, 60) || "—"));
  console.log(chalk.hex("#06b6d4")("╰────────────────────────────────╯\n"));
}

if (info?.message?.reactionMessage) {
  console.log(chalk.hex("#facc15")("\n╭────〔 😂 REAÇÃO DETECTADA 〕──╮"));
  console.log(linha("👤 Usuário:", pushname));
  console.log(linha("📱 Número:", sender.split("@")[0]));
  if (isGroup) console.log(linha("👥 Grupo:", NomeGrupo));
  console.log(linha("😄 Emoji:", info.message.reactionMessage.text));
  console.log(chalk.hex("#facc15")("╰────────────────────────────────╯\n"));
}

//==={ANTI LINK} ===\\
let isTrueFalse = Array('tiktok','facebook','instagram','twitter','ytmp3','ytmp4','play','playmix','play2','play3','playvid','playvid2').some(item => item === command);
if (isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
  const senderLimpo = jidNormalizedUser(sender);
  const botLimpo    = jidNormalizedUser(botNumber);
  if (senderLimpo === botLimpo) return;
  if (isCmd && isTrueFalse) return;
  if (Procurar_String.includes("chat.whatsapp.com")) {
    try {
      const link_dgp = await conn.groupInviteCode(from);
      if (Procurar_String.includes(link_dgp)) return reply('_Link do nosso grupo, não irei remover._');
    } catch (_) {}
  }
  const verificarAnti = await sistemaVerificacao(conn, from, senderLimpo, { numerodono: NumberDono }, botNumber).catch(() => null);
  if (verificarAnti?.isSenderAdmin) return;
  try {
    await conn.sendMessage(from, {
      delete: {
        remoteJid:   from,
        fromMe:      false,
        id:          info.key.id,
        participant: sender 
       }
    });
  } catch (_) {}
  const aindaNoGrupo = MembrosGP.some(m => jidNormalizedUser(m.id) === senderLimpo);
  if (aindaNoGrupo) {
    try {
      await conn.groupParticipantsUpdate(from, [senderLimpo], 'remove');
    } catch (_) {}
  }
} //FIM ANTI LINK


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
case 'antistatus': {
  try {
if (!isGroup) return reply("Só em grupo.");
if (!isGroupAdmins) return reply(msg.SoAdmin);
    if (dataGp[0].antistatus === undefined) dataGp[0].antistatus = false;
    dataGp[0].antistatus = !dataGp[0].antistatus;
    const novoEstado = dataGp[0].antistatus;
    setGp(dataGp);

    const msg = novoEstado
      ? '_Anti-Status *ativado* neste grupo. Todos os status enviados aqui serão deletados automaticamente._'
      : '_Anti-Status *desativado* neste grupo._';
    await reply(msg);
  } catch (e) {
    console.error('[ERRO ANTISTATUS CMD]', e);
    reply('_Erro ao alternar o Anti-Status._');
  }
}
break;

case 'promover': {
if (!isGroup) return reply("Só em grupo.");
if (!isGroupAdmins) return reply(msg.SoAdmin);

const res = await promoverUser(conn, from, info, q, botNumber, NumberDono);

if (res.erro) return reply(res.erro);

await conn.sendMessage(from, {
  text: res.sucesso,
  mentions: [res.alvo]
});

}
break;

case 'rebaixar': {
if (!isGroup) return reply("Só em grupo.");
if (!isGroupAdmins) return reply(msg.SoAdmin);

const res = await rebaixarUser(conn, from, info, q, botNumber, NumberDono);

if (res.erro) return reply(res.erro);

await conn.sendMessage(from, {
  text: res.sucesso,
  mentions: [res.alvo]
});

}
break;

case 'ban':
case 'banir':
case 'kick':
case 'avadakedavra': {
    try {
        if (!isGroup) return reply("❌ Apenas em grupos.");

        const executorJid = info.key.participant || info.key.remoteJid || sender;
        const executorJidNormalizado = jidNormalizedUser(executorJid);

        const verificar = await sistemaVerificacao(conn, from, executorJidNormalizado, { numerodono: NumberDono }, botNumber);

        if (!verificar.isSenderAdmin && !verificar.isDonoBot) return reply("❌ Apenas administradores.");
        if (!verificar.isBotAdmin) return reply("❌ O bot precisa ser admin.");

        const contextInfo = info?.message?.extendedTextMessage?.contextInfo || info?.msg?.contextInfo || info?.contextInfo || {};
        let alvo = null;

        if (Array.isArray(contextInfo.mentionedJid) && contextInfo.mentionedJid.length > 0) {
            alvo = contextInfo.mentionedJid[0];
        } else if (contextInfo.participant) {
            alvo = contextInfo.participant;
        } else if (info?.quoted?.sender) {
            alvo = info.quoted.sender;
        } else if (q) {
            const numero = q.replace(/\D/g, '');
            if (numero.length >= 5) alvo = numero;
        }

        if (!alvo) return reply("❌ Marque, responda ou envie o número.");

        const membro = verificar.buscarMembro(alvo);
        if (!membro) return reply("❌ Usuário não encontrado.");

        const alvoId = verificar.getId(membro);
        const alvoNumero = verificar.getNumero(membro);
        const alvoAdmin = verificar.isAdmin(membro);
        const alvoDono = verificar.isDono(membro);
        const executorNumero = verificar.getNumero({ id: executorJidNormalizado });
        const botNumeroLimpo = botNumber.replace(/\D/g, '');

        if (alvoNumero === executorNumero) return reply("❌ Você não pode se remover.");
        if (alvoNumero === botNumeroLimpo || alvoId === botNumber) {
            await conn.sendMessage(from, { text: `⚠️ @${executorNumero} tentou remover o bot 😹`, mentions: [sender] });
            return;
        }
        if (alvoDono) {
            await conn.sendMessage(from, { text: `☠️ @${executorNumero} tentou remover o dono 😹`, mentions: [sender] });
            return;
        }
        if (alvoAdmin) return reply("❌ Não posso remover administradores.");

        await reagir(from, "🚫");
        await conn.groupParticipantsUpdate(from, [alvoId], "remove");
        await conn.sendMessage(from, { text: `🚫 @${alvoNumero} removido do grupo.`, mentions: [alvoId] }, { quoted: info });
        await reagir(from, "✅");

    } catch (erro) {
        console.log(erro);
        await reagir(from, "❌");
        reply("❌ Erro ao remover usuário.");
    }
}
break;

case 'mute': {
    try {
        if (!isGroup) return reply(msg.SoEmGrupo);

        const executorJid = info.key.participant || info.key.remoteJid || sender;
        const executorJidNormalizado = jidNormalizedUser(executorJid);

        const verificar = await sistemaVerificacao(conn, from, executorJidNormalizado, { numerodono: NumberDono }, botNumber);

        if (!verificar.isSenderAdmin && !verificar.isDonoBot) return reply(msg.SoAdmin);
        if (!verificar.isBotAdmin) return reply(msg.BotAdmin);

        let alvo = null;
        const contextInfo = info?.message?.extendedTextMessage?.contextInfo || {};

        if (contextInfo.mentionedJid?.length > 0) {
            alvo = contextInfo.mentionedJid[0];
        } else if (contextInfo.participant) {
            alvo = contextInfo.participant;
        } else if (info?.quoted?.sender) {
            alvo = info.quoted.sender;
        } else if (q) {
            const numero = q.replace(/\D/g, '');
            if (numero.length >= 5) alvo = numero;
        }

        if (!alvo) return reply(`*🎯 ᴍᴇɴᴄɪᴏɴᴇ ǫᴜᴇᴍ ǫᴜᴇʀ ᴘᴜɴɪʀ*`);

        const membro = verificar.buscarMembro(alvo);
        if (!membro) return reply("❌ Usuário não encontrado.");

        const alvoId = verificar.getId(membro);
        const alvoNumero = verificar.getNumero(membro);
        const alvoAdmin = verificar.isAdmin(membro);
        const alvoDono = verificar.isDono(membro);
        const executorNumero = verificar.getNumero({ id: executorJidNormalizado });
        const botNumeroLimpo = botNumber.replace(/\D/g, '');

        if (alvoNumero === executorNumero) return reply("❌ Você não pode se punir.");
        if (alvoNumero === botNumeroLimpo || alvoId === botNumber) return reply(`*ɴᴀᴏ ᴘᴏssᴏ ᴍᴜᴛᴀʀ ᴏ ʙᴏᴛ 😵*`);
        if (alvoDono) return reply(`*ɴᴀᴏ ᴏᴜsᴇ ᴛᴏᴄᴀʀ ɴᴏ ᴍᴇᴜ ᴅᴏɴᴏ 💢*`);
        if (alvoAdmin) return reply(`*ɴᴀᴏ ᴘᴏᴅᴇ ᴍᴜᴛᴀʀ ᴜᴍ ᴀᴅᴍɪɴ*`);

        const dirMute = `./DATABASE2/GRUPOS/MUTE/${from}.json`;
        if (!fs.existsSync('./DATABASE2/GRUPOS/MUTE')) {
            fs.mkdirSync('./DATABASE2/GRUPOS/MUTE', { recursive: true });
        }
        if (!fs.existsSync(dirMute)) {
            fs.writeFileSync(dirMute, JSON.stringify([{ silenciados: [], mutados: [] }], null, 2));
        }

        const dataMute = JSON.parse(fs.readFileSync(dirMute));
        const grupoMute = dataMute[0];

        const tipo = args[0]?.toLowerCase() === 'silenciar' ? 'silenciar' : 'mutar';

        if (tipo === 'silenciar') {
            if (grupoMute.silenciados.includes(alvoId)) {
                return mention(`*ᴏ @${alvoNumero} ᴊᴀ ᴇsᴛᴀ sɪʟᴇɴᴄɪᴀᴅᴏ*`);
            }
            grupoMute.silenciados.push(alvoId);
            fs.writeFileSync(dirMute, JSON.stringify(dataMute, null, 2));
            await mention(`*ᴏ @${alvoNumero} ꜰᴏɪ sɪʟᴇɴᴄɪᴀᴅᴏ ᴘᴏʀ @${executorNumero} 🔇*`);
        } else {
            if (grupoMute.mutados.includes(alvoId)) {
                return mention(`*ᴏ @${alvoNumero} ᴊᴀ ᴇsᴛᴀ ᴍᴜᴛᴀᴅᴏ*`);
            }
            grupoMute.mutados.push(alvoId);
            fs.writeFileSync(dirMute, JSON.stringify(dataMute, null, 2));
            await mention(`*ᴏ @${alvoNumero} ꜰᴏɪ ᴍᴜᴛᴀᴅᴏ ᴘᴏʀ @${executorNumero} 🚫*`);
        }

        await reagir(from, "✅");
    } catch (erro) {
        console.log(erro);
        await reagir(from, "❌");
        reply("❌ Erro ao mutar usuário.");
    }
}
break;

case 'desmute': {
    try {
        if (!isGroup) return reply(msg.SoEmGrupo);

        const executorJid = info.key.participant || info.key.remoteJid || sender;
        const executorJidNormalizado = jidNormalizedUser(executorJid);

        const verificar = await sistemaVerificacao(conn, from, executorJidNormalizado, { numerodono: NumberDono }, botNumber);

        if (!verificar.isSenderAdmin && !verificar.isDonoBot) return reply(msg.SoAdmin);
        if (!verificar.isBotAdmin) return reply(msg.BotAdmin);

        let alvo = null;
        const contextInfo = info?.message?.extendedTextMessage?.contextInfo || {};

        if (contextInfo.mentionedJid?.length > 0) {
            alvo = contextInfo.mentionedJid[0];
        } else if (contextInfo.participant) {
            alvo = contextInfo.participant;
        } else if (info?.quoted?.sender) {
            alvo = info.quoted.sender;
        } else if (q) {
            const numero = q.replace(/\D/g, '');
            if (numero.length >= 5) alvo = numero;
        }

        if (!alvo) return reply(`*🎯 ᴍᴇɴᴄɪᴏɴᴇ ǫᴜᴇᴍ ᴅᴇsᴍᴜᴛᴀʀ*`);

        const membro = verificar.buscarMembro(alvo);
        if (!membro) return reply("❌ Usuário não encontrado.");

        const alvoId = verificar.getId(membro);
        const alvoNumero = verificar.getNumero(membro);

        const dirMute = `./DATABASE2/GRUPOS/MUTE/${from}.json`;
        if (!fs.existsSync(dirMute)) return mention(`*ᴏ @${alvoNumero} ɴᴀᴏ ᴇsᴛᴀ ᴘᴜɴɪᴅᴏ*`);

        const dataMute = JSON.parse(fs.readFileSync(dirMute));
        const grupoMute = dataMute[0];

        const estaSilenciado = grupoMute.silenciados.includes(alvoId);
        const estaMutado = grupoMute.mutados.includes(alvoId);

        if (!estaSilenciado && !estaMutado) {
            return mention(`*ᴏ @${alvoNumero} ɴᴀᴏ ᴇsᴛᴀ ᴘᴜɴɪᴅᴏ*`);
        }

        grupoMute.silenciados = grupoMute.silenciados.filter(id => id !== alvoId);
        grupoMute.mutados = grupoMute.mutados.filter(id => id !== alvoId);
        fs.writeFileSync(dirMute, JSON.stringify(dataMute, null, 2));
        await mention(`*ᴏ @${alvoNumero} ꜰᴏɪ ᴅᴇsᴘᴜɴɪᴅᴏ ᴘᴏʀ @${verificar.getNumero({ id: executorJidNormalizado })} 🙌*`);

        await reagir(from, "✅");
    } catch (erro) {
        console.log(erro);
        await reagir(from, "❌");
        reply("❌ Erro ao desmutar usuário.");
    }
}
break;

case 'desmute': {
    try {
        if (!isGroup) return reply(msg.SoEmGrupo);

        const executorJid = info.key.participant || info.key.remoteJid || sender;
        const executorJidNormalizado = jidNormalizedUser(executorJid);

        const verificar = await sistemaVerificacao(conn, from, executorJidNormalizado, { numerodono: NumberDono }, botNumber);

        if (!verificar.isSenderAdmin && !verificar.isDonoBot) return reply(msg.SoAdmin);
        if (!verificar.isBotAdmin) return reply(msg.BotAdmin);

        let alvo = null;
        const contextInfo = info?.message?.extendedTextMessage?.contextInfo || {};

        if (contextInfo.mentionedJid?.length > 0) {
            alvo = contextInfo.mentionedJid[0];
        } else if (contextInfo.participant) {
            alvo = contextInfo.participant;
        } else if (info?.quoted?.sender) {
            alvo = info.quoted.sender;
        } else if (q) {
            const numero = q.replace(/\D/g, '');
            if (numero.length >= 5) alvo = numero;
        }

        if (!alvo) return reply(`*🎯 ᴍᴇɴᴄɪᴏɴᴇ ǫᴜᴇᴍ ᴅᴇsᴍᴜᴛᴀʀ*`);

        const membro = verificar.buscarMembro(alvo);
        if (!membro) return reply("❌ Usuário não encontrado.");

        const alvoId = verificar.getId(membro);
        const alvoNumero = verificar.getNumero(membro);

        const dirMute = `./DATABASE2/GRUPOS/MUTE/${from}.json`;
        if (!fs.existsSync(dirMute)) {
            return mention(`*ᴏ @${alvoNumero} ɴᴀᴏ ᴇsᴛᴀ ᴘᴜɴɪᴅᴏ*`);
        }

        const dataMute = JSON.parse(fs.readFileSync(dirMute));
        const grupoMute = dataMute[0];

        const estaSilenciado = grupoMute.silenciados.includes(alvoId);
        const estaMutado = grupoMute.mutados.includes(alvoId);

        if (!estaSilenciado && !estaMutado) {
            return mention(`*ᴏ @${alvoNumero} ɴᴀᴏ ᴇsᴛᴀ ᴘᴜɴɪᴅᴏ*`);
        }

        grupoMute.silenciados = grupoMute.silenciados.filter(id => id !== alvoId);
        grupoMute.mutados = grupoMute.mutados.filter(id => id !== alvoId);
        fs.writeFileSync(dirMute, JSON.stringify(dataMute, null, 2));
        
        await mention(`*ᴏ @${alvoNumero} ꜰᴏɪ ʟɪʙᴇʀᴀᴅᴏ ᴘᴏʀ @${verificar.getNumero({ id: executorJidNormalizado })} 🙆‍♂️*`);
        await reagir(from, "✅");

    } catch (erro) {
        console.log(erro);
        await reagir(from, "❌");
        reply("❌ Erro ao desmutar usuário.");
    }
}
break;

case 'perfil': {
    try {
        await reagir(from, "👤");

        let target = sender; 
        const ctx = info?.message?.extendedTextMessage?.contextInfo;

        if (ctx?.mentionedJid?.[0]) {
            target = ctx.mentionedJid[0]; 
        } else if (ctx?.participant) {
            target = ctx.participant; 
        } else if (q) {
            const num = q.replace(/\D/g, ''); 
            if (num.length >= 10) target = `${num}@s.whatsapp.net`;
        }

        target = jidNormalizedUser(target); 

        // 🔥 nome do usuário
        let nomeAlvo = pushname;
        if (target !== sender) {
            try {
                const contato = Infos_Do_Grupo?.participants?.find(p => p.id === target);
                nomeAlvo = contato?.notify || contato?.name || `@${target.split("@")[0]}`;
            } catch {
                nomeAlvo = `@${target.split("@")[0]}`;
            }
        }

        // 🔥 foto de perfil
        let ppUrl;
        try {
            ppUrl = await conn.profilePictureUrl(target, 'image');
        } catch {
            ppUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRDMdrGEhwwcBVJsSwdjVZycl9lPdJsdReOsm3Sq1Xg&s=10'; 
        }

        // 🔥 bio
        let status;
        try {
            const bio = await conn.fetchStatus(target);
            status = bio?.status || "*sem bio*";
        } catch {
            status = "*bio oculta ou indisponível*";
        }

        // 🔥 porcentagens
        const pct = () => `${Math.floor(Math.random() * 101)}%`;
        const gay      = pct();
        const feio     = pct();
        const lindo    = pct();
        const gostoso  = pct();
        const chato    = pct();
        const corno    = pct();
        const burro    = pct();
        const invejoso = pct();
        const sortudo  = pct();
        const estiloso = pct();

        // 🔥 número
        const numUser = target.split("@")[0];

        // 🔥 buffer da foto
        const imgBuff = await getBuffer(ppUrl);

        // 🔥 texto
        let perfilMsg = `╭━╾❖╼━╾❖╼━╾❖╼━╾❖╼━╾❖╼━╾❖╼━╮
┃ 🇪🇸💛 ⟡ 𝐏𝐄𝐑𝐅𝐈𝐋 𝐊𝐀𝐘 𝐒𝐘𝐒𝐓𝐄𝐌 ⟡ 💛🇪🇸
┃╾━╼❖╾━╼❖╾━╼❖╾━╼❖╾━╼❖╾━╼❖

┃ 👤 *Nome:* ${nomeAlvo}
┃ 📱 *Número:* ${numUser}
┃ 📝 *Bio:* ${status}

┃╾━╼❖╾━╼❖╾━╼❖╾━╼❖╾━╼❖╾━╼❖
╭━╾❖╼━ 💛 𝐀𝐍𝐀́𝐋𝐈𝐒𝐄 𝐃𝐎 𝐔𝐒𝐔𝐀́𝐑𝐈𝐎 💛 ━╾❖╼━╮
┃
┃ 🏳️‍🌈 *Gay:* ${gay}
┃ 🤢 *Feio(a):* ${feio}
┃ 😍 *Lindo(a):* ${lindo}
┃ 🔥 *Gostoso(a):* ${gostoso}
┃ 🙄 *Chato(a):* ${chato}
┃ 🐂 *Corno(a):* ${corno}
┃ 🐴 *Burro(a):* ${burro}
┃ 😒 *Invejoso(a):* ${invejoso}
┃ 🍀 *Sortudo(a):* ${sortudo}
┃ 😎 *Estiloso(a):* ${estiloso}
┃
╰━╾❖╼━╾❖╼━╾❖╼━╾❖╼━╾❖╼━╾❖╼━╯

🇪🇸💛 ⟡ 𝙀𝙡 𝙎𝙮𝙨𝙩𝙚𝙢 𝙆𝘼𝙔 ⟡ 💛🇪🇸`;

        // 🔥 envio
        await conn.sendMessage(from, { image: imgBuff, caption: perfilMsg, mentions: [target], contextInfo: ShizukuStile }, { quoted: info });
        await reagir(from, "✅");

    } catch (e) {
        console.error("Erro no perfil:", e);
        await reagir(from, "❌");
        reply("❌ Erro ao carregar perfil.");
    }
}
break;

break;
case 'antilink': {
  try {
    if (!isGroup) return reply(msg.SoEmGrupo);
    const executorJid = info.key.participant || info.key.remoteJid || sender;
    const executorJidNormalizado = jidNormalizedUser(executorJid);
    const verificar = await sistemaVerificacao(conn, from, executorJidNormalizado, { numerodono: NumberDono }, botNumber);
    if (!verificar.isSenderAdmin && !verificar.isDonoBot) return reply(msg.SoAdmin);
    if (!verificar.isBotAdmin) return reply(msg.BotAdmin);
    if (args.length < 1) return reply('1 pra ligar / 0 pra desligar');

    const isAntiLinkAtual = dataGp[0].antilinkhard || false;  

    if (Number(args[0]) === 1) {
      if (isAntiLinkAtual) return reply('O recurso de antilink já está ativado.');
      dataGp[0].antilinkhard = true;  
      setGp(dataGp);
      reply(MSG.Ativado);
    } else if (Number(args[0]) === 0) {
      if (!isAntiLinkAtual) return reply('O recurso de antilink já está desativado.');
      dataGp[0].antilinkhard = false; 
      setGp(dataGp);
      reply(MSG.Desativado);
    } else {
      reply('1 para ativar, 0 para desativar');
    }
  } catch (erro) {
    console.log(erro);
    reply("Erro ao executar comando.");
  }
}
break;

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

case 'fakemsg':
case 'fakechat': {
  try {
    if (!q || !q.includes('|')) {
      return reply(`*Formato incorreto!*\n\n📌 Exemplo:\n${prefix + command} mensagem fake|resposta\n\n💡 *Responda a mensagem de alguém para usar!*`);
    }

    const partes = q.split("|");
    const textoFake = partes[0]?.trim();
    const bott = partes[1]?.trim();

    if (!textoFake || !bott) {
      return reply(`*Preencha tudo corretamente!*\n\n📌 Exemplo:\n${prefix + command} mensagem fake|resposta`);
    }

    const prefixosBloqueados = [prefix, "-", "/", "#", "+", ".", "!"];
    if (prefixosBloqueados.some(p => bott.startsWith(p))) {
      return reply('*Não é permitido fazer o bot enviar comandos no fake chat.*');
    }

    const ctxInfo = info?.message?.extendedTextMessage?.contextInfo;

    if (!ctxInfo?.participant || ctxInfo?.stanzaId === info?.key?.id) {
      return reply(`*Responda a mensagem de alguém para usar esse comando!*`);
    }

    const mentioned = jidNormalizedUser(normalizar(ctxInfo.participant));
    const msgId = "BAE5" + require('crypto').randomBytes(13).toString('hex').toUpperCase();

    await reagir(from, "🎭");

    await conn.sendMessage(from, {
      text: bott
    }, {
      quoted: {
        key: {
          fromMe: false,
          remoteJid: from,
          participant: mentioned,
          id: msgId
        },
        message: {
          conversation: textoFake
        }
      }
    });

    await reagir(from, "✅");

  } catch (e) {
    console.error(e);
    await reagir(from, "❌");
    reply('*Erro ao criar fake chat.*');
  }
}
break;

case 'gerarlink': {
try {

await reagir(from, "⏳");

const quotedMsg = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage

if (!quotedMsg) {
  await reagir(from, "❌");
  return reply("❌ Marque ou responda uma imagem, vídeo (até 30s) ou áudio.");
}

// =======================
// 📸 IMAGEM
// =======================
const imgMsg = quotedMsg?.imageMessage ||
               quotedMsg?.viewOnceMessageV2?.message?.imageMessage ||
               quotedMsg?.viewOnceMessage?.message?.imageMessage

if (imgMsg) {
  const buff = await getFileBuffer(imgMsg, 'image')
  const { data } = await axios.post('https://telegra.ph/upload', buff, {
    headers: { 'Content-Type': 'image/jpeg' }
  })
  const link = `https://telegra.ph${data[0]?.src}`
  await conn.sendMessage(from, { text: `🖼️ • Link gerado:\n${link}` }, { quoted: info })
  return await reagir(from, "✅")
}

// =======================
// 🎥 VÍDEO (até 30s)
// =======================
const vidMsg = quotedMsg?.videoMessage ||
               quotedMsg?.viewOnceMessageV2?.message?.videoMessage ||
               quotedMsg?.viewOnceMessage?.message?.videoMessage

if (vidMsg) {
  const seconds = vidMsg?.seconds || 0
  if (seconds > 30) {
    await reagir(from, "❌");
    return reply("❌ O vídeo deve ter no máximo 30 segundos.");
  }
  const buff = await getFileBuffer(vidMsg, 'video')
  const { data } = await axios.post('https://telegra.ph/upload', buff, {
    headers: { 'Content-Type': 'video/mp4' }
  })
  const link = `https://telegra.ph${data[0]?.src}`
  await conn.sendMessage(from, { text: `🎥 • Link gerado:\n${link}` }, { quoted: info })
  return await reagir(from, "✅")
}

// =======================
// 🎧 ÁUDIO
// =======================
const audMsg = quotedMsg?.audioMessage ||
               quotedMsg?.viewOnceMessageV2Extension?.message?.audioMessage

if (audMsg) {
  const buff = await getFileBuffer(audMsg, 'audio')
  const { data } = await axios.post('https://telegra.ph/upload', buff, {
    headers: { 'Content-Type': 'audio/mpeg' }
  })
  const link = `https://telegra.ph${data[0]?.src}`
  await conn.sendMessage(from, { text: `🎧 • Link gerado:\n${link}` }, { quoted: info })
  return await reagir(from, "✅")
}

// =======================
// ❌ NENHUMA MÍDIA
// =======================
await reagir(from, "❌");
reply("❌ Marque ou responda uma imagem, vídeo (até 30s) ou áudio.");

} catch (e) {
console.error(e);
await reagir(from, "❌");
reply("❌ Erro ao gerar link.");
}
}
break;

case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(msg.SoEmGrupo)
if(!isGroupAdmins && !So_Dono) return reply(msg.SoAdmin)
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
title: "🍁 🍁 мєηυ ρяιη¢ιραℓ",
description: "Comandos básicos do bot",
id: prefix + "menuu"
},
{
header: "🔞 ᴍᴇɴᴜ",
title: "🍁 𝙼𝙴𝙽𝚄 +18",
description: "Funções VIP",
id: prefix + "menu18"
},
{
header: "📥 ᴍᴇɴᴜ",
title: "🍁 𝙼𝙴𝙽𝚄 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳",
description: "Baixar músicas e vídeos",
id: prefix + "menudown"
},
{
header: "🎭 ᴍᴇɴᴜ",
title: "🍁 𝙼𝙴𝙽𝚄 𝙵𝙸𝙶𝚄𝚁𝙸𝙽𝙷𝙰𝚂",
description: "Criar e editar stickers",
id: prefix + "menufig"
},
{
header: "👑 ᴍᴇɴᴜ",
title: "🍁 𝙼𝙴𝙽𝚄 𝙳𝙾𝙽𝙾",
description: "Comandos do dono",
id: prefix + "menudono"
},
{
header: "🛡️ ᴍᴇɴᴜ",
title: "🍁 𝙼𝙴𝙽𝚄 𝙰𝙳𝙼",
description: "Controle de grupos",
id: prefix + "menuadm"
},
{
header: "👥 ᴍᴇɴᴜ",
title: "🍁 𝙼𝙴𝙽𝚄 𝙼𝙴𝙼𝙱𝚁𝙾𝚂",
description: "Comandos e funções para membros",
id: prefix + "menumemb"
},
{
header: "🎮 ᴍᴇɴᴜ",
title: "🍁 𝙼𝙴𝙽𝚄 𝙱𝚁𝙸𝙽𝙲𝙰𝙳𝙴𝙸𝚁𝙰𝚂",
description: "Jogos e diversão no grupo",
id: prefix + "menubrink"
},
{
header: "🗣️ ᴘᴇʀꜰɪʟ",
title: "🍁 𝙿𝙴𝚁𝙵𝙸𝙻",
description: "Seu perfil 🇪🇸",
id: prefix + "perfil"
}
]
}
]
};

// 🔘 BOTÕES
const botoes = [
{
name: "single_select",
buttonParamsJson: JSON.stringify(listaMenus)
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "〆 ᴋᴀʏㅤꜱʏꜱᴛᴇᴍㅤ亗",
url: "https://whatsapp.com/channel/0029Vb5nzxV7dmehsyILK70Z"
})
}
];

// 🧠 TEXTO
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

// 🔥
nativeFlowMessage: {
messageParamsJson: JSON.stringify({
bottom_sheet: {
in_thread_buttons_limit: 3,
divider_indices: [1],
list_title: "📂 Menus do Bot",
button_title: "Selecionar"
},
tap_target_configuration: {
title: "Kay System",
description: "Central de comandos",
canonical_url: "https://wa.me/",
domain: "kay-system.app",
button_index: 0
}
}),
buttons: botoes
}

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

case 'menumemb': { 
  await reagir(from, "🫪")
  await conn.sendMessage(from, {
    image: FotoMenu,
    caption: menumemb(prefix, sender),  // 👈 chama como função direto
    mentions: [sender, info?.key?.remoteJid],
    contextInfo: ShizukuStile
  }, { quoted: info });
} break;

case 'menubrink':
case 'brincadeiras': {
  await reagir(from, "😂")
  await conn.sendMessage(from, {
    image: FotoMenu,
    caption: menubrink(prefix, sender),
    mentions: [sender, info?.key?.remoteJid],
    contextInfo: ShizukuStile
  }, { quoted: info });
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

case 'botinfo': {
reply(`🤖 *BOT INFO*

Nome: KAY SYSTEM
Status: Online ✅
Plataforma: WhatsApp Bot
Sistema: Node.js
Versão: 1.0.1`)
}
break;

case 'criador': {
reply(`👑 *CRIADOR*

Bot desenvolvido por: @${dono || "desconhecido"}
Sistema: KAY SYSTEM 💛🇪🇸`)
}
break;

case 'avaliar': {
if(!q) return reply(`⭐ Use: ${prefix}avaliar mensagem`)
reply(`⭐ *AVALIAÇÃO*

Mensagem: ${q}
Nota: ${Math.floor(Math.random() * 10)}/10`)
}
break;

case 'bug': {
if(!q) return reply(`🐞 Use: ${prefix}bug descrição do bug`)
reply(`🐞 *BUG REPORTADO*

Descrição: ${q}
Status: Enviado para análise ✅`)
}
break;

case 'status': {
reply(`📊 *STATUS DO BOT*

🟢 Online
⚡ Funcionando normalmente
🛡️ Sistema estável
📡 Conexão ativa`)
}
break;

case 'uptime': {
const uptime = process.uptime()
const h = Math.floor(uptime / 3600)
const m = Math.floor((uptime % 3600) / 60)
const s = Math.floor(uptime % 60)

reply(`⏳ *UPTIME*

🕒 Ativo há:
${h}h ${m}m ${s}s`)
}
break;

case 'versao': {
reply(`📦 *VERSÃO DO SISTEMA*

KAY SYSTEM BOT
Versão: 1.0.1
Build: stable-release`)
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

case 'play_video': {
try {
if (!q.trim()) return reply("*_Cadê o nome ou link do YouTube?_*");
await reagir(from, "🔍");
await reply(msg.Download);
await play_video(q, conn, from, info, quoted, ShizukuStile);
await reagir(from, "✅");
} catch (e) {
console.log("❌ ERRO PLAY_VIDEO:", e);
await reagir(from, "❌");
reply(`Erro ao buscar resultados\n\n${e.message}`);
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

case 'suicidio':
case 'sair':
case 'autoexpulsar': {
    await reagir(from, "🚪")

    if (!isGroup) return reply("Só funciona em grupo.");
    if (!isBotGroupAdmins) return reply("Preciso ser admin.");

    await reply(`🚪 ${pushname} pediu pra sair... flw 😂`);

    await sleep(1500)

    await conn.groupParticipantsUpdate(from, [sender], 'remove')
}
break;

case 'ttkdl':
case 'tiktokdl': {
try {
if (!q?.trim()) return reply("*_Cadê o link do vídeo?_*")
if (!SoLink) return reply("*_Apenas links_*")
await reply(msg.Download)
await ttkdl(q, conn, from, info, quoted, ShizukuStile, sysite, syskey)
await reagir(from, "✅")
} catch (e) {
console.log(e)
reply("Erro ao baixar vídeo!")
}
}
break;

case 'instadl': {
try {
if (!q.trim()) return reply("*_Cadê o link do vídeo do Instagram?_*");
if (!SoLink) return reply("*_Apenas links_*");
await reply(msg.Download);
await instadl(q, conn, from, info, quoted, ShizukuStile);
await reagir(from, "✅");
} catch (e) {
reply("Erro ao buscar resultados");
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
if(!q.trim()) return reply(`ex: ${prefix+command} Lopisszéloko`);
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

    const n = q;

    const estilos = [
      { nome: "Negrito",      texto: `𝐀𝐁𝐂: ${n.split('').map(c => '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Itálico",      texto: `𝘼𝘽𝘾: ${n.split('').map(c => '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Gótico",       texto: `𝔄𝔅ℭ: ${n.split('').map(c => '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Duplo",        texto: `𝔸𝔹ℂ: ${n.split('').map(c => '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Fancy",        texto: `ᖴᗩᑎᑕY: ${n}` },
      { nome: "Negrito Itál", texto: `𝑨𝑩𝑪: ${n.split('').map(c => '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Cursivo",      texto: `𝒜ℬ𝒞: ${n.split('').map(c => '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Monospace",    texto: `𝙰𝙱𝙲: ${n.split('').map(c => '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Círculo",      texto: `Ⓐ: ${n.split('').map(c => 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Quadrado",     texto: `🄰: ${n.split('').map(c => '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉'['ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(c.toUpperCase())] || c).join('')}` },
      { nome: "Small Caps",   texto: `ᴀʙᴄ: ${n.toLowerCase().split('').map(c => 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ'['abcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('')}` },
      { nome: "Invertido",    texto: `∀: ${n.split('').map(c => 'ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz'['abcdefghijklmnopqrstuvwxyz'.indexOf(c.toLowerCase())] || c).join('').split('').reverse().join('')}` }
    ];

    // função de conversão real
    const converter = (str, alfabeto) => {
      const base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      return str.split('').map(c => {
        const i = base.indexOf(c);
        return i !== -1 ? alfabeto[i] : c;
      }).join('');
    };

    const alfabetos = {
      negrito:     [...'𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳'],
      italico:     [...'𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻'],
      gotico:      [...'𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷'],
      duplo:       [...'𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫'],
      negbold:     [...'𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛'],
      cursivo:     [...'𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏'],
      mono:        [...'𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣'],
      smallcaps:   [...'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ'],
    };

    const nicks = {
      negrito:   converter(n, alfabetos.negrito),
      italico:   converter(n, alfabetos.italico),
      gotico:    converter(n, alfabetos.gotico),
      duplo:     converter(n, alfabetos.duplo),
      negbold:   converter(n, alfabetos.negbold),
      cursivo:   converter(n, alfabetos.cursivo),
      mono:      converter(n, alfabetos.mono),
      smallcaps: converter(n, alfabetos.smallcaps),
      fancy:     n.split('').join('꧁꧂').replace('꧁꧂', ' '),
      circulo:   n.split('').map(c => 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join(''),
      quadrado:  n.toUpperCase().split('').map(c => '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉'['ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(c)] || c).join(''),
      invertido: n.toLowerCase().split('').map(c => 'ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz'['abcdefghijklmnopqrstuvwxyz'.indexOf(c)] || c).join('').split('').reverse().join('')
    };

    await conn.sendMessage(from, {
      interactiveMessage: {
        title: `🎨 Nick: ${n}`,
        footer: `© ${NickDono} • Toque para copiar`,
        nativeFlowMessage: {
          messageParamsJson: JSON.stringify({
            bottom_sheet: {
              in_thread_buttons_limit: 3,
              list_title: "🎨 Estilos de Nick",
              button_title: "Ver estilos"
            }
          }),
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: JSON.stringify({
                title: "🎨 Escolha e copie",
                sections: [
                  {
                    title: "✍️ Estilos disponíveis",
                    rows: [
                      { title: "𝐍𝐞𝐠𝐫𝐢𝐭𝐨",       description: nicks.negrito,   id: `nick_neg`   },
                      { title: "𝘐𝘵𝘢́𝘭𝘪𝘤𝘰",       description: nicks.italico,   id: `nick_ita`   },
                      { title: "𝔾ó𝕥𝕚𝕔𝕠",        description: nicks.gotico,    id: `nick_got`   },
                      { title: "𝔸𝔹ℂ Duplo",      description: nicks.duplo,     id: `nick_dup`   },
                      { title: "𝑵𝒆𝒈 𝑰𝒕𝒂́𝒍",     description: nicks.negbold,   id: `nick_nit`   },
                      { title: "𝒞𝓊𝓇𝓈𝒾𝓋𝑜",      description: nicks.cursivo,   id: `nick_cur`   },
                      { title: "𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎",    description: nicks.mono,      id: `nick_mon`   },
                      { title: "ꜱᴍᴀʟʟ ᴄᴀᴘs",   description: nicks.smallcaps, id: `nick_sml`   },
                      { title: "Ⓒ í𝐫𝐜𝐮𝐥𝐨",     description: nicks.circulo,   id: `nick_cir`   },
                      { title: "🄱 Quadrado",     description: nicks.quadrado,  id: `nick_qua`   },
                      { title: "ɹoʇɐɹǝʌuI",     description: nicks.invertido, id: `nick_inv`   },
                    ]
                  }
                ]
              })
            },
            {
              name: "cta_copy",
              buttonParamsJson: JSON.stringify({
                display_text: "📋 Copiar Negrito",
                copy_code: nicks.negrito
              })
            },
            {
              name: "cta_copy",
              buttonParamsJson: JSON.stringify({
                display_text: "📋 Copiar Gótico",
                copy_code: nicks.gotico
              })
            }
          ]
        }
      }
    }, { quoted: info });

    // manda também no chat pra ver todos
    await reply(
`🎨 *GERADOR DE NICK* — ${n}

𝐍𝐞𝐠𝐫𝐢𝐭𝐨: ${nicks.negrito}
𝘐𝘵𝘢́𝘭𝘪𝘤𝘰: ${nicks.italico}
𝔾ó𝕥𝕚𝕔𝕠: ${nicks.gotico}
𝔸𝔹ℂ: ${nicks.duplo}
𝑵𝒆𝒈 𝑰𝒕𝒂́𝒍: ${nicks.negbold}
𝒞𝓊𝓇𝓈𝒾𝓋𝑜: ${nicks.cursivo}
𝙼𝚘𝚗𝚘: ${nicks.mono}
ꜱᴍᴀʟʟ: ${nicks.smallcaps}
Ⓒírculo: ${nicks.circulo}
🄱Quadrado: ${nicks.quadrado}
ɹoʇɐɹǝʌuI: ${nicks.invertido}`
    );

  } catch (e) {
    console.error(e);
    reply('❌ Erro ao gerar nick.');
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

    const [packname, author2] = q.split("/");

    if (!packname || !author2) {
      return reply(`❌ *ᴠᴏᴄᴇ ᴘʀᴇᴄɪꜱᴀ ᴅᴇꜰɪɴɪʀ ᴘᴀᴄᴋ ᴇ ᴀᴜᴛᴏʀ!*\n\n📌 Exemplo:\n${prefix + command} Nk/Petrov`);
    }

    await conn.sendMessage(from, { react: { text: "🎭", key: info.key } });

    const { writeExif2 } = require('./DATABASE2/sticker/exif.js');

    // Baixa o sticker da mensagem respondida
    const stickerMsg = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage;
    const stickerBuffer = await getFileBuffer(stickerMsg, 'sticker');

    // Aplica os novos metadados (pack/autor)
    const stickerComExif = await writeExif2(
      { mimetype: 'image/webp', data: stickerBuffer },
      { packname: packname.trim(), author: author2.trim() }
    );

    const stickerFinal = require('fs').readFileSync(stickerComExif);

    // Envia
    await conn.sendMessage(from, {
      sticker: stickerFinal
    }, { quoted: selo });

    await conn.sendMessage(from, { react: { text: "✅", key: info.key } });

  } catch (e) {
    console.error(e);
    await conn.sendMessage(from, { react: { text: "❌", key: info.key } });
    reply('❌ *Erro ao renomear figurinha.*');
  }
}
break;

case 'fakemsg':
case 'fakechat': {
  try {
    if (!q || !q.includes('|')) {
      return reply(`❌ *Formato incorreto!*\n\n📌 Exemplo:\n${prefix + command} @user|mensagem fake|sua resposta\n\n💡 *Dica:* Se o nome bugar, *responda* uma mensagem da pessoa em vez de usar o @.`);
    }

    const partes = q.split("|");
    const tarrget = partes[1]?.trim();
    const bott = partes[2]?.trim();

    const ctx = info?.message?.extendedTextMessage?.contextInfo;
    let mentioned = ctx?.mentionedJid?.[0];
    let repliedParticipant = ctx?.participant;
    let repliedStanzaId = ctx?.stanzaId;

    let target = mentioned || repliedParticipant;
    const crypto = require('crypto');
    let stanzaToUse = "BAE5" + crypto.randomBytes(13).toString('hex').toUpperCase();

    // 🔥 A MÁGICA: Se você respondeu a alguém, usamos o ID real da mensagem!
    // Isso força o WhatsApp a puxar o nome e a foto corretos, mesmo se o número estiver oculto (LID).
    if (repliedParticipant && !mentioned) {
        target = repliedParticipant;
        stanzaToUse = repliedStanzaId;
    }

    // Plano B: Extrair número digitado se não houver marcação ou resposta
    if (!target) {
      const numMatch = q.match(/@(\d+)/);
      if (numMatch?.[1]) target = `${numMatch[1]}@s.whatsapp.net`;
    }

    if (!target || !tarrget || !bott) {
      return reply(`❌ *Não consegui identificar o alvo!*\n\n⚠️ Marque a pessoa ou *responda* uma mensagem dela.\n\n📌 Exemplo:\n${prefix + command} @user|mensagem|resposta`);
    }

    // 🔥 TRADUTOR AGRESSIVO: Tenta converter o LID para Número Normal
    if (target.includes('@lid')) {
        const membroInfo = MembrosGP.find(m => m.lid === target || m.id === target);
        // Garante que pegou o número de telefone e não outro código
        if (membroInfo && membroInfo.id && membroInfo.id.includes('@s.whatsapp.net')) {
            target = membroInfo.id; 
        }
    }

    target = jidNormalizedUser(target);

    // Trava para o bot não executar comandos sozinhos
    const prefixosBloqueados = [prefix, "-", "/", "#", "+", ".", "!"];
    if (prefixosBloqueados.some(p => bott.startsWith(p))) {
      return reply('❌ *Não é permitido fazer o bot enviar comandos no fake chat.*');
    }

    await reagir(from, "🎭");

    // Envio final com o ID cravado
    await conn.sendMessage(from, {
      text: bott,
      contextInfo: {
        stanzaId: stanzaToUse, // Usa o ID fake, ou o ID real roubado da resposta
        participant: target,
        quotedMessage: {
          conversation: tarrget
        }
      }
    });

    await reagir(from, "✅");

  } catch (e) {
    console.error(e);
    await reagir(from, "❌");
    reply('❌ *Erro ao criar fake chat.*');
  }
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

case 'gay':
case 'feio':
case 'linda':
case 'lindo':
case 'corno':
case 'invejosa':
case 'invejoso':
case 'vesgo':
case 'chata':
case 'chato':
case 'burro': {
try {

const m = info;
const from = m.key.remoteJid;

// 🔥 alvo
let user = m.mentionedJid?.[0] 
  ? m.mentionedJid[0] 
  : m.quoted 
  ? m.quoted.sender 
  : m.key.participant || m.key.remoteJid;

if (!user) return reply("Marque alguém.");

const num = user.split("@")[0];
const porcent = Math.floor(Math.random() * 100) + 1;

// 🔥 AGORA USANDO MP4 (FUNCIONA)
const caminhos = {
  gay: "/storage/emulated/0/kay/gifs/gay.mp4",
  feio: "/storage/emulated/0/kay/gifs/feio.mp4",
  linda: "/storage/emulated/0/kay/gifs/linda.mp4",
  lindo: "/storage/emulated/0/kay/gifs/lindo.mp4",
  corno: "/storage/emulated/0/kay/gifs/corno.mp4",
  invejosa: "/storage/emulated/0/kay/gifs/invejosa.mp4",
  invejoso: "/storage/emulated/0/kay/gifs/invejoso.mp4",
  vesgo: "/storage/emulated/0/kay/gifs/vesgo.mp4",
  chata: "/storage/emulated/0/kay/gifs/chata.mp4",
  chato: "/storage/emulated/0/kay/gifs/chato.mp4",
  burro: "/storage/emulated/0/kay/gifs/burro.mp4"
};

const frases = {
  gay: `🏳️‍🌈 @${num} é ${porcent}% gay 😳`,
  feio: `🤢 @${num} é ${porcent}% feio`,
  linda: `😍 @${num} é ${porcent}% linda`,
  lindo: `😎 @${num} é ${porcent}% lindo`,
  corno: `🐂 @${num} é ${porcent}% corno`,
  invejosa: `😒 @${num} é ${porcent}% invejosa`,
  invejoso: `😒 @${num} é ${porcent}% invejoso`,
  vesgo: `👀 @${num} é ${porcent}% vesgo`,
  chata: `🙄 @${num} é ${porcent}% chata`,
  chato: `🙄 @${num} é ${porcent}% chato`,
  burro: `🐴 @${num} é ${porcent}% burro`
};

const caminho = caminhos[command];
const texto = frases[command];

// 🔥 envio (AGORA FUNCIONA 100%)
if (caminho && fs.existsSync(caminho)) {

  await conn.sendMessage(from, {
    video: fs.readFileSync(caminho),
    gifPlayback: true,
    caption: texto,
    mentions: [user]
  }, { quoted: m });

} else {

  await conn.sendMessage(from, {
    text: texto + "\n\n❌ Vídeo não encontrado.",
    mentions: [user]
  }, { quoted: m });

}

} catch (e) {
console.log(e);
reply("❌ Erro.");
}
}
break;

//FINAL DE COMANDOS 
default: {
const similares = ListaComandos(command).slice(0, 5);
await conn.sendMessage(from, {
  interactiveMessage: {
    title: `❌ *${prefix + command}* não encontrado`,
    footer: `© ${NickDono}`,
    nativeFlowMessage: {
      messageParamsJson: JSON.stringify({
        bottom_sheet: {
          in_thread_buttons_limit: 3,
          list_title: "💡 Sugestões",
          button_title: "Ver sugestões"
        }
      }),
      buttons: [
        {
          name: "single_select",
          buttonParamsJson: JSON.stringify({
            title: "💡 Comandos similares",
            sections: [
              {
                title: "🟡 Sugestões",
                rows: similares.map(cmd => ({
                  title: `${prefix + cmd.command}`,
                  description: `Compatibilidade: ${cmd.similarity.toFixed(1)}%`,
                  id: `${prefix + cmd.command}`
                }))
              }
            ]
          })
        },
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: "📋 Ver Menu",
            id: `${prefix}menu`
          })
        }
      ]
    }
  }
}, { quoted: info });
}
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

