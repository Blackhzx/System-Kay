// não apague esse arquivo, pois isso será a função² do promover y rebaixar 

const getNum = (jid) => String(jid || "").replace(/\D/g, '');

// by Lopes' 🇪🇸 
const getTarget = (info, q) => {

const contextInfo =
  info?.message?.extendedTextMessage?.contextInfo ||
  info?.msg?.contextInfo ||
  info?.contextInfo ||
  {};

let alvo = null;

if (Array.isArray(contextInfo.mentionedJid) && contextInfo.mentionedJid.length > 0) {
  alvo = contextInfo.mentionedJid[0];
} else if (contextInfo.participant) {
  alvo = contextInfo.participant;
} else if (info?.quoted?.sender) {
  alvo = info.quoted.sender;
} else {
  const texto =
    info?.message?.extendedTextMessage?.text ||
    info?.message?.conversation ||
    q ||
    "";

  const match = texto.match(/@(\d+)/);
  if (match?.[1]) {
    alvo = `${match[1]}@s.whatsapp.net`;
  }
}

if (!alvo && q) {
  const numero = q.replace(/\D/g, '');
  if (numero.length >= 5) {
    alvo = `${numero}@s.whatsapp.net`;
  }
}

return alvo;
};

// 🔥
const promoverUser = async (conn, from, info, q, botNumber, NumberDono) => {

const metadata = await conn.groupMetadata(from);
const participants = metadata.participants;

let alvo = getTarget(info, q);
if (!alvo) return { erro: "Marque ou responda a mensagem." };

const alvoNum = getNum(alvo);

// 🔍 
const membro = participants.find(user => {
  const num = getNum(user.id || user.jid);
  return num.includes(alvoNum) || alvoNum.includes(num);
});

if (!membro) return { erro: "Usuário não encontrado no grupo." };

alvo = membro.id || membro.jid;

// 🔒 
if (getNum(alvo) === getNum(botNumber)) {
  return { erro: "Não posso me promover/rebaixar." };
}

// 🔒 
const donos = (Array.isArray(NumberDono) ? NumberDono : [NumberDono])
.map(n => `${String(n).replace(/\D/g,'')}@s.whatsapp.net`);
if (donos.find(n => getNum(n) === getNum(alvo))) {
  return { erro: "Não posso alterar o cargo do dono 👋🏽🤣." };
}

// 🔍 
const isAdmin = participants.find(user => {
  if (!user.admin) return false;
  const num = getNum(user.id || user.jid);
  return num.includes(alvoNum) || alvoNum.includes(num);
});

if (isAdmin) return { erro: "Esse usuário já é administrador." };

// 🚀 
await conn.groupParticipantsUpdate(from, [alvo], "promote");

return { sucesso: `*🇪🇸 @${getNum(alvo)} promovido (a).*`, alvo };
};

// 🔻 
const rebaixarUser = async (conn, from, info, q, botNumber, NumberDono) => {

const metadata = await conn.groupMetadata(from);
const participants = metadata.participants;

let alvo = getTarget(info, q);
if (!alvo) return { erro: "> Marque ou responda a mensagem." };

const alvoNum = getNum(alvo);

// 🔍 
const membro = participants.find(user => {
  const num = getNum(user.id || user.jid);
  return num.includes(alvoNum) || alvoNum.includes(num);
});

if (!membro) return { erro: "> Usuário não encontrado no grupo." };

alvo = membro.id || membro.jid;

// 🔒 
if (getNum(alvo) === getNum(botNumber)) {
  return { erro: "Não posso me rebaixar zé Loko KKKKKKKK." };
}

// 🔒 
const donos = (Array.isArray(NumberDono) ? NumberDono : [NumberDono])
.map(n => `${String(n).replace(/\D/g,'')}@s.whatsapp.net`);
if (donos.find(n => getNum(n) === getNum(alvo))) {
  return { erro: "Não posso alterar o cargo do dono 🤣👋🏽." };
}

// 🔍 
const isAdmin = participants.find(user => {
  if (!user.admin) return false;
  const num = getNum(user.id || user.jid);
  return num.includes(alvoNum) || alvoNum.includes(num);
});

if (!isAdmin) return { erro: "Esse usuário já é membro comum." };

// 🚀 
await conn.groupParticipantsUpdate(from, [alvo], "demote");

return { sucesso: `*🇪🇸 @${getNum(alvo)} rebaixado (a).*`, alvo };
};

module.exports = {
  promoverUser,
  rebaixarUser
};