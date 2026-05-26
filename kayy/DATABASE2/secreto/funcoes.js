const colors = require("colors");
const cfonts = require('cfonts')
const axios = require('axios')
const fetch = require('node-fetch');

var corzinhas = ["red", "green", "yellow", "blue","magenta", "cyan", "white", "gray", "redBright","greenBright", "yellowBright", "blueBright", "magentaBright", "cyanBright", "whiteBright"];
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor3 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];
const cor4 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor5 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];

function normalizeJid(jid) {//FUNÇÃO BY: NKZIN-DEV, NÃO TIRA OS CRÉDITOS DESGRAÇA!!
if(!jid) return null;
let id = jid.replace(/:.*(?=@)/, '');
if (id.endsWith('@lid')) {
id = id.replace('@lid', '@s.whatsapp.net');
} else if (!id.endsWith('@s.whatsapp.net')) {
id += '@s.whatsapp.net';
}
return id;
}

function resolveParticipantJid(p) {
if (p.jid) return p.jid;
if (p.participantPn) return p.participantPn;
const raw = p.participant || p.lid || '';
if (!raw) return null;
return raw.includes('@') ? raw.split(':')[0] + '@s.whatsapp.net' : raw + '@s.whatsapp.net';
}

function getGroupAdmins(participants) {////FUNÇÃO BY: NKZIN-DEV, NÃO TIRA OS CRÉDITOS DESGRAÇA!!
return participants
.filter(p => p.admin === "admin" || p.admin === "superadmin")
.map(p => normalizeJid(resolveParticipantJid(p)))
.filter(Boolean);
}

function getMembros(participants) {//FUNÇÃO BY: NKZIN-DEV, NÃO TIRA OS CRÉDITOS DESGRAÇA!!
return participants
.filter(p => !p.admin)
.map(p => normalizeJid(resolveParticipantJid(p)))
.filter(Boolean);
}

const getBuffer = async (url, opcoes) => {
try {
opcoes ? opcoes : {}
const post = await axios({
method: "get",
url,
headers: {
'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
	'DNT': 1,
	'Upgrade-Insecure-Request': 1
},
...opcoes,
responseType: 'arraybuffer'
})
return post.data
} catch (erro) {
console.log(`Erro identificado: ${erro}`)
}
}

const ShizukuStile = {
forwardingScore: 100000,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: "120363427096286754@newsletter",
    newsletterName: "✧･ﾟ: ᴅᴇᴠʟᴀʙ ✧･ﾟ"
  }
};
async function fetchJson(url, options = {}) {
try {
const res = await fetch(url, options);
const json = await res.json();
return json;
} catch (err) {
throw err;
}
}


const banner2 = cfonts.render(('Criador: Lopes | WhatsApp: +55 67 99822-9189'), {
font: 'console',
align: 'center',
gradrient: [`${cor4}`,`${cor2}`], 
colors: [`${cor3}`,`${cor1}`,`${cor5}`],
lineHeight: 1
});

 const banner3 = cfonts.render((`KAY SYSTEM`), {
font: 'slick',             
align: 'center',           
colors: [`${cor1}`,`${cor3}`,`${cor4}`,`${cor2}`],
background: 'transparent',  
letterSpacing: 1,           
lineHeight: 1,            
space: true,               
maxLength: '0',            
gradrient: [`${cor4}`,`${cor2}`],     
independentGradient: false, 
transitionGradient: false, 
env: 'node'
});  

const jpzinhhomi = "556798229189@s.whatsapp.net";//NÃO SEJA UM CABA CORNO E N MUDA NADA AQ!!
const Shizukuu = "5511921027955@s.whtsapp.net";//NÃO MUDA AQUI NÃO!

module.exports = { banner2, banner3, fetchJson, getBuffer, getGroupAdmins, getMembros, jpzinhhomi, Shizukuu, ShizukuStile};
