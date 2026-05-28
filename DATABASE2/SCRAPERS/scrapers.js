const fetch = require('node-fetch');

const { sysite, syskey, prefix } = require('../../dono/dono');

async function BuscarNogpt(query, SHIZUKU_SITE, SHIZUKU_KEY) {
try {const res = await fetch(`${SHIZUKU_SITE}/api/ias/gpt-2?query=${encodeURIComponent(query?.trim())}&apitoken=${SHIZUKU_KEY}`);
const api = await res.json()
if(!api?.resposta) return reply("Erro");
return api.resposta.trim();
} catch (e) {
return "Erro em :" +e;
}
}

async function BaixarNoYt(query, tipo) {
try {const res = await fetch(`https://shizuku-ia.0.obrh.uno/api/download/youtube?query=${encodeURIComponent(query.trim())}&tipo=${tipo}`)
const api = await res.json()
const result = api?.resultado?.download;
return result;
} catch (e) {
return "Erro ao buscar resultados";
}
};

async function ttkdl(url, conn, from, info, quoted, ShizukuStile) {
try {
if (!url) return conn.sendMessage(from, { text: "❌ Cadê o link do TikTok?" }, { quoted: info });
const apiUrl = `${sysite}/api/downloads/tiktokv3?apikey=${syskey}&url=${encodeURIComponent(url)}`;
const res = await fetch(apiUrl);
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const api = await res.json();
if (!api || api.status !== true) return conn.sendMessage(from, { text: "❌ Erro ao buscar vídeo do TikTok." }, { quoted: info });
const videoUrl = api?.download_url;
if (!videoUrl) return conn.sendMessage(from, { text: "❌ Não encontrei a URL do vídeo." }, { quoted: info });
const videoBuffer = await getBuffer(videoUrl);
if (!videoBuffer) return conn.sendMessage(from, { text: "❌ Erro ao baixar vídeo." }, { quoted: info });
const autor = api?.autor?.nickname || "Desconhecido";
const username = api?.autor?.username || "desconhecido";
const likes = api?.stats?.like || 0;
const views = api?.stats?.views || 0;
const comments = api?.stats?.comment || 0;
const txt = `🎬 *TIKTOK DL*

👤 ${autor}
📛 @${username}

❤️ ${likes} • 👀 ${views} • 💬 ${comments}`;
await conn.sendMessage(from, { video: videoBuffer, mimetype: "video/mp4", caption: txt, contextInfo: ShizukuStile }, { quoted: info });
} catch (e) {
return conn.sendMessage(from, { text: "❌ Erro ao baixar vídeo." }, { quoted: info });
}
}

async function play_video(text, conn, from, info, quoted, ShizukuStile) {
try {
const axios = require("axios");
if (!text) return conn.sendMessage(from, { text: "❌ Cadê o nome ou link?" }, { quoted: info });
const apiUrl = `${sysite}/api/ytmp4?apikey=${syskey}&text=${encodeURIComponent(text)}`;
const res = await fetch(apiUrl);
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const api = await res.json();
if (!api?.status) return conn.sendMessage(from, { text: "❌ Erro ao buscar vídeo" }, { quoted: info });
const videoUrl = api?.result?.download;
if (!videoUrl) return conn.sendMessage(from, { text: "❌ Não encontrei o vídeo" }, { quoted: info });
const videoBuffer = (await axios.get(videoUrl, { responseType: "arraybuffer" })).data;
const txt = `🎬 *YT VIDEO*\n\n📛 ${api?.result?.title || "Desconhecido"}\n⏱️ ${api?.result?.duration || "0:00"} • 📀 ${api?.result?.quality || "?"} • 📦 ${api?.result?.size || "?"}`;
await conn.sendMessage(from, { video: videoBuffer, mimetype: "video/mp4", caption: txt, contextInfo: ShizukuStile }, { quoted: info });
} catch (e) {
return conn.sendMessage(from, { text: `❌ ERRO:\n\n${e.message}` }, { quoted: info });
}
}

async function instadl(url, conn, from, info, quoted, ShizukuStile) {
try {
if (!url) return conn.sendMessage(from, { text: "❌ Cadê o link do Instagram?" }, { quoted: info });
const apiUrl = `${sysite}/api/V2/instagram?apikey=${syskey}&url=${encodeURIComponent(url)}`;
const res = await fetch(apiUrl);
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const api = await res.json();
if (!api?.status) return conn.sendMessage(from, { text: "❌ Erro ao buscar mídia" }, { quoted: info });
const mediaUrl = api?.media?.[0];
if (!mediaUrl) return conn.sendMessage(from, { text: "❌ Não encontrei mídia" }, { quoted: info });
const mediaBuffer = await getBuffer(mediaUrl);
const autor = api?.author?.name || "Desconhecido";
const username = api?.author?.username || "desconhecido";
const likes = api?.stats?.likes || 0;
const views = api?.stats?.views || 0;
const comments = api?.stats?.comments || 0;
const txt = `📸 *INSTA DL*

👤 ${autor}
📛 @${username}

❤️ ${likes} • 👀 ${views} • 💬 ${comments}`;
if (api?.type === "video") {
await conn.sendMessage(from, { video: mediaBuffer, mimetype: "video/mp4", caption: txt, contextInfo: ShizukuStile }, { quoted: info });
} else {
await conn.sendMessage(from, { image: mediaBuffer, caption: txt, contextInfo: ShizukuStile }, { quoted: info });
}
} catch (e) {
return conn.sendMessage(from, { text: "❌ Erro ao baixar mídia" }, { quoted: info });
}
}

async function METADINHAS(conn, from, info,quoted, SHIZUKU_KEY, SHIZUKU_SITE) {
try {const res = await fetch(`${SHIZUKU_SITE}/api/metadinha?&apitoken=${SHIZUKU_KEY}`);
const json = await res.json();
const api = json?.resultado;
const homem = api?.masculino;
const mulher = api?.feminino;
setTimeout(() => {
conn.sendMessage(from, {image: {url: homem},caption: "🤵 | Perfil masculino"}, {quoted: info});
}, 2000);
setTimeout (() => {
conn.sendMessage(from, {image: {url: mulher}, caption: "👰 | Perfil feminino"}, {quoted: info})
}, 2000);
} catch (e) {
return conn.sendMessage(from, {text: "Erro no comando"}, {quoted: info});
}
}
module.exports = {
BuscarNogpt,
BaixarNoYt,
ttkdl,
instadl,
play_video,
METADINHAS
}