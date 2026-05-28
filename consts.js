const { downloadContentFromMessage, prepareWAMessageMedia, jidNormalizedUser } = require("@systemzero/baileys");

const fetch = require("node-fetch");
const colors = require('colors');
const moment = require("moment-timezone");
const { Boom } = require('@hapi/boom');
const fs = require('fs-extra');
const axios = require('axios');
const infoSystem = require('os');
const os = require('os')
const linkfy = require("linkifyjs")
const util = require('util');
const { exec, spawn, execSync } = require('child_process');
const { ytSearch } = require("yt-search");
const ms = require('ms')


const { banner2, banner3, getBuffer, fetchJson, getGroupAdmins, getMembros, jpzinhhomi, Shizukuu, ShizukuStile} = require("./DATABASE2/secreto/funcoes.js");
const { msg, Cmd} = require("./dono/mensagens/mensagens");
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');

const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./DATABASE2/sticker/rename.js');

const { BuscarNogpt, BaixarNoYt, ttkdl, instadl, play_video, METADINHAS } = require("./DATABASE2/SCRAPERS/scrapers");
//EXPORTAÇÃO 
const { menu } = require("./dono/menus/menu")
const { menus } = require("./dono/menus/Shizuku")
const { dono1, dono2, dono3, dono4, dono5, dono6 } = require("./dono/dados-donos");
const Config2 = JSON.parse(fs.readFileSync("./dono/dados-donos.json"));
const Config = JSON.parse(fs.readFileSync("./dono/dono.json"));
const FotoMenu = fs.readFileSync("./dono/menus/Foto-menu/img-menu.jpg");

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

function ANT_LTR_MD_EMJ(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

//SIMILARIDADEZ
function SimilarComandos(word1, word2) {
function generateNGrams(word, n) {
const nGrams = [];
for (let i = 0; i < word.length - n + 1; i++) {
nGrams.push(word.slice(i, i + n));
}
return nGrams;
}
 
const nGrams1 = generateNGrams(word1, 2);
const nGrams2 = generateNGrams(word2, 2);
const commonNGrams = nGrams1.filter(nGram => nGrams2.includes(nGram));
const similarity = Math.round((2 * commonNGrams.length) / (nGrams1.length + nGrams2.length) * 100);
return similarity;
}
const ListaComandos = (targetWord) => {
const fileContent = fs.readFileSync("index.js", "utf8");
const commandsRegex = /case\s+['"](.+?)['"]/g;
const results = [];
const seen = new Set();
let match;
while ((match = commandsRegex.exec(fileContent)) !== null) {
const extractedCommand = match[1];
if (seen.has(extractedCommand)) continue;
seen.add(extractedCommand);
const similarity = SimilarComandos(targetWord, extractedCommand);
results.push({ command: extractedCommand, similarity });
}
results.sort((a, b) => b.similarity - a.similarity);
return results;
};

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} horas, ${pad(minutes)} minutos e ${pad(seconds)} segundos.`;
}

const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType);
let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};

module.exports = { 
fetchJson, 
colors, hora, 
data, 
banner2, 
banner3, 
Boom, 
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
play_video,
infoSystem,
os,
menu,
menus,
ytSearch,
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
};