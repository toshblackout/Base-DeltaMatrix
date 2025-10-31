
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧BAILEYS 7.0.0୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const { default: makeWASocket, downloadContentFromMessage,emitGroupParticipantsUpdate,emitGroupUpdate,makeInMemoryStore,prepareWAMessageMedia, MediaType,WAMessageStatus, AuthenticationState, GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions,useMultiFileAuthState, BufferJSON,WAMessageProto,MessageOptions, PHONENUMBER_MCC,	 WAFlag,WANode,	 WAMetric,	 ChatModification,MessageTypeProto,WALocationMessage, ReconnectMode,WAContextInfo,proto,	 WAGroupMetadata,ProxyAgent,	 waChatKey,MimetypeMap,MediaPathMap,WAContactMessage,WAContactsArrayMessage,WAGroupInviteMessage,WATextMessage,WAMessageContent,WAMessage,BaileysError,WA_MESSAGE_STATUS_TYPE,MediaConnInfo, generateWAMessageContent, URL_REGEX,Contact, WAUrlInfo,WA_DEFAULT_EPHEMERAL,WAMediaUpload,mentionedJid,processTime,	 Browser, makeCacheableSignalKeyStore ,MessageType,Presence,WA_MESSAGE_STUB_TYPES,Mimetype,relayWAMessage,	 Browsers,GroupSettingChange,delay,DisconnectReason,WASocket,getStream,WAProto,isBaileys,AnyMessageContent,generateWAMessageFromContent, fetchLatestBaileysVersion,processMessage,processingMutex, baileys } = require('baileys');

const { 'default': MessageRetryMap, extractGroupMetadata, otherOpts } = require('@whiskeysockets/baileys');
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧MODULOS୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
let pino = require('pino')
const fs = require('fs')
const axios = require('axios');
const chalk = require('chalk')
const colors = require("colors");
const Pino = require('pino')
const NodeCache = require("node-cache")
const readline = require("readline")
const PhoneNumber = require('awesome-phonenumber')
const moment = require('moment-timezone');
const os = require("os");
const path = require('path');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
const stream = require('stream');
const { Buffer } = require('buffer');
const { fileTypeFromBuffer } = require('file-type');
const fetch = require("node-fetch");
const hora_ = moment.tz('America/Sao_Paulo').format('HH:mm');
const hora_2 = moment.tz('America/Sao_Paulo').format('mm');
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧MODULOS-GENERICOS୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const { color, bgcolor } = require('./arquivos/js/color')

const conselhos = require("./arquivos/js/conselhos"); 

const { upload } = require(path.join(__dirname, './arquivos/js/uploads'));

const { banner2, banner3 } = require('./arquivos/funcoes/functions.js');

const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./arquivos/sticker/exif');

const { imageToWebp2, videoToWebp2, writeExifImg2, writeExifVid2 } = require('./arquivos/sticker/exif2')

const mensagens = require('./arquivos/js/mensagens');

const { audio_menu } = require('./arquivos/json/audios.json')

const configPath = path.join(__dirname, './dono/config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const { prefix, NomeDoBot, NomeDono, BLACKOUT_API, BLACKOUT_KEY, numerodono, marcadagua  } = config;

const logoslink = JSON.parse(fs.readFileSync('./dono/logos.json'));

const black_ = require('./database/grupos/avisos.json'); 

const level2 = JSON.parse(fs.readFileSync("./database/usuarios/leveling.json"));

const { coins } = require("./database/usuarios/bancoBlackout");

const pathNes = './dono/nescessario.json'; 
let nescessario = require(pathNes); 

const nit = fs.existsSync('./database/usuarios/nit.json') ? require('./database/usuarios/nit.json') : [];

const supre = fs.existsSync('./database/usuarios/supre.json') ? require('./database/usuarios/supre.json') : [];

const chyt = fs.existsSync('./database/usuarios/chyt.json') ? require('./database/usuarios/chyt.json') : [];

const ban = fs.existsSync('./database/usuarios/banned.json') ? require('./database/usuarios/banned.json') : [];

const premium = fs.existsSync('./database/usuarios/premium.json') ? require('./database/usuarios/premium.json') : [];

const caminhoRegistro = './database/usuarios/registrados.json';

const joguinhodavelhajs = JSON.parse(fs.readFileSync('./database/usuarios/joguinhodavelha.json'));

const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./database/usuarios/joguinhodavelha2.json'));

const { validmove, setGame } = require('./database/usuarios/tictactoe/index');

const rouboCooldown = JSON.parse(fs.readFileSync("./database/usuarios/BlackoutRpg/rouboCooldown.json"));

const autorpg = JSON.parse(fs.readFileSync("./database/usuarios/BlackoutRpg/autorpg.json"));

const antispam = JSON.parse(fs.readFileSync('./database/protecao/antispam.json'));

const imagemCache = {};
const { linklogos, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, beijocmd, chutecmd, tapacmd, thumbnail, fundo1, fundo2, sococmd,rnkgay, rnkcorno, rnkgostosa, rnkgostoso, rnkgado, rnknazista,rnkotaku,rnkpau } = require("./dono/links_img.json");

const { msgantipv, msgantipv2, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, visualizarmsg } = require('./dono/nescessario.json'); 

function ensureFile(filePath, defaultData = []) {
if (!fs.existsSync(filePath)) {
fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2));
  }
return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const mutedData = ensureFile('./database/usuarios/muted.json', []);

/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧CONEXAO-PAREAMENTO୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
let phoneNumber = `${numerodono}`
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧INICIO DO BOT୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
async function iniciarBlackout() {
const { state, saveCreds } = await useMultiFileAuthState('./database/QR-code')
const { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetryCounterCache = new NodeCache()
const client = makeWASocket({
version,
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'silent' })),
},
logger: pino({ level: 'silent' }),
printQRInTerminal: !process.argv.includes("--code"),
mobile: false,
browser: ['Ubuntu','Edge','125.0.0.0'],
generateHighQualityLinkPreview: true,
msgRetryCounterCache,
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 20000,
patchMessageBeforeSending: (message) => {
const requiresPatch = !!(message.buttonsMessage || message.templateMessage || message.listMessage);
if (requiresPatch) {
message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {},
},
...message,
},
},
};
}
return message;
},
});
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧TEMPO MOMENTO ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa noite'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}

/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧DATA HORA/RELÓGIO ABAIXO୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const runtime = function(seconds) {
seconds = Number(seconds)
var d = Math.floor(seconds / (3600 * 24))
var h = Math.floor(seconds % (3600 * 24) / 3600)
var m = Math.floor(seconds % 3600 / 60)
var s = Math.floor(seconds % 60)
var dDisplay = d > 0 ? d + (d == 1 ? " Dia, " : " Dias, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " Hora, " : " Horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " Minuto e " : " Minutos e ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " Segundo" : " Segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧MENUS୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const { Menu, MenuAdm, MenuDono, Menupremium } = require("./dono/menus.js");
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧CONSOLE CÓDIGO/PAREAMENTO TEMA MATRIX୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const question = (text) => new Promise((resolve) => {
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question(text, (answer) => {
rl.close();
resolve(answer);
  });
});

// Função para efeito Matrix simples
const matrixEffect = async (duration = 4000) => {
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
const width = process.stdout.columns || 50;
const height = process.stdout.rows || 20;

const end = Date.now() + duration;

while (Date.now() < end) {
let output = '';
for (let i = 0; i < height; i++) {
let line = '';
for (let j = 0; j < width; j++) {
line += Math.random() > 0.975 ? chars[Math.floor(Math.random() * chars.length)] : ' ';
   }
output += chalk.green(line) + '\n';
    }
console.clear();
process.stdout.write(output);
await new Promise(r => setTimeout(r, 80));
  }
};

if (!client.authState.creds.registered) {
console.clear();

console.log(chalk.green('\n╔════════════════════════════════╗'));
  console.log(chalk.green('║     ✘‿✘ DELTA MATRIX ✘‿✘       ║'));
console.log(chalk.green('╚════════════════════════════════╝\n'));

console.log(chalk.hex('#00ff99')('▸ Informe o número do bot no formato internacional.'));
  console.log(chalk.hex('#00ff55')('▸ Exemplo: +554699376083\n'));

const phoneNumber = await question(chalk.hex('#00ff99')('Número: '));
if (!phoneNumber) {
console.log(chalk.bgRed.white('ERRO: Inclua o código do país, ex: +55...'));
process.exit(1);
}

const NumeroLimpo = phoneNumber.replace(/[^0-9]/g, '');
let code = await client.requestPairingCode(NumeroLimpo);
code = code?.match(/.{1,4}/g)?.join('-') || code;

await matrixEffect(3000); // duração 3s, ajuste se quiser

console.clear();
console.log(chalk.green('\n╔════════════════════════════════╗'));
console.log(chalk.green('║✘‿✘ CÓDIGO DE EMPARELHAMENTO ✘‿✘║'));
console.log(chalk.green('╚════════════════════════════════╝\n'));

console.log(chalk.bold.hex('#00ff55')('➤ Código: ') + chalk.bold.hex('#00ffcc')(code));
console.log(chalk.hex('#00ff99')('\nAguardando conexão com o WhatsApp...'));
console.log(chalk.hex('#006600')('Mantenha este terminal aberto. Conexão segura.\n'));
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧CLIENTES୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
var sock = client;
var tosh = client;
var loli = client;
var con = client;
client.ev.on('chats.set', () => { console.log('setando conversas...'); })
client.ev.on('contacts.set', () => { console.log('setando contatos...'); })
client.ev.on('creds.update', saveCreds)
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ EVENTO DE BEM-VINDO ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
client.ev.removeAllListeners('group-participants.update');
const DLT_FL = (filePath) => {
if (fs.existsSync(filePath)) {//by tosh
fs.unlinkSync(filePath);
console.log(`[DLT_FL] Arquivo deletado: ${filePath}`);
}};

client.ev.on('group-participants.update', async (Tosh) => {
try {
const groupFile = `./database/grupos/activation_gp/${Tosh.id}.json`;
if (!fs.existsSync(groupFile)) {
console.log(`[BEMVINDO] Grupo não possui JSON: ${Tosh.id}`);
return;
}
const jsonGp = JSON.parse(fs.readFileSync(groupFile, 'utf-8'));
const time = new Date().toLocaleTimeString();
const isAtivo = jsonGp?.[0]?.wellcome?.[0]?.bemvindo1 === true;
if (!isAtivo) {
console.log(`[BEMVINDO] Sistema desativado para: ${Tosh.id}`);
return;
}
if (typeof getBuffer !== 'function') {
global.getBuffer = async (url) => (await axios.get(url, { responseType: 'arraybuffer' })).data;
}
if (typeof getRandom !== 'function') {
global.getRandom = (ext = '') => `${Math.floor(Math.random() * 10000)}${ext}`;
}
await require('./database/grupos/bemvindo')( client, Tosh, jsonGp,
time, config, getBuffer, getRandom, DLT_FL );
console.log(`[EVENTO BEMVINDO] Executado no grupo ${Tosh.id} às ${time}`);
} catch (e) {
console.log('[ERRO NO EVENTO DE BEMVINDO]', e);
}
});
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧ATT DE MENSAGENS୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const translate = async (text) => {
try {
const response = await axios.get(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|pt`);
return response.data.responseData.translatedText || text;
} catch {
return text; // Se falhar, retorna o texto original
}};

const matrixLog = async (text, duration = 500) => {
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
const width = process.stdout.columns || 50;
const end = Date.now() + duration;
while (Date.now() < end) {
let line = '';
for (let j = 0; j < width; j++) {
line += Math.random() > 0.97 ? chars[Math.floor(Math.random() * chars.length)] : ' ';
}
process.stdout.write(chalk.green(line) + '\r');
await new Promise(r => setTimeout(r, 30));
}
console.log(chalk.green(text));
};
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧VIZUALIZAR AS MENSAGENS 1୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
client.ev.on('messages.upsert', async ({ messages }) => {
try {
const info = messages[0]
if (!info.message) return 

const key = {
remoteJid: info.key.remoteJid,
id: info.key.id, 
participant: info.key.participant 
}
//PARA VIZUALIZAR AS MENSAGENS ENVIADAS AO BOT
if(visualizarmsg) {
await client.readMessages([info.key]);
} else {
if(info.key.remoteJid == "status@broadcast") return;
}
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

const from = info.key.remoteJid
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧VIZUALIZAR AS MENSAGENS 2୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
var body = (type === 'conversation') ?
info.message.conversation : (type == 'imageMessage') ?
info.message.imageMessage.caption : (type == 'videoMessage') ?
info.message.videoMessage.caption : (type == 'extendedTextMessage') ?
info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ?
info.message.buttonsResponseMessage.selectedButtonId : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ?
info.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectReply.selectedRowId || info.text) : ''

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧GRUPO/DONO/MEMBROS/ADM ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const getGroupAdmins = (participants = []) => {
if (!Array.isArray(participants)) return [];
return participants
.filter(p => p.admin)
.map(p => p.phoneNumber || p.jid || p.id || p.lid);
};

const isAdmin2 = (userId, participants = []) => {
const admins = getGroupAdmins(participants);
const normalize = id => id?.split('@')[0];

return admins.some(admin => normalize(admin) === normalize(userId));
};

const isGroup = from.endsWith('@g.us');

const groupMetadata = isGroup ? await client.groupMetadata(from): ""
const participants = isGroup ? await groupMetadata.participants : ''
const groupName = isGroup  ? groupMetadata.subject: ""
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
if (typeof body !== 'string') {
if (info.message?.conversation) {
body = info.message.conversation;
} else if (info.message?.extendedTextMessage?.text) {
body = info.message.extendedTextMessage.text;
} else {
body = "";
}}

if(fs.existsSync(`./database/grupos/activation_gp/${from}.json`)) {
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${from}.json`));
}

const isCmd = body.startsWith(prefix)

const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null

const sendere2 = info.key.participant?.includes('@lid') ? info.key.participant : info.key.participantAlt;

const sendere = info.key.participantAlt?.includes('@s.whatsapp.net') ? info.key.participantAlt : info.key.participant;

const sender2 = sendere2 || from; //Sender puxando o Lid

const sender = sendere || from; //Sender puxando o Jid

const pushname = info.pushName ? info.pushName : ""

const args = body.trim().split(/ +/).slice(1);

const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q = args.join(' ');

const numeroBot = client.user.id.split(":")[0] + "@s.whatsapp.net";

const adivinha = info.key.id.length > 21 
  ? 'Android'   : info.key.id.substring(0, 2) === '3A'   ? 'iPhone'   : 'WhatsApp Web';

const isBot = info.key.fromMe ? true : false;

const numeroDonoPrincipal = limparNumero(numerodono) + "@s.whatsapp.net";

function limparNumero(numero) {
if (!numero) return ''; // evita erro se vier undefined/null
return String(numero).replace(/[^0-9]/g, '');
}

const numerosExtras = [ config.numero_dono1, config.numero_dono2, config.numero_dono3, config.numero_dono4, config.numero_dono5, config.numero_dono6 ].filter(n => n && n !== '.');

const donos = [ limparNumero(numerodono),  ...numerosExtras.map(limparNumero) ]
 .filter(n => n.length > 0) // evita entradas vazias
 .map(n => `${n}@s.whatsapp.net`)
 .filter((v, i, a) => a.indexOf(v) === i); // remove duplicados

const Dono = donos[0];
const DonoOficial = donos.includes(sender);

const key_buddah = "Tosh Blackout";
const dfndofc = numeroDonoPrincipal;

const somembros = isGroup ? (groupMembers?.map(m => m.id) || []) : [];

const isnit = Array.isArray(nit) && nit.includes(sender);
const issupre = Array.isArray(supre) && supre.includes(sender);
const ischyt = Array.isArray(chyt) && chyt.includes(sender);
const isBanned = Array.isArray(ban) && ban.includes(sender);

const isDono = DonoOficial || isBot || isnit || issupre || ischyt;

const isPremium = (Array.isArray(premium) && premium.includes(sender)) || isDono;

const isBotGroupAdmins = groupAdmins?.includes(numeroBot) || false;
const isGroupAdmins = groupAdmins?.includes(sender) || false || DonoOficial;
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧VERIFICAR SE EXISTE 1୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const isBotao = true

const VRF_JSON_GRUPO = fs.existsSync(`./database/grupos/activation_gp/${from}.json`) ? true : false;

if(VRF_JSON_GRUPO) {
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${from}.json`));
}

/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·👾̣̇̇FUNÇÃO PARA DETECTAR LINKS 👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const linkify = require('linkifyjs');

const isUrl = (input) => {
try {
const str = input != null ? String(input) : '';
const result = linkify.find(str);
return result.length > 0;
} catch (err) {
console.error('[ERRO isUrl] Falha ao analisar link:', err.message);
return false;
}};
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·👾̣̇̇ATIVAÇÕES DE GRUPO 1👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const dirGroup = `./database/grupos/activation_gp/${from}.json`

const nescj = "./dono/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
const data = [{
name: groupName,
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiaudio: false, antisticker: false, antibot: false,
antidoc: false, antictt: false, antinuke: false,
antiloc: false, antilinkgp: false,
antilinkhard: false, antifake: false, antiporn: false,
Odelete: false, antispam: false, 
antinotas: false, anticatalogo: false, visuUnica: false, 
registrarFIGUS: false, soadm: false, 
listanegra: [], advertir: [], prefixos: [`${config.prefix}`],
advertir2: [], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, 
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}], ausentes: [], forca_inc: false,  
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
legendasaiu: "#numerodele# – Saiu do grupo: #nomedogp#"
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
legendasaiu: "#numerodele# – Saiu do grupo: #nomedogp#"
}],
simi1: false, simi2: false,
autosticker: false, autoresposta: false,
jogos: false, level: false,
bangp: false, nsfw: false,
aluguel: true
}]
fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./database/func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

const isVisualizar = nescessario.visualizarmsg
const isVerificado = nescessario.verificado
const isWelcomePrivate = nescessario.welcomepv
const isAudioMenu = nescessario.menu_audio
const isAntiPv = nescessario.antipv 
const isAntiPv2 = nescessario.antipv2
const isAntiPv3 = nescessario.antipv3
const isBotoff = nescessario.botoff
const listanegraG = nescessario.listanegraG
const isAnticall = nescessario.anticall
const TOKEN_GPT = nescessario.TOKEN_GPT
const isCmdPremium = nescessario.cmd_premium
const isBlockCmdG = nescessario.blockCmdG
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧REGISTRO୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const registrar = fs.existsSync(caminhoRegistro)
 ? require(caminhoRegistro)  : [];

function isRegistrado(id) {
if (!Array.isArray(registrar)) return false;
return registrar.some(usuario => usuario.id === id);
}

const isRegistradoRemetente = sender ? isRegistrado(sender) : false;

const isregistrador = sender ? isRegistrado(sender) : true;
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧FUNÇÕES GP୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false
const isAntiImg = isGroup ? dataGp[0].antiimg : undefined
const isLimitCmd = isGroup ? dataGp[0]?.Limitar_CMD : undefined
const isAntiVid = isGroup ? dataGp[0].antivideo : undefined
const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined
const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined
const Antidoc = isGroup ? dataGp[0].antidoc : undefined
const isAntiCtt = isGroup ? dataGp[0].antictt : undefined
const Antiloc = isGroup ? dataGp[0].antiloc : undefined
const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined
const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined
const isAntiPorn = isGroup ? dataGp[0].antiporn : undefined
const isAntifake = isGroup ? dataGp[0].antifake : undefined
const IS_DELETE = nescessario.Odelete
const So_Adm = isGroup ? dataGp[0].soadm: undefined
const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined
const ADVT = isGroup ? dataGp[0].advertir: undefined
const ADVT2 = isGroup ? dataGp[0].advertir2: undefined
const isx9 = isGroup ? dataGp[0].x9 : undefined
const isMultiP = isGroup ? dataGp[0].multiprefix : undefined
const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined
const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined
const isAntibot = isGroup ? dataGp[0].anticatalogo : undefined
const isAntinuke = isGroup ? dataGp[0].anticatalogo : undefined
const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined
const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined
const isSimi = isGroup ? dataGp[0].simi1 : undefined
const isSimi2 = isGroup ? dataGp[0].simi2 : undefined
const isAutofigu = isGroup ? dataGp[0].autosticker : undefined
const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined
const isModo18 =  isGroup ? dataGp[0].adulto : undefined
const isModobn =  isGroup ? dataGp[0].jogos : undefined
const isLevelingOn = isGroup ? dataGp[0].level : undefined
const isBanchat = isGroup ? dataGp[0].bangp : undefined
const isNsfw = isGroup ? dataGp[0].nsfw : undefined
const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined
const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined
const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined
const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined
const isModoAluguel =  isGroup ? dataGp[0].aluguel : undefined

const isDeltarpgOFF = !JSON.stringify(autorpg).includes(from) || autorpg[autorpg.map(i => i.id).indexOf(from)].rpg == true


const budahVideo = {key: {participant : '0@s.whatsapp.net'},message: {videoMessage: {caption: pushname}}}
const budahContact = {key: {participant : '0@s.whatsapp.net'},message: {contactMessage: {displayName: `${pushname}`}}}
const budahDocument = {key: {participant : '0@s.whatsapp.net'}, message: {documentMessage: {caption: pushname}}} 
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇👾 MENÇÕES FUNÇAO୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
function gerarPossiveisIds(numero) {
if (!numero) return []; 
const cleanNum = numero.toString().replace(/[^0-9]/g, '');
if (!cleanNum) return [];
return [cleanNum + "@s.whatsapp.net", cleanNum + "@lid"];
}

function obterMembroValido(idOuNumero) {
const possiveisIds = gerarPossiveisIds(idOuNumero);
if (possiveisIds.length === 0) return null;
if (!Array.isArray(groupMembers)) {
return null;
}

const membro = groupMembers.find(m => possiveisIds.includes(m.id) || possiveisIds.includes(m.lid) || possiveisIds.includes(m.phoneNumber));
return membro ? (membro.id || membro.lid) : null;
}

const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []).map(id => obterMembroValido(id));
const sender_ou_n = q.includes("@") ? menc_jid : sender;
const mrc_ou_numero = q.length > 6 && !q.includes("@") ? obterMembroValido(q) : menc_prt;
const menc_os2 = q.includes("@") ? menc_jid : menc_prt;
const marc_tds = q.includes("@") ? menc_jid : (q.length > 6 && !q.includes("@") ? obterMembroValido(q) : menc_prt);
const menc_prt_nmr = q.length > 12 ? obterMembroValido(q) : menc_prt;

const mencionarIMG = (texto = '', Url, ms) => {
let memberr = [];
const linhas = texto.includes('\n') ? texto.split('\n') : [texto];
for (let linha of linhas) {
for (let palavra of linha.split(' ')) {
if (palavra.includes('@')) {
const numero = palavra.replace(/[^0-9]/g, '');
const possiveisIds = [ numero + "@s.whatsapp.net", numero + "@lid" ];
const membroEncontrado = groupMembers.find(m => possiveisIds.includes(m.id) || possiveisIds.includes(m.lid) || possiveisIds.includes(m.phoneNumber) );
if (membroEncontrado) {memberr.push(membroEncontrado.id || membroEncontrado.lid); } 
}}}
client.sendMessage(from, { image: { url: Url }, caption: texto.trim(), mentions: memberr }, { quoted: info });
}

async function mencaoLid (nun) {
const mencFormatado = nun.replace(/[^0-9]/g, '')
const possiveisIds = [mencFormatado + "@s.whatsapp.net", mencFormatado + "@lid"]
const existeNoGrupo = groupMembers.some(m => possiveisIds.includes(m.id) || possiveisIds.includes(m.phoneNumber) || (m.lid && possiveisIds.includes(m.lid)))
return existeNoGrupo;
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·👾̣̇̇TEMPOS DO BOT 1👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa noite'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}
//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------
//definiçao momento 2 by: Tosh Blackout 
function formatarHoraAtual() {
const agora = new Date();
const hora = agora.getHours().toString().padStart(2, '0');
const minuto = agora.getMinutes().toString().padStart(2, '0');
const segundo = agora.getSeconds().toString().padStart(2, '0');
return `${hora}:${minuto}:${segundo}`;
}
const horaAtual = formatarHoraAtual();

if (isGroup && isBotGroupAdmins && !isGroupAdmins && !isDono && !info.key.fromMe) {
if (menc_jid2?.length >= groupMembers.length - 1) { 
client.sendMessage(from, { text: markingAllMember() })
if (IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }
})
}, 500)
}
client.groupParticipantsUpdate(from, [sender], "remove")
}
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇👾SELO DO BOT ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const seloMeta = {//Tosh Blackout 
key: { participant: sender, remoteJid: "status@broadcast", fromMe: false },message: {
contactMessage: {
displayName: pushname || "Usuário Desconhecido", vcard: `BEGIN:VCARD
VERSION:3.0
N:;Chat GPT;;;
FN:Meta IA
item1.TEL;waid=${marcadagua}:${marcadagua}
item1.X-ABLabel:Celular
END:VCARD`,
contextInfo: { forwardingScore: 1, isForwarded: true }}}}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ISQUOTED/CONSTS ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
let content = 'Tosh Blackout'; // Não apagar, pega upsert de forma segura
const typeMessageMap = {
'imageMessage': 'Image',
'videoMessage': 'Video',
'audioMessage': 'Audio',
'stickerMessage': 'Sticker',
'contactMessage': 'Contact',
'locationMessage': 'Location',
'productMessage': 'Product' };

const isImage = type === 'imageMessage';
const isVideo = type === 'videoMessage';
const isAudio = type === 'audioMessage';
const isSticker = type === 'stickerMessage';
const isContact = type === 'contactMessage';
const isLocation = type === 'locationMessage';
const isProduct = type === 'productMessage';
const isVisuU2 = type === 'viewOnceMessageV2';

const isMedia = ['imageMessage','videoMessage','audioMessage','viewOnceMessage','viewOnceMessageV2'].includes(type);

let typeMessage = typeMessageMap[type] || body.substr(0,50).replace(/\n/g,'');

function checkQuoted(quoted, key) { return quoted && quoted[key];
}

const quoted = info.message.extendedTextMessage?.contextInfo?.quotedMessage || null;

const isQuotedMsg       = checkQuoted(quoted, 'conversation') || checkQuoted(quoted, 'text');
const isQuotedImage     = checkQuoted(quoted, 'imageMessage');
const isQuotedVideo     = checkQuoted(quoted, 'videoMessage');
const isQuotedAudio     = checkQuoted(quoted, 'audioMessage');
const isQuotedSticker   = checkQuoted(quoted, 'stickerMessage');
const isQuotedContact   = checkQuoted(quoted, 'contactMessage');
const isQuotedLocation  = checkQuoted(quoted, 'locationMessage');
const isQuotedProduct   = checkQuoted(quoted, 'productMessage');
const isQuotedDocument  = checkQuoted(quoted, 'documentMessage');
const isQuotedDocW      = checkQuoted(quoted, 'documentWithCaptionMessage');
const isQuotedVisuU     = checkQuoted(quoted, 'viewOnceMessage');
const isQuotedVisuU2    = checkQuoted(quoted, 'viewOnceMessageV2');

function getQuotedMedia(info) {
const quoted = info.message.extendedTextMessage?.contextInfo?.quotedMessage || null;
if (!quoted) return null;
if (quoted.imageMessage) return { type: 'image', message: quoted.imageMessage };
if (quoted.videoMessage) return { type: 'video', message: quoted.videoMessage };
if (quoted.audioMessage) return { type: 'audio', message: quoted.audioMessage };
if (quoted.stickerMessage) return { type: 'sticker', message: quoted.stickerMessage };
if (quoted.documentMessage) return { type: 'document', message: quoted.documentMessage };
if (quoted.documentWithCaptionMessage) return { type: 'document', message: quoted.documentWithCaptionMessage };
if (quoted.viewOnceMessage) return { type: 'viewOnce', message: quoted.viewOnceMessage };
if (quoted.viewOnceMessageV2) return { type: 'viewOnce', message: quoted.viewOnceMessageV2 };
return null;
}
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType);
let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧SLEEP(1000) VAI DEMORAR 1 SEGUNDO ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇̇·̇ •👾•୨୧FUNÇAO-FETCHJSON୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
async function getBuffer(url) {//capitura link vidona e devolve 
const res = await axios.get(url, { responseType: "arraybuffer" });
return res.data;
}

const fetchJson = async (url, options = {}) => {
 try {
const res = await axios({ url, method: options.method || 'GET',
headers: options.headers || {},
data: options.body || undefined, responseType: 'json',
 });
return res.data;
} catch (err) {
throw err;
}};
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·👾̣̇̇FUNÇAO X9👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if (VRF_JSON_GRUPO && jsonGp[0].x9 && info.messageStubType) {
switch (info.messageStubType) {
case 29: { // promoção
await delay(1000);
const promovido = info.messageStubParameters?.[0];
const autor = info.participant;
if (!promovido || !autor) return;
await client.sendMessage( info.key.remoteJid, {
text: `🪀 *@${promovido.split('@')[0]}* foi *promovido(a)* ao cargo de *Administrador(a)*!\n\n🪀 Responsável: *@${autor.split('@')[0]}*`, contextInfo: { forwardingScore: 9999,isForwarded: true, mentionedJid: [promovido, autor], remoteJid: info.key.remoteJid }});
break;
}
case 30: { // rebaixamento
await delay(1000);
const rebaixado = info.messageStubParameters?.[0];
const autor = info.participant;
if (!rebaixado || !autor) return;
await client.sendMessage( info.key.remoteJid, { text: `👾 *@${rebaixado.split('@')[0]}* foi *rebaixado(a)* e agora é apenas *membro comum*.\n\n🪀 Ação realizada por: *@${autor.split('@')[0]}*`, contextInfo: { forwardingScore: 9999, isForwarded: true, mentionedJid: [rebaixado, autor], remoteJid: info.key.remoteJid }});
break;
}}}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧SIMULA ESCRITA୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
async function escrever (texto) {
await client.sendPresenceUpdate('composing', from) 
await esperar(1000) 
client.sendMessage(from, { text: texto }, {quoted: seloMeta})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ENVIA UMA MENSAGEM୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const enviar = (texto) => {
client.sendMessage(from, { text: texto }, {quoted: seloMeta})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ENVIA UMA IMAGEM SIMPLES ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const enviarImg = async (link) => {
await client.sendMessage(from, {image: {url: link}}, {quoted: seloMeta})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ENVIA UMA IMAGEM COM TEXTO ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const enviarImg2 = async (link, texto) => {
await client.sendMessage(from, {image: {url: link}, caption: texto}, {quoted: seloMeta})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ENVIA UM GIF SIMPLES ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const enviarGif = async (link) => {
await client.sendMessage(from, { video: {url: link}, gifPlayback: true}, { quoted: seloMeta })
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ENVIA UM VÍDEO SIMPLES ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const enviarVd = async (link) => {
await client.sendMessage(from, {video: {url: link }, mimetype: "video/mp4", fileName: "video.mp4"}, {quoted: seloMeta})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ENVIA UM VIDEO COM TEXTO ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const enviarVd2 = async (link, texto) => {
await client.sendMessage(from, {video: {url: link }, caption: texto, mimetype: "video/mp4", fileName: "video.mp4"}, {quoted: seloMeta})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ENVIA UM ÁUDIO ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const enviarAd = async (link) => {
client.sendPresenceUpdate('recording', from)
await esperar(1000) 
await client.sendMessage(from, {audio: {url: link }, mimetype: "audio/mpeg"}, {quoted: seloMeta})
}

const enviarAd2 = async (link) => {
await client.sendMessage(from, {audio: {url: link }, mimetype: "audio/mpeg", ptt: true}, {quoted: seloMeta})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧CAUSA UM DELAY ENTRE FUNÇÃO  ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const esperar = async (tempo) => {
return new Promise(funcao => setTimeout(funcao, tempo));
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─<
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧REAGE A UMA MENSAGEM  ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const reagir = (reassao) => {
client.sendMessage(from, {react: {text: reassao, key: info.key}})}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧CRIAÇÃO DE STICK ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
client.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: seloMeta})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
} catch (e) {
console.log(e)
}
}

const sendImageAsSticker = async (client, jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
 let buffer;
 if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options);
} else {
buffer = await imageToWebp(buff);
}

await client.sendMessage(jid, {sticker: {url: buffer}, ...options}, {quoted})
return buffer;
};

const sendVideoAsSticker = async (client, jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
 let buffer;
 if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options);
} else {
buffer = await videoToWebp(buff);
}

await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer;
}

const sendImageAsSticker2 = async (client, jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
 let buffer;
 if (options && (options.packname || options.author)) {
buffer = await writeExifImg2(buff, options);
} else {
buffer = await imageToWebp2(buff);
}

await client.sendMessage(jid, {sticker: {url: buffer}, ...options}, {quoted})
return buffer;
};

const sendVideoAsSticker2 = async (client, jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
 let buffer;
 if (options && (options.packname || options.author)) {
buffer = await writeExifVid2(buff, options);
} else {
buffer = await videoToWebp2(buff);
}

await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer;
}

async function DLT_FL(file) {
try { 
fs.unlinkSync(file);
} catch (error) {}
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧ATIVAT/AUTOFIGU ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if (isAutofigu) {
async function autofiguf() {
setTimeout(async () => {
const horaLog = moment().tz("America/Sao_Paulo").format("HH:mm:ss");
try {
const msg = info.message || info?.quoted?.message || info?.viewOnceMessage?.message || info?.viewOnceMessageV2?.message;
if (!msg) {
console.log(chalk.gray(`[${horaLog}] Mensagem vazia, ignorando.`));
return;
 }
const pushnameSender = pushname || "Usuário";
const imageMsg = msg.imageMessage || msg.viewOnceMessage?.message?.imageMessage || msg.viewOnceMessageV2?.message?.imageMessage || null;
const videoMsg = msg.videoMessage || msg.viewOnceMessage?.message?.videoMessage || msg.viewOnceMessageV2?.message?.videoMessage || null;

if (!imageMsg && !videoMsg) {
console.log(chalk.gray(`[${horaLog}] Nenhuma mídia detectada, ignorando.`));
  return;
  }
let packname = sender.split("@")[0] === NomeDono ? NomeDoBot : `💌 Feito por: ${NomeDoBot} 🤖 Enviado por: ${numeroBot.split("@")[0]}`;
let author = sender.split("@")[0] === NomeDono ? `🪀 ${NomeDono}` : `☁️ Pedido: ${pushnameSender}\n💎 Tosh Blackout`;
if (imageMsg) {
console.log(chalk.cyan(`[${horaLog}] 🖼️ Imagem detectada, criando figurinha...`));
const buffer = await getFileBuffer(imageMsg, "image");
const sticker = await sendImageAsSticker2(client, from, buffer, info, { packname, author });
await DLT_FL(sticker);
console.log(chalk.green(`[${horaLog}] ✅ Figurinha de imagem criada com sucesso!`));
}

if (videoMsg) {
const duration = videoMsg.seconds || videoMsg.duration || 0;
if (duration > 10) {
console.log(chalk.yellow(`[${horaLog}] 🎥 Vídeo longo demais (${duration}s), ignorando.`));
 return;
 }
console.log(chalk.cyan(`[${horaLog}] 🎥 Vídeo detectado, criando figurinha animada...`));
const buffer = await getFileBuffer(videoMsg, "video");
const sticker = await sendVideoAsSticker2(client, from, buffer, info, { packname, author });
await DLT_FL(sticker);
console.log(chalk.green(`[${horaLog}] ✅ Figurinha animada criada com sucesso!`));
}} catch (err) {
console.error(chalk.red(`[${horaLog}] 💀 ERRO no AutoFigu:`), err);
      }
    }, 500);
  }
autofiguf().catch((e) => {
const horaLog = moment().tz("America/Sao_Paulo").format("HH:mm:ss");
console.error(chalk.bgRed(`[${horaLog}] ERRO FATAL no AutoFigu.catch:`), e);
  });
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧LISTANEGRA ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const saveNescessario = () => fs.writeFileSync(pathNes, JSON.stringify(nescessario, null, 2));
const normalizeJid = (input) => {
if (!input) return null;
if (input.includes('@')) return input;
const digits = input.toString().replace(/\D/g,'');
if (!digits) return null;
  return digits + '@s.whatsapp.net';
};

const getTargetFromMsg = (qarg) => {
if (info.message?.extendedTextMessage?.contextInfo?.mentionedJid && info.message.extendedTextMessage.contextInfo.mentionedJid.length) {
 return info.message.extendedTextMessage.contextInfo.mentionedJid[0];
}

const quoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
if (quoted && info.message.extendedTextMessage.contextInfo.participant) {
 return info.message.extendedTextMessage.contextInfo.participant;
}

if (qarg) {
  return normalizeJid(qarg);
 }
return null;
};
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ANTILINKGP ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if(isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(Procurar_String.includes("chat.whatsapp.com/")){
if(isBot) return 
link_dgp = await client.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return enviar('Link do nosso grupo, não irei remover.. ')  
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
}
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ANTDOC ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return client.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: seloMeta})
if(dataGp[0].legenda_documento != "0") {
client.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: seloMeta}) 
}
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}

let isTrueFalse = Array('tiktok', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === comando)
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ANTILINKHARD ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if(isUrl(isCmd) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await client.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return enviar('Link do nosso grupo, não irei remover.. ') 
}
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
client.groupSettingUpdate(from, 'announcement')
setTimeout(() => {
client.groupSettingUpdate(from, 'not_announcement')
}, 1200)
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ANTIIMAG ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return client.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: seloMeta})
if(dataGp[0].legenda_imagem != "0") {
client.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: seloMeta})  
}
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ANTVIDEO ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return client.sendMessage(from,{text: mess.messageProhibitedDetAdmin()}, {quoted: seloMeta})
if(dataGp[0].legenda_video == "0") {
client.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: seloMeta})
} else {
client.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: seloMeta})  
}
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ANTAUDIO ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return client.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: seloMeta})
client.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: seloMeta})
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ANTSTICKER ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return client.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: seloMeta})
client.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: seloMeta})
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ANTCATALOGO ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return client.sendMessage(from, {text: mess.antisRandomMessage()}, {quoted: seloMeta})
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
client.groupParticipantsUpdate(from, [sender], 'remove')
clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪᴅᴀ* ✅`
client.sendMessage(from, {text: clear, contextInfo : { forwardingScore: 500, isForwarded:true}})
client.sendMessage(from, {text: 'Reporte aos adminstradores do grupo sobre o ocorrido.', mentions: groupAdmins})
}}}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ANTNOTAS ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !isDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && budy.length < 100) return  
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ANTFLOOD ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if(isGroup && isAntiFlood && !sDono && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){
var limitefl = limitefll.limitefl
} else {
var limitefl = isLimitec
}
if(budy.length >= limitefl){
setTimeout( () => {
return enviar(mess.charactersAnti())
console.log(colors.red('Deram spam de caracteres..'))
}, 100)
setTimeout(async () => {
if(IS_DELETE) {
setTimeout(() => {
client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
client.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ X9 ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/if (Array.isArray(jsonGp) && jsonGp[0]?.x9 && info.messageStubType) {
const stubParams = info.messageStubParameters || [];
const participante = info.participant ? `@${info.participant.split("@")[0]}` : "desconhecido";
const alvo = stubParams[0] ? `@${stubParams[0].split("@")[0]}` : "indefinido";
switch (info.messageStubType) {
case 29: // promoção
await delay(1000);
await client.sendMessage(info.key.remoteJid, {
text: `O participante: [ ${alvo} ] foi promovido ao cargo de admin do grupo pelo admin - [ ${participante} ]`,
mentions: stubParams.length ? [stubParams[0], info.participant] : []
});
break;
case 30: // rebaixamento
await delay(1000);
await client.sendMessage(info.key.remoteJid, {
text: `O administrador: [ ${alvo} ] foi rebaixado para membro comum do grupo pelo admin - [ ${participante} ]`,
mentions: stubParams.length ? [stubParams[0], info.participant] : []
});
break;
}
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧CONSOLE DO BOT  ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const tipoMensagem = type == 'audioMessage' ? 'Áudio' : 
type == 'stickerMessage' ? 'Figurinha' : 
type == 'imageMessage' ? 'Imagem' : 
type == 'videoMessage' ? 'Vídeo' : 
type == 'documentMessage' ? 'Documento' : 
type == 'contactMessage' ? 'Contato' : 
type == 'locationMessage' ? 'Localização' : 
type == 'pollCreationMessage' ? 'Enquete' : 'Mensagem';

// Logs com efeito Matrix
if (!isGroup && isCmd)
  await matrixLog(`~> [ COMANDO ] ${comando} do ${pushname} Horas: ${time}`);

if (isCmd && isGroup)
  await matrixLog(`~> [ COMANDO ] ${comando} do ${pushname} Grupo: ${groupName} Horas: ${time}`);

if (!isCmd && isGroup && !info.key.fromMe)
  await matrixLog(`~> [ MENSAGEM ] ${tipoMensagem} do ${pushname} Grupo: ${groupName} Horas: ${time}`);

if (!isGroup && !isCmd && !info.key.fromMe)
  await matrixLog(`~> [ MENSAGEM ] ${tipoMensagem} do ${pushname} Horas: ${time}`);

if (isGroup && info.message?.reactionMessage?.text)
  await matrixLog(`~> [ REAÇÃO ] Emoji: " ${info.message.reactionMessage.text} " do ${pushname} Horas: ${time}`);

if (!isGroup && !isCmd && !info.key.fromMe)
  await matrixLog(`Mensagem recebida de ${from} (${type})`);
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧LOGS DE SESSÃO DO BAILEYS V.7 ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const originalConsoleLog = console.log;
console.log = (...args) => {
  const msg = args.join(' ');
if (
msg.includes('SessionEntry') ||
msg.includes('Removing old closed session') ||
msg.includes('ephemeralKeyPair') ||
msg.includes('rootKey') ||
msg.includes('remoteIdentityKey') ||
msg.includes('baseKey')
) {
return; 
}
originalConsoleLog(...args);
};
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧CONSTS DE PERSONALIZAÇÃO   ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const carregamentoemojis = ['👾','🪀','👾','🪀'];
const emojiEscolhido = carregamentoemojis[Math.floor(Math.random() * carregamentoemojis.length)];
//
if(!isVerificado) {
const seloverificado = {
key: { participant: sender, remoteJid: "status@broadcast", fromMe: false }, message: {
contactMessage: {
displayName: pushname || "Usuário Desconhecido",
vcard: `BEGIN:VCARD
VERSION:3.0
N:;Chat GPT;;;
FN:Meta IA
item1.TEL;waid=${numerodono}:${numerodono}
item1.X-ABLabel:Celular
END:VCARD`,
contextInfo: { forwardingScore: 1, isForwarded: true }}}};
function getQuoted() {
return nescessario.Verificado === 1 ? seloverificado : info;
}}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ANTS DO DONO  ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if(!isGroup && isAnticall) {
client.ws.on('CB:call', async (B) => {
var msgcallblock = `./database/func/call-msg_block-${sender}.json`  
if(!fs.existsSync(msgcallblock)) {
fs.writeFileSync(msgcallblock, JSON.stringify(mess.antiCalls(), null, 2))
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock))
if(B.content[0].tag == 'offer') {
client.sendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(() => { 
client.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
DLT_FL(msgcallblock)
})
}
}
})
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ ANTI PV 1 2 3୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
for (i of black_) {
var blu_dc = (i.hora == hora_);
}
if (blu_dc === true) {
for (i of black_) {
if (i.hora == hora_) var ik = i;
}
for (i of ik?.PUXAR) {
if (i.avisou == true) return;
if (i.length == 0) return;
client.sendMessage(i.idgp, { text: i.msg });
i.avisou = true;
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2));
}}

for (i of black_) {
if (hora_2 >= i.hora.split(":")[1] + parseInt(1)) {
var ik2 = i;
var ik_r = true;
} else {
var ik_r = false;
}}

if (ik_r === true) {
for (i of ik2.PUXAR) {
if (i.avisou == true) {
i.avisou = false;
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2));
}}}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ ANTI PV 1 ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
var USUARIOS_BLOQ = [];
if (isAntiPv && !USUARIOS_BLOQ.includes(sender)) {
if (!isGroup && !isDono) {
await sleep(2500);
enviar(msgantipv1.replace('#nome#', pushname));
setTimeout(async () => {
client.updateBlockStatus(sender, 'block');
}, 2000);
}
USUARIOS_BLOQ.push(sender);
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ ANTI PV 2 ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
var MSG_ANTPV2_ENC = [];
if (!isGroup && !isDono && !issupre && !ischyt && !info.key.fromMe && isAntiPv2 && !MSG_ANTPV2_ENC.includes(sender)) {
MSG_ANTPV2_ENC.push(sender);
return enviar(msgantipv2);
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ ANTI PV 3 ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/

if (!isGroup && !isDono && !info.key.fromMe && isAntiPv3) return;

/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ MODO ALUGUEL ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if (isModoAluguel && isCmd && !isDono && isGroup) {
  const comandosPermitidos = ['aluguel', 'alugueis', 'alugar', 'alugarbot', 'loja', 'dono'];
  if (comandosPermitidos.includes(comando)) return;

  /*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧ MODO ALUGUEL 
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const moment = require('moment-timezone');

const caminhoGrupos = './database/grupos/aluguel/grupos.json';

const caminhoAluguel = './database/grupos/aluguel/aluguel.json';

if (!fs.existsSync(caminhoGrupos)) fs.writeFileSync(caminhoGrupos, JSON.stringify([], null, 2));

if (!fs.existsSync(caminhoAluguel)) fs.writeFileSync(caminhoAluguel, JSON.stringify([], null, 2));

let grupos = JSON.parse(fs.readFileSync(caminhoGrupos));

let aluguel = JSON.parse(fs.readFileSync(caminhoAluguel));

const grupoAlugado = aluguel.find(g => g.id === from);
let aluguelAtivo = false;

if (grupoAlugado) {
const hoje = moment.tz('America/Sao_Paulo');
const expiraEm = moment(grupoAlugado.expira_em);
if (expiraEm.isAfter(hoje)) { aluguelAtivo = true;
} else {
aluguel = aluguel.filter(g => g.id !== from);
fs.writeFileSync(caminhoAluguel, JSON.stringify(aluguel, null, 2));
}}

if ((isModoAluguel || aluguelAtivo) && isCmd && !isDono && isGroup) {
const comandosPermitidos = ['alugar', 'alugargp', 'aluguel', 'alugueis', 'loja', 'dono'];
if (comandosPermitidos.includes(comando)) return;

if (!grupos.some(g => g.id === 'Tosh Blackout')) {
grupos.push({ id: 'Tosh Blackout', gps: [] });
fs.writeFileSync(caminhoGrupos, JSON.stringify(grupos, null, 2));
}

if (!grupos.some(g => g.id === from)) {
grupos.push({ id: from, limite: 5, validado: false });
fs.writeFileSync(caminhoGrupos, JSON.stringify(grupos, null, 2));
}
const AB = grupos.findIndex(g => g.id === from);
let ppuser;
try {
ppuser = await client.profilePictureUrl(sender, 'image');
} catch {
ppuser = 'https://api.blackout.toshiruz.site/uploads/1761533983391.jpg';
}

if (!grupos[AB].validado && !aluguelAtivo) {
if (grupos[AB].limite <= 1) { grupos.splice(AB, 1);
fs.writeFileSync(caminhoGrupos, JSON.stringify(grupos, null, 2));
const imagemUrl = `https://api.popcat.xyz/welcomecard?` +
 `background=${encodeURIComponent('https://api.blackout.toshiruz.site/uploads/1761533846444.jpg')}&` +
 `text1=${encodeURIComponent(pushname)}&` +
 `text2=${encodeURIComponent(groupName)}&` +
 `text3=${encodeURIComponent('O tempo de espera acabou!')}&` +
 `avatar=${encodeURIComponent(ppuser)}`;
await client.sendMessage(from, {
image: { url: imagemUrl }, caption: `⏰️👾 *O tempo de espera acabou!*\nEstou saindo do grupo *${groupName}*.\n> Ninguém trabalha de graça 🪀` });
await sleep(3000);
return client.groupLeave(from);
} else {
grupos[AB].limite -= 1;
fs.writeFileSync(caminhoGrupos, JSON.stringify(grupos, null, 2));
const imagemUrl = `https://api.popcat.xyz/welcomecard?` +
 `background=${encodeURIComponent('https://api.blackout.toshiruz.site/uploads/1761533846444.jpg')}&` +
 `text1=${encodeURIComponent(pushname)}&` +
 `text2=${encodeURIComponent(groupName)}&` +
 `text3=${encodeURIComponent('Grupo não registrado!')}&` +
 `avatar=${encodeURIComponent(ppuser)}`;
return await client.sendMessage(from, { image: { url: imagemUrl }, caption:
 `🪀 *Grupo não registrado!*\n` +
 `O grupo *${groupName}* não foi encontrado em meus registros.\n\n` +
 `Para ativar, entre em contato com o dono:\n` +
 `👑 ${NomeDono}\n📱 Contato: wa.me/${numerodono.replace('@s.whatsapp.net', '')}`, mentions: [sender] });
}}}}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧LEVEL BLACKOUT ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if (body != undefined && !info.message?.reactionMessage?.text && isGroup) {
let userIndex = level2.findIndex(i => i.id === sender);
if (userIndex === -1) {
level2.push({ id: sender, nick: pushname, level: 1, contador: 0, block: false });
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2, null, 2));
userIndex = level2.findIndex(i => i.id === sender);
}

if (!level2[userIndex].block && isLevelingOn) {
level2[userIndex].contador += 1;
level2[userIndex].nick = pushname;
const contador = level2[userIndex].contador;
const levelAtual = level2[userIndex].level;
let newpatente = "Iniciante 👣";
if (contador >= 100 && contador < 200) newpatente = "Bronze I 🥉";
if (contador >= 200 && contador < 300) newpatente = "Bronze II 🥉";
if (contador >= 300 && contador < 400) newpatente = "Prata I 🥈";
if (contador >= 600 && contador < 700) newpatente = "Ouro I 🥇";
if (contador >= 900 && contador < 1200) newpatente = "Platina I 🌀";
if (contador >= 2700 && contador < 3300) newpatente = "Diamante I 💎";
if (contador >= 5000 && contador < 7500) newpatente = "Paladino I 🔮";
if (contador >= 9000 && contador < 12000) newpatente = "Mestre I ❤️‍🔥";
if (contador >= 20000 && contador < 40000) newpatente = "Desafiante I 👑";
if (contador >= 60000 && contador < 90000) newpatente = "Usuário Supremo 🎓";
if (contador >= 100000 && contador < 150000) newpatente = "Conquistador ⚒️";
if (contador >= 400000 && contador < 1000000) newpatente = "Desbravador 🛰️";
if (contador >= 1000000 && contador < 5000000) newpatente = "Grande Mestre 🪩";
if (contador >= 5000000) newpatente = "⚜️✘‿✘BLACKOUT✘‿✘⚜️";
const milestones = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1200, 1500, 2000, 2500, 3000, 5000, 10000, 20000, 50000, 100000, 200000, 1000000];
    
if (milestones.includes(contador)) {
level2[userIndex].level += 1;
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2, null, 2));
const nome = encodeURIComponent(pushname);
const level1 = level2[userIndex].level;
const level2num = contador;
const levelCardUrl = `${BLACKOUT_API}/api/canva/level?nome=${nome}&avatar=https://i.imgur.com/gfSPmDU.jpeg&fundo=https://i.imgur.com/Q2bcpct.jpeg&level1=${level1}&level2=${level2num}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { 
image: { url: levelCardUrl },
caption: `*🎉 BLACKOUT UP! 🎖️*\n> Parabéns *@${sender.split("@")[0]}*!\n` +  `> Você subiu para o nível *${level2[userIndex].level}*.\n` +  `> Patente: *${newpatente}*\n> Total de Blackoutcoins *${contador}*\n\n` +   `_Continue ativo para evoluir ainda mais! para ganhar o plano permanente grátis da blackaut api_`, mentions: [sender] }, { quoted: seloMeta });
} else {
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2, null, 2));
}}}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇👾•CARREGAMENTO👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
async function carregamento() {
txt1 = `_🔥⃟᮪〭۬̇〬⃟˖ꪶ𝙾𝚋𝚝𝚎𝚗𝚍𝚘 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜ꦽꦼ̷১_\n_『ʟᴏᴀᴅɪɴɢ』:`
var carre = [
`${txt1}■□□□□□□□10%`,
`${txt1}■■□□□□□□35%`,
`${txt1}■■■■□□□□51%`,
`${txt1}■■■■■□□□62%`,
`${txt1}■■■■■■□□80%`,
`${txt1}■■■■■■■□100%`,
`${txt1}■■■■■■■■max`,
`_᭥ꩌ゚໋ @${sender.split("@")[0]}_\n_• Pesquisa realizada, Aguarde um pouco para ser enviado.._`]
let { key } = await client.sendMessage(from, {text: `_᭥ꩌ゚໋ Ok @${sender.split("@")[0]}_\n_• Obtendo os resultados de sua pesquisa.._`, mentions: [sender]}, {quoted: seloMeta})
for (let i = 0; i < carre.length; i++) {
await client.sendMessage(from, {text: carre[i], mentions: [sender], edit: key });
}
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇👾•EFEITES MENUS👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const totalCmd = (fs.readFileSync('./index.js', 'utf8').match(/case\s'(\w+)'/g) || []).length;

const adm = 'adm';
const participante = 'membro';
const pv = 'privado';

let tipoCargo = !isGroup ? pv : isGroupAdmins ? adm : participante; 

/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇👾•JOGO DA VELHA👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(fs.existsSync(`./database/usuarios/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return emviar("why");
if(
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return enviar(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./database/usuarios/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept =` *_👾JOGO DA VELHA👾_*
                    
❎ : @${boardnow.X}
🟢 : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
const mentions = [boardnow.X, boardnow.O].map(u => u + "@s.whatsapp.net");
await client.sendMessage(from, { text: chatAccept, mentions: mentions });
}
} else if(
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return enviar(`O jogo já começou!`);
DLT_FL(`./database/usuarios/tictactoe/db/${from}.json`);
mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio 👾😕_*`)
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return enviar(`Parece que seu oponente não aceitou o desafio ainda...`)
if(
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
const chatEqual =` *_👾JOGO DA VELHA👾_*
          
Jogo da velha termina empatado 😐
`;
enviar(chatEqual);
DLT_FL(`./database/usuarios/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = ` *_👾JOGO DA VELHA👾_*

O jogo da velha foi vencido pelo usuário: @${winnerJID}..`;

client.sendMessage(from, {text: chatWon}, {quoted: seloMeta,
mentions: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net"]
});
setTimeout( () => {
if(fs.existsSync("./database/usuarios/tictactoe/db/" + from + ".json")) {
DLT_FL("./database/usuarios/tictactoe/db/" + from + ".json");
enviar(`*_👾JOGO DA VELHA RESETADO...👾_*`);
} else {
console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado..'));
}
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
enviar(`Parabéns @${winnerJID} você ganhou o jogo da velha... 🥳\nParabéns aos ambos jogadores, vocês foram bem, perder não é o fim, perder faz parte da vida.. Não desista!`)   
DLT_FL(`./database/usuarios/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*『 *_👾JOGO DA VELHA👾_* 』*\n-\n❎ : @${moving.X}\n🟢 : @${moving.O}\n-\nAgora é a vez do jogador: @${moving.turn == "X" ? moving.X : moving.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
const mentions = [moving.X, moving.O]; 
await client.sendMessage(chatId, { text: chatMove, mentions: mentions });
}
} 
} 
}
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇👾•FORCA👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
var palavrasfr = JSON.parse(fs.readFileSync("./database/usuarios/palavras_forca.json"))

var palavrasfrc = palavrasfr[Math.floor(Math.random() * palavrasfr.length)]

var ALT_FR = palavrasfrc.plvr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

async function rv_forca() {
var blue = []
for (let i = 0; i < ALT_FR.length; i++) {
if(ALT_FR[i] == ' '){
blue.push(' ')
} else {
blue.push('_')
}
}  
dataGp[0].forca_ofc = [{acertos: 0, erros: 0, palavra: blue, escreveu: [], palavra_ofc: ALT_FR, dica: palavrasfrc.dica, tema: palavrasfrc.tema}]
dataGp[0].forca_inc = false
setGp(dataGp)
}

//*:◇:*:◆:*:◇:*:◆:*:◇:*:◆:*:◇:*::*-------fim da velha 
function ANT_LTR_MD_EMJ(letra) {
const regex = /^[a-zA-Z]$/;
return !regex.test(letra);
}

function contar(frase, letraProcurada) { 
var total = 0; [...frase].forEach(letra => {
if(letra === letraProcurada) total++; 
}); 
return total; 
}

joguinhodavelha()
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇👾•RPG-BLACKOUT👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const LOJA_DIR = path.join(__dirname, './database/usuarios/BlackoutRpg');

if (!fs.existsSync(LOJA_DIR)) fs.mkdirSync(LOJA_DIR, { recursive: true });
const LOJA_ITEMS_PATH = path.join(LOJA_DIR, 'loja_items.json');
const INVENTARIO_PATH = path.join(LOJA_DIR, 'inventario.json');
const TROCAS_PATH = path.join(LOJA_DIR, 'trocas.json');

if (!fs.existsSync(LOJA_ITEMS_PATH)) fs.writeFileSync(LOJA_ITEMS_PATH, JSON.stringify([], null, 2));
if (!fs.existsSync(INVENTARIO_PATH)) fs.writeFileSync(INVENTARIO_PATH, JSON.stringify({}, null, 2));
if (!fs.existsSync(TROCAS_PATH)) fs.writeFileSync(TROCAS_PATH, JSON.stringify({}, null, 2));

function loadItems() { return JSON.parse(fs.readFileSync(LOJA_ITEMS_PATH)); }
function loadInventario() { return JSON.parse(fs.readFileSync(INVENTARIO_PATH)); }
function saveInventario(obj) { fs.writeFileSync(INVENTARIO_PATH, JSON.stringify(obj, null, 2)); }
function loadTrocas() { return JSON.parse(fs.readFileSync(TROCAS_PATH)); }
function saveTrocas(obj) { fs.writeFileSync(TROCAS_PATH, JSON.stringify(obj, null, 2)); }

function acharItemPorIdOuNome(q) {
if(!q) return null;
const items = loadItems();
q = q.toString().toLowerCase();
return items.find(i => i.id.toLowerCase() === q || i.nome.toLowerCase() === q) || null;
}

function adicionarItemAoInventario(userId, itemId, quantidade = 1, meta = {}) {
const inv = loadInventario();
if (!inv[userId]) inv[userId] = [];
const entry = inv[userId].find(e => e.id === itemId && JSON.stringify(e.meta||{}) === JSON.stringify(meta||{}));
if (entry) entry.qtd += quantidade;
else inv[userId].push({ id: itemId, qtd: quantidade, meta: meta });
saveInventario(inv);
}

function removerItemDoInventario(userId, itemId, quantidade = 1, meta = {}) {
const inv = loadInventario();
if (!inv[userId]) return false;
const idx = inv[userId].findIndex(e => e.id === itemId && JSON.stringify(e.meta||{}) === JSON.stringify(meta||{}));
if (idx === -1) return false;
if (inv[userId][idx].qtd < quantidade) return false;
inv[userId][idx].qtd -= quantidade;
if (inv[userId][idx].qtd <= 0) inv[userId].splice(idx, 1);
saveInventario(inv);
return true;
}

function formatCurrency(n){ return `${n} 🪙`; }



























































/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧COMANDOS COM PREFIXO  ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
switch(comando) {
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧COMANDOS DE MEMBROS ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'menu': { // Tosh Blackout
client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (isAudioMenu) {
try {
const response = await axios.get(audio_menu, { responseType: 'arraybuffer' });
const audiomenu = Buffer.from(response.data);
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true  }, { quoted: seloMeta });
} catch (e) { console.log("Erro ao enviar áudio do menu:", e.message);
await client.sendMessage(from, { text: "O áudio do menu está indisponível no momento." }, { quoted: seloMeta });
}}
client.sendMessage(from, { image: { url: logoslink.logo },caption: Menu(prefix, NomeDoBot, NomeDono, sender, hora, pushname, totalCmd, tipoCargo ), mentions: [sender]  }, { quoted: seloMeta });
}
break;

case 'menuadm': { // Tosh Blackout
client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (isAudioMenu) {
try {
const response = await axios.get(audio_menu, { responseType: 'arraybuffer' });
const audiomenu = Buffer.from(response.data);
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true  }, { quoted: seloMeta });
} catch (e) { console.log("Erro ao enviar áudio do menu:", e.message);
await client.sendMessage(from, { text: "O áudio do menu está indisponível no momento." }, { quoted: seloMeta });
}}
client.sendMessage(from, { image: { url: logoslink.logo },caption: MenuAdm(prefix, NomeDoBot, NomeDono, sender, hora, pushname), mentions: [sender]  }, { quoted: seloMeta });
}
break;

case 'menudono': { // Tosh Blackout
client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (isAudioMenu) {
try {
const response = await axios.get(audio_menu, { responseType: 'arraybuffer' });
const audiomenu = Buffer.from(response.data);
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true  }, { quoted: seloMeta });
} catch (e) { console.log("Erro ao enviar áudio do menu:", e.message);
await client.sendMessage(from, { text: "O áudio do menu está indisponível no momento." }, { quoted: seloMeta });
}}
client.sendMessage(from, { image: { url: logoslink.logo },caption: MenuDono(prefix, NomeDoBot, NomeDono, sender, hora, pushname), mentions: [sender]  }, { quoted: seloMeta });
}
break;

case 'menupremium': { // Tosh Blackout
client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (isAudioMenu) {
try {
const response = await axios.get(audio_menu, { responseType: 'arraybuffer' });
const audiomenu = Buffer.from(response.data);
await client.sendMessage(from, { audio: audiomenu, mimetype: 'audio/mpeg', ptt: true  }, { quoted: seloMeta });
} catch (e) { console.log("Erro ao enviar áudio do menu:", e.message);
await client.sendMessage(from, { text: "O áudio do menu está indisponível no momento." }, { quoted: seloMeta });
}}
client.sendMessage(from, { image: { url: logoslink.logo },caption: Menupremium(prefix, NomeDoBot, NomeDono, sender, hora, pushname), mentions: [sender]  }, { quoted: seloMeta });
}
break; 

case 'ping': {//Tosh Blackout 
client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
try {
const responseTime = (Date.now() / 1000) - info.messageTimestamp;
const uptime = process.uptime();
const hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const isTermux = os.platform() === 'android';
const ambiente = isTermux ? '📱 Termux (Android)' : '💻 Node.js (PC/Servidor)';
const estabilidade =
responseTime < 0.5 ? '✅ Estável' :
responseTime < 1.0 ? '⚠️ Leve atraso' :
'❌ Instável — Reinicie o bot';
const kyun = (seconds) => {
const pad = (s) => (s < 10 ? '0' : '') + s;
const hrs = Math.floor(seconds / (60 * 60));
const mins = Math.floor((seconds % (60 * 60)) / 60);
const secs = Math.floor(seconds % 60);
return `${pad(hrs)}h ${pad(mins)}m ${pad(secs)}s`;
};
const totalComandos = global.commands ? global.commands.length : 0;
let groupName = "Privado";
let participantes = "—";
if (isGroup) {
const groupMetadata = await client.groupMetadata(from);
groupName = groupMetadata.subject || "Grupo Desconhecido";
participantes = groupMetadata.participants.length;
}
const acelerar = () => {
const inicio = Date.now();
for (let i = 0; i < 1e6; i++) Math.sqrt(i);
return (Date.now() - inicio) / 1000;
};
const tempoAcelerar = acelerar();
let perfil;
try {
perfil = await client.profilePictureUrl(sender, 'image');
} catch {
perfil = 'https://api.blackout.toshiruz.site/uploads/1761318830553.jpg'; // fallback
}
const fundoping = 'https://api.blackout.toshiruz.site/uploads/1761318830553.jpg';
const canvasUrl = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(fundoping)}&text1=${encodeURIComponent(pushname)}&text2=${responseTime.toFixed(3)}s&text3=VELOCIDADE&avatar=${encodeURIComponent(perfil)}`;
const captionPing = `╔═════════════════════
║̇    *_👾BASE DELTA PING👾_*
╚═════════════════════

┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
┃╔═*¨✘‿✘¨*
┃│🪀⋟ *Ping:* ${responseTime.toFixed(3)} segundos
┃│🪀⋟ *Hora Atual:* ${hora1}
┃│🪀⋟ *Ativo há:* ${kyun(uptime)}
┃│🪀⋟ *Estabilidade:* ${estabilidade}
┃│🪀⋟ *Sistema:* ${ambiente}
┃│🪀⋟ *Aceleração:* ${tempoAcelerar.toFixed(3)} seg
┃│🪀⋟ *Grupo:* ${isGroup ? groupName : 'Privado'}
┃│🪀⋟ *Participantes:* ${participantes}
┃│🪀⋟ *Usuário:* ${pushname}
┃╚══*¨✘‿✘¨*
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─`;
await client.sendMessage( from,{ image: { url: canvasUrl },caption: captionPing, mentions: [sender]},{ quoted: seloMeta });
console.log(`
⟬.·:*¨✘‿✘¨*:·.─.·:*¨✘‿✘¨*:·─.·:*¨✘‿✘¨*:·.⟭                      
💠 [ PING EXECUTADO ]
⚡ Ping: ${responseTime.toFixed(3)}s | ${estabilidade}
👥 Grupo: ${isGroup ? groupName : 'Privado'}
🧠 Ambiente: ${ambiente}
🕒 Hora: ${hora1}
⟬.·:*¨✘‿✘¨*:·.─.·:*¨✘‿✘¨*:·─.·:*¨✘‿✘¨*:·.⟭                      
`);
} catch (e) { console.error("ERRO NO COMANDO PING:", e);
await client.sendMessage(from, { text: `Ocorreu um erro ao medir a velocidade.` }, { quoted: seloMeta });
}}
break;

case 'totalcmd': // Tosh Blackout
 try {
enviar(mensagens.carregando);
const filePath = path.join(__dirname, 'index.js');
const data = fs.readFileSync(filePath, 'utf8');
const regex = /case\s*['"`]([^'"`]+)['"`]/g;
const comandos = [...data.matchAll(regex)].map(m => m[1]);
if (comandos.length === 0) {
return enviar('Nenhum comando encontrado.');
}
const total = comandos.length;
const lista = comandos.map(c => `✘⋟ ${c}`).join('\n');
const mensagem = `*${NomeDoBot}* tem *${total}* comandos ativos!*\n\n✘⋟ 📜 *Lista completa:*\n\n${lista}`;
try {
await client.sendMessage(from, { image: { url: logoslink.logo },caption: mensagem }, { quoted: seloMeta });
} catch {
enviar(mensagens.sucesso);
}
} catch (err) {
console.error('Erro no totalcmd:', err);
enviar(mensagens.erro);
}
break;

case 'perfil': { //Tosh Blackout
await client.sendMessage(from, { react: { text: '📸', key: info.key } });
try {
const safadeza = Math.floor(Math.random() * 101);
const golpe = Math.floor(Math.random() * 101);
const Puta = Math.floor(Math.random() * 101);
const gostozura = Math.floor(Math.random() * 101);
const conselhoBiblico = conselhos[Math.floor(Math.random() * conselhos.length)];
let perfil;
try {
  perfil = await client.profilePictureUrl(sender, 'image');
} catch {
perfil = 'http://api.blackout.toshiruz.site/uploads/1760140014721.jpg'; // fallback
}
const perfilMsg = `╔═════════════════════
║̇  *_👾BASE DELTA PERFIL👾_*
╚═════════════════════

┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
┃╔═*¨✘‿✘¨*
┃│✘⋟😈 *Safadeza:* ${safadeza}%
┃│✘⋟💸 *Golpista:* ${golpe}%
┃│✘⋟🔥 *Puta:* ${Puta}%
┃│✘⋟😏 *gostozura:* ${gostozura}%
┃│✘⋟🕒 *Horário:* ${hora}
┃╚══*¨✘‿✘¨*
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─

╔═════════════════════
> ✘⋟ ${conselhoBiblico}
╚═════════════════════
`;
await client.sendMessage( from, { image: { url: perfil }, caption: perfilMsg, mentions: [sender],
 },
{ quoted: seloMeta }
);
} catch (e) {
await client.sendMessage(from, { text: "Erro ao gerar o perfil." }, { quoted: seloMeta });
}}
break;

case 'infogrupo': // Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
await client.sendMessage(from, { react: { text: 'ℹ️', key: info.key } });
try {
let groupMetadata = await client.groupMetadata(from);
let groupName = groupMetadata.subject;
let participants = groupMetadata.participants.length;
let groupDesc = groupMetadata.desc || "Sem descrição";
let groupOwner = groupMetadata.owner || "Desconhecido";
let creationDate = groupMetadata.creation ? new Date(groupMetadata.creation * 1000).toLocaleString('pt-BR') : "Desconhecida";
let groupPic;
try {
groupPic = await client.profilePictureUrl(from, 'image');
} catch {
groupPic = 'https://i.imgur.com/1760140014721.jpg';
}
const grupoMsg = `╔═════════════════════
║̇  *_👾BASE DELTA PERFIL👾_*
╚═════════════════════

┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
┃╔═*¨✘‿✘¨*
┃│🪀⋟ *Grupo:* ${groupName}
┃│🪀⋟ *Participantes:* ${participants}
┃│🪀⋟ *Dono do grupo:* @${groupOwner.split('@')[0]}
┃│🪀⋟ *Descrição:* ${groupDesc}
┃│🪀⋟ *Criado em:* ${creationDate}
┃╚══*¨✘‿✘¨*
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─`;
await client.sendMessage( from, { image: { url: groupPic }, caption: grupoMsg, mentions: [groupOwner] }, { quoted: seloMeta }
 );
} catch (e) {
await client.sendMessage(from, { text: "Erro ao obter informações do grupo." }, { quoted: seloMeta });
console.error(e);
}
break; 

case 'owner': case 'odono': case 'dono': case 'infodono': {
const NomeDono = config.NomeDono || `${NomeDono}`;
const NomeDoBot = config.NomeDoBot || `${NomeDoBot}`;
const numerodono = config.numerodono || `${numerodono}`;
const msg = `╔═════════════════════
║̇ *_👾INFORMAÇÕES DO DONO👾_*
╚═════════════════════
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
┃╔═*¨✘‿✘¨*
┃│🪀⋟ Nome: *${NomeDono}*
┃│🪀⋟ Bot: *${NomeDoBot}*
┃│🪀⋟ Contato: wa.me/${numerodono}
┃│🪀⋟ *Programador : desiner* 
┃╚══*¨✘‿✘¨*
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─`;
await client.sendMessage(from, { image: { url: linklogos },
caption: msg, mentions: [sender] }, { quoted: seloMeta });
}
break;

case 'suporte-dono': case 'criador': {// Tosh Blackout
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;Tosh Blackout;;;
FN:Tosh Blackout
ORG:Blackout 
TITLE:Desenvolvedor do Bot
TEL;waid=5511961527811:+55 11 96152-7811
EMAIL:toshiruzdev@gmail.com
URL:https://whatsapp.com/channel/0029VazmYZk72WTneBn3b91t
END:VCARD`;
await client.sendMessage(from, { contacts: { displayName: 'Tosh Blackout - Suporte', contacts: [{ vcard }] }
}, { quoted: seloMeta });
}
break;

case 'donos': {// Tosh Blackout
if(!isDono) return enviar(mensagens.isDono);
const donosFormatados = donos.map((d, i) => `Dono ${i+1}: @${d.split('@')[0]}`).join('\n');
const legenda = `*DONOS:* ${NomeDoBot}\n

${donosFormatados} `;
await client.sendMessage(from, { image: { url: logoslink.logo[0] }, caption: legenda, mentions: donos }, { quoted: seloMeta });
}
break;




/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̇ •👾•୨୧COMANDOS DE DOWNLOAD୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'play':// Tosh blackout
try {
if (!q) return enviar(`Use: ${prefix}play nome da música`);
enviar(mensagens.carregando);
const res = await fetchJson(`${BLACKOUT_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`);
const resultados = Array.isArray(res?.resultado) ? res.resultado : [];
if (!resultados.length) return enviar("Nenhum resultado encontrado.");
const video = resultados.find(v => v.videoId || v.url);
if (!video) return enviar("Vídeo não encontrado.");
if (video?.duration?.seconds >= 3600) return enviar("⏱️ Vídeos acima de 1 hora não são suportados.");
const mensagem = `> *Música escolhida por:* ${pushname}
> ${video.title}
> 0:35 ━❍──────── - ${video.duration?.timestamp || '??'}
> ↻ ⊲ Ⅱ ⊳ ↺ *Postado:* ${video.ago || 'Desconhecido'}

> *VOLUME: ■■■■■□□□ 100%* ${video.author?.name || 'Desconhecido'}

  ▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █
> *Min- – – – – – – – – -●Max*\n

Boa escolha, ${pushname}! 😎
`.trim();
const canvasUrl = `${BLACKOUT_API}/api/canva/musicCard2?` +
`name=${encodeURIComponent(video.title)}` +
`&avatar=${encodeURIComponent(video.thumbnail || video.image)}` +
 `&artistName=${encodeURIComponent(video.author?.name || 'Desconhecido')}` +
`&time=${encodeURIComponent(video.duration?.timestamp || '0:00')}` + `&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { image: { url: canvasUrl },   caption: mensagem  }, { quoted: seloMeta });
const audioUrl = `${BLACKOUT_API}/api/download/play?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`; 
await client.sendMessage(from, { audio: { url: audioUrl }, mimetype: 'audio/mpeg', fileName: `${video.title}.mp3` }, { quoted: seloMeta });
} catch (e) {
console.error("Erro no comando play:", e);
enviar(mensagens.erro);
}
break;

case 'playaudio': // Tosh Blackout
try {
if (!q) return enviar(`🎧 Use: ${prefix}playaudio nome da música`);
async function carregamento() {
const txt1 = `*_ʙᴀꜱᴇ 👾ᴅᴇʟᴛᴀ👾 ᴍᴀᴛʀɪx_*`;
const carre = [
        `${txt1}\n*Volume:* ■□□□□□□□🔊 10%`,
        `${txt1}\n*Volume:* ■■□□□□□□🔊 35%`,
        `${txt1}\n*Volume:* ■■■■□□□□🔊 51%`,
        `${txt1}\n*Volume:* ■■■■■□□□🔊 62%`,
        `${txt1}\n*Volume:* ■■■■■■□□🔊 80%`,
        `${txt1}\n*Volume:* ■■■■■■■□🔊 100%`,
        `${txt1}\n*Volume:* ■■■■■■■■MAX`,
        `@${sender.split("@")[0]}_\n *_enviando áudio volume no max_*`  ];
const { key } = await client.sendMessage( from,{ text: `Ok @${sender.split("@")[0]}_\n_• Obtendo os resultados da pesquisa..._`, mentions: [sender] }, { quoted: seloMeta });
for (let i = 0; i < carre.length; i++) { await new Promise(r => setTimeout(r, 700)); // tempo entre cada atualização
await client.sendMessage(from, { text: carre[i], mentions: [sender], edit: key });
}}
await carregamento();
const res = await fetchJson(`${BLACKOUT_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`);
const resultados = Array.isArray(res?.resultado) ? res.resultado : [];
if (!resultados.length) return enviar("Nenhum resultado encontrado.");
const video = resultados.find(v => v.videoId || v.url);
if (!video) return enviar("Vídeo não encontrado.");
if (video?.duration?.seconds >= 3600) return enviar("⏱️ Vídeos acima de 1 hora não são suportados.");
const audioUrl = `${BLACKOUT_API}/api/download/play?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage( from, { audio: { url: audioUrl }, mimetype: 'audio/mpeg', fileName: `${video.title}.mp3` }, { quoted: seloMeta });
} catch (e) {
console.error("Erro no comando playaudio:", e);
enviar(mensagens.erro);
}
break;

case 'playvídeo': case 'playvideo': { // Tosh blackout 
try {
if (!q) return enviar(`Use: ${prefix}playvideo nome da música`);
enviar(mensagens.carregando);
const res = await fetchJson(`${BLACKOUT_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`);
if (!res?.status || !Array.isArray(res.resultado) || res.resultado.length === 0)
return enviar("Nenhum resultado encontrado.");
const video = res.resultado.find(v => v.type === 'video');
if (!video) return enviar("Vídeo não encontrado.");
if (video?.duration?.seconds >= 3600)
return enviar("Vídeos acima de 1 hora não são suportados.");
const mensagem = `> *Video escolhido por:* ${pushname}

> ${video.title}
> 0:35 ━❍──────── - ${video.duration?.timestamp || '??'}
> ↻ ⊲ Ⅱ ⊳ ↺ *Postado:* ${video.ago || 'Desconhecido'}

> *VOLUME: ■■■■■□□□ 100%* ${video.author?.name || 'Desconhecido'}

  ▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █
> *Min- – – – – – – – – -●Max*\n
Sera que é bom seu vídeo ${pushname}
`.trim();
const canvasUrl = `${BLACKOUT_API}/api/canva/musicCard2?` +
`name=${encodeURIComponent(video.title)}` +
`&avatar=${encodeURIComponent(video.thumbnail || video.image)}` +
 `&artistName=${encodeURIComponent(video.author?.name || 'Desconhecido')}` +
`&time=${encodeURIComponent(video.duration?.timestamp || '0:00')}` + `&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { image: { url: canvasUrl },   caption: mensagem  }, { quoted: seloMeta });
const videoUrl = `${BLACKOUT_API}/api/download/playvd?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`; 
await client.sendMessage(from, { video: { url: videoUrl },mimetype: 'video/mp4', fileName: `${video.title}.mp4` }, { quoted: seloMeta });
} catch (e) { console.error("Erro no playvideo:", e);
return enviar(mensagens.erro);
}}
break;

case 'pinterest'://Tosh blackout 
try {
if(!q) return enviar('Informe o nome da imagem!');
enviar(mensagens.carregando);
await client.sendMessage(from, {image: 
{url: `${BLACKOUT_API}/api/pesquisa/pinterest?apikey=${BLACKOUT_KEY}&query=${encodeURIComponent(q)}`}}, 
{quoted: seloMeta});
} catch (error) {
console.log(error);
return enviar(mensagens.erro);
}
break;

case 'metadinha': {//Tosh blackout
enviar(mensagens.carregando);
try {
const res = await fetchJson(`${BLACKOUT_API}/api/imagem/metadinha?apikey=${BLACKOUT_KEY}`);
if (!res.masculina || !res.feminina) return enviar("Não foi possível gerar as metadinhas no momento.");
await client.sendMessage(from, { image: { url: res.masculina },caption: `🧔 Metadinha Masculina` }, { quoted: seloMeta });
await client.sendMessage(from, { image: { url: res.feminina },caption: `👩 Metadinha Feminina` }, { quoted: seloMeta });
} catch (e) { console.error("Erro ao gerar metadinha:", e);
return enviar(mensagens.erro);
}}
break;

case 'upload': { // Tosh Blackout
  async function uploadCatbox(fileBuffer, fileType) {
    const FormData = require('form-data');
    const fetch = require('node-fetch');
    const form = new FormData();
    form.append('reqtype', 'fileupload');
    form.append('fileToUpload', fileBuffer, { filename: `file.${fileType}`, contentType: `application/${fileType}` });

    const response = await fetch('https://catbox.moe/user/api.php', {
      method: 'POST',
      body: form,
      headers: form.getHeaders()
    });

    if (!response.ok) throw new Error('Falha ao enviar o arquivo para o Catbox.');

    const url = await response.text();
    if (url.startsWith('https://')) {
      return url.trim();
    } else {
      throw new Error('Resposta inválida da Catbox API.');
    }
  }

  try {
    let fileBuffer;
    let fileType;

    if (isQuotedImage) {
      const boij = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage;
      fileBuffer = await getFileBuffer(boij, 'image');
      fileType = 'jpg';
    } else if (isQuotedSticker) {
      const boij = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.stickerMessage;
      fileBuffer = await getFileBuffer(boij, 'sticker');
      fileType = 'webp';
    } else if (isQuotedDocument) {
      const boij = info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage || info.message.documentMessage;
      fileBuffer = await getFileBuffer(boij, 'document');
      fileType = 'doc';
    } else if (isQuotedVideo) {
      const boij = info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage || info.message.videoMessage;
      fileBuffer = await getFileBuffer(boij, 'video');
      fileType = 'mp4';
    } else if (isQuotedAudio) {
      const boij = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.audioMessage;
      fileBuffer = await getFileBuffer(boij, 'audio');
      fileType = 'mp3';
    } else {
      enviar('❗ Você deve marcar uma mídia para gerar o link 💭');
      return;
    }

    await reagir(from, '🔗');
    enviar('Enviando sua mídia para o Catbox...');

    const linkFinal = await uploadCatbox(fileBuffer, fileType);

    await client.sendMessage(from, {
      text: `✅ *Upload concluído com sucesso!*\n🔗 ${linkFinal}`,
      linkPreview: false
    }, { quoted: seloMeta });

    await reagir(from, '✅');

  } catch (e) {
    console.error('Erro no comando gerarlink:', e);
    enviar('❌ Erro ao gerar link via Catbox. Verifique o console.');
  }
}
break;

case 'gerarlink'://Tosh Blackout 
async function uploadToshiruz(fileBuffer, fileType) {
const FormData = require('form-data');
const fetch = require('node-fetch');
const form = new FormData();
form.append('file', fileBuffer, { filename: `file.${fileType}`, contentType: `application/${fileType}` });
const response = await fetch('https://api.blackout.toshiruz.site/upload/single', {
method: 'POST', body: form, headers: form.getHeaders(), });
if (!response.ok) {
throw new Error('Falha ao enviar o arquivo para o servidor.');
}
const data = await response.json();
if (data && data.fileUrl) { return data.fileUrl;
} else { throw new Error('Não foi possível obter o URL do arquivo enviado.');
}}
let fileBuffer;
let fileType;
if (isQuotedImage) {
const boij = JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage;
fileBuffer = await getFileBuffer(boij, 'image');
fileType = 'jpg';
} else if (isQuotedSticker) {
const boij = JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.stickerMessage;
fileBuffer = await getFileBuffer(boij, 'sticker');
fileType = 'webp';
} else if (isQuotedDocument) {
const boij = info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage || info.message.documentMessage;
fileBuffer = await getFileBuffer(boij, 'document');
fileType = 'doc';
} else if (isQuotedVideo) {
const boij = info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage || info.message.videoMessage;
fileBuffer = await getFileBuffer(boij, 'video');
fileType = 'mp4';
} else if (isQuotedAudio) {
const boij = JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.audioMessage;
fileBuffer = await getFileBuffer(boij, 'audio');
fileType = 'mp3';
} else {
enviar('Você deve marcar uma mídia para poder transformar em um link 💭');
return;
}
enviar("Enviando o link da sua mídia...");
const ddr = await uploadToshiruz(fileBuffer, fileType);
await enviar(ddr);
break;



/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̇ •👾•୨୧COMANDOS DE FIGURINHAS ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'figuemoji': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
reagir('🪀');
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruz() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_emoji?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruz();
await sleep(680);}}
break;

case 'figumemes': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
reagir('🪀');
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzfig() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_memes2?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzfig();
await sleep(680);}}
break;

case 'figubebe': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
reagir('🪀');
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzfi() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_bebe?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzfi();
await sleep(680);}}
break;

case 'figucoreana': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
reagir('🪀');
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function lovetoshiruz() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_coreana?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await lovetoshiruz();
await sleep(680);}}
break;

case 'figucoreana2': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
reagir('🪀');
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function lovetoshiruz() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_coreanas2?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await lovetoshiruz();
await sleep(680);}}
break;

case 'figuanime': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
reagir('🪀');
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzprasempre() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_anime2?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzprasempre();
await sleep(680);}}
break;

case 'figuanimais': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
reagir('🪀');
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzaniversari() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_animais?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzaniversari();
await sleep(680);}}
break;

case 'figudesenho': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
reagir('🪀');
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzaniversar() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_desenho?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzaniversar();
await sleep(680);}}
break;

case 'figurinhas': {//Tosh Blackout 
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
reagir('🪀');
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzaniversa() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_aleatori?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzaniversa();
await sleep(680);}}
break;

case 'st': case 'stk': case 'sticker': case 's': { // Tosh Blackout
try {
const isGroup = info.isGroup || false;
const pushnameSender = pushname || 'Usuário';
const quoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
const msg = quoted || info.message;
const imageMsg = msg?.imageMessage  || msg?.viewOnceMessage?.message?.imageMessage || msg?.viewOnceMessageV2?.message?.imageMessage || null;
const videoMsg = msg?.videoMessage || msg?.viewOnceMessage?.message?.videoMessage || msg?.viewOnceMessageV2?.message?.videoMessage || null;
let packname, author;
if(sender.split("@")[0] === NomeDono){ packname = q ? q.split("/")[0] : NomeDoBot;
author = q ? q.split("/")[1] : `🪀 ${NomeDono}`;
} else {
packname = q ? q.split("/")[0] : `💌Feito por: ${NomeDoBot} 👾 Enviado por: ${numeroBot.split('@')[0]}`;
 author = q ? q.split("/")[1] : `\n\n☁️Pedido ${pushnameSender}\n💎Tosh Blackout`;
}

if(imageMsg){
reagir('🪀');
enviar(mensagens.carregando);
const buffer = await getFileBuffer(imageMsg, 'image');
const sticker = await sendImageAsSticker2(client, from, buffer, info, { packname, author });
await DLT_FL(sticker);
return enviar(`✅ Figurinha criada com sucesso!`);
} else if(videoMsg){
const duration = videoMsg.seconds || videoMsg.duration || 0;
if(duration && duration < 11){
reagir('🪀');
enviar(mensagens.carregando);
const buffer = await getFileBuffer(videoMsg, 'video');
const sticker = await sendVideoAsSticker2(client, from, buffer, info, { packname, author });
await DLT_FL(sticker);
reagir('👾');
return enviar(`🪀 Figurinha animada criada com sucesso!`);
} else {
return enviar(`O vídeo precisa ter menos de 10 segundos para virar figurinha.`);
}} else {
return enviar(`Marque uma foto ou um vídeo (menor que 10s) para fazer sua figurinha com o comando: ${prefix+comando}`);
}
} catch(err){
console.log('Erro no sticker:', err);
return enviar(`Ocorreu um erro ao tentar criar a figurinha.`);
}}
break;

case 'rename': {//Tosh Blackout 
reagir('🪀');
if (!isQuotedSticker) return enviar('Marque uma figurinha animada!');
if (!q) return enviar('*E o autor e o nome do pacote?*');
const [pack, author2] = q.split("/");
if (!pack || !author2) return enviar(`*Use o formato certo: ${prefix} nomePack/nomeAutor*`);
try {
enviar(mensagens.carregando);
const stickerMsg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage;
const mime = stickerMsg.mimetype || '';
const type = mime.split('/')[0].replace('application', 'document') || mime.split('/')[0];
const stream = await downloadContentFromMessage(stickerMsg, type);
let buff = Buffer.from([]);
for await (const chunk of stream) buff = Buffer.concat([buff, chunk]);
let stiBuffer;
if (pack || author2) {
stiBuffer = await writeExifImg2(buff, { packname: pack, author: author2 });
} else {
stiBuffer = await imageToWebp2(buff);
}
await client.sendMessage(from, { sticker: { url: stiBuffer } }, { quoted: seloMeta });
} catch (err) {
console.log(err);
enviar(mensagens.erro);
}}
break;

case 'togif': {//Tosh Blackout 
if (!isQuotedSticker) return enviar('*Marque a figurinha animada!*');
const cheerio = require("cheerio");
reagir('🪀');
try {
const sticker = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage;
if (!sticker?.isAnimated) return enviar('*Marque a figurinha animada!*');
enviar(mensagens.carregando);
const mime = sticker.mimetype || '';
const type = mime.split('/')[0].replace('application','document') || mime.split('/')[0];
const stream = await downloadContentFromMessage(sticker, type);
let buffer = Buffer.from([]);
for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);
const form = new FormData();
form.append("files[]", buffer, { filename: "sticker.webp" });
const { data: uploadRes } = await axios.post("https://uguu.se/upload.php", form, { headers: form.getHeaders() });
const uploadedUrl = uploadRes.files[0].url;
const form2 = new FormData();
form2.append('new-image-url', uploadedUrl);
form2.append('upload', 'Upload!');
const { data } = await axios.post('https://ezgif.com/webp-to-mp4', form2, { headers: form2.getHeaders() });
const $ = cheerio.load(data);
const fileId = $('form.ajax-form input[name="file"]').attr('value');
const form3 = new FormData();
form3.append('file', fileId);
form3.append('convert', 'Convert WebP to MP4!');
const { data: data2 } = await axios.post(`https://ezgif.com/webp-to-mp4/${fileId}`, form3, { headers: form3.getHeaders() });
const $$ = cheerio.load(data2);
const mp4Url = 'https:' + $$('div#output > p.outfile > video > source').attr('src');
const mp4Buffer = await axios.get(mp4Url, { responseType: 'arraybuffer' }).then(r => Buffer.from(r.data));
await client.sendMessage(from, { video: mp4Buffer, gifPlayback: true, filename: 'stick.gif' }, { quoted: seloMeta });
} catch (e) {
console.log(e);
enviar(mensagens.erro);
}}
break;

case 'toimg'://Tosh Blackout 
if(!isQuotedSticker) return enviar('Por favor, *mencione um sticker* para executar o comando.')
try {
reagir('🪀');
enviar(mensagens.carregando);
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
client.sendMessage(from, {image: buff}, {quoted: seloMeta}).catch(e => {
console.log(e);
enviar('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
enviar(mensagens.erro);
}
break

/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧COMANDOS DE DONO ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'delcase': case 'removercase': {//Tosh Blackout 
try {
if (!isDono) return enviar(mensagens.isDono);
if (!q) return enviar("👾Digite o nome da case que deseja remover, ex: *.delcase rankgay*");
const nome = q.trim().toLowerCase();
const caminho = "./index.js";
let code = fs.readFileSync(caminho, "utf-8");
if (!code.includes(`case '${nome}'`)) {
return enviar(`A case '${nome}' não foi encontrada em index.js`);
}
const backupPath = `./arquivos/backup_case_${nome}_${Date.now()}.js`;
fs.writeFileSync(backupPath, code);
console.log(`[DELCASE] Backup criado em: ${backupPath}`);
const regex = new RegExp(`case '${nome}'[\\s\\S]*?break;`, "g");
const atualizado = code.replace(regex, '');
fs.writeFileSync(caminho, atualizado, "utf-8");
console.log(`[DELCASE] Case '${nome}' removida com sucesso`);
enviar(`🪀 A case '${nome}' foi removida com sucesso de *index.js*\n🗂️ Backup de segurança criado: ${backupPath}`);
} catch (e) {
console.error("[DELCASE ERRO]", e);
enviar("Ocorreu um erro ao tentar remover a case!");
}}
break;

case 'getcase': case 'puxarcase': { // Tosh Blackout
try {
if (!isDono) return enviar(mensagens.isDono);
const quotedMsg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
if (!quotedMsg || !quotedMsg.conversation) {
return enviar("👾Responda à mensagem que contém a case que deseja adicionar.");
}
const caseContent = quotedMsg.conversation.trim();
if (!caseContent.includes("case '") && !caseContent.includes('case "')) {
return enviar("A mensagem marcada não parece conter uma case válida.");
}
const nomeCaseMatch = caseContent.match(/case ['"]([^'"]+)['"]/);
const nomeCase = nomeCaseMatch ? nomeCaseMatch[1] : `semNome_${Date.now()}`;
const fs = require("fs");
const indexPath = "./index.js";
let indexCode = fs.readFileSync(indexPath, "utf8");
if (indexCode.includes(`case '${nomeCase}'`)) {
return enviar(`A case '${nomeCase}' já existe na index.js.`);
}
let trechoCorrigido = caseContent .replace(/\b(conn|bot|api|cliente|messageClient)\.sendMessage\b/g, "client.sendMessage") .replace(/\b(conn|bot|api|cliente|messageClient)\.reply\b/g, "client.sendMessage") .replace(/quoted:\s*[^,)}]+/g, "quoted: seloMeta") .replace(/\binfo\b/g, "seloMeta");
if (!trechoCorrigido.trim().endsWith("break;")) trechoCorrigido += "\nbreak;";
const linhas = indexCode.split("\n");
const defaultIndex = linhas.findIndex(l => l.trim().startsWith("default:"));
if (defaultIndex === -1) {
return enviar("👾Não encontrei o 'default:' na index.js para inserir a case!");
}
const posicaoInserir = Math.max(defaultIndex - 6, 0);
const identacao = "  "; 
const blocoFinal = `\n${identacao}${trechoCorrigido.trim()}\n`;
linhas.splice(posicaoInserir, 0, blocoFinal);
const novoCodigo = linhas.join("\n");
fs.writeFileSync(indexPath, novoCodigo);
await sleep(800);
enviar(`🪀 Case '${nomeCase}' adicionada corretamente dentro do switch (antes do default).`);
} catch (e) {
console.error("[GETCASE ERRO]", e);
enviar("👾 Ocorreu um erro ao tentar salvar a case!");
}}
break;

case 'modoaluguel': case 'aluguel': case 'modorent':
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('1 para ativar, 0 para desativar este recurso.')
if(Number(args[0]) === 1) {
if(isModoAluguel) return enviar('O modo aluguel já está ativado neste grupo.')
dataGp[0].aluguel = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de modo aluguel no grupo...')
} else if(Number(args[0]) === 0) {
if(!isModoAluguel) return enviar('O modo aluguel não está ativo no grupo atualmente.')
dataGp[0].aluguel = false
setGp(dataGp)
enviar('Modo aluguel desativado, _agora o grupo pode usar meus comandos sem restrições._')
} else {
enviar('1 para ativar, 0 para desativar este recurso.')
}
break

case 'alugar': case 'alugargp': { //Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);

if (!args[0]) return enviar(`Digite a quantidade de dias que este grupo será alugado.\n\nExemplo:\n${prefix + comando} 30`);
if (isNaN(args[0])) return enviar(`Apenas números, por favor.`);
const dias = Number(args[0]);
if (dias <= 0) return enviar(`Informe ao menos 1 dia de aluguel.`);
if (String(dias).includes('.')) return enviar(`Não use números decimais.`);
const dataAtual = moment.tz('America/Sao_Paulo');
const dataExpiracao = dataAtual.clone().add(dias, 'days').format('YYYY-MM-DD');
if (!grupos.some(g => g.id === from)) {
grupos.push({ id: from, limite: 5, validado: true });
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
}
if (!aluguel.some(a => a.id === from)) { aluguel.push({ id: from,nome: groupName, criado_em: dataAtual.format('YYYY-MM-DD'),
expira_em: dataExpiracao, tempo: dias, totalRent: dias, cortesia: false });
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
enviar(`✅ Grupo *${groupName}* alugado com sucesso por *${dias} dia${dias > 1 ? 's' : ''}*.\n🗓️ Expira em: *${dataExpiracao}*`);
} else {
const index = aluguel.findIndex(a => a.id === from);
const novaDataExpiracao = moment(aluguel[index].expira_em).add(dias, 'days').format('YYYY-MM-DD');
aluguel[index].expira_em = novaDataExpiracao;
aluguel[index].tempo += dias;
aluguel[index].totalRent += dias;
aluguel[index].nome = groupName;
aluguel[index].cortesia = false;
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
enviar(`🕒 +${dias} dia${dias > 1 ? 's' : ''} adicionados ao aluguel deste grupo.\n🗓️ Nova expiração: *${novaDataExpiracao}*`);
}}
break;

case 'removeraluguel': { // Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
const index = aluguel.findIndex(g => g.id === from);
if (index === -1) return enviar(`👾Este grupo não está registrado no sistema de aluguel.`);
const grupoNome = aluguel[index].nome;
aluguel.splice(index, 1);
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
await client.sendMessage(from, { 
text: `👾O grupo *${grupoNome}* não faz mais parte do meu sistema  aluguel estou Saindo do grupo...` });

await client.groupLeave(from);

enviar(`🪀Grupo *${grupoNome}* removido do meu sistema de aluguel estou saindo do grupo Adeus .`);
}
break;

case 'cortesia24': { //Tosh Blackout
  if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);

const metadata = await client.groupMetadata(from);
const pushgrupo = metadata.subject;

if (JSON.stringify(aluguel).includes(from)) 
return enviar(`👾Grupo *${pushgrupo}* já registrado no sistema de aluguel.`);

if (!JSON.stringify(grupos).includes(from)) {
grupos.push({ id: from, limite: 5, validado: true });
fs.writeFileSync("./database/grupos/aluguel/grupos.json", JSON.stringify(grupos, null, 2));
}

aluguel.push({ id: from, nome: pushgrupo, tempo: 24, totalRent: 24, cliente: numerodono, save: Number(moment.tz('America/Sao_Paulo').format('mm')), cortesia: true });

fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));

await enviar(`🌟 Bot ${NomeDoBot} cortesia 24h liberada neste grupo!`);
await client.sendMessage(from, { text: `👾Atenção! Este grupo recebeu cortesia de 24h.\nAlguém vai alugar este grupo? Se não houver comando de aluguel em 10 minutos, o bot sairá automaticamente.` });

setTimeout(async () => {
const index = aluguel.findIndex(g => g.id === from && g.cortesia === true);
if (index !== -1) { aluguel.splice(index, 1);
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2));
await client.sendMessage(from, { text: `⏳ O tempo da cortesia expirou! Nenhum aluguel foi registrado, saindo do grupo.` });
await client.groupLeave(from);
}}, 600000); // 600000ms = 10 minutos
}
break;

case 'lista_aluguel': { //Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if (aluguel.length > 0) {
const sortedAluguel = [...aluguel].sort((a, b) => a.tempo - b.tempo);
let txt = "📊 *Lista de grupos alugados:*\n\n";
sortedAluguel.forEach((g, index) => {
const tipo = g.cortesia ? "Cortesia 24h" : "Aluguel";
const tempoRestante = g.cortesia ? `${g.tempo} hora${g.tempo > 1 ? 's' : ''}` : `${g.tempo} dia${g.tempo > 1 ? 's' : ''}`;
txt += `*[${index + 1}]* Grupo: *${g.nome}*\n• Tipo: ${tipo}\n• Tempo Restante: ${tempoRestante}\n• Cliente: *wa.me/${g.cliente.split('@')[0]}*\n—\n`;
});
enviar(txt.trim());
} else {
enviar(`Não há nenhum grupo registrado em aluguel.`);
}}
break;

case 'calendario': case 'dados': {
setTimeout(() => { reagir(from, "📅"); }, 300);
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
const getGroups = await client.groupFetchAllParticipating();
const groups = Object.values(getGroups);
groups.sort((a, b) => a.subject.localeCompare(b.subject)); 
const horaAtual = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const dataAtual = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');
let msg = `${tempo}, ${pushname}!\n` +
 `• Grupo: *${isGroup ? groupName : "Privado"}*\n` +
 `• Data & Hora: *${dataAtual} ${horaAtual}*\n` +
 `• Nome do Bot: *${NomeDoBot}*\n` +
 `• Proprietário: *${NickDono}*\n` +
 `• Estou operando atualmente em *${groups.length}* grupos.`;

const aluguelIndex = aluguel.findIndex(g => g.id === from);
if (aluguelIndex !== -1) {
const gAluguel = aluguel[aluguelIndex];
let progresso = (gAluguel.tempo / gAluguel.totalRent) * 100;
if (progresso > 100) progresso = 100;
const totalBlocos = 10;
const blocosCheios = Math.floor(progresso / 10);
const blocosVazios = totalBlocos - blocosCheios;
const barra = '█'.repeat(blocosCheios) + '▒'.repeat(blocosVazios);
let restante = '';
if (gAluguel.cortesia) {
restante = gAluguel.tempo > 1 ? `${gAluguel.tempo} hora${gAluguel.tempo > 1 ? 's' : ''}` : `Alguns minutos`;
} else {
restante = `${gAluguel.tempo} dia${gAluguel.tempo > 1 ? 's' : ''}`;
}
let infoContrato = '';
if (gAluguel.cliente === sender || isDono) {
infoContrato = `\n——\n🔋 *Bateria restante para uso:*\n${progresso.toFixed(0)}%〘${barra}〙\n• ${restante} até o fim do contrato.`;
}
msg += infoContrato;
}
enviar(msg);
}
break;

case 'rg_aviso': {
 if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if (!q || !q.trim().includes("|")) return enviar(mess.warningSyntax(prefix));
const [hr, ms] = q.trim().split("|").map(x => x.trim());
if (!hr || !ms) return enviar(mess.warningSyntax(prefix));
let indexHora = black_.findIndex(obj => obj.hora === hr);
if (indexHora !== -1 && black_[indexHora].PUXAR.some(g => g.idgp === from)) {
black_[indexHora].PUXAR = black_[indexHora].PUXAR.filter(g => g.idgp !== from);
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2));
setTimeout(() => enviar(mess.sucessDeleteWarning(prefix)), 500);
} else if (indexHora === -1) {
black_.push({
hora: hr,
PUXAR: [{ idgp: from, msg: ms, avisou: false }]
});
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2));
enviar(mess.sucessWarning());
} else {
black_[indexHora].PUXAR.push({ idgp: from, msg: ms, avisou: false });
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2));
enviar(mess.sucessWarning());
  }}
break;

case 'rm_aviso': case 'rm_avisos': {
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
const grupoAlvo = black_.find(obj => Array.isArray(obj.PUXAR) && obj.PUXAR.includes(from));
if (!grupoAlvo) return enviar(mess.noWarning(prefix));
const index = grupoAlvo.PUXAR.indexOf(from);
if (index !== -1) {
grupoAlvo.PUXAR.splice(index, 1);
fs.writeFileSync("./database/grupos/avisos.json", JSON.stringify(black_, null, 2));
enviar(mess.warningRemoved());
} else {
enviar(`Este grupo não possui avisos registrados.`);
}}
break;

case 'iddogrupo':
if (!isDono) return enviar(mensagens.isDono);
enviar(from)
break

case 'console':
if (!isDono) return enviar(mensagens.isDono);
if(args.length < 1) return enviar(`Use 1 para ativar logs ou 0 para desativar.`);
if(Number(args[0]) === 1){
nescessario.consoleoff = false;
fs.writeFileSync(caminhoNesc, JSON.stringify(nescessario, null, 2));
enviar("✅ Logs do console foram *ativados*.");
} else if(Number(args[0]) === 0){
nescessario.consoleoff = true;
fs.writeFileSync(caminhoNesc, JSON.stringify(nescessario, null, 2));
enviar("Logs do console foram *desativados*.");
} else {
enviar("Use 1 para ativar, 0 para desativar.");
}
break;

case 'autorepo': case 'autorespo': { //Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
function enviar(msg) {
if (!msg || typeof msg !== 'string' || msg.trim() === '') return; 
if (args.length < 1) {
return enviar(`Use *1* para ativar ou *0* para desativar.\n\nExemplo:\n${prefix + comando} 1 — ativar\n${prefix + comando} 0 — desativar`);
}
if (Number(args[0]) === 1) {
if (isAutorepo) return enviar(`✅ O modo ${comando} já está *ativo* neste grupo.`);
dataGp[0].autoresposta = true;
setGp(dataGp);
return enviar(`✅ Recurso *${comando}* ativado com sucesso neste grupo!`);
}
if (Number(args[0]) === 0) {
if (!isAutorepo) return enviar(`O modo ${comando} já está *desativado* neste grupo.`);
dataGp[0].autoresposta = false;
setGp(dataGp);
return enviar(`Recurso *${comando}* desativado com sucesso neste grupo!`);
}
enviar(`❗ Opção inválida.\nUse *${prefix + comando} 1* para ativar ou *${prefix + comando} 0* para desativar.`);
return client.sendMessage(from, { text: msg }).catch(() => {});
}}
break;

case 'audio-menu': // Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if(args.length < 1) return enviar(`Use 1 para ativar ${comando} ou 0 para desativar.${comando} Caso deseja ativar, use essa forma: ${prefix+comando} 1, caso deseja desativar e só ${prefix+comando} 0.`)
if(Number(args[0]) === 1) {
if(isAudioMenu) return enviar(`O modo ${comando} já se encontra ativo no grupo.`)
dataGp[0].audio_menu = true
setNes(dataGp)
enviar(`Ativou com sucesso o recurso de ${comando} neste grupo.`)
} else if(Number(args[0]) === 0) {
if(!isAudioMenu) return enviar(`O modo ${comando} já esta desativado no grupo.`);
dataGp[0].audio_menu = false
setNes(dataGp)
enviar(`Desativou com sucesso o recurso de ${comando} neste grupo.️`)
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antiligar': case 'antiligacao':  case 'antiligação':  
if(!isDono) return enviar(enviar.msg.donosmt)
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
enviar(`O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para o bot será bloqueado.`)
} else if(nescessario) {
nescessario.anticall = false
setNes(nescessario)
enviar('O anti ligação foi desativado com sucesso.')
}
break

case 'antipv': // Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
if(!isAntiPv) {
nescessario.antipv_1 = true
setNes(nescessario)
enviar(`Antipv ativado com sucesso, caso alguém enviar mensagem para mim, irei bloquear!`)
} else if(isAntiPv) {
nescessario.antipv_1 = false
setNes(nescessario)
enviar('A função antipv foi desabilitada com sucesso, agora todos podem me usar no pv.')
}
break

case 'antipv2': // Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
if(!isAntiPv2) {
nescessario.antipv_2 = true
setNes(nescessario)
enviar("Antipv2 ativado com sucesso, o pv pode ser usado, mas não bloquearei, só irei flodar a cada mensagem que ele enviar avisando..")
} else if(isAntiPv2) {
nescessario.antipv_2 = false
setNes(nescessario)
enviar("Antipv2 desativado com sucesso, agora o meu pv está totalmente liberado.")
}
break

case 'antipv3': // Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
if(!isAntiPv3) {
nescessario.antipv_3 = true
setNes(nescessario)
enviar("Antipv3 ativado com sucesso, irei ignorar todas as mensagens recebidas no pv, exceto: donos e usuários premium..")
} else if(isAntiPv3) {
nescessario.antipv_3 = false
setNes(nescessario)
enviar("Antipv3 desativado com sucesso, agora responderei todos sem preferência!")
}
break

case 'bangp': case 'unbangp':
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if(comando == 'bangp'){
if(isBanchat) return enviar(`Este grupo já está banido.`)
dataGp[0].bangp = true
setGp(dataGp)
enviar(`Grupo banido com sucesso`)
} else {
if(!isBanchat) return enviar(`Este grupo não está mais banido.`)
dataGp[0].bangp = false
setGp(dataGp)
enviar(`Grupo desbanido...`)
}
break

case 'boton': case 'botoff':
if(!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
enviar('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
enviar(`Ativando todos os funcionamentos do bot novamente...`)
}
break

case 'modonsfw': case 'nsfw': {  
if (!isDono) return enviar(mensagens.isDono);

if (args.length < 1) return enviar('Use 1 para ativar ou 0 para desativar o modo NSFW.');

if (Number(args[0]) === 1) {
if (isNsfw) return enviar('O modo NSFW já está ativo neste grupo.');
dataGp[0].nsfw = true;
setGp(dataGp);
enviar(`🔞 Modo *NSFW +18* ativado com sucesso no grupo: *${groupMetadata.subject}*`);
} else if (Number(args[0]) === 0) {
if (!isNsfw) return enviar('O modo NSFW já está desativado neste grupo.');
dataGp[0].nsfw = false;
setGp(dataGp);
enviar(`Modo *NSFW +18* desativado com sucesso no grupo: *${groupMetadata.subject}*`);
} else {
enviar('Use *1* para ativar ou *0* para desativar o modo NSFW.');
}}
break;

case 'multiprefix': case 'multi_prefix': {
if (!isDono) return enviar(mensagens.isDono);
const dataGpPath = `./database/grupos/activation_gp/${from}.json`;
if (!fs.existsSync(dataGpPath)) return enviar("Este grupo ainda não está registrado no sistema de configuração.");
const dataGp = JSON.parse(fs.readFileSync(dataGpPath));
if (!dataGp[0].hasOwnProperty('multiprefix')) dataGp[0].multiprefix = false;
if (args.length < 1) {
return enviar(`Use o comando corretamente:\n\n*${prefix + comando} 1* — ativar\n*${prefix + comando} 0* — desativar\n\nStatus atual: *${dataGp[0].multiprefix ? "Ativado ✅" : "Desativado ❌"}*`);
}
if (args[0] === '1') {
if (dataGp[0].multiprefix) return enviar("✅ O modo *MultiPrefix* já está ativado neste grupo.");
dataGp[0].multiprefix = true;
fs.writeFileSync(dataGpPath, JSON.stringify(dataGp, null, 2));
enviar("✅ Modo *MultiPrefix* ativado neste grupo!");
}
else if (args[0] === '0') {
if (!dataGp[0].multiprefix) return enviar("O modo *MultiPrefix* já está desativado neste grupo.");
dataGp[0].multiprefix = false;
fs.writeFileSync(dataGpPath, JSON.stringify(dataGp, null, 2));
enviar("Modo *MultiPrefix* desativado neste grupo!");
} else {
enviar(`❗ Opção inválida. Use:\n*${prefix + comando} 1* para ativar\n*${prefix + comando} 0* para desativar`);
}}
break;

case 'fotomenu': case 'fundomenu': { // Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
if (!isQuotedImage && !isImage) {
return enviar("Marque ou envie uma imagem para alterar o fundo do menu.");
}
try {
await client.sendMessage(from, { text: mensagens.carregando }, { quoted: seloMeta });
const boij = isQuotedImage
? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage
: info.message.imageMessage;
const owgi = await getFileBuffer(boij, 'image');
const res = await upload(owgi);
const caminhoLogos = './arquivos/json/logos.json';
let logoslink = { logo: [] };
if (fs.existsSync(caminhoLogos)) {
logoslink = JSON.parse(fs.readFileSync(caminhoLogos));
}
logoslink.logo = [res];
fs.writeFileSync(caminhoLogos, JSON.stringify(logoslink, null, 2));
await enviar(`✅ Foto do menu alterada com sucesso!\nNovo link: ${res}`);
} catch (e) {
console.error('[ERRO FOTOMENU]', e);
enviar('Ocorreu um erro ao tentar alterar a foto do menu.');
}}
break;

case 'fundobv': {//Tosh Blackout 
if (!isDono) return enviar(mensagens.isDono);
if (!isQuotedImage && !isImage) {
return enviar("Marque ou envie uma imagem para alterar o fundo do bem-vindo.");
}
try {
await client.sendMessage(from, { text: mensagens.carregando }, { quoted: seloMeta });
const imageMsg = isQuotedImage
? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
const bufferImg = await getFileBuffer(imageMsg, 'image');
const res = await upload(bufferImg); 
const caminhoLogos = './database/grupos/imgs_bemvidos.json';
let imgs = { fundo1: '', fundo2: '' };
if (fs.existsSync(caminhoLogos)) {
imgs = JSON.parse(fs.readFileSync(caminhoLogos));
}
imgs.fundo1 = res; // atualiza fundo1 (bem-vindo)
fs.writeFileSync(caminhoLogos, JSON.stringify(imgs, null, 2));
await enviar(`Fundo de boas-vindas alterado com sucesso!\nNovo link: ${res}`);
} catch (e) {
console.error('[ERRO FUNDO BV]', e);
enviar('Ocorreu um erro ao tentar alterar o fundo de boas-vindas.');
}}
break;

case 'fundosaiu': {//Tosh Blackout 
if (!isDono) return enviar(mensagens.isDono);
if (!isQuotedImage && !isImage) {
return enviar("Marque ou envie uma imagem para alterar o fundo de saída.");
}
try {
await client.sendMessage(from, { text: mensagens.carregando }, { quoted: seloMeta });
const imageMsg = isQuotedImage
? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
const bufferImg = await getFileBuffer(imageMsg, 'image');
const res = await upload(bufferImg); 
const caminhoLogos = './database/grupos/imgs_bemvidos.json';
let imgs = { fundo1: '', fundo2: '' };
if (fs.existsSync(caminhoLogos)) {
imgs = JSON.parse(fs.readFileSync(caminhoLogos));
}
imgs.fundo2 = res; 
fs.writeFileSync(caminhoLogos, JSON.stringify(imgs, null, 2));
await enviar(`Fundo de saída alterado com sucesso!\nNovo link: ${res}`);
} catch (e) {
console.error('[ERRO FUNDO SAIU]', e);
enviar('Ocorreu um erro ao tentar alterar o fundo de saída.');
}}
break;

case 'nuke': case 'arquivargp': {//Tosh Blackout 
if(!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
let blup = [];
for (let i of groupMembers) {
if (!numerodono.includes(i.id) && i.id !== botNumber) blup.push(i.id);
}
for (let i = 0; i < blup.length; i++) {
try {
await client.groupParticipantsUpdate(from, [blup[i]], 'remove');
await sleep(500); 
} catch (err) {
console.log(`Erro ao remover ${blup[i]}:`, err);
}}
try {
await client.groupUpdateSubject(from, NomeDono);
} catch (err) {
console.log('Erro ao alterar o nome do grupo:', err);
}
try {
await client.groupUpdateProfilePicture(from, { url: linklogos });
} catch (err) {
console.log('❌ Erro ao alterar a foto do grupo:', err);
}
await enviar(`nuke realizado!\nTodos removidos exceto o dono e o bot.\nNome do grupo atualizado: ${NomeDono}`);
} 
break;

case 'sairgp': // Tosh Blackout
if(!isDono) return enviar(mensagens.isDono);
enviar(`👋 ${NomeDono}, estou saindo desse grupo...`);
try {
await client.groupLeave(from);
console.log(`Saiu do grupo: ${from}`);
} catch (erro) {
console.error("Erro ao sair do grupo:", erro);
enviar(`Erro ao tentar sair do grupo:\n${erro.message || erro}`);
}
break;

case 'seradm': {//Tosh Blackout 
if (!isDono) return enviar(mensagens.isDono);
const texto = `@${sender.split("@")[0]} Pronto — Agora você é um administrador mestre..`;
await client.sendMessage(from, { text: texto, mentions: [sender]  });
await client.groupParticipantsUpdate(from, [sender], "promote");
}   
break;

case 'sermembro': {//Tosh Blackout 
if (!isDono) return enviar(mensagens.isDono);
const texto = `@${sender.split("@")[0]} Pronto — Agora você é um membro comum novamente, chefia.`;
await client.sendMessage(from, { text: texto, mentions: [sender]  });
await client.groupParticipantsUpdate(from, [sender], "promote");
}   
break

case 'reiniciar'://Tosh Blackout
if(!isDono) return enviar(mensagens.isDono);
setTimeout(async () => {
enviar(`Reiniciando... ${NomeDoBot}`);
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'dono1':
if(args.length < 1) return
if(!isDono) return enviar(mensagens.isDono);
nescessario.dono1 = q.trim()
dono1 = nescessario.dono1
setNes(nescessario)
enviar(`Agora contem um segundo dono(a) alterado com sucesso para: ${q}`)
break

case 'dono2':
if(args.length < 1) return
if(!isDono) return enviar(mensagens.isDono);
nescessario.dono2 = q.trim()
dono2 = nescessario.dono2
setNes(nescessario)
enviar(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if(args.length < 1) return
if(!isDono) return enviar(mensagens.isDono);
nescessario.dono3 = q.trim()
dono3 = nescessario.dono3
setNes(nescessario)
enviar(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if(args.length < 1) return
if(!isDono) return enviar(mensagens.isDono);
nescessario.dono4 = q.trim()
dono4 = nescessario.dono4
setNes(nescessario)
enviar(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if(args.length < 1) return
if(!isDono) return enviar(mensagens.isDono);
nescessario.dono5 = q.trim()
dono5 = nescessario.dono5
setNes(nescessario)
enviar(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if(args.length < 1) return
if(!isDono) return enviar(mensagens.isDono);
nescessario.dono6 = q.trim()
dono6 = nescessario.dono6
setNes(nescessario)
enviar(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'removerdono': {//Tosh Blackout 
if (!args[0]) return enviar(`Exemplo: ${prefix}removerdono 5`);
if (!isDono) return enviar(mensagens.isDono);
const index = parseInt(args[0]);
if (isNaN(index) || index < 1 || index > 6) 
return enviar("Escolha um número de 1 a 6 para remover algum *Dono*");
nescessario[`numero_dono${index}`] = "."; 
fs.writeFileSync(pathNes, JSON.stringify(nescessario, null, 2));
enviar(`✅ Dono ${index} removido com sucesso.`);
}
break;

case 'verificado':
if (!isDono) return enviar(mensagens.isDono);
if(!isVerificado) {
nescessario.verificado = true
setNes(nescessario)
enviar("O verificado foi desativado com sucesso, ou seja, o selo foi retirado de todos os meus comandos! *Para reativar é só digitar o comando novamente.*")
} else if(isVerificado) {
nescessario.verificado = false
setNes(nescessario)
enviar(`O verificado foi ativado, ou seja, o selo foi colocado em todos os meus comandos! *Para remover o verificado dos comandos, use o comando novamente.*`) 
}
break

case 'verificado-global':  { // 🩵 Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
const args = body.trim().split(/\s+/).slice(1);
const acao = args[0] ? args[0].toLowerCase() : '';
if (!['1', '0'].includes(acao)) {
return enviar(`Uso correto:\n${prefix}verificado 1 — ativar\n${prefix}verificado 0 — desativar`);
}
nescessario.Verificado = parseInt(acao);
fs.writeFileSync(pathNes, JSON.stringify(nescessario, null, 2));
if (acao === '1') {
await enviar('✅ Modo *Verificado* ativado 🩵✓ Tosh Blackout');
} else {
await enviar('Modo *Verificado* desativado');
}}
break;

case 'autofigu': case 'autosticker': // Tosh Blackout
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if(args.length < 1) return enviar(`Use 1 para ativar ${comando} ou 0 para desativar.${comando} Caso deseja ativar, use essa forma: ${prefix+comando} 1, caso deseja desativar e só ${prefix+comando} 0.`)
if(Number(args[0]) === 1) {
if(isAutofigu) return enviar(`O modo ${comando} já se encontra ativo no grupo.`)
dataGp[0].autosticker = true
setGp(dataGp)
enviar(`Ativou com sucesso o recurso de ${comando} neste grupo.`)
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return enviar(`O modo ${comando} já esta desativado no grupo.`);
dataGp[0].autosticker = false
setGp(dataGp)
enviar(`Desativou com sucesso o recurso de ${comando} neste grupo.️`)
} else {
enviar('1 para ativar, 0 para desativar')
}
break




/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧COMANDOS DE ADMINS୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'antilinkgp':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntilinkgp) return enviar('O recurso de antilink de grupo já está ativado.')
dataGp[0].antilinkgp = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de antilink de grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return enviar('O recurso de antilink de grupo já está desativado.')
dataGp[0].antilinkgp = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de antilink de grupo.')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antilinkhard': case 'antilink':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return enviar('O recurso de antilink hardcore já está ativado.')
dataGp[0].antilinkhard = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de antilink hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return enviar('O recurso de antilink hardcore já está desativado.')
dataGp[0].antilinkhard = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de antilink harcore neste grupo.️')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antiimg':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiImg) return enviar('O recurso de anti imagem já está ativado.')
dataGp[0].antiimg = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de anti imagem neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiImg) return enviar('O recurso de anti imagem já está desativado.')
dataGp[0].antiimg = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de anti imagem neste grupo.')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiVid) return enviar('O recurso de anti vídeo já está ativado.')
dataGp[0].antivideo = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de anti video neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiVid) return enviar('O recurso de anti vídeo já está desativado.')
dataGp[0].antivideo = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de anti video neste grupo.')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiAudio) return enviar('O recurso de anti áudio já está ativado.')
dataGp[0].antiaudio = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de anti audio neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiAudio) return enviar('O recurso de anti áudio já está desativado.')  
dataGp[0].antiaudio = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de anti audio neste grupo.')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiSticker) return enviar('O recurso de anti sticker já está ativado.')
dataGp[0].antisticker = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de anti sticker neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return enviar('O recurso de anti sticker já está desativado.')
dataGp[0].antisticker = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de anti sticker neste grupo.')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antidocumento':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antidoc) return enviar('O recurso de anti documento já está ativado.')
dataGp[0].antidoc = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de anti documento neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antidoc) return enviar('O recurso de anti documento já está desativado.')
dataGp[0].antidoc = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de anti documento neste grupo.')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antinotas':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiNotas) return enviar('Já Esta ativo')
dataGp[0].antinotas = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de anti notas neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return enviar('Ja esta Desativado.')
dataGp[0].antinotas = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de anti notas neste grupo.️')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo': case 'anticatalg':  
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAnticatalogo) return enviar('Ja esta ativo')
dataGp[0].anticatalogo = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de anticatalogo neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAnticatalogo) return enviar('Já está desativado.')
dataGp[0].anticatalogo = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de anticatalogo neste grupo.️')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antictt': case 'anticontato':  
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiCtt) return enviar('O recurso de anti contato já está ativado.')
dataGp[0].antictt = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de anti contato neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiCtt) return enviar('O recurso de anti contato já está desativado.')
dataGp[0].antictt = false
setGp(dataGp)
enviar('️Desativou com sucesso o recurso de anticontato neste grupo.️')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
try {									
if(args.length < 1) return enviar('1 pra ativar, 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antiloc) return enviar('O recurso de anti loc já está ativado.')
dataGp[0].antiloc = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de anti loc neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antiloc) return enviar('O recurso de anti loc já está desativado.')
dataGp[0].antiloc = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de anti loc neste grupo.')
} else {
enviar('1 para ativar, 0 para desativar')
}
} catch {
enviar('Deu erro, tente novamente :/')
}
break

case 'antifake':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntifake) return enviar('O recurso de antifake já está ativado.')
dataGp[0].antifake = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de antifake neste grupo.')
} else if(Number(args[0]) === 0) {
if(isAntifake) return enviar('O recurso de antifake já está desativado.')
dataGp[0].antifake = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de antifake neste grupo.️')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'legenda_estrangeiro': case 'legenda_estrangeiros': 
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('*Escreva a mensagem de remoção de estrangeiros*')
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
enviar('*Mensagem de remoção de estrangeiros definida com sucesso!*')
} else {
enviar(`Ative o antifake primeiro com ${prefix}antifake 1`)
}
break

case 'legenda_video': 
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_video = q
setGp(dataGp)
enviar('*Mensagem de remoção de video definida com sucesso!*')
break

case 'legenda_imagem': 
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_imagem = q
setGp(dataGp)
enviar('*Mensagem de remoção de imagem definida com sucesso!*')
break

case 'legenda_documento': 
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_documento = q
setGp(dataGp)
enviar('*Mensagem de remoção de documento definida com sucesso!*')
break

case 'antipalavrão': case 'antipalavrao': case 'antipalavra':    
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar(`1/0, Exemplo: ${prefix + comando} 1`)
if(Number(args[0]) === 1) {
if(isPalavrao) return enviar('Ja esta ativo.')
dataGp[0].antipalavrao.active = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de anti palavras hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return enviar('Ja esta Desativado')
dataGp[0].antipalavrao.active = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de anti palavra harcore neste grupo.️')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'listapalavrão': case 'listapalavra': case 'listpalavra':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(!isPalavrao) return enviar('Anti palavrão desativado!')
let lbw = `Esta é a lista de palavrão\nTotal: ${isPalavras.length}\n`
for (let i of isPalavras) {
lbw += `➸ ${i}\n`
}
await enviar(lbw)
break

case 'limitecaracteres': case 'limiteflood':  
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar(`Digite ${prefix + comando} 1 para ativar`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return enviar(`O recurso limite de caracteres já está ativo no grupo.`)
dataGp[0].limitec.active = true
setGp(dataGp)
enviar(`O recurso limite de caracteres foi ativado nesse grupo.`)
} else if(Number(args[0]) === 0) {
 if(!isAntiFlood) return enviar('O recurso limite de caracteres não está ativado no grupo.')
dataGp[0].limitec.active = false
setGp(dataGp)
enviar('O recurso limite de caracteres foi desativado nesse grupo.️')
} else {
enviar(`Digite ${prefix + comando} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'limitec_global': case 'limitec':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(!isAntiFlood) return enviar(`Ative este recurso primeiro ${prefix}limiteflood 1`)
if(!q) return enviar(`Cade a quantidade? Ex: ${prefix + comando} 5000`)
if(isNaN(q) == true) return enviar('Digite apenas números')
if(comando == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
enviar(`Foi alterado o limite de caracteres para: ${q}`)
} else {
var data = { limitefl: q }
fs.writeFileSync('./database/usuarios/flood.json', JSON.stringify(data, null, '\t'))
enviar(`Foi adicionado um limite global de caracteres de: ${q}`)
}
break

case 'odelete':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(IS_DELETE) return enviar('O recurso de delete já está ativado.')
nescessario.Odelete = true
setNes(nescessario)
enviar('Ativou com sucesso o recurso de delete nos grupos.')
} else if(Number(args[0]) === 0) {
if(IS_DELETE) return enviar('O recurso de delete já está desativado.')
nescessario.Odelete = false
setNes(nescessario)
enviar('️Desativou com sucesso o recurso de delete nos grupos.️')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'so_adm':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(So_Adm) return enviar('Ja esta ativo')
dataGp[0].soadm = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de só adm utilizar comandos neste grupo.')
} else if(Number(args[0]) === 0) {
if(!So_Adm) return enviar('Ja esta Desativado')
dataGp[0].soadm = false
setGp(dataGp)
enviar('Desativou o recurso de só adm utilizar comandos neste grupo.️')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'x9':
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isx9) return enviar('O recurso de x9 já está ativado.')
dataGp[0].x9 = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de x9 neste grupo, irei notificar quando alguém for rebaixado ou promovido a adm 😏..')
} else if(Number(args[0]) === 0) {
if(!isx9) return enviar('O recurso de x9 já está desativado.')
dataGp[0].x9 = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de x9 neste grupo, não irei mais notificar promoção de adm nem rebaixamento.. ️')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'advertir': case 'adverter': 
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(menc_os2 == botNumber) return enviar("Não pode advertir o próprio bot.");
if(menc_os2 == numerodono) return enviar("Não pode advertir o próprio dono do bot.");
if(groupAdmins.includes(menc_os2)) return enviar("Não é possível advertir adminstrador do grupo.");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return enviar("Não tem como advertir um usuário que não se encontra mais no grupo.")
ADVT.push(menc_os2); setGp(dataGp)  
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = mess.warningAdvertencia(menc_os2, dfqn)
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); mentions(dfntxt, [menc_os2])
}} else {client.sendMessage(from, {text: mess.finishAdvertencia(menc_os2), mentions: [menc_os2]})
await sleep(1500)
client.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

case 'ban': case 'kick': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
try {
if (!menc_os2 || menc_jid2[1]) {
return enviar("👾 *Marque a mensagem do usuário ou use o @ dele.*\n(Lembre-se de marcar apenas um usuário!)");
}
if (!JSON.stringify(groupMembers).includes(menc_os2)) {
return enviar("👾 Este usuário já saiu do grupo ou foi removido.")};
if (numeroBot.includes(menc_os2)) {
return enviar("🪀 Ei! Não posso me expulsar do grupo, né? ");
}
if (numerodono.includes(menc_os2)) {
return enviar("🪀 Ih rapaz! Tentando expulsar o dono? Isso não vai rolar ")};
await client.groupParticipantsUpdate(from, [menc_os2], "remove");
await client.sendMessage( from, { text: `👾 @${menc_os2.split('@')[0]} foi expulso(a) do grupo!\n\n🪀 Ação realizada por: *@${sender.split('@')[0]}*`, mentions: [menc_os2, sender] },
{ quoted: seloMeta } );
} catch (e) {
console.error(e);
enviar("👾 Ocorreu um erro ao tentar expulsar o usuário.");
}}
break;

case 'autobang': case 'listanegra': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
const alvo = getTargetFromMsg(q);
if (!alvo) {
return enviar(`👾 *Uso incorreto!*\n\nMarque a mensagem do usuário ou cite o número.\nExemplo:\n> ${prefix}listanegra @5511999999999`);
}
if (!nescessario.listanegraG) nescessario.listanegraG = [];
if (nescessario.listanegraG.includes(alvo)) {
return enviar('👾 *Esse número já está na lista negra global.*');
}
nescessario.listanegraG.push(alvo);
saveNescessario();
await client.sendMessage( from, { text: `👾 *Número adicionado à lista negra global com sucesso!*\n\nUsuário bloqueado: @${alvo.split('@')[0]}`, mentions: [alvo] }, { quoted: seloMeta });
}
break;

case 'modobrincadeiras': case 'modobrincadeira': 
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar(`Use 1 para ativar ${comando} ou 0 para desativar.${comando} Caso deseja ativar, use essa forma: ${prefix+comando} 1, caso deseja desativar e só ${prefix+comando} 0.`)
if(Number(args[0]) === 1) {
if(isModobn) return enviar(`O modo ${comando} já se encontra ativo no grupo.`)
dataGp[0].jogos = true
setGp(dataGp)
enviar(`Ativou com sucesso o recurso de ${comando} neste grupo.`)
} else if(Number(args[0]) === 0) {
if(!isModobn) return enviar(`O modo ${comando} já esta desativado no grupo.`);
dataGp[0].jogos = false
setGp(dataGp)
enviar(`Desativou com sucesso o recurso de ${comando} neste grupo.️`)
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'tirardalista': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
const alvo = getTargetFromMsg(q);
if (!alvo) {
return enviar(`👾 *Uso incorreto!*\n\nMarque a mensagem do usuário ou cite o número.\nExemplo:\n> ${prefix}tirardalista @5511999999999`)};
const listaNegra = nescessario.listanegraG || [];
if (!listaNegra.includes(alvo)) {
return enviar('👾 *Esse número não está na lista negra global.*');
}
nescessario.listanegraG = listaNegra.filter(num => num !== alvo);
saveNescessario();
await client.sendMessage( from, { text: `🪀 *Número removido da lista negra global com sucesso!*\n\n🧾 Removido: @${alvo.split('@')[0]}`, mentions: [alvo] }, { quoted: seloMeta });
}
break;

case 'listaautoban': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
const listaNegra = nescessario.listanegraG || [];
if (listaNegra.length === 0) {
return enviar('🪀 *A lista negra global está vazia no momento.*');
}
let texto = '🪀 *LISTA NEGRA GLOBAL*\n';
texto += '———————————————\n';
listaNegra.forEach((num, i) => { texto += `\n${i + 1}. @${num.split('@')[0]}` });
texto += `\n\n🪀 *Total de usuários:* ${listaNegra.length}`;
await client.sendMessage( from, { text: texto, mentions: listaNegra }, { quoted: seloMeta });
}
break;

case 'mute': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id)) .filter(Boolean);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const alvos = menc_jid2.length > 0 ? menc_jid2 : (menc_jid ? [menc_jid] : (menc_prt ? [menc_prt] : []));
if (alvos.length === 0) return enviar('👾 Marque o(s) usuário(s) que deseja mutar (responda a mensagem ou use @usuário).');
const ind = GroupsMutedActived.indexOf(from);
if (ind === -1) {
const data = { jid: from, numbers: [] };
muted.push(data);
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')};
const grupoMutado = muted[ind] || muted.find(g => g.jid === from);
if (!grupoMutado) return enviar('👾Erro ao acessar dados de mute para este grupo.');
for (let id of alvos) {
if (!grupoMutado.numbers.includes(id)) { grupoMutado.numbers.push(id);
}}
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n');
const nomes = alvos.map(a => `@${a.split('@')[0]}`).join(', ');
const msg = `👾 ${nomes} acaba(m) de ser *mutado(s)* pelo(a) adm @${sender.split('@')[0]}.\n\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada automaticamente.`;
await client.sendMessage( from, { text: msg, mentions: [...alvos, sender] }, { quoted: seloMeta });
}
break;

case 'desmute': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id)) .filter(Boolean);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const alvos = menc_jid2.length > 0 ? menc_jid2 : (menc_jid ? [menc_jid] : (menc_prt ? [menc_prt] : []));
if (alvos.length === 0) return enviar('👾Marque o(s) usuário(s) que deseja desmutar (responda a mensagem ou use @usuário).');
const ind = GroupsMutedActived.indexOf(from);
if (ind === -1) {
const data = { jid: from, numbers: [] };
muted.push(data);
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')};
const grupoMutado = muted[ind] || muted.find(g => g.jid === from);
if (!grupoMutado) return enviar('👾Erro ao acessar dados de mute para este grupo.');
for (let id of alvos) {
const index = grupoMutado.numbers.indexOf(id);
if (index >= 0) grupoMutado.numbers.splice(index, 1)};
fs.writeFileSync('./database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n');
const nomes = alvos.map(a => `@${a.split('@')[0]}`).join(', ');
const msg = `🔊 ${nomes} acaba(m) de ser *desmutado(s)* pelo(a) adm @${sender.split('@')[0]}.\n\n–\n• Agora você(s) pode(m) falar à vontade no grupo, sem restrições.`;
await client.sendMessage( from, { text: msg, mentions: [...alvos, sender] }, { quoted: seloMeta });
}
break;

case 'totag': case 'cita': case 'hidetag': // Tosh blackout
if(!isGroup) return enviar(mensagens.isGroup);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "Marcação do(a) Adm: "+q :pink.caption.replace(new RegExp(prefix+comando, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? "Marcação do(a) Adm: "+q.trim() :blue.caption.replace(new RegExp(prefix+comando, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+comando, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+comando, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Marcação do(a) Adm: "+q.trim() :yellow.caption.replace(new RegExp(prefix+comando, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
client.sendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'marcar': { // Tosh blackout
if(!isGroup) return enviar(mensagens.isGroup);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
try {
const groupData = await client.groupMetadata(from);
const participants = groupData.participants.map(p => p.id);
const groupAdmins = groupData.participants
.filter(p => p.admin !== null)
.map(p => p.id);
const membrosComuns = participants.filter(p => !groupAdmins.includes(p));
if (membrosComuns.length === 0) {
return enviar(`Olá *${pushname}* - Não contém nenhum membro comum no grupo, apenas administradores.`);
}
if (isAudioMenu) {
const audioPath = './arquivos/audios/marcar.mp3';
try {
if (fs.existsSync(audioPath)) {
const audioData = fs.readFileSync(audioPath);
await client.sendMessage(from, { audio: audioData,mimetype: 'audio/mpeg', ptt: true }, { quoted: seloMeta });
} else { console.warn("Áudio de marcar não encontrado:", audioPath);
}
} catch (err) { console.error("Erro ao enviar o áudio de marcar:", err);
}}
const vídeomenu = fs.readFileSync('./arquivos/videos/marcar.mp4');
let legenda = `✘⋟Adm ${pushname} Mencionando os *membros* comuns do grupo.${q ? `\n\n📢 *Mensagem:* ${q}` : ''}\n\n`;
membrosComuns.forEach(id => {
legenda += `✘⋟ @${id.split('@')[0]}\n`;
});
await client.sendMessage(from, { video: vídeomenu, mimetype: 'video/mp4', gifPlayback: true,
caption: legenda, mentions: membrosComuns}, { quoted: seloMeta });
} catch (e) { console.error(e);
enviar('Ocorreu um erro ao tentar marcar os membros.');
 }}
break;

case 'promover': { // Tosh Blackout
if (!isGroup) return enviar(msg.grupo);
if (!isBotGroupAdmins) return enviar(msg.botadm);
if (!isGroupAdmins && !isDono) return enviar(msg.adm);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id));
const alvo = menc_jid2[0] || menc_jid || menc_prt;
if (!alvo) return enviar("👾Marque o usuário que você quer promover (responda a mensagem ou use @usuário).");
const membroExiste = groupMembers.some(m => [m.id, m.lid, m.phoneNumber].includes(alvo));
if (!membroExiste) return enviar("👾Esse usuário saiu ou foi removido do grupo, não é possível promovê-lo.");
await client.groupParticipantsUpdate(from, [alvo], "promote");
await client.sendMessage( from, { text: `🪀@${alvo.split("@")[0]} foi promovido(a) a *Administrador(a)* com sucesso!`,mentions: [alvo] });
}
break;

case 'rebaixar': { // Tosh Blackout
if (!isGroup) return enviar(msg.grupo);
if (!isBotGroupAdmins) return enviar(msg.botadm);
if (!isGroupAdmins && !isDono) return enviar(msg.adm);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id));
const alvo = menc_jid2[0] || menc_jid || menc_prt;
if (!alvo) return enviar("👾Marque o usuário que você quer rebaixar (responda a mensagem ou use @usuário).");
const membroExiste = groupMembers.some(m => [m.id, m.lid, m.phoneNumber].includes(alvo));
if (!membroExiste) return enviar("👾Esse usuário saiu ou foi removido do grupo, não é possível rebaixá-lo.");
await client.groupParticipantsUpdate(from, [alvo], "demote");
await client.sendMessage( from, { text: `🪀 @${alvo.split("@")[0]} foi rebaixado(a) para *Membro comum* com sucesso.`,mentions: [alvo] });
}
break;

case 'grupo'://Tosh Blackout
if (!isGroup) return enviar(msg.grupo)
if (!isBotGroupAdmins) return enviar(msg.botadm)
if (!isGroupAdmins && !isDono) return enviar(msg.adm)
try {
if (q === "a"){
await reagir("🔓")
await client.groupSettingUpdate(from, "not_announcement")
enviar(`Agora o grupo está aberto, bora interagir! 🔓`)
}
if (q === "f") {
await reagir("🔒")
await client.groupSettingUpdate(from, "announcement")
enviar(`Feito! O grupo está fechado, hora de descansar a conversa 🔒`)
} else {
if (!q) return enviar(`Use ${prefix}grupo a para abrir o grupo e ${prefix}grupo f para fechá-lo.`)
}
} catch(e) {
reagir("⚠️")
consoleErro(e)
enviar(mensagens.erro);
}
break

case 'linkgp': case 'linkgroup':
reagir("📢")
if(!isGroup) return enviar(mensagens.isGroup);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
enviar('https://chat.whatsapp.com/'+linkgc)
break

case 'resetlink': {//Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
try {
await client.groupRevokeInvite(from)
enviar(`*Link de convite resetado com sucesso*`)
} catch(e) {
console.log(e)
enviar(mensagens.erro);
}}
break

case 'nomegp'://Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!q) return enviar(`Exemplo ${prefix}nomegp Tosh Blackout`);
await client.groupUpdateSubject(from, `${q}`)
await client.sendMessage(from, {text: "Feito! Novo nome no ar"})
break

case 'descricaogp': {//Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!q) return enviar(`Exemplo: ${prefix}descricaogp Proibido nao seguir o canal do Tosh Blackout`);
try {
await client.groupUpdateDescription(from, q);
await client.sendMessage(from, { text: `Pronto! A nova descrição do grupo agora é:\n"${q}"` });
} catch (err) {
console.log(err);
await client.sendMessage(from, { text: "Eita! Não consegui alterar a descrição, algo deu errado." });
}}
break;

case 'deletar': case 'del':  case 'd'://Tosh Blackout 
if(!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(!menc_prt) return enviar("Ei, não me deixa adivinhar, marque a mensagem kk")
await client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
reagir("🗑")
break

case 'bemvindo': case 'welcome':
if (!isGroup) return enviar(mensagens.isGroup);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(args.length < 1) return enviar('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isWelkom) return enviar('Ja esta ativo')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
enviar('Ativou com sucesso o recurso de bem vindo neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isWelkom) return enviar('Ja esta Desativado')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
enviar('Desativou com sucesso o recurso de bemvindo neste grupo.️')
} else {
enviar('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  
if (!isGroup) return enviar(mensagens.isGroup);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar(`Digite da forma correta:\nComando: ${prefix + comando} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isWelkom2) return enviar('O recurso já está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
enviar('O recurso foi ativado.')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return enviar('O recurso não está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
enviar('O recurso foi desativado.')
} else {
enviar(`Digite da forma correta, ${prefix + comando} 1, para ativar e 0 para desativar`)
}
break

case 'legendabv':  
if (!isGroup) return enviar(mensagens.isGroup);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
enviar('*Mensagem de boas vindas definida com sucesso!*')
} else {
enviar(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendabv2':  
if (!isGroup) return enviar(mensagens.isGroup);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
enviar('*Mensagem de boas vindas2 definida com sucesso!*')
} else {
enviar(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'legendasaiu':
if (!isGroup) return enviar(mensagens.isGroup);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(args.length < 1) return enviar("Escreva a mensagem de saída ou para desativar, use: 0")
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
enviar('Mensagem de saída definida com sucesso!')
} else {
enviar(`Ative o ${prefix}bemvindo 1 para o recurso de edição de mensagem.`)
}
break;

case 'legendasaiu2':
if (!isGroup) return enviar(mensagens.isGroup);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if(q.length < 1) return enviar('Escreva a mensagem de saída ou para desativar, use: 0')
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = Number(teks) === 0 ? 0 : q
setGp(dataGp)
enviar('Mensagem de saída [2] definida com sucesso!')
} else {
enviar(`Ative o ${prefix}bemvindo2 1 para o recurso de edição de mensagem.`)
}
break;

case 'admins': case 'listadmins': case 'listaadmins': 
if (!isGroup) return enviar(mensagens.isGroup);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
reagir('🪀');
let ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`;
let no = 0;
for (let admon of groupAdmins) { no += 1;
ytb += `( ${no} ) - @${admon.split('@')[0]}\n`;
 }
await client.sendMessage(from, { text: ytb, mentions: groupAdmins 
});
break;
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧COMANDOS DE BRINCADEIRAS୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'nazista': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id));
let alvo = menc_jid || menc_prt || sender;
const nomeAlvo = (alvo === sender) ? pushname : `@${alvo.split('@')[0]}`;
await client.sendMessage( from, { text: `Pesquisando a ficha de nazista de ${nomeAlvo}... aguarde uns segundos.`,mentions: [alvo], }, { quoted: seloMeta } );
setTimeout(async () => {
const random = Math.floor(Math.random() * 110);
await client.sendMessage( from, { image: { url: imgnazista },
caption: `O quanto ${nomeAlvo} pode ser uma pessoa nazista?\n\n• Chance de ser nazista: *${random}%*`, mentions: [alvo], },
 { quoted: seloMeta }
);
}, 7000);
}
break;

case 'gay': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id));
let alvo = menc_jid || menc_prt || sender;
const nomeAlvo = (alvo === sender) ? pushname  : `@${alvo.split('@')[0]}`;
await client.sendMessage( from, { text: `Pesquisando a ficha de gay de ${nomeAlvo}... aguarde uns segundos.`, mentions: [alvo] },{ quoted: seloMeta } );
setTimeout(async () => {
const random = Math.floor(Math.random() * 110);
let bo;
if (random < 20) bo = 'hmm... você é hetero...';
else if (random < 30) bo = '+/- boiola';
else if (random < 40) bo = 'tenho minha desconfiança...';
else if (random < 50) bo = 'você é né?';
else if (random === 50) bo = 'você é ou não?';
else bo = 'você é gay...';
await client.sendMessage( from, { image: { url: imggay },
caption: `Qual é a porcentagem de chance do(a) ${nomeAlvo} ser gay?\n\n• *${random}% homossexual*, ${bo}`, mentions: [alvo], }, { quoted: seloMeta } );
}, 7000);
}
break;

case 'corno': {//Tosh Blackout
if(!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
let isQuoted = info.message?.extendedTextMessage?.contextInfo?.participant;
let alvo;
if (isQuoted) {
alvo = info.message.extendedTextMessage.contextInfo.participant; 
} else if (args.length && args[0].includes('@')) {
alvo = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'; 
} else {
alvo = sender; 
}
const nomeAlvo = alvo === sender ? pushname : `@${alvo.split('@')[0]}`;
await client.sendMessage(from, {
text: `Pesquisando a ficha de corno de ${nomeAlvo}... aguarde uns segundos.`, mentions: [alvo] }, { quoted: seloMeta });
setTimeout(async () => {
const random = Math.floor(Math.random() * 110);
let status;
if (random < 20) status = 'Nem sinal de chifre.';
else if (random < 40) status = 'Talvez só um boato...';
else if (random < 60) status = 'A vizinhança comenta coisas...';
else if (random < 80) status = 'Tem chifre crescendo aí!';
else if (random < 100) status = 'Confirmado: chifrudo(a) com orgulho!';
else status = 'Ultra corno! O rei dos traídos!';
await client.sendMessage(from, {
image: { url: imgcorno },
caption: `O quanto ${nomeAlvo} pode ser uma pessoa chifruda?\n\n• *${random}% de chance de ser corno(a)*\n${status}`, mentions: [alvo], thumbnail: null }, { quoted: seloMeta });
}, 7000);
}
break;

case 'corno': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id));
let alvo = menc_jid || menc_prt || sender;
const nomeAlvo = (alvo === sender) ? pushname : `@${alvo.split('@')[0]}`;
await client.sendMessage( from, { text: `Pesquisando a ficha de corno de ${nomeAlvo}... aguarde uns segundos.`, mentions: [alvo] }, { quoted: seloMeta } );
setTimeout(async () => {
const random = Math.floor(Math.random() * 110);
let status;
if (random < 20) status = 'Nem sinal de chifre.';
else if (random < 40) status = 'Talvez só um boato...';
else if (random < 60) status = 'A vizinhança comenta coisas...';
else if (random < 80) status = 'Tem chifre crescendo aí!';
else if (random < 100) status = 'Confirmado: chifrudo(a) com orgulho!';
else status = 'Ultra corno! O rei dos traídos!';
await client.sendMessage( from, { image: { url: imgcorno },
caption: `O quanto ${nomeAlvo} pode ser uma pessoa chifruda?\n\n• *${random}% de chance de ser corno(a)*\n${status}`, mentions: [alvo], }, { quoted: seloMeta }
);
}, 7000);
}
break;

case 'gostoso': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id));
let alvo = menc_jid || menc_prt || sender;
const nomeAlvo = (alvo === sender) ? pushname : `@${alvo.split('@')[0]}`;
await client.sendMessage( from, { text: `Calculando o nível de gostosura de ${nomeAlvo}... segura o coração 💓`, mentions: [alvo] }, { quoted: seloMeta } );
setTimeout(async () => {
const random = Math.floor(Math.random() * 110);
let status;
if (random < 20) status = 'Nem o espelho te quer 😬';
else if (random < 40) status = 'Tem potencial, mas falta confiança.';
else if (random < 60) status = 'Chamando atenção discretamente 😉';
else if (random < 80) status = 'Um verdadeiro colírio! 😍';
else if (random < 100) status = 'As pessoas desmaiam quando te veem 🔥';
else status = 'De tão gostoso, até o sol pede autógrafo! ☀️💋';
await client.sendMessage( from, { image: { url: imggostoso },
caption: `🔥 Nível de gostosura de ${nomeAlvo} 🔥\n\n• *${random}% gostoso(a)*\n${status}`, mentions: [alvo], }, { quoted: seloMeta } );
}, 7000);
}
break;

case 'feio': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id));
let alvo = menc_jid || menc_prt || sender;
const nomeAlvo = (alvo === sender) ? pushname : `@${alvo.split('@')[0]}`;
await client.sendMessage( from, { text: `Pesquisando a ficha de feiura de ${nomeAlvo}... aguarde uns segundos 🤔`, mentions: [alvo] }, { quoted: seloMeta });
setTimeout(async () => {
const random = Math.floor(Math.random() * 110);
let bo;
if (random < 20) bo = 'É, não é feio.';
else if (random <= 30) bo = '+/- feio.';
else if (random <= 32) bo = 'Ainda tá na média.';
else if (random <= 34) bo = 'É feinho, mas tem bom coração.';
else if (random <= 36) bo = 'Bonitinho, mas é feio com orgulho.';
else if (random <= 39) bo = 'Feio, mas um banho e um corte de cabelo resolvem.';
else if (random <= 42) bo = 'Nada que uma maquiagem não resolva.';
else if (random <= 45) bo = 'Feio, mas estiloso.';
else if (random <= 47) bo = 'Feio, mas com lábia pra pegar várias.';
else if (random <= 50) bo = 'Você é feio, mas não se enxerga.';
else if (random <= 80) bo = 'Feio demais, misericórdia 😭';
else if (random <= 100) bo = 'Feio que dói, mas simpático 😅';
else bo = 'Ultra feio! Passa longe do espelho 🪞';
await client.sendMessage( from, { image: { url: imgfeio },
caption: `🤡 O quanto ${nomeAlvo} pode ser uma pessoa feia?\n\n• *${random}% de feiura*\n${bo}`, mentions: [alvo],}, { quoted: seloMeta } );
}, 7000);
}
break;

case 'gado': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id));
let alvo = menc_jid || menc_prt || sender;
const nomeAlvo = (alvo === sender) ? pushname : `@${alvo.split('@')[0]}`;
await client.sendMessage( from, { text: `Pesquisando a ficha de gado de ${nomeAlvo}... aguarde uns segundos 🐮`, mentions: [alvo] }, { quoted: seloMeta });
setTimeout(async () => {
const random = Math.floor(Math.random() * 110);
let status;
if (random < 20) status = 'Nem chega perto de ser gado. 😎';
else if (random < 40) status = 'Tem uns resquícios de gado, mas ainda se salva.';
else if (random < 60) status = 'É um gado moderado 🐂.';
else if (random < 80) status = 'Tá mugindo forte! 🐮';
else if (random < 100) status = 'Gadíssimo! Vive no curral da paixão ❤️🐄';
else status = 'Rei dos gados! Muge até em sonho! 👑🐂';
await client.sendMessage( from, { image: { url: imggado },caption: `🐄 O quanto ${nomeAlvo} pode ser um gado?\n\n• *${random}% de gado(a)*\n${status}`,mentions: [alvo], }, { quoted: seloMeta } );
}, 7000);
}
break;

case 'vesgo': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
 const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id));
let alvo = menc_jid || menc_prt || sender;
const nomeAlvo = (alvo === sender) ? pushname : `@${alvo.split('@')[0]}`;
await client.sendMessage( from, { text: `Pesquisando a ficha de vesguice de ${nomeAlvo}... aguarde um instante 👀`, mentions: [alvo] }, { quoted: seloMeta });
setTimeout(async () => { const random = Math.floor(Math.random() * 110);
let status;
if (random < 20) status = 'Enxerga tudo certinho, visão 20/20 😎';
else if (random < 40) status = 'Um olho olha pra frente e o outro… pensa se vai 😅';
else if (random < 60) status = 'Tem um leve desvio, mas nada grave 😂';
else if (random < 80) status = 'Olha pro lado e acerta o alvo do outro 🤪';
else if (random < 100) status = 'Confirmado: vesgo(a) de nascença 👁️‍🗨️';
else status = 'Ultra vesgo(a)! Enxerga duas realidades ao mesmo tempo';
await client.sendMessage( from, { image: { url: imgvesgo },
caption: `👀 O quanto ${nomeAlvo} pode ser uma pessoa vesga?\n\n• *${random}% de vesguice*\n${status}`, mentions: [alvo], }, { quoted: seloMeta } );
}, 7000);
}
break;

case 'bebado': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id));
let alvo = menc_jid || menc_prt || sender;
const nomeAlvo = (alvo === sender) ? pushname : `@${alvo.split('@')[0]}`;
await client.sendMessage( from, { text: `Pesquisando a ficha de bêbado(a) de ${nomeAlvo}... aguarde uns segundos 🍺`, mentions: [alvo] }, { quoted: seloMeta });
setTimeout(async () => {
const random = Math.floor(Math.random() * 110);
let status;
if (random < 20) status = 'Só bebe suco, 0% álcool. 🧃';
else if (random < 40) status = 'Toma uma de leve só no fim de semana. 🍹';
else if (random < 60) status = 'Bebe socialmente, mas já tropeçou algumas vezes. 🍷';
else if (random < 80) status = 'Vive com um copo na mão! 🍺';
else if (random < 100) status = 'Confirmado: dorme abraçado na garrafa. 🥴';
else status = 'Ultra bêbado(a)! Já tem CPF no bar 🍻🤪';
await client.sendMessage( from, { image: { url: imgbebado }, caption: `🍻 O quanto ${nomeAlvo} pode ser uma pessoa bêbada?\n\n• *${random}% de bebedeira*\n${status}`,mentions: [alvo], }, { quoted: seloMeta });
}, 7000);
}
break;

case 'tapa': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id));
const alvo = menc_jid2[0] || menc_jid || menc_prt;
if (!alvo) return enviar('👾Marque o alvo que você quer dar um tapa! (responda a mensagem ou use @usuario)');
const nomeAlvo = `@${alvo.split('@')[0]}`;
await client.sendMessage( from, { video: { url: tapacmd },
gifPlayback: true, caption: `💥 Você acabou de dar um tapa na raba de ${nomeAlvo}! 😼`, mentions: [alvo] }, { quoted: seloMeta });
}
break;

case 'matar': case 'mata': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id));
const alvo = menc_jid2[0] || menc_jid || menc_prt;
if (!alvo) return enviar('👾Marque o alvo que você quer matar! (responda a mensagem ou use @usuario)');
const nomeAlvo = `@${alvo.split('@')[0]}`;
await client.sendMessage( from, { video: { url: matarcmd },gifPlayback: true, caption: `👾Você acabou de *matar* ${nomeAlvo}! 😈👹`, mentions: [alvo] }, { quoted: seloMeta });
}
break;

case 'beijo': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []) .map(id => obterMembroValido(id));
const alvo = menc_jid2[0] || menc_jid || menc_prt;
if (!alvo) return enviar('👾Marque a pessoa que você quer beijar (responda a mensagem ou use @usuário).');
const nomeAlvo = `@${alvo.split('@')[0]}`;
await client.sendMessage( from, { video: { url: beijocmd }, gifPlayback: true, caption: `💞 Você deu um beijo gostoso em ${nomeAlvo}! 😳💋❤️`, mentions: [alvo] }, { quoted: seloMeta });
}
break;

case 'chute': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [])
 .map(id => obterMembroValido(id));
const alvo = menc_jid2[0] || menc_jid || menc_prt;
if (!alvo) return enviar('👾Marque o alvo que você quer dar um chute (responda uma mensagem ou use @usuário).');
const nomeAlvo = `@${alvo.split('@')[0]}`;
await client.sendMessage(nfrom, { video: { url: chutecmd },
gifPlayback: true, caption: `💥 Você deu um chute certeiro em ${nomeAlvo}! 🥋👊`, mentions: [alvo] }, { quoted: seloMeta } );
}
break;

case 'morte': case 'death': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
if (args.length === 0) {
return enviar(`👾 Está faltando o nome da pessoa!\n\nExemplo: *${prefix}morte Tosh Blackout*`)};
const nome = args.join(" ").trim();
try {
const predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(nome)}`);
if (!predea.data.age) {
return enviar(`👾 Nome inválido! Use um nome simples, sem acentos, números ou emojis.`)};
const morteMsg = `☠️ @${sender.split('@')[0]} — Pessoas com o nome “${predea.data.name}” tendem a morrer aos *${predea.data.age} anos de idade.* 😵`;
await client.sendMessage( from, { video: { url: deathcmd },
gifPlayback: true, caption: morteMsg, mentions: [sender] },{ quoted: seloMeta } );
} catch (err) {
console.error(err);
enviar(`👾 Ocorreu um erro ao tentar prever a morte. Tente novamente mais tarde.`);
}}
break;

case 'soco': { // Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const menc_jid2 = (info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [])
 .map(id => obterMembroValido(id));
const alvo = menc_jid2[0] || menc_jid || menc_prt;
if (!alvo) return enviar('👾Marque o alvo que você quer dar um soco (responda uma mensagem ou use @usuário).');
const nomeAlvo = `@${alvo.split('@')[0]}`;
await client.sendMessage(nfrom, { video: { url: sococmd },
gifPlayback: true, caption: `💥 Você deu um soco certeiro em ${nomeAlvo}! 🥋👊`, mentions: [alvo] }, { quoted: seloMeta } );
}
break;

case 'rankgay': {//Tosh Blackout 
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const groupMetadata = await client.groupMetadata(from);
const participantes = groupMetadata.participants.map(p => p.id);
if (participantes.length < 5) 
return enviar("O grupo precisa ter pelo menos 5 membros pra gerar o rank!");

const rnkgayUrl = (typeof rnkgay !== 'undefined' && rnkgay)  ? rnkgay  : (global?.imgs?.rnkgay); // fallback
const sorteados = participantes .sort(() => Math.random() - 0.5) .slice(0, 5) .map(id => ({ id, percent: Math.floor(Math.random() * 101) })) .sort((a, b) => b.percent - a.percent);

let texto = `🏳️‍🌈 *TOP 5 MAIS GAYS DO GRUPO* 🏳️‍🌈\n\n`;
sorteados.forEach((u, i) => {
const medalha = ["1•🥇", "2•🥈", "3•🥉", "4•💅", "5•🌈"][i];
texto += `${medalha} @${u.id.split('@')[0]} — *${u.percent}% gay*\n`; });
texto += `\n🌈 *Ranking dos 5 mais gay!*`;

let imageToSend = null; 
try {
if (imagemCache[rnkgayUrl]) {
imageToSend = imagemCache[rnkgayUrl]; 
} else {
const res = await axios.get(rnkgayUrl, { responseType: "arraybuffer", timeout: 10000 });
const buffer = Buffer.from(res.data);
imagemCache[rnkgayUrl] = buffer; 
imageToSend = buffer;}
} catch (err) {
console.error("Erro ao baixar rnkgay:", err?.message || err);
imageToSend = rnkgayUrl; 
}
const messagePayload = (Buffer.isBuffer(imageToSend)) ? { image: imageToSend, caption: texto, mentions: sorteados.map(u => u.id) } : { image: { url: imageToSend }, caption: texto, mentions: sorteados.map(u => u.id) };
await client.sendMessage(from, messagePayload, { quoted: seloMeta });
}
break;

case 'rankgado': {//Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const groupMetadata = await client.groupMetadata(from);
const participantes = groupMetadata.participants.map(p => p.id);
if (participantes.length < 5) return enviar("O grupo precisa ter pelo menos 5 membros pra gerar o rank!");

const rnkgadoUrl = (typeof rnkgado !== 'undefined' && rnkgado) ? rnkgado : (global?.imgs?.rnkgado);
const sorteados = participantes.sort(() => Math.random() - 0.5).slice(0, 5)
.map(id => ({ id, percent: Math.floor(Math.random() * 101) }))
.sort((a, b) => b.percent - a.percent);

let texto = `🐂 *TOP 5 MAIS GADOS DO GRUPO* 🐂\n\n`;
sorteados.forEach((u, i) => {
const medalha = ["1•💘", "2•💞", "3•💋", "4•🐄", "5•🐮"][i];
texto += `${medalha} @${u.id.split('@')[0]} — *${u.percent}% gado*\n`; });
texto += `\n💗 *Ranking dos 5 mais gados!*`;

let imageToSend = null;
try {
if (imagemCache[rnkgadoUrl]) imageToSend = imagemCache[rnkgadoUrl];
else {
const res = await axios.get(rnkgadoUrl, { responseType: "arraybuffer", timeout: 10000 });
const buffer = Buffer.from(res.data);
imagemCache[rnkgadoUrl] = buffer;
imageToSend = buffer;
}
} catch (err) {
console.error("Erro ao baixar rnkgado:", err?.message || err);
imageToSend = rnkgadoUrl;
}
const messagePayload = (Buffer.isBuffer(imageToSend))
? { image: imageToSend, caption: texto, mentions: sorteados.map(u => u.id) }
: { image: { url: imageToSend }, caption: texto, mentions: sorteados.map(u => u.id) };
await client.sendMessage(from, messagePayload, { quoted: seloMeta });
}
break;

case 'rankcorno': {//Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const groupMetadata = await client.groupMetadata(from);
const participantes = groupMetadata.participants.map(p => p.id);
if (participantes.length < 5) return enviar("O grupo precisa ter pelo menos 5 membros pra gerar o rank!");

const rnkcornoUrl = (typeof rnkcorno !== 'undefined' && rnkcorno) ? rnkcorno : (global?.imgs?.rnkcorno);
const sorteados = participantes.sort(() => Math.random() - 0.5).slice(0, 5)
.map(id => ({ id, percent: Math.floor(Math.random() * 101) }))
.sort((a, b) => b.percent - a.percent);

let texto = `🦌 *TOP 5 CORNOS DO GRUPO* 🦌\n\n`;
sorteados.forEach((u, i) => {
const medalha = ["1•🥇", "2•🥈", "3•🥉", "4•😭", "5•💔"][i];
texto += `${medalha} @${u.id.split('@')[0]} — *${u.percent}% corno*\n`; });
texto += `\n💔 *Ranking dos 5 mais traídos!*`;

let imageToSend = null;
try {
if (imagemCache[rnkcornoUrl]) imageToSend = imagemCache[rnkcornoUrl];
else {
const res = await axios.get(rnkcornoUrl, { responseType: "arraybuffer", timeout: 10000 });
const buffer = Buffer.from(res.data);
imagemCache[rnkcornoUrl] = buffer;
imageToSend = buffer;
}
} catch (err) {
console.error("Erro ao baixar rnkcorno:", err?.message || err);
imageToSend = rnkcornoUrl;
}
const messagePayload = (Buffer.isBuffer(imageToSend))
? { image: imageToSend, caption: texto, mentions: sorteados.map(u => u.id) }
: { image: { url: imageToSend }, caption: texto, mentions: sorteados.map(u => u.id) };
await client.sendMessage(from, messagePayload, { quoted: seloMeta });
}
break;

case 'rankgostoso': {//Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const groupMetadata = await client.groupMetadata(from);
const participantes = groupMetadata.participants.map(p => p.id);
if (participantes.length < 5) return enviar("O grupo precisa ter pelo menos 5 membros pra gerar o rank!");

const rnkgostosoUrl = (typeof rnkgostoso !== 'undefined' && rnkgostoso) ? rnkgostoso : (global?.imgs?.rnkgostoso);
const sorteados = participantes.sort(() => Math.random() - 0.5).slice(0, 5)
.map(id => ({ id, percent: Math.floor(Math.random() * 101) }))
.sort((a, b) => b.percent - a.percent);

let texto = `🔥 *TOP 5 MAIS GOSTOSOS DO GRUPO* 🔥\n\n`;
sorteados.forEach((u, i) => {
const medalha = ["1•💪", "2•😏", "3•🥵", "4•😘", "5•🔥"][i];
texto += `${medalha} @${u.id.split('@')[0]} — *${u.percent}% gostoso*\n`; });
texto += `\n💦 *Ranking dos 5 mais irresistíveis!*`;

let imageToSend = null;
try {
if (imagemCache[rnkgostosoUrl]) imageToSend = imagemCache[rnkgostosoUrl];
else {
const res = await axios.get(rnkgostosoUrl, { responseType: "arraybuffer", timeout: 10000 });
const buffer = Buffer.from(res.data);
imagemCache[rnkgostosoUrl] = buffer;
imageToSend = buffer;
}
} catch (err) {
console.error("Erro ao baixar rnkgostoso:", err?.message || err);
imageToSend = rnkgostosoUrl;
}
const messagePayload = (Buffer.isBuffer(imageToSend))
? { image: imageToSend, caption: texto, mentions: sorteados.map(u => u.id) }
: { image: { url: imageToSend }, caption: texto, mentions: sorteados.map(u => u.id) };
await client.sendMessage(from, messagePayload, { quoted: seloMeta });
}
break;

case 'rankgostosa': {//Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const groupMetadata = await client.groupMetadata(from);
const participantes = groupMetadata.participants.map(p => p.id);
if (participantes.length < 5) return enviar("O grupo precisa ter pelo menos 5 membros pra gerar o rank!");

const rnkgostosaUrl = (typeof rnkgostosa !== 'undefined' && rnkgostosa) ? rnkgostosa : (global?.imgs?.rnkgostosa);
const sorteados = participantes.sort(() => Math.random() - 0.5).slice(0, 5)
.map(id => ({ id, percent: Math.floor(Math.random() * 101) }))
.sort((a, b) => b.percent - a.percent);

let texto = `💋 *TOP 5 MAIS GOSTOSAS DO GRUPO* 💋\n\n`;
sorteados.forEach((u, i) => {
const medalha = ["1•👑", "2•💄", "3•💅", "4•👠", "5•💋"][i];
texto += `${medalha} @${u.id.split('@')[0]} — *${u.percent}% gostosa*\n`; });
texto += `\n🔥 *Ranking das 5 mais lindas!*`;

let imageToSend = null;
try {
if (imagemCache[rnkgostosaUrl]) imageToSend = imagemCache[rnkgostosaUrl];
else {
const res = await axios.get(rnkgostosaUrl, { responseType: "arraybuffer", timeout: 10000 });
const buffer = Buffer.from(res.data);
imagemCache[rnkgostosaUrl] = buffer;
imageToSend = buffer;
}
} catch (err) {
console.error("Erro ao baixar rnkgostosa:", err?.message || err);
imageToSend = rnkgostosaUrl;
}
const messagePayload = (Buffer.isBuffer(imageToSend))
? { image: imageToSend, caption: texto, mentions: sorteados.map(u => u.id) }
: { image: { url: imageToSend }, caption: texto, mentions: sorteados.map(u => u.id) };
await client.sendMessage(from, messagePayload, { quoted: seloMeta });
}
break;

case 'ranknazista': {//Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const groupMetadata = await client.groupMetadata(from);
const participantes = groupMetadata.participants.map(p => p.id);
if (participantes.length < 5) return enviar("O grupo precisa ter pelo menos 5 membros pra gerar o rank!");

const rnknazistaUrl = (typeof rnknazista !== 'undefined' && rnknazista) ? rnknazista : (global?.imgs?.rnknazista);
const sorteados = participantes.sort(() => Math.random() - 0.5).slice(0, 5)
.map(id => ({ id, percent: Math.floor(Math.random() * 101) }))
.sort((a, b) => b.percent - a.percent);

let texto = `☠️ *TOP 5 MAIS NAZISTAS DO GRUPO* ☠️\n\n`;
sorteados.forEach((u, i) => {
const medalha = ["1•⚔️", "2•💀", "3•🔥", "4•💣", "5•🧨"][i];
texto += `${medalha} @${u.id.split('@')[0]} — *${u.percent}% nazista*\n`; });
texto += `\n⚠️ *Ranking dos mais perigosos!*`;

let imageToSend = null;
try {
if (imagemCache[rnknazistaUrl]) imageToSend = imagemCache[rnknazistaUrl];
else {
const res = await axios.get(rnknazistaUrl, { responseType: "arraybuffer", timeout: 10000 });
const buffer = Buffer.from(res.data);
imagemCache[rnknazistaUrl] = buffer;
imageToSend = buffer;
}
} catch (err) {
console.error("Erro ao baixar rnknazista:", err?.message || err);
imageToSend = rnknazistaUrl;
}
const messagePayload = (Buffer.isBuffer(imageToSend))
? { image: imageToSend, caption: texto, mentions: sorteados.map(u => u.id) }
: { image: { url: imageToSend }, caption: texto, mentions: sorteados.map(u => u.id) };
await client.sendMessage(from, messagePayload, { quoted: seloMeta });
}
break;

case 'rankotaku': {//Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const groupMetadata = await client.groupMetadata(from);
const participantes = groupMetadata.participants.map(p => p.id);
if (participantes.length < 5) return enviar("O grupo precisa ter pelo menos 5 membros pra gerar o rank!");

const rnkotakuUrl = (typeof rnkotaku !== 'undefined' && rnkotaku) ? rnkotaku : (global?.imgs?.rnkotaku);
const sorteados = participantes.sort(() => Math.random() - 0.5).slice(0, 5)
.map(id => ({ id, percent: Math.floor(Math.random() * 101) }))
.sort((a, b) => b.percent - a.percent);

let texto = `🤓 *TOP 5 OTAKUS DO GRUPO* 🤓\n\n`;
sorteados.forEach((u, i) => {
const medalha = ["1•🌀", "2•🍥", "3•🎌", "4•👺", "5•🧧"][i];
texto += `${medalha} @${u.id.split('@')[0]} — *${u.percent}% otaku*\n`; });
texto += `\n🈶 *Ranking dos 5 mais weebs!*`;

let imageToSend = null;
try {
if (imagemCache[rnkotakuUrl]) imageToSend = imagemCache[rnkotakuUrl];
else {
const res = await axios.get(rnkotakuUrl, { responseType: "arraybuffer", timeout: 10000 });
const buffer = Buffer.from(res.data);
imagemCache[rnkotakuUrl] = buffer;
imageToSend = buffer;
}
} catch (err) {
console.error("Erro ao baixar rnkotaku:", err?.message || err);
imageToSend = rnkotakuUrl;
}
const messagePayload = (Buffer.isBuffer(imageToSend))
? { image: imageToSend, caption: texto, mentions: sorteados.map(u => u.id) }
: { image: { url: imageToSend }, caption: texto, mentions: sorteados.map(u => u.id) };
await client.sendMessage(from, messagePayload, { quoted: seloMeta });
}
break;

case 'rankpau': {//Tosh Blackout
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
const groupMetadata = await client.groupMetadata(from);
const participantes = groupMetadata.participants.map(p => p.id);
if (participantes.length < 5) return enviar("O grupo precisa ter pelo menos 5 membros pra gerar o rank!");

const rnkpauUrl = (typeof rnkpau !== 'undefined' && rnkpau) ? rnkpau : (global?.imgs?.rnkpau);
const sorteados = participantes.sort(() => Math.random() - 0.5).slice(0, 5)
.map(id => ({ id, percent: Math.floor(Math.random() * 101) }))
.sort((a, b) => b.percent - a.percent);

let texto = `🍆 *TOP 5 MAIORES PAU DO GRUPO* 🍆\n\n`;
sorteados.forEach((u, i) => {
const medalha = ["1•💦", "2•🍑", "3•🍌", "4•😳", "5•🔥"][i];
texto += `${medalha} @${u.id.split('@')[0]} — *${u.percent}% dotado*\n`; });
texto += `\n🍌 *Ranking dos mais avantajados!*`;

let imageToSend = null;
try {
if (imagemCache[rnkpauUrl]) imageToSend = imagemCache[rnkpauUrl];
else {
const res = await axios.get(rnkotakuUrl, { responseType: "arraybuffer", timeout: 10000 });
const buffer = Buffer.from(res.data);
imagemCache[rnkpauUrl] = buffer;
imageToSend = buffer;
}
} catch (err) {
console.error("Erro ao baixar rnkotaku:", err?.message || err);
imageToSend = rnkpau;
}
const messagePayload = (Buffer.isBuffer(imageToSend))
? { image: imageToSend, caption: texto, mentions: sorteados.map(u => u.id) }
: { image: { url: imageToSend }, caption: texto, mentions: sorteados.map(u => u.id) };
await client.sendMessage(from, messagePayload, { quoted: seloMeta });
}
break;
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧COMANDOS DE RPG୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/

//if (!isDeltarpgOFF) return enviar('Esse comando só pode ser usado com o modo *BLACKOUT RPG* ligado');

case 'modorpg':
if (!isGroup) return enviar(mensagens.isGroup);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!q) return enviar(`Você está usando o comando de forma errada, verifique:\n• Ex: *${prefix+comando} 1/0* _(1 para ativar, 0 para desativar)_`)
if(Number(args[0]) === 1) {
if(JSON.stringify(autorpg).includes(from) && autorpg[autorpg.map(i => i.id).indexOf(from)].rpg == true) return reply("Sistema *BLACKOUT RPG* - O sistema já está ativado aqui no grupo.")
if(!JSON.stringify(autorpg).includes(from)) {
autorpg.push({id: from, rpg: true})
fs.writeFileSync("./database/usuarios/BlackoutRpg/autorpg.json", JSON.stringify(autorpg))
} else {
autorpg[autorpg.map(i => i.id).indexOf(from)].rpg = true
fs.writeFileSync("./database/usuarios/BlackoutRpg/autorpg.json", JSON.stringify(autorpg))
}
enviar("Sistema *BLACKOUT RPG* - Foi efetuado a ativação no grupo com sucesso...")
} else if(Number(args[0]) === 0) {
if(JSON.stringify(autorpg).includes(from) && autorpg[autorpg.map(i => i.id).indexOf(from)].rpg == false) return enviar("Sistema *BLACKOUT RPG* - O sistema não está ativado aqui no grupo.")
if(!JSON.stringify(autorpg).includes(from)) {
autorpg.push({id: from, rpg: false})
fs.writeFileSync("./database/usuarios/BlackoutRpg/autorpg.json", JSON.stringify(autorpg))
} else {
autorpg[autorpg.map(i => i.id).indexOf(from)].rpg = false
fs.writeFileSync("./database/usuarios/BlackoutRpg/autorpg.json", JSON.stringify(autorpg))
}
enviar("Sistema *BLACKOUT RPG* - Foi desabilitado com sucesso no grupo.")
}
break

case 'loja': case 'shop': {//Tosh Blackout 
if (!isGroup) return enviar(mensagens.isGroup);
if (!isDeltarpgOFF) return enviar('Esse comando só pode ser usado com o modo *BLACKOUT RPG* ligado');
try {
const items = loadItems();
if (!items.length) return enviar("🛒 A loja está vazia. Adicione itens em `database/loja/loja_items.json`.");
let texto = "🛒 *Loja Blackout*\nUse: *.comprar <id|nome> <quantidade?>*\n\n";
for (let it of items) { texto += `🔸 *${it.nome}* — id: ${it.id}\n   ${it.descricao || ''}\n   Preço: ${formatCurrency(it.preco)}\n\n`;
}
enviar(texto);
} catch (e) { console.error(e); enviar("Erro ao abrir loja."); }
}
break;

case 'comprar': case 'buy': {//Tosh Blackout 
if (!isGroup) return enviar(mensagens.isGroup);
if (!isDeltarpgOFF) return enviar('Esse comando só pode ser usado com o modo *BLACKOUT RPG* ligado');
try {
if (!q) return enviar("Use: *.comprar [ numero e nome ] [ quantidade? ]*");
const argsSplit = q.trim().split(/\s+/);
const qtdArg = argsSplit.length > 1 && !isNaN(Number(argsSplit[argsSplit.length - 1])) ? Number(argsSplit.pop()) : 1;
const query = argsSplit.join(" ");
const item = acharItemPorIdOuNome(query);
if (!item) return enviar("Item não encontrado.");
const quantidade = Math.max(1, Math.floor(qtdArg));
const userId = sender;
const inv = loadInventario();
const jaTem = (inv[userId] || []).some(e => e.id === item.id);
if (item.unico && jaTem) return enviar("Você já possui esse item único.");
const coins = require("./database/usuarios/bancoBlackout");
const precoTotal = item.preco * quantidade;
const saldo = coins.VerSaldoBlackoutcoins(userId) || 0;
if (saldo < precoTotal) return enviar(`Saldo insuficiente. Precisa de ${formatCurrency(precoTotal)}.`);
const resultado = coins.TransferirBlackoutcoins(userId, client.user.jid || (client.user && client.user.id) || 'bot@server', precoTotal);
if (typeof coins.RemoverBlackoutcoins === 'function') {
coins.RemoverBlackoutcoins(userId, precoTotal);
} else if (resultado && resultado.sucesso !== true) {
  }
adicionarItemAoInventario(userId, item.id, quantidade, {});
 enviar(`🪀< Compra concluída: ${quantidade}x ${item.nome} por ${formatCurrency(precoTotal)}.\nSaldo restante: ${formatCurrency(coins.VerSaldoBlackoutcoins(userId) || 0)}`);
  } catch (e) { console.error(e); enviar("Erro ao comprar."); }
} break;

case 'vender': case 'sell': {//Tosh Blackout 
if (!isGroup) return enviar(mensagens.isGroup);
if (!isDeltarpgOFF) return enviar('Esse comando só pode ser usado com o modo *BLACKOUT RPG* ligado');
try {
if (!q) return enviar("Use: *.vender [ numero e nome ] [ quantidade? ]*");
const argsSplit = q.trim().split(/\s+/);
const qtdArg = argsSplit.length > 1 && !isNaN(Number(argsSplit[argsSplit.length - 1])) ? Number(argsSplit.pop()) : 1;
const query = argsSplit.join(" ");
const item = acharItemPorIdOuNome(query);
if (!item) return enviar("Item não encontrado.");
if (!item.vendavel) return enviar("Esse item não é vendável.");
const quantidade = Math.max(1, Math.floor(qtdArg));
const userId = sender;
const ok = removerItemDoInventario(userId, item.id, quantidade, {});
if (!ok) return enviar("Você não tem essa quantidade para vender.");
const coins = require("./database/usuarios/bancoBlackout");
const precoVenda = Math.floor(item.preco * 0.5) * quantidade; // vende por 50%
if (typeof coins.AdicionarBlackoutcoins === 'function') coins.AdicionarBlackoutcoins(userId, precoVenda);
enviar(`💰 Vendido: ${quantidade}x ${item.nome} por ${formatCurrency(precoVenda)}. Saldo atual: ${formatCurrency(coins.VerSaldoBlackoutcoins(userId)||0)}`);
} catch (e) { console.error(e); enviar("Erro ao vender."); }
} 
break;

case 'inventario': case 'inv': case 'bag': {//Tosh Blackout 
if (!isGroup) return enviar(mensagens.isGroup);
if (!isDeltarpgOFF) return enviar('Esse comando só pode ser usado com o modo *BLACKOUT RPG* ligado');
try {
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const alvoRaw = menc_prt || menc_jid;
const alvoValido = obterMembroValido(alvoRaw) || alvoRaw;
const userId = alvoValido ? (alvoValido.includes('@') ? alvoValido : `${alvoValido.replace(/[^0-9]/g, '')}@s.whatsapp.net`) : sender;
const inv = loadInventario();
const lista = inv[userId] || [];
if (!lista.length) return enviar(userId === sender ? "🧾 Seu inventário está vazio." : "🧾 Esse usuário não tem itens.");
const items = loadItems();
let texto = `🧾 Inventário de @${userId.split('@')[0]}\n\n`;
for (let e of lista) {
const it = items.find(i => i.id === e.id) || { nome: e.id };
texto += `• ${it.nome} (id: ${e.id}) — qtd: ${e.qtd}\n`;
}
await client.sendMessage(from, { text: texto, mentions: [userId] }, { quoted: info });
} catch (e) { console.error(e); enviar("Erro ao abrir inventário."); }
}
break;

case 'trocar': {
if (!isGroup) return enviar(mensagens.isGroup);
if (!isDeltarpgOFF) return enviar('Esse comando só pode ser usado com o modo *BLACKOUT RPG* ligado');
try {
if (!isGroup) return enviar(mensagens.isGroup);
if (!q) return enviar("Use: *.trocar @usuario*");
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const alvoRaw = menc_prt || menc_jid;
if (!alvoRaw) return enviar("Mencione quem quer trocar.");
const alvoValido = obterMembroValido(alvoRaw) || alvoRaw;
const alvoId = alvoValido.includes('@') ? alvoValido : `${alvoValido.replace(/[^0-9]/g, '')}@s.whatsapp.net`;
if (alvoId === sender) return enviar("Você não pode trocar consigo mesmo.");
const trocas = loadTrocas();
const existing = Object.values(trocas).find(t => (t.solicitante===sender && t.alvo===alvoId && t.status==='pending') || (t.solicitante===alvoId && t.alvo===sender && t.status==='pending'));
if (existing) return enviar("Já existe uma troca pendente entre vocês.");
const id = 'troca_' + Date.now() + '_' + Math.floor(Math.random()*1000);
const novo = { id, solicitante: sender, alvo: alvoId, status: 'pending', ofertasSolicitante: [], ofertasAlvo: [], prontoSolicitante: false, prontoAlvo: false, criadoEm: Date.now()
};
trocas[id] = novo;
saveTrocas(trocas);
setTimeout(()=> {
const t = loadTrocas();
if (t[id] && t[id].status === 'pending') { t[id].status = 'expired';
saveTrocas(t);
}}, 1000 * 60 * 5);
await client.sendMessage(from, { text: `🔁 Pedido de troca criado entre @${sender.split('@')[0]} e @${alvoId.split('@')[0]}.\nAmbos podem usar:\n• *.ofertar <idItem> <qtd>* — adicionar oferta\n• *.finalizar* — marcar pronto\n• *.recusar* — cancelar` , mentions: [sender, alvoId] }, { quoted: info });
  } catch (e) { console.error(e); enviar("Erro ao iniciar troca."); }
} break;

case 'ofertar': {
  try {
    if (!q) return enviar("Use: *.ofertar <idItem> <quantidade>* (somente dentro de uma troca pendente)");
    const argsSplit = q.trim().split(/\s+/);
    const quantidade = argsSplit.length>1 && !isNaN(Number(argsSplit[argsSplit.length-1])) ? Number(argsSplit.pop()) : 1;
    const itemQuery = argsSplit.join(" ");
    const item = acharItemPorIdOuNome(itemQuery);
    if (!item) return enviar("Item inválido.");
    // encontra troca pendente envolvendo user
    const trocas = loadTrocas();
    const troca = Object.values(trocas).find(t => (t.solicitante===sender || t.alvo===sender) && t.status==='pending');
    if (!troca) return enviar("Nenhuma troca pendente envolvendo você.");
    // verifica inventário
    const inv = loadInventario();
    const userInv = inv[sender] || [];
    const entry = userInv.find(e => e.id === item.id);
    if (!entry || entry.qtd < quantidade) return enviar("Você não tem essa quantidade para ofertar.");
    // adiciona oferta
    if (troca.solicitante === sender) {
      // atualizar ou adicionar
      const of = troca.ofertasSolicitante.find(o => o.id === item.id);
      if (of) of.qtd += quantidade;
      else troca.ofertasSolicitante.push({ id: item.id, qtd: quantidade });
    } else {
      const of = troca.ofertasAlvo.find(o => o.id === item.id);
      if (of) of.qtd += quantidade;
      else troca.ofertasAlvo.push({ id: item.id, qtd: quantidade });
    }
    // reset pronto
    troca.prontoSolicitante = false; troca.prontoAlvo = false;
    trocas[troca.id] = troca;
    saveTrocas(trocas);
    enviar(`✅ Oferta adicionada: ${quantidade}x ${item.nome} na troca ${troca.id}.`);
  } catch (e) { console.error(e); enviar("Erro ao ofertar item."); }
} break;

case 'finalizar': case 'aceitar': {
  try {
    // marca como pronto e se ambos prontos, executa troca
    const trocas = loadTrocas();
    const troca = Object.values(trocas).find(t => (t.solicitante===sender || t.alvo===sender) && t.status==='pending');
    if (!troca) return enviar("Nenhuma troca pendente.");
    if (troca.solicitante === sender) troca.prontoSolicitante = true;
    else troca.prontoAlvo = true;
    // se ambos prontos -> realizar
    if (troca.prontoSolicitante && troca.prontoAlvo) {
      // valida inventários novamente
      const inv = loadInventario();
      const sInv = inv[troca.solicitante] || [];
      const aInv = inv[troca.alvo] || [];
      // checar se ainda tem os itens ofertados
      const fail = (ofertas, userId) => {
        for (let o of ofertas) {
          const e = (inv[userId] || []).find(x => x.id === o.id);
          if (!e || e.qtd < o.qtd) return true;
        }
        return false;
      };
      if (fail(troca.ofertasSolicitante, troca.solicitante) || fail(troca.ofertasAlvo, troca.alvo)) {
        troca.status = 'failed';
        trocas[troca.id] = troca; saveTrocas(trocas);
        return enviar("Falha: algum participante não tem mais os itens ofertados.");
      }
      // executar troca: remover das origens e adicionar aos destinos
      for (let o of troca.ofertasSolicitante) {
        removerItemDoInventario(troca.solicitante, o.id, o.qtd, {});
        adicionarItemAoInventario(troca.alvo, o.id, o.qtd, {});
      }
      for (let o of troca.ofertasAlvo) {
        removerItemDoInventario(troca.alvo, o.id, o.qtd, {});
        adicionarItemAoInventario(troca.solicitante, o.id, o.qtd, {});
      }
      troca.status = 'completed';
      trocas[troca.id] = troca; saveTrocas(trocas);
      await client.sendMessage(from, { text: `✅ Troca concluída entre @${troca.solicitante.split('@')[0]} e @${troca.alvo.split('@')[0]}.`, mentions: [troca.solicitante, troca.alvo] }, { quoted: info });
    } else {
      trocas[troca.id] = troca; saveTrocas(trocas);
      enviar("✅ Você marcou-se como pronto. Aguarde o outro participante ou peça para ele usar *.finalizar* também.");
    }
  } catch (e) { console.error(e); enviar("Erro ao finalizar/aceitar troca."); }
} break;

case 'recusar': case 'cancelar': {
try {
const trocas = loadTrocas();
    const troca = Object.values(trocas).find(t => (t.solicitante===sender || t.alvo===sender) && t.status==='pending');
    if (!troca) return enviar("Nenhuma troca pendente para cancelar.");
    troca.status = 'cancelled';
    trocas[troca.id] = troca; saveTrocas(trocas);
    await client.sendMessage(from, { text: `❌ Troca cancelada entre @${troca.solicitante.split('@')[0]} e @${troca.alvo.split('@')[0]}.`, mentions: [troca.solicitante, troca.alvo] }, { quoted: info });
  } catch (e) { console.error(e); enviar("Erro ao recusar/cancelar troca."); }
}
break;





case 'carteira': case 'saldo': case 'money': case 'coins': {
try {
if (!isGroup) return enviar(mensagens.isGroup);
if (!q) return enviar(`💰 Digite Exemplo: *${prefix + comando}* para ver saldo`);
const coins = require("./database/usuarios/bancoBlackout");
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const alvoRaw = menc_prt || menc_jid;
const alvoValido = obterMembroValido(alvoRaw) || alvoRaw;
const userId = alvoValido 
 ? (alvoValido.includes('@') ? alvoValido : `${alvoValido.replace(/[^0-9]/g, '')}@s.whatsapp.net`) 
 : sender;
const saldo = coins.VerSaldoBlackoutcoins(userId) || 0;
const numeroUser = userId.split('@')[0];
const numeroAutor = sender.split('@')[0];
let msg;
if (userId === sender) {
msg = `👛 *Carteira Blackout*\n👤 Usuário: @${numeroAutor}\n💰 Saldo atual: *${saldo}* 🪙`;
} else {
msg = `👛 *Carteira Blackout*\n👤 Usuário: @${numeroUser}\n💰 Saldo: *${saldo}* 🪙`;
}

await client.sendMessage(from, { text: msg, mentions: [userId, sender] }, { quoted: info });
} catch (e) {
console.error("Erro ao verificar carteira:", e);
enviar("👾 Ocorreu um erro ao verificar o saldo.");
}}
break;

case 'treinar': {
try {
if (!isGroup) return enviar(mensagens.isGroup);
if (!isDeltarpgOFF) return enviar('Esse comando só pode ser usado com o modo *BLACKOUT RPG* ligado');
const treinoPath = "./database/usuarios/BlackoutRpg/treinar.json";
if (!fs.existsSync("./database/usuarios/BlackoutRpg")) {
fs.mkdirSync("./database/usuarios/BlackoutRpg", { recursive: true });}
if (!fs.existsSync(treinoPath)) fs.writeFileSync(treinoPath, JSON.stringify({}, null, 2));
const treinos = JSON.parse(fs.readFileSync(treinoPath));
const usuario = sender; // quem iniciou o treino
const DURACAO_TREINO_MS = 1000 * 60 * 5;
const agora = Date.now();
const terminaEm = agora + DURACAO_TREINO_MS;
treinos[usuario] = { treinando: true, terminaEm };
fs.writeFileSync(treinoPath, JSON.stringify(treinos, null, 2));
const minutos = Math.ceil(DURACAO_TREINO_MS / 60000);
await client.sendMessage(from, { text: `🪀 Treino iniciado!\nVocê começou seu treinamento de roubo. Volte em ${minutos} minuto(s) para poder roubar.\nQuando o tempo acabar, você já poderá usar o comando *${prefix + comando}* normalmente (marcando à mensagem da vítima).` }, { quoted: info });
} catch (e) {
console.error("Erro ao treinar roubo", e);
reagir('👾')
enviar(`👾 Erro ao treinar  marque a mensagem do usuário Exemplo: *${prefix + comando}* `);
}}
break;

case 'roubar': case 'steal': case 'roubo': {
try {
if (!isGroup) return enviar(mensagens.isGroup);
if (!isDeltarpgOFF) return enviar('Esse comando só pode ser usado com o modo *BLACKOUT RPG* ligado');
const treinoPath = "./database/usuarios/BlackoutRpg/treinar.json";
if (!fs.existsSync("./database/usuarios/BlackoutRpg")) {
fs.mkdirSync("./database/usuarios/BlackoutRpg", { recursive: true })};
if (!fs.existsSync(treinoPath)) fs.writeFileSync(treinoPath, JSON.stringify({}, null, 2));
const treinos = JSON.parse(fs.readFileSync(treinoPath));
const autorId = sender;
const registroTreino = treinos[autorId];
if (!registroTreino) {
return enviar(`👾Parece que é sua primeira vez tentando roubar. Primeiro você precisa treinar.\nUse: *${prefix}treinar* para iniciar o treinamento.`)}
const agora = Date.now();
if (!registroTreino.terminaEm || agora < registroTreino.terminaEm) {
const restante = registroTreino.terminaEm ? Math.max(0, Math.ceil((registroTreino.terminaEm - agora) / 1000)) : 0;
const minutos = Math.floor(restante / 60);
const segundos = restante % 60;
return enviar(`⏳ Você ainda está treinando. Aguarde ${minutos}m ${segundos}s ou volte quando o treino terminar. (Se ainda não usou *${prefix}treinar*, use-o primeiro.)`)};
const argsSplit = q ? q.trim().split(/\s+/) : [];
const possibleAmount = argsSplit.length ? argsSplit[argsSplit.length - 1] : null;
const quantidadeInformada = possibleAmount && !isNaN(Number(possibleAmount)) ? Number(possibleAmount) : null;
if (quantidadeInformada !== null && (quantidadeInformada < 1 || String(possibleAmount).includes(".")))
return enviar("👾 Quantidade inválida. Digite um inteiro maior ou igual a 1 (sem decimais).");
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const alvoRaw = menc_prt || menc_jid;
if (!alvoRaw) return enviar(`👾 Mencione quem deseja roubar ou responda à mensagem da pessoa.\nEx: *${prefix}roubar @usuario* ou responda à mensagem e envie *${prefix}roubar*`);
const alvoValido = obterMembroValido(alvoRaw) || alvoRaw;
const alvoId = alvoValido.includes('@') ? alvoValido : `${alvoValido.replace(/[^0-9]/g, '')}@s.whatsapp.net`;
if (autorId === alvoId) return enviar("❗ Você não pode roubar de si mesmo.");
const coins = require("./database/usuarios/bancoBlackout");
const cdPath = "./database/usuarios/BlackoutRpg/rouboCooldown.json";
if (!fs.existsSync(cdPath)) fs.writeFileSync(cdPath, JSON.stringify({}, null, 2));
const cooldowns = JSON.parse(fs.readFileSync(cdPath));
const COOLDOWN_MS = 1000 * 60 * 60; // 1 hora
if (cooldowns[autorId] && agora < cooldowns[autorId]) {
const restante = Math.ceil((cooldowns[autorId] - agora) / 1000);
const minutos = Math.floor(restante / 60);
const segundos = restante % 60;
return enviar(`⏳ Ainda em cooldown. Tente novamente em ${minutos}m ${segundos}s.`);
}
const saldoAlvo = coins.VerSaldoBlackoutcoins(alvoId) || 0;
const saldoAutor = coins.VerSaldoBlackoutcoins(autorId) || 0;
if (saldoAlvo < 1) return enviar(`❗ A vítima não tem BlackoutCoins suficientes para ser roubada.`);
let quantidade;
if (quantidadeInformada !== null) { quantidade = quantidadeInformada;
if (quantidade > saldoAlvo) return enviar(`❗ A vítima só tem ${saldoAlvo} 🪙.`);
} else {
const porcent = Math.floor(Math.random() * 10) + 1; // 1..10
quantidade = Math.max(1, Math.floor((saldoAlvo * porcent) / 100));
}
let chanceBase = 55; 
if (saldoAlvo >= saldoAutor * 2) chanceBase -= 10;
if (saldoAutor >= saldoAlvo * 2) chanceBase += 10;
chanceBase = Math.max(20, Math.min(85, chanceBase));
const roll = Math.floor(Math.random() * 100) + 1;
const sucesso = roll <= chanceBase;
if (sucesso) {
const resultado = coins.TransferirBlackoutcoins(alvoId, autorId, quantidade);
if (!resultado || resultado.sucesso !== true) {
return enviar(`❗ Falha ao transferir: ${resultado && resultado.motivo ? resultado.motivo : "Erro desconhecido"}.`)};
fs.writeFileSync(cdPath, JSON.stringify(cooldowns, null, 2));
const numeroAlvo = alvoId.split('@')[0];
const numeroAutor = autorId.split('@')[0];
const msg = `🤑 *Roubo bem-sucedido!*\n@${numeroAutor} roubou *${quantidade}* 🪙 de *@${numeroAlvo}*.\n💰 Seu saldo agora: *${coins.VerSaldoBlackoutcoins(autorId)}* 🪙\n🔒 Próximo roubo em 1 hora.`;
await client.sendMessage(from, { text: msg, mentions: [autorId, alvoId] }, { quoted: info });
} else {
const penalidade = Math.min(saldoAutor, Math.floor(quantidade / 2));
if (penalidade > 0) coins.RemoverBlackoutcoins(autorId, penalidade);
const recompensa = penalidade > 0 ? Math.floor(penalidade / 2) : 0;
if (recompensa > 0) coins.AdicionarBlackoutcoins(alvoId, recompensa);
cooldowns[autorId] = agora + COOLDOWN_MS;
fs.writeFileSync(cdPath, JSON.stringify(cooldowns, null, 2));
const numeroAlvo = alvoId.split('@')[0];
const numeroAutor = autorId.split('@')[0];
const msg = `👮‍♂️ *Roubo falhou!* @${numeroAutor} tentou roubar *@${numeroAlvo}* e foi pego.\n❗ Penalidade: perdeu *${penalidade}* 🪙.\n💰 Seu saldo agora: *${coins.VerSaldoBlackoutcoins(autorId)}* 🪙\n🔒 Próximo roubo em 1 hora.`;
await client.sendMessage(from, { text: msg, mentions: [autorId, alvoId] }, { quoted: info });
}} catch (e) {
console.error("Erro ao roubar BlackoutCoins:", e);
reagir('👾')
enviar(`👾 Erro ao roubar BlackoutCoins marque a mensagem do usuário Exemplo: *${prefix + comando} 700* `);
}}
break;

case 'addblackoutcoins': case 'addbcoins': case 'addbc': {
try {
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isDeltarpgOFF) return enviar('Esse comando só pode ser usado com o modo *BLACKOUT RPG* ligado');
if (!q) return enviar(`💰 Digite a quantidade e marque a mensagem do usuário.\nExemplo: *${prefix}addblackoutcoins 700*`);
const argsSplit = q.trim().split(/\s+/);
const quantidade = Number(argsSplit[argsSplit.length - 1]);
if (isNaN(quantidade)) return enviar(`❗ ${argsSplit[argsSplit.length - 1]} não é um número válido marque a mensagem do usuário👾`);
if (quantidade < 1) return enviar("👾 É necessário adicionar pelo menos 1 BlackoutCoin.");
if (q.includes(".")) return enviar("👾 Não é permitido número decimal.");
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const alvo = menc_prt || menc_jid || sender;
const alvoValido = obterMembroValido(alvo) || alvo;
const userId = alvoValido.includes('@') ? alvoValido : `${alvoValido.replace(/[^0-9]/g, '')}@s.whatsapp.net`;
const coins = require("./database/usuarios/bancoBlackout");
const novoSaldo = coins.AdicionarBlackoutcoins(userId, quantidade);
const numero = userId.split('@')[0];
const msg = `🪀Foram adicionadas *${quantidade}* 🪙 BlackoutCoin${quantidade > 1 ? "s" : ""} para *@${numero}*.\n💰 Novo saldo: *${novoSaldo}* 🪙`;
await client.sendMessage(from, { text: msg, mentions: [userId] }, { quoted: info });
} catch (e) {
console.error("Erro ao adicionar BlackoutCoins:", e);
reagir('👾')
enviar(`👾 Erro ao adicionar BlackoutCoins marque a mensagem do usuário Exemplo: *${prefix + comando} 700* `);
}}
break;

case 'tirarblackoutcoins': case 'removerblackoutcoins': case 'removebcoins': {
try {
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isDeltarpgOFF) return enviar('Esse comando só pode ser usado com o modo *BLACKOUT RPG* ligado');
if (!q) return enviar(`💸 Digite a quantidade e marque a mensagem do usuário.\nExemplo: *${prefix + comando} 500*`);
const argsSplit = q.trim().split(/\s+/);
const quantidade = Number(argsSplit[argsSplit.length - 1]);
if (isNaN(quantidade)) return enviar(`❗ ${argsSplit[argsSplit.length - 1]} não é um número válido marque a mensagem do usuário👾`);
if (quantidade < 1) return enviar("👾 É necessário remover pelo menos 1 BlackoutCoin.");
if (q.includes(".")) return enviar("👾 Não é permitido número decimal.");
const menc_prt = obterMembroValido(info.message?.extendedTextMessage?.contextInfo?.participant);
const menc_jid = obterMembroValido(args?.join(" ").replace("@", ""));
const alvo = menc_prt || menc_jid || sender;
const alvoValido = obterMembroValido(alvo) || alvo;
const userId = alvoValido.includes('@') ? alvoValido : `${alvoValido.replace(/[^0-9]/g, '')}@s.whatsapp.net`;
const coins = require("./database/usuarios/bancoBlackout");
const novoSaldo = coins.RemoverBlackoutcoins(userId, quantidade);
const numero = userId.split('@')[0];
const msg = `👾 Foram removidas *${quantidade}* 🪙 BlackoutCoin${quantidade > 1 ? "s" : ""} de *@${numero}*.\n💰 Novo saldo: *${novoSaldo}* 🪙`;
await client.sendMessage(from, { text: msg, mentions: [userId] }, { quoted: info });
} catch (e) {
console.error("Erro ao remover BlackoutCoins:", e);
reagir('👾')
enviar(`👾 Erro ao remover BlackoutCoins marque a mensagem do usuário Exemplo: *${prefix + comando} 700* `);
}}
break;





/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧COMANDOS DE LEVEL୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'leveling': {
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!isGroupAdmins && !isDono) return enviar(mensagens.adm);
if (!args[0]) return enviar('Use:\n*1* para ativar o sistema de level\n*0* para desativar.');
const opcao = Number(args[0]);
if (opcao === 1) {
if (isLevelingOn) return enviar('O sistema de level já está *ativo* neste grupo.');
dataGp[0].level = true;
setGp(dataGp);
return enviar('O sistema de *level* foi ativado com sucesso!\nOs membros agora ganharão blackoutcoins automaticamente.');
}
if (opcao === 0) {
if (!isLevelingOn) return enviar('O sistema de level já está *desativado* neste grupo.');
dataGp[0].level = false;
setGp(dataGp);
return enviar('O sistema de *level* foi desativado neste grupo.\nOs membros não ganharão mais blackoutcoins.');
}
return enviar('Parâmetro inválido.\nUse:\n*1* para ativar\n*0* para desativar.');
}
break

case 'addlevel': {
try {
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!q) return enviar(`Digite a quantidade de level que deseja adicionar.\nExemplo: *${prefix}addlevel 10*`);
if (isNaN(args[0])) return enviar(`"${args[0]}" não é um número válido exemplo 559999999 10l.`);
if (Number(args[0]) < 1) return enviar("Tem que adicionar pelo menos 1 level.");
if (q.includes(".")) return enviar("Não pode número decimal.");
let alvo = info?.message?.extendedTextMessage?.contextInfo?.participant || (info?.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0]) || (q.includes("@") ? q.replace(/[^0-9]/g, '') + "@s.whatsapp.net" : sender);
if (!alvo.includes("@")) {
const encontrado = obterMembroValido(q, groupMembers);
alvo = encontrado || sender;
}
const userIndex = level2.findIndex(i => i.id === alvo);
if (userIndex === -1) return enviar("Usuário não encontrado no sistema de level.");
level2[userIndex].level += Number(args[0]);
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2, null, 2));
const plural = Number(args[0]) > 1 ? "s" : "";
enviar(`✅ *${args[0]} leve${plural} adicionado${plural} com sucesso!* para o usuário: @${alvo.split('@')[0]}`, {
 mentions: [alvo], });
} catch (e) {
console.error("Erro na case addlevel:", e);
enviar("Ocorreu um erro ao adicionar level. Verifique e tente novamente.");
}}
break;

case 'tirarlevel': {
try {
if (!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if (!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if (!q) return enviar(`Digite a quantidade de level que deseja remover.\nExemplo: *${prefix}tirarlevel 5*`);
if (isNaN(args[0])) return enviar(`"${args[0]}" não é um número válido exemplo 559999999 10.`);
if (Number(args[0]) < 1) return enviar("Tem que remover pelo menos 1 level.");
if (q.includes(".")) return enviar("Não pode número decimal.");
let alvo = info?.message?.extendedTextMessage?.contextInfo?.participant || (info?.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0]) ||  (q.includes("@") ? q.replace(/[^0-9]/g, '') + "@s.whatsapp.net" : sender);
if (!alvo.includes("@")) {
const encontrado = obterMembroValido(q, groupMembers);
alvo = encontrado || sender;
}
const userIndex = level2.findIndex(i => i.id === alvo);
if (userIndex === -1) return enviar("Usuário não encontrado no sistema de level.");
const levelAtual = level2[userIndex].level;
const remover = Number(args[0]);
const novoLevel = Math.max(0, levelAtual - remover);
level2[userIndex].level = novoLevel;
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2, null, 2));
const plural = remover > 1 ? "s" : "";
enviar(`*${remover} leve${plural} removido${plural} com sucesso!* do usuário: @${alvo.split('@')[0]}\n📉 Novo nível: *${novoLevel}*`, { mentions: [alvo], });
} catch (e) {
console.error("Erro na case tirarlevel:", e);
enviar("Ocorreu um erro ao remover level. Verifique e tente novamente.");
}}
break;

case 'blocklevel':
if(!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!menc_os2) return enviar("Marque o @ ou a mensagem da pessoa que deseja bloquear do contador.")
if(!JSON.stringify(level2).includes(menc_os2)) return enviar("O usuário mencionado não está presente no contador de mensagens.")
AB = level2.map(i => i.id).indexOf(menc_os2)
if(level2[AB].block == true) return enviar("O usuário mencionado já está bloqueado no contador.")
level2[AB].block = true
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
enviar("Usuário bloqueado do contador com sucesso... As interações do mesmo não serão mais contabilizadas!")
break

case 'unblocklevel':
if(!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!menc_os2) return enviar("Marque o @ ou a mensagem da pessoa que deseja bloquear do contador.")
if(!JSON.stringify(level2).includes(menc_os2)) return enviar("O usuário mencionado não está presente no contador de mensagens.")
AB = level2.map(i => i.id).indexOf(menc_os2)
if(level2[AB].block == false) return enviar("O usuário mencionado não está bloqueado atualmente!")
level2[AB].block = false
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
enviar("Usuário desbloqueado do contador com sucesso! As interações do usuário mencionado voltarão a ser contabilizadas.")
break

case 'blocklevel-list': case 'blocklevellist':
if(!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
txt = `[Total: *${level2.length}*] - Lista de usuários bloqueados do contador de blackoutcoins:\n`
let blocklevellist = 0
for(i = 0; i < level2.length; i++) {
  if(level2[i].block == true) {
txt += `*${i+1}.* @${level2[i].id.split('@')[0]}\n`
blocklevellist += 1
}
}
txt += `\n–\n• Total de Bloqueados: *${blocklevellist}*`
if(blocklevellist > 0) {
mention(txt)
} else {
enviar("Não existe nenhum *usuário bloqueado* do contador blackoutcoins.")
}
break

case 'rmlevel':
if(!isDono) return enviar(mensagens.isDono);
if (!isGroup) return enviar(mensagens.isGroup);
if(!isBotGroupAdmins) return enviar(mensagens.isBotGroupAdmins);
if(!q && !menc_os2) return enviar("Marque a pessoa que deseja apagar do contador.")
var qp = menc_os2 ? menc_os2 : q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(!JSON.stringify(level2).includes(qp)) return enviar("O usuário mencionado não está registrado no contador.")
AB = level2.map(i => i.id).indexOf(qp)
level2.splice(AB, 1)
fs.writeFileSync("./database/usuarios/leveling.json", JSON.stringify(level2))
enviar("Usuário apagado foi contador com sucesso como o(a) senhor(a) pediu...")
break

case 'rank': case 'ranklevel': case 'rankpatente': {
try {
if (!isGroup) return enviar(mensagens.isGroup);
if (!isLevelingOn) return enviar(`Para usar o comando, o sistema de level precisa estar ativo.\n• Use: ${prefix}leveling para ativar.`);
if (level2.length === 0) return enviar("📉 Nenhum dado de level encontrado.");
let rank = [...level2].sort((a, b) => b.contador - a.contador);
const totalR = rank.length > 10 ? 10 : rank.length;
let rankingTexto = '';
for (let i = 0; i < totalR; i++) {
const user = rank[i];
const nome = user.nick || `Usuário ${i + 1}`;
const level = user.level || 1;
const contador = user.contador || 0;
let newpatente = "Bronze I 🥉";
if (contador >= 100) newpatente = "Bronze II 🥉";
if (contador >= 300) newpatente = "Prata I 🥈";
if (contador >= 700) newpatente = "Ouro I 🥇";
if (contador >= 1500) newpatente = "Platina I 🌀";
if (contador >= 2700) newpatente = "Diamante I 💎";
if (contador >= 5000) newpatente = "Paladino I 🔮";
if (contador >= 9000) newpatente = "Mestre I ❤️‍🔥";
if (contador >= 20000) newpatente = "Desafiante I 👑";
if (contador >= 50000) newpatente = "Usuário Superior I 🎓";
if (contador >= 100000) newpatente = "Conquistador I ⚒️";
if (contador >= 300000) newpatente = "Desbravador I 🛰️";
if (contador >= 1000000) newpatente = "Grande Mestre I 🪩";
if (contador >= 5000000) newpatente = "⚜️✘‿✘BLACKOUT✘‿✘⚜️";
if (contador >= 10000000) newpatente = "Veterano 🎩🏼‍♂️";
rankingTexto += `╔═════════════════════
║̇ *_👾STATUS RANK BLACKOUT👾_*
╚═════════════════════
      
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
┃╔═*¨✘‿✘¨*
┃│🪀⋟ 🏅 ${i + 1}° - ${nome}
┃│🪀⋟ ⭐ Level: ${level}
┃│🪀⋟ 💰 blackoutcoins: ${contador}
┃│🪀⋟ 🎖️ Patente: ${newpatente}
┃╚══*¨✘‿✘¨*
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─\n\n*ʙᴀꜱᴇ 👾ᴅᴇʟᴛᴀ👾 ᴍᴀᴛʀɪx*\n\n`;
}
const canvasUrl = `${BLACKOUT_API}/api/canva/level?nome=${encodeURIComponent("BLACKOUT LEVEL")}&avatar=${encodeURIComponent("https://i.imgur.com/gfSPmDU.jpeg")}&fundo=${encodeURIComponent("https://i.imgur.com/Q2bcpct.jpeg")}&level1=1&level2=${totalR}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { image: { url: canvasUrl }, caption: `🏆 STATUS LEVEL BLACKOUT\nTotal de usuários: ${totalR}\n\n${rankingTexto}` }, { quoted: seloMeta });
} catch (e) {
console.error("Erro no comando rank:", e);
enviar("Ocorreu um erro ao gerar o ranking. Tente novamente mais tarde.");
}}
break;

case 'level': case 'patente': {//Tosh Blackout 
  console.log(chalk.yellow("📊 [LEVEL] Comando executado por:"), chalk.cyan(pushname || sender));
  if (!isGroup) {
    console.log(chalk.red("❌ [LEVEL] Tentativa fora de grupo."));
    return enviar(mensagens.isGroup);
  }

  // ⚙️ Verificar se o sistema está ativado
  if (!isLevelingOn) {
    console.log(chalk.red("⚙️ [LEVEL] Sistema de level desativado."));
    return enviar(`O sistema de level está desativado.\nPeça para um admin ativar usando: *${prefix}leveling*`);
  }

  // 🔎 Verificar se o usuário existe no JSON
  const userIndex = level2.findIndex(i => i.id === sender);
  if (userIndex === -1) {
    console.log(chalk.red("⚠️ [LEVEL] Usuário sem progresso registrado."));
    return enviar('Você ainda não possui progresso registrado.');
  }

  // 📊 Dados do usuário
  const userData = level2[userIndex];
  const { level, contador } = userData;
  let nome = pushname || 'Usuário';

  // 🧹 Limpar nome para API
  nome = nome.normalize("NFKD").replace(/[^\w\s]/g, "").substring(0, 20);

  // 🏅 Tabela de patentes
  let newpatente = 'Iniciante';
  const patentes = [
    { limite: 100, nome: 'Bronze I 🥉' },
    { limite: 200, nome: 'Bronze II 🥉' },
    { limite: 300, nome: 'Bronze III 🥉' },
    { limite: 400, nome: 'Prata I 🥈' },
    { limite: 500, nome: 'Prata II 🥈' },
    { limite: 600, nome: 'Prata III 🥈' },
    { limite: 700, nome: 'Ouro I 🥇' },
    { limite: 800, nome: 'Ouro II 🥇' },
    { limite: 900, nome: 'Ouro III 🥇' },
    { limite: 1200, nome: 'Ouro IV 🥇' },
    { limite: 1500, nome: 'Platina I 🌀' },
    { limite: 1800, nome: 'Platina II 🌀' },
    { limite: 2100, nome: 'Platina III 🌀' },
    { limite: 2700, nome: 'Platina IV 🌀' },
    { limite: 3300, nome: 'Diamante I 💎' },
    { limite: 3900, nome: 'Diamante II 💎' },
    { limite: 4500, nome: 'Diamante III 💎' },
    { limite: 5000, nome: 'Diamante IV 💎' },
    { limite: 5500, nome: 'Paladino I 🔮' },
    { limite: 6500, nome: 'Paladino II 🔮' },
    { limite: 7500, nome: 'Paladino III 🔮' },
    { limite: 9000, nome: 'Paladino IV 🔮' },
    { limite: 10500, nome: 'Mestre I ❤️‍🔥' },
    { limite: 12000, nome: 'Mestre II ❤️‍🔥' },
    { limite: 13500, nome: 'Mestre III ❤️‍🔥' },
    { limite: 15000, nome: 'Mestre IV ❤️‍🔥' },
    { limite: 20000, nome: 'Mestre V ❤️‍🔥' },
    { limite: 25000, nome: 'Desafiante I 👑' },
    { limite: 30000, nome: 'Desafiante II 👑' },
    { limite: 35000, nome: 'Desafiante III 👑' },
    { limite: 40000, nome: 'Desafiante IV 👑' },
    { limite: 50000, nome: 'Desafiante V 👑' },
    { limite: 100000, nome: 'Usuário Superior 🎓' },
    { limite: 1000000, nome: 'Grande Mestre 🪩' },
    { limite: 5000000, nome: '⚜️✘‿✘BLACKOUT✘‿✘⚜️' },
    { limite: 10000000, nome: 'Veterano 🎩' }
  ];

  for (const p of patentes) {
    if (contador < p.limite) {
      newpatente = p.nome;
      break;
    }
  }

  // 🧩 Avatar com fallback
  let perfil;
  try {
    perfil = await client.profilePictureUrl(sender, 'image');
    if (perfil.includes("pps.whatsapp.net")) {
      console.log(chalk.yellow("⚠️ [LEVEL] Avatar do WhatsApp padrão detectado."));
      perfil = 'https://i.imgur.com/gfSPmDU.jpeg';
    }
  } catch {
    perfil = 'https://i.imgur.com/gfSPmDU.jpeg';
  }

  // 🌌 Fundo e API
  const fundo = 'https://i.imgur.com/Q2bcpct.jpeg';
  const canvasUrl = `${BLACKOUT_API}/api/canva/level?nome=${encodeURIComponent(nome)}&avatar=${encodeURIComponent(perfil)}&fundo=${encodeURIComponent(fundo)}&level1=${level}&level2=${contador}&apikey=${BLACKOUT_KEY}`;

  console.log(chalk.blue("🧩 [LEVEL] URL gerada para API:"), canvasUrl);

  // 🖼️ Geração e envio da imagem
  try {
    const response = await fetch(canvasUrl);
    console.log(chalk.magenta("📡 [LEVEL] Status da API:"), response.status, response.statusText);

    if (!response.ok) throw new Error(`Erro HTTP ${response.status}`);

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.startsWith("image")) {
      const erroApi = await response.text();
      console.log(chalk.red("❌ [LEVEL] Resposta inesperada da API:"), erroApi);
      throw new Error("A API não retornou uma imagem válida.");
    }

    const imageBuffer = await response.buffer();
    console.log(chalk.green("✅ [LEVEL] Imagem recebida com sucesso! Tamanho:"), imageBuffer.length, "bytes");

    await client.sendMessage(from, {
      image: imageBuffer,
      caption: `╔═════════════════════
║̇ *_👾STATUS LEVEL BLACKOUT👾_*
╚═════════════════════

┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
┃╔═*¨✘‿✘¨*
┃│🪀⋟ 👤 Nome: *${nome}*
┃│🪀⋟ 🏅 Patente: *${newpatente}*
┃│🪀⋟ 💠 Level: *${level}*
┃│🪀⋟ 💰 BlackoutCoins: *${contador}*
┃╚══*¨✘‿✘¨*
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─\n\n*ʙᴀꜱᴇ 👾ᴅᴇʟᴛᴀ👾 ᴍᴀᴛʀɪx*`,
      mentions: [sender]
    }, { quoted: seloMeta });

    console.log(chalk.greenBright("🚀 [LEVEL] Cartão de level enviado com sucesso!"));

  } catch
 (e) {
    console.log(chalk.red("❌ [LEVEL] Erro ao gerar/enviar imagem:"), 
e);
    enviar('❌ Erro ao gerar o cartão de level.\nVerifique o nome, avatar ou tente novamente mais tarde.');
  }

  break;
}




/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧CASES LOGOS ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'travazapimg'://Tosh Blackout 
try {
enviar('procurando sua imagem trava zap');
const toshiruzresponse = await fetch(`${BLACKOUT_API}/api/imagem/travaZapImg?apikey=${BLACKOUT_KEY}`);
const data = await toshiruzresponse.json();
if (!data?.data?.imagemUrl) { 
return enviar('Nao foi possível achar a imagem');
}
await client.sendMessage(from, { image: { url: data.data.imagemUrl }, caption: `Aqui sua imagem Trava Zap ` }, { quoted: seloMeta });
} catch (err) {
console.error('[ERRO TRAVAZAPIMG]', err);
enviar('Erro na API caiu');
}
break

case 'criarimg'://Tosh Blackout 
if (!q) return enviar(`Exemplo: ${prefix + comando} gato rosa`);
enviar(enviar.espere);
try {
const toshiruzUrl = `${BLACKOUT_API}/api/ai/imagem/imagemAi?query=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { image: { url: toshiruzUrl }, caption: `Imagem gerada para: *${q}*` }, { quoted: seloMeta }); } catch (e) { console.error(e);
enviar(mess.error());
}
break;

case 'logoanonimos':
case 'toshiruslogo'://Tosh Blackout 
try {
if (!q) return enviar(`escreva seu testo pra fazer sua logo exemplo ${prefix}logoanomus Tosh Blackout`);
enviar('Aguarde estou gerando sua logo anonimos');
const logoUrl = `${BLACKOUT_API}/api/imagem/logo/logo?query=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { image: { url: logoUrl },
caption: `Aqui esta sua logo anônimos\n\n*Texto:* ${q}` }, { quoted: seloMeta });
} catch (err) { console.error('[ERRO LOGO]', err);
enviar('erro api caiu tente novamente maís tarde');
}
break;

case 'logoespectro':
case 'toshiruslogo2'://Tosh Blackout 
try {
if (!q) return enviar(`escreva seu testo pra fazer sua logo exemplo ${prefix}logoespectro Tosh Blackout`);
enviar('Aguarde estou gerando sua logo anonimos');
const logoUrl = `${BLACKOUT_API}/api/imagem/logo/logo2?query=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { image: { url: logoUrl },
caption: `Aqui esta sua logo espectro\n\n*Texto:* ${q}` }, { quoted: seloMeta });
} catch (err) { console.error('[ERRO LOGO]', err);
enviar('erro api caiu tente novamente maís tarde');
}
break;

case 'logosuweg':
case 'toshiruslogo2'://Tosh Blackout 
try {
if (!q) return enviar(`escreva seu testo pra fazer sua logo exemplo ${prefix}logosuweg Tosh Blackout`);
enviar('Aguarde estou gerando sua logo anonimos');
const logoUrl = `${BLACKOUT_API}/api/imagem/logo/logo3?query=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { image: { url: logoUrl },
caption: `Aqui esta sua logo suweg\n\n*Texto:* ${q}` }, { quoted: seloMeta });
} catch (err) { console.error('[ERRO LOGO]', err);
enviar('erro api caiu tente novamente maís tarde');
}
break;

case 'logoshacker':
case 'toshiruslogo4'://Tosh Blackout 
try {
if (!q) return enviar(`escreva seu testo pra fazer sua logo exemplo ${prefix}logoshacker Tosh Blackout`);
enviar('Aguarde estou gerando sua logo anonimos');
const logoUrl = `${BLACKOUT_API}/api/imagem/logo/logo4?query=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { image: { url: logoUrl },
caption: `Aqui esta sua logo hacker\n\n*Texto:* ${q}` }, { quoted: seloMeta });
} catch (err) { console.error('[ERRO LOGO]', err);
enviar('erro api caiu tente novamente maís tarde');
}
break;

case 'logostrava':
case 'toshiruslogo5'://Tosh Blackout 
try {
if (!q) return enviar(`escreva seu testo pra fazer sua logo exemplo ${prefix}logostrava Tosh Blackout`);
enviar('Aguarde estou gerando sua logo anonimos');
const logoUrl = `${BLACKOUT_API}/api/imagem/logo/logo5?query=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { image: { url: logoUrl },
caption: `Aqui esta sua logo trava\n\n*Texto:* ${q}` }, { quoted: seloMeta });
} catch (err) { console.error('[ERRO LOGO]', err);
enviar('erro api caiu tente novamente maís tarde');
}
break;

case 'venomlogo1'://Tosh Blackout 
try {//api venom apis
if (args.length < 1) return enviar('Qual o nome?');
const teks = body.slice(7);
if (teks.length > 10) return enviar('O texto é longo, máximo 10 caracteres.');
enviar('*Estou fazendo, se der erro tente novamente ✓*');
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`);
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) {
console.error('Erro no comando venom1:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;

case 'venomlogo2'://Tosh Blackout 
try {//api venom apis                      
if (args.length < 1) return enviar('qual o nome?')
teks = body.slice(7)
if (teks.length > 10) return enviar('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) {
console.error('Erro no comando venomlogo2:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;

case 'venomlogo3'://Tosh Blackout 
try {//api venom apis       
if (args.length < 1) return enviar('qual o nome?')
teks = body.slice(7)
if (teks.length > 10) return enviar('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) {
console.error('Erro no comando venomlogo3:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;
					
case 'venomlogo4'://Tosh Blackout 
try {//api venom apis       
if (args.length < 1) return enviar('qual o nome?')
teks = body.slice(7)
if (teks.length > 10) return enviar('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=center&text.0.position.x=11%25&text.0.position.y=22%25&text.0.size=20&text.0.color=241b1b&text.0.opacity=33&text.0.font.family=Rock%20Salt&text.0.font.style=italic&text.0.background.opacity=49`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) {
console.error('Erro no comando venomlogo4:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;
					
case 'venomlogo5'://Tosh Blackout 
try {//api venom apis       
if (args.length < 1) return enviar('qual o nome?')
teks = body.slice(7)
if (teks.length > 10) return enviar('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) { console.error('Erro no comando venomlogo5:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;

case 'venomlogo6'://Tosh Blackout 
try {//api venom apis       
if (args.length < 1) return enviar('qual o nome?')
teks = body.slice(7)
if (teks.length > 10) return enviar('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) { console.error('Erro no comando venomlogo6:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;

case 'venomlogo7'://Tosh Blackout 
try {//api venom apis       
if (args.length < 1) return enviar('qual o nome?')
teks = body.slice(7)
if (teks.length > 10) return enviar('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) { console.error('Erro no comando venomlogo7:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;

case 'venomlogo8'://Tosh Blackout 
try {//api venom apis       
if (args.length < 1) return enviar('qual o nome?')
teks = body.slice(7)
if (teks.length > 10) return enviar('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) { console.error('Erro no comando venomlogo8:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;

case 'venomlogo9'://Tosh Blackout 
try {//api venom apis                
if (args.length < 1) return enviar('qual o nome?')
teks = body.slice(7)
if (teks.length > 10) return enviar('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) { console.error('Erro no comando venomlogo8:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;

case 'venomlogo10'://Tosh Blackout 
try {//api venom apis                
if (args.length < 1) return enviar('qual o nome?')
teks = body.slice(7)
if (teks.length > 10) return enviar('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis11.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=60%25&text.0.size=64&text.0.color=0071ff&text.0.font.family=Old%20Standard%20TT&text.0.font.style=italic&text.0.background.opacity=55&text.0.outline.color=00d0ff&text.0.outline.width=19&text.0.outline.blur=30`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) { console.error('Erro no comando venomlogo10:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;
					
case 'venomlogo11'://Tosh Blackout 
try {//api venom apis          
if (args.length < 1) return enviar('qual o nome?')
teks = body.slice(7)
if (teks.length > 10) return enviar('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) { console.error('Erro no comando venomlogo11:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;
					
case 'venomlogo12'://Tosh Blackout 
try {//api venom apis          
if (args.length < 1) return enviar('qual o nome?')
teks = body.slice(7)
if (teks.length > 10) return enviar('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) { console.error('Erro no comando venomlogo12:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;
					
case 'venomlogo13'://Tosh Blackout 
try {//api venom apis          
if (args.length < 1) return enviar('qual o nome?')
teks = body.slice(7)
if (teks.length > 10) return enviar('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) { console.error('Erro no comando venomlogo13:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;
					
case 'venomlogo14'://Tosh Blackout 
try {//api venom apis          
if (args.length < 1) return enviar('qual o nome?')
teks = body.slice(7)
if (teks.length > 10) return enviar('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) { console.error('Erro no comando venomlogo14:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;
					
case 'venomlogo15'://Tosh Blackout 
try {//api venom apis         
if (args.length < 1) return enviar('qual o nome?')
teks = body.slice(7)
if (teks.length > 10) return enviar('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
const toshiruz = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${encodeURIComponent(teks)}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
await client.sendMessage(from, { image: toshiruz }, { quoted: seloMeta });
} catch (e) { console.error('Erro no comando venomlogo15:', e);
enviar('Ocorreu um erro ao gerar a imagem. Tente novamente.');
}
break;

/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧JOGOS  ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
case 'jogodavelha':
try {
if (!isGroup) return enviar(mensagens.isGroup);
if (!isModobn) return enviar(mensagens.isModobn);
if (!sender || !info.message) return;
let desafiante = sender;
let desafiado = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || null;
if (!desafiado) return enviar("Marque junto com o comando o @ do usuário que deseja desafiar.");
const existeNoGrupo = await mencaoLid(desafiado);
if (!existeNoGrupo) return enviar("O usuário marcado não está no grupo ou não é válido.");
if (!joguinhodavelhajs.includes(desafiante)) joguinhodavelhajs.push(desafiante);
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs, null, 2));
if (!joguinhodavelhajs2.includes(from)) joguinhodavelhajs2.push(from);
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2, null, 2));
const gamePath = `./database/usuarios/tictactoe/db/${from}.json`;
if (fs.existsSync(gamePath)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix || [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
const Xformat = boardnow.X ? boardnow.X.split('@')[0] : "desconhecido";
const Oformat = boardnow.O ? boardnow.O.split('@')[0] : "desconhecido";
const chatMove = `『 *_👾 JOGO DA VELHA 👾_* 』\n` +
 `—\n💢 Já existe um jogo ativo neste grupo!\n` +
 `🆚 *@${Xformat}* VS *@${Oformat}*\n` +
 `🎮 Sua vez: *@${boardnow.turn === "X" ? Xformat : Oformat}*\n` +
 `—\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n` +
 `${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n` +
 `${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
await client.sendMessage(from, { text: chatMove, mentions: [boardnow.X, boardnow.O].filter(Boolean) }, { quoted: info });
return;
}
const boardnow = setGame(`${from}`);
boardnow.status = false;
boardnow.X = desafiante;
boardnow.O = desafiado;
boardnow._matrix = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]; // inicializa matriz
fs.writeFileSync(gamePath, JSON.stringify(boardnow, null, 2));
const desafianteFormatado = desafiante ? desafiante.split('@')[0] : "desconhecido";
const desafiadoFormatado = desafiado ? desafiado.split('@')[0] : "desconhecido";
const msgDesafio = `『 *🪀 DESAFIO JOGO DA VELHA 🪀* 』\n—\n` +
`@${desafianteFormatado} está te desafiando para uma partida de *Jogo da Velha*!\n` +
 `🎮 Responda *『S』* para aceitar ou *『N』* para recusar.\n` +
 `—\nCaso o jogo bugue, use *${prefix}rv* para resetar.`;

mencionarIMG(msgDesafio || "Desafio de Jogo da Velha!", null, [desafiante, desafiado].filter(Boolean));
} catch (err) {
console.error("Erro na case 'jogodavelha':", err);
enviar("Ocorreu um erro ao iniciar o Jogo da Velha.");
}
break;

case 'resetarvelha': case 'resetavelha': case 'resetarv': case 'resetav': case 'resetvelha': case 'rv': 
if (!isModobn) return enviar(mensagens.isModobn);
if(!isJoguin && !isGroupAdmins) return enviar(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.`)
if(fs.existsSync("./database/usuarios/tictactoe/db/" + from + ".json")) {
DLT_FL("./database/usuarios/tictactoe/db/" + from + ".json");
enviar(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
enviar(`Não a nenhuma sessão em andamento...`);
}
break

case 'addpalavras_forca': 
case 'addpalavras_f':  
if (!isDono) return enviar(mensagens.isDono);
if (!q || !q.includes("|")) 
return enviar(`prefixo mais ${comando} palavra`);
const [ttl, tema, dc] = q.toLowerCase().trim().split("|");
if (!ttl || !tema || !dc)
return enviar(`adicionar tema da forca`);
const palavrasExistentes = palavrasfr.map(i => i.plvr.toLowerCase().trim());
if (palavrasExistentes.includes(ttl.toLowerCase().trim())) 
return enviar(mess.inUseWords_Forca());
palavrasfr.push({ plvr: ttl.trim(), tema: tema.trim(), dica: dc.trim() });
fs.writeFileSync("./database/usuarios/palavras_forca.json", JSON.stringify(palavrasfr, null, 2));
const frasesSucesso = [
"✅ Palavra adicionada com sucesso! O jogo vai ficar ainda mais divertido!",
"🎉 Boa! Palavra registrada com sucesso!",
"👍 Palavra adicionada! Agora o desafio ficou mais interessante!",
"✨ Feito! Palavra salva no banco de dados da forca!",
"💡 Nova palavra adicionada! Que vença o melhor jogador!" ];
const fraseRandom = frasesSucesso[Math.floor(Math.random() * frasesSucesso.length)];
enviar(fraseRandom);
break;

case 'rmpalavra_f': case 'rmpalavra_forca':
if (!isDono) return enviar("👾Apenas o dono do bot pode remover palavras da forca!");
if (!q) return enviar("👾Você precisa informar a palavra que deseja remover.\n\nExemplo:\n*"+prefix+"rmpalavra_f casa*");
try {
var i5 = palavrasfr.map(i => i.plvr.toLowerCase()).indexOf(q.trim().toLowerCase());
if (i5 === -1) {
return enviar(`👾A palavra *${q}* não foi encontrada no banco de dados da forca.`);
}
palavrasfr.splice(i5, 1);
fs.writeFileSync("./database/usuarios/palavras_forca.json", JSON.stringify(palavrasfr, null, 2));
enviar(`✅ Palavra *${q}* removida com sucesso do banco da forca!`);
} catch (e) {
console.log(e);
enviar("👾Ocorreu um erro ao remover a palavra. Verifique o console para mais detalhes.");
}
break;
    
case 'rv-forca': case 'resetforca': 
if(!isGroup) return enviar(mensagens.isGroup);
if(dataGp[0].forca_inc == false) return envia(mess.gameForcaNotStarted(prefix))
rv_forca()
enviar(`${NomeDono} forca resetada dom sucesso`)
break
  
case 'jogodaforca': case 'ver_forca': case 'iniciar_forca': 
case 'jogodaforca':
if(!isGroup) return enviar(mensagens.isGroup);
try {
if (dataGp[0].forca_inc) 
return enviar(`Já existe um jogo da forca em andamento! Use *${prefix}parar_forca* para encerrar o atual.`);
if (!dataGp[0].forca_inc) {
rv_forca();
var DM_FR = dataGp[0].forca_ofc[0];
dataGp[0].forca_inc = true;
setGp(dataGp);
await sleep(300);
let linha_fr = "";
for (let i of DM_FR.palavra) {
linha_fr += ` ${i}`;
}
enviar(`🎯 *JOGO DA FORCA INICIADO!*\n\n🧩 Tema: ${DM_FR.tema}\n\n${linha_fr}\n\nDigite exemplo ${prefix}r-forca a letras para tentar adivinhar!\nPara desistir, use: *${prefix}parar_forca*`);
}} catch (e) {
console.log(e);
enviar("Ocorreu um erro ao iniciar o jogo da forca. Tente novamente mais tarde.");
}
break;

case 'r-forca': case 'r-f':
if (!isGroup) return enviar(mensagens.isGroup);
if (!dataGp[0].forca_inc) return enviar("👾Nenhum jogo da forca está em andamento neste grupo!");
if (!q || !q.trim()) return enviar("📝 Digite a letra que deseja responder...");
const q2 = q.trim().toLowerCase();
if (ANT_LTR_MD_EMJ(q2) || Number(q2)) 
return enviar("🚫 Não são permitidas letras modificadas, emojis ou números.");
if (q2.length > 2 && q2.length < 3)
return enviar("Digite apenas uma letra ou a palavra completa.");
const DM_FR_LOCAL = dataGp[0].forca_ofc[0];
if (DM_FR_LOCAL.escreveu.includes(q2))
return enviar("Esta letra já foi utilizada!");
const ERRQ = DM_FR_LOCAL.palavra_ofc.includes(q2) ? 0 : 1;
const ERROS = DM_FR_LOCAL.erros;
DM_FR_LOCAL.escreveu.push(q2);
setGp(dataGp);
const PSC = [];
if (DM_FR_LOCAL.palavra_ofc.includes(q2)) {
for (let i = 0; i < DM_FR_LOCAL.palavra_ofc.length; i++) {
if (DM_FR_LOCAL.palavra_ofc[i] == q2) {
PSC.push(i);
DM_FR_LOCAL.acertos += 1;
}}
for (let i of PSC) DM_FR_LOCAL.palavra[i] = q2;
setGp(dataGp);
}
await sleep(300);
const linha_fr = DM_FR_LOCAL.palavra.join(" ");
const letra_ut = DM_FR_LOCAL.escreveu.join(", ");
if (q2.length > 2) enviar("🤔 Tentando acertar a palavra completa... corajoso(a)!");
await sleep(500);
if (DM_FR_LOCAL.palavra_ofc.includes(q2) || (q2.length > 2 && q2 == DM_FR_LOCAL.palavra_ofc)) {
enviar( q2.length > 2
 ? "🎉 Você acertou a palavra inteira! Parabéns! O jogo será reiniciado..."
 : DM_FR_LOCAL.acertos == DM_FR_LOCAL.palavra_ofc.length  ? `🏆 Parabéns! Você completou a palavra: < ${DM_FR_LOCAL.palavra_ofc} >. Reiniciando o jogo...`
 : "✅ Letra correta! Continue assim!" );
if (q2.length > 2 || DM_FR_LOCAL.acertos == DM_FR_LOCAL.palavra_ofc.length) {
return rv_forca();
}
await sleep(200);
enviar(`📖 Palavra: ${linha_fr}\n Erros: ${ERROS}\n📝 Letras usadas: ${letra_ut}`);
} else {
enviar( q2.length > 2
 ? "💀 Errou a palavra inteira! Jogo reiniciado..."
 : ERROS + ERRQ == 6
 ? "😢 Você atingiu 6 erros. Jogo encerrado!"
 : "❌ Letra errada!" );
DM_FR_LOCAL.erros += 1;
setGp(dataGp);
if (q2.length > 2 || ERROS + ERRQ == 6) {
return rv_forca();
}
await sleep(200);
enviar(`📖 Palavra: ${linha_fr}\n❌ Erros: ${DM_FR_LOCAL.erros}\n📝 Letras usadas: ${letra_ut}`);
}
break;






/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧CMD-PREMIUM  ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/

case 'serpremium': case 'serprem': {//Tosh Blackout 
try {
if (!isDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
return enviar(`❗ Esse comando é exclusivo para meu dono oficial: ${numerodono}`);
const rawTarget = (args && args.length) ? args.join(" ") : numerodono;
let resolved = obterMembroValido(rawTarget) || null;
if (!resolved) {
const numeroLimpo = rawTarget.toString().replace(/[^0-9]/g, '');
if (!numeroLimpo) return enviar('Número/menção inválida.');
resolved = `${numeroLimpo}@s.whatsapp.net`;
}
if (!Array.isArray(premium)) premium = [];
if (!premium.includes(resolved)) { premium.push(resolved);
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium, null, 2));
}
let mentionId = resolved; // JID completo
const numeroLimpo = resolved.split('@')[0];
const membroValido = obterMembroValido(numeroLimpo);
if (membroValido) mentionId = membroValido;
const texto = `🪀 Pronto *@${numeroLimpo}*, você foi adicionado à lista premium.`;
await client.sendMessage(from, { text: texto, mentions: [mentionId] }, { quoted: seloMeta });
} catch (err) {
console.error(err);
enviar('❗ Erro ao adicionar premium. Verifique o console.');
}}
break;

case 'listarpremium': case 'listapremiumteste': {
try {
if (!Array.isArray(premium)) premium = [];
let lines = [];
const total = premium.length;
for (let i = 0; i < total; i++) {
const entry = premium[i];
let jid = null;
let expires = null;
if (typeof entry === 'string') {
jid = entry;
} else if (entry && typeof entry === 'object' && entry.jid) {
jid = entry.jid;
expires = entry.expires || null;
} else {
const maybe = String(entry).replace(/[^0-9]/g, '');
if (maybe) jid = `${maybe}@s.whatsapp.net`;
}
if (!jid) continue;
let displayName = null;
const memberFound = Array.isArray(groupMembers) ? groupMembers.find(m => m.id === jid || m.lid === jid || m.phoneNumber === jid.split('@')[0] ) : null;
if (memberFound) { displayName = memberFound.pushname ||
memberFound.notify || memberFound.name || memberFound.id?.split('@')[0] };
if (!displayName && client?.getName) {
try {
const nome = await client.getName(jid);
if (nome && nome.trim().length > 0) { displayName = nome.trim();
}
} catch {
}}
if (!displayName && client?.onWhatsApp) {
try {
const check = await client.onWhatsApp(jid);
if (check && check[0]?.notify) displayName = check[0].notify;
} catch {
}}
if (!displayName) {
const numero = jid.split('@')[0];
displayName = '+' + numero.replace(/^(\d{2})(\d{2})(\d+)/, '$1 $2 $3');
}
let expiresText = 'Sem expiração';
if (expires) {
const now = Date.now();
const diff = expires - now;
expiresText = diff <= 0 ? 'Expirado' : `${Math.floor(diff / (1000 * 60 * 60 * 24))} dia(s)`;
}
lines.push(`*[${i + 1}]* ${displayName}\n└ ${expiresText}`);
}
const header =
`👑 *🪀LISTA DE USUÁRIOS PREMIUM🪀*

📊 Total: *${total} usuário${total !== 1 ? 's' : ''}*
──────────────────────────────
`;
const body = lines.length ? lines.join('\n\n') : 'Nenhum usuário premium encontrado.';
await client.sendMessage(from, { text: header + '\n' + body }, { quoted: seloMeta });
} catch (err) {
console.error(err);
enviar('❗ Erro ao listar premium. Verifique o console.');
}}
break;

case 'addpremium': 
if (!isDono) return enviar(`Somente meu dono ${NomeDono} pode utilizar este comando.`);
let barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/");
let [nmr, tempo50] = barra.split('/');
if (!nmr || !tempo50) {
const exemplo = `📘 *Modo de uso correto:*\n` +
`> ${prefix + comando} @${numerodono.split('@')[0]}/30\n\n` +
`Para colocar premium *sem expiração*, use o número *0* de dias.`;
return client.sendMessage(from, { text: exemplo, mentions: [numerodono + "@s.whatsapp.net"] }, { quoted: seloMeta });
}
let usur = nmr.includes('@') ? nmr.replace(/[^0-9]/g, '') + "@s.whatsapp.net" : nmr.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
let mega = Number(tempo50) > 0 ? false : true;
let dvip = moment.tz('America/Sao_Paulo').format('DD');
let jaPremium = premium.find(p => p.id === usur);
if (jaPremium) {
if (jaPremium.infinito === true)
return client.sendMessage(from, { text: `O usuário @${usur.split("@")[0]} já possui *Premium Infinito*!`, mentions: [usur] }, { quoted: info });
jaPremium.dias += Number(tempo50);
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium, null, 2));
return client.sendMessage(from, { text: `⏳ Foram adicionados *${tempo50} dia${Number(tempo50) > 1 ? 's' : ''}* ao usuário @${usur.split("@")[0]}.`, mentions: [usur] }, { quoted: seloMeta });
}
premium.push({ id: usur, dias: Number(tempo50), save: Number(dvip), infinito: mega });
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium, null, 2));
let msg = Number(tempo50) > 0 
 ? `🎟️ O usuário @${usur.split("@")[0]} foi adicionado à lista Premium por *${tempo50} dia${Number(tempo50) > 1 ? 's' : ''}*!`
 : `💎 O usuário @${usur.split("@")[0]} agora possui *Premium Infinito*!`;
await client.sendMessage(from, { text: msg, mentions: [usur] }, { quoted: seloMeta });
break;

case 'delpremium':
if (!isDono) return enviar(`Somente meu dono ${NomeDono} pode utilizar este comando.`);
const userDel = info.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
if (!userDel) return enviar(`Marque o usuário que deseja remover da lista premium.\n\nExemplo:\n> ${prefix + comando} @usuário`);
const index = premium.findIndex(p => p.id === userDel);
if (index === -1)
return client.sendMessage(from, { text: `O usuário @${userDel.split('@')[0]} não está na lista de Premium.`, mentions: [userDel] }, { quoted: info });
premium.splice(index, 1);
fs.writeFileSync('./database/usuarios/premium.json', JSON.stringify(premium, null, 2));
await client.sendMessage(from, { text: `✅ O usuário @${userDel.split('@')[0]} foi removido da lista Premium com sucesso!`, mentions: [userDel] }, { quoted: seloMeta });
break;

case 'premiumlist':
if (!isDono && !isCmdPremium)
return enviar(`Este comando é exclusivo para usuários *Premium* selecionados pelo meu dono ${NomeDono}.`);
if (!premium || premium.length === 0)
return enviar(`📭 Não existe nenhum usuário na lista Premium atualmente.`);
let lista = `👑 *🪀LISTA DE USUÁRIOS PREMIUM🪀*\n\n`;
lista += `📊 Total: *${premium.length} usuário${premium.length > 1 ? 's' : ''}*\n`;
lista += `──────────────────────────────\n\n`;
lista += premium.map((v, i) => {
const id = v.id ? v.id : 'ID inválido';
const user = v.id ? `@${id.split('@')[0]}` : 'usuário desconhecido';
const status = v.infinito
 ? `💎 Premium Infinito`
 : `⏳ Expira em ${v.dias || 0} dia${v.dias > 1 ? 's' : ''}`;
return `*[${i + 1}]* ${user}\n└ ${status}`;
}).join('\n\n');
const mentions = premium
 .filter(v => v.id) // só menciona quem tem ID válido
 .map(v => v.id);
await client.sendMessage(from, { text: lista, mentions }, { quoted: info });
break;

case 'nome': 
if (isCmdPremium) { return enviar(` esse comando é só para usuário Premium escolhido pelo meu dono ${NomeDono}`)
if (!args[0]) return enviar(`Informe um nome para consultar.\n\n📌 Exemplo: ${prefixo + comando} jair messias bolsonaro`)
try {
const nome = encodeURIComponent(args.join(' '))
const url = `https://world-ecletix.onrender.com/api/consulta/nome/${nome}`
const res = await fetch(url)
const data = await res.json()
if (!data.status || !data.resultado) {
return enviar('Nenhum resultado encontrado para esse nome.')
}
const resultado = data.resultado
 .replace(/\n+/g, '\n')
 .replace(/RESULTADO:\s*/g, '🟢 Resultado:')
 .replace(/NOME:\s*/g, '👤 Nome:')
 .replace(/CPF:\s*/g, '🪪 CPF:')
 .replace(/SEXO:\s*/g, '⚧ Sexo:')
 .replace(/NASCIMENTO:\s*/g, '🎂 Nascimento:')
 .trim()
const resposta = `🔍 *👾CONSULTA POR NOME👾*\n\n${resultado}`
await enviar(resposta)
} catch (err) {
console.error(err)
enviar('Ocorreu um erro ao processar a consulta.')
}}
break

case 'cpf': 
if (isCmdPremium) { return enviar(` esse comando é só para usuário Premium escolhido pelo meu dono ${NomeDono}`)
if (!args[0]) return enviar(`Informe um CPF para consultar.\n\n📌 Exemplo: ${prefixo + comando} 45317828791`)
try {
const cpf = args[0].replace(/\D/g, '')
if (cpf.length < 11) return enviar('CPF inválido. Verifique e tente novamente.')
const url = `https://world-ecletix.onrender.com/api/consulta/cpf/${cpf}`
const res = await fetch(url)
const data = await res.json()
if (!data.status || !data.resultado) {
return enviar('Nenhum resultado encontrado para esse CPF.')
}
const resultado = data.resultado
 .replace(/\n{2,}/g, '\n')
 .replace(/CPF:\s*/g, '🪪 CPF:')
 .replace(/PIS:\s*/g, '💳 PIS:')
 .replace(/TÍTULO ELEITORAL:\s*/g, '🗳️ Título Eleitoral:')
 .replace(/RG:\s*/g, '🪪 RG:')
 .replace(/DATA DE EXPEDIÇÃO:\s*/g, '📅 Data de Expedição:')
 .replace(/ORGÃO EXPEDIDOR:\s*/g, '🏢 Orgão Expedidor:')
 .replace(/UF - RG:\s*/g, '📍 UF-RG:')
 .replace(/NOME:\s*/g, '👤 Nome:')
 .replace(/NASCIMENTO:\s*/g, '🎂 Nascimento:')
 .replace(/IDADE:\s*/g, '📆 Idade:')
 .replace(/SIGNO:\s*/g, '♈ Signo:')
 .replace(/MÃE:\s*/g, '👩 Mãe:')
 .replace(/PAI:\s*/g, '👨 Pai:')
 .replace(/NACIONALIDADE:\s*/g, '🌎 Nacionalidade:')
 .replace(/ESCOLARIDADE:\s*/g, '🎓 Escolaridade:')
 .replace(/ESTADO CIVIL:\s*/g, '💍 Estado Civil:')
 .replace(/PROFISSÃO:\s*/g, '💼 Profissão:')
 .replace(/RENDA PRESUMIDA:\s*/g, '💰 Renda Presumida:')
 .replace(/STATUS RECEITA FEDERAL:\s*/g, '🏛️ Receita Federal:')
 .replace(/SCORE:\s*/g, '📊 Score:')
 .replace(/FAIXA DE RISCO:\s*/g, '⚠️ Faixa de Risco:')
 .replace(/E-MAILS:/g, '📧 Emails:')
 .replace(/ENDEREÇOS:/g, '🏠 Endereços:')
 .replace(/TELEFONES PROPRIETÁRIO:/g, '📱 Telefones do Proprietário:')
 .replace(/TELEFONES COMERCIAIS:/g, '🏢 Telefones Comerciais:')
 .replace(/TELEFONES REFERENCIAIS:/g, '📞 Telefones Referenciais:')
 .replace(/POSSÍVEIS PARENTES:/g, '👪 Possíveis Parentes:')
 .replace(/POSSÍVEIS VIZINHOS:/g, '🚪 Possíveis Vizinhos:')
 .replace(/PARTICIPAÇÃO SOCIETÁRIA:/g, '🏢 Participações Societárias:')
 .replace(/VÍNCULOS EMPREGATÍCIOS:/g, '📂 Vínculos Empregatícios:')
 .trim()
const resposta = `🔍 *👾CONSULTA POR CPF👾*\n\n${resultado}`
await enviar(resposta)
} catch (err) {
console.error(err)
enviar('Ocorreu um erro ao processar a consulta.')
}}
break

case 'placa': 
if (isCmdPremium) { return enviar(` esse comando é só para usuário Premium escolhido pelo meu dono ${NomeDono}`)
if (!args[0]) return enviar(`Informe uma placa para consultar.\n\n📌 Exemplo: ${prefixo + comando} ABC1234`)
try {
const placa = args[0].toUpperCase().replace(/[^A-Z0-9]/g, '')
if (placa.length < 7) return enviar('Placa inválida. Verifique e tente novamente.')
const url = `https://world-ecletix.onrender.com/api/consulta/placa/${placa}`
const res = await fetch(url)
const data = await res.json()
if (!data.status || !data.resultado) {
return enviar('Nenhum resultado encontrado para essa placa.')
}
const resultado = data.resultado
 .replace(/\n{2,}/g, '\n')
 .replace(/PLACA:\s*/g, '🚘 Placa:')
 .replace(/SITUAÇÃO:\s*/g, '⚠️ Situação:')
 .replace(/RESTRIÇÃO 1:\s*/g, '🚫 Restrição 1:')
 .replace(/RESTRIÇÃO 2:\s*/g, '🚫 Restrição 2:')
 .replace(/RESTRIÇÃO 3:\s*/g, '🚫 Restrição 3:')
 .replace(/RESTRIÇÃO 4:\s*/g, '🚫 Restrição 4:')
 .replace(/MARCA:\s*/g, '🏷️ Marca:')
 .replace(/MODELO:\s*/g, '🚗 Modelo:')
 .replace(/COR:\s*/g, '🎨 Cor:')
 .replace(/ANO - FABRICAÇÃO:\s*/g, '🏭 Ano Fabricação:')
 .replace(/ANO - MODELO:\s*/g, '📅 Ano Modelo:')
 .replace(/MUNICIPIO:\s*/g, '🌆 Município:')
 .replace(/ESTADO:\s*/g, '🗺️ Estado:')
 .replace(/CHASSI:\s*/g, '🔩 Chassi:')
 .replace(/RENAVAM:\s*/g, '🪪 Renavam:')
 .replace(/DOC. FATURADO:\s*/g, '📄 Doc. Faturado:')
 .replace(/UF - FATURADO:\s*/g, '🏢 UF Faturado:')
 .replace(/MUNICIPIO - FAB.:\s*/g, '🌇 Município Fabricação:')
 .replace(/ESTADO - FAB.:\s*/g, '🗺️ Estado Fabricação:')
 .replace(/SEGMENTO:\s*/g, '🚙 Segmento:')
 .replace(/SUB SEGMENTO:\s*/g, '🚘 Subsegmento:')
 .replace(/GRUPO:\s*/g, '📦 Grupo:')
 .replace(/COMBUSTIVEL:\s*/g, '⛽ Combustível:')
 .replace(/POTENCIA:\s*/g, '⚙️ Potência:')
 .replace(/CILINDRADAS:\s*/g, '🔧 Cilindradas:')
 .replace(/CARROCERIA:\s*/g, '🚐 Carroceria:')
 .replace(/TIPO CARROCERIA:\s*/g, '🚗 Tipo Carroceria:')
 .replace(/ORIGEM:\s*/g, '🌍 Origem:')
 .replace(/EIXO TRASEIRO DIF.:\s*/g, '🛞 Eixo Traseiro:')
 .replace(/NÚM. MOTOR:\s*/g, '🔩 Nº Motor:')
 .replace(/TIPO DE VEICULO:\s*/g, '🚘 Tipo de Veículo:')
 .replace(/ESPECIE:\s*/g, '📋 Espécie:')
 .replace(/QUANTIDADE DE PASSAGEIROS:\s*/g, '🧍 Passageiros:')
 .replace(/ID IMPORTADORA:\s*/g, '🏭 ID Importadora:')
 .replace(/DI:\s*/g, '📁 DI:')
 .replace(/REGISTRO DI:\s*/g, '🗂️ Registro DI:')
 .replace(/UNIDADE LOCAL SRF:\s*/g, '🏢 Unidade SRF:')
 .replace(/ULTIMA ATUALIZAÇÃO:\s*/g, '🕒 Última Atualização:')
 .replace(/EMISSÃO ULTIMO CRV:\s*/g, '📄 Emissão Último CRV:')
 .replace(/__PROPRIETÁRIO__/g, '\n👤 *Proprietário*')
 .replace(/CPF\/CNPJ:\s*/g, '🪪 CPF/CNPJ:')
 .replace(/NOME:\s*/g, '👤 Nome:')
 .replace(/__POSSUIDOR__/g, '\n👥 *Possuidor*')
 .trim()

const resposta = `🔍 *👾CONSULTA POR PLACA👾*\n\n${resultado}`
await enviar(resposta)
} catch (err) {
console.error(err)
enviar('Ocorreu um erro ao processar a consulta.')
}}
break

case 'telefone': case 'numero': 
if (isCmdPremium) { return enviar(` esse comando é só para usuário Premium escolhido pelo meu dono ${NomeDono}`)
if (!args[0]) return enviar(`Informe um número de telefone para consultar.\n\n📌 Exemplo: ${prefixo + comando} 61993809056`)
try {
const telefone = args[0].replace(/[^0-9]/g, '')
if (telefone.length < 10) return enviar('Número de telefone inválido. Verifique e tente novamente.')
const url = `https://world-ecletix.onrender.com/api/consulta/telefone/${telefone}`
const res = await fetch(url)
const data = await res.json()
if (!data.status || !data.resultado) {
return enviar('Nenhum resultado encontrado para esse número.')
}
const resultado = data.resultado
 .replace(/\n{2,}/g, '\n')
 .replace(/TELEFONE:\s*/g, '📞 Telefone:')
 .replace(/NOME:\s*/g, '👤 Nome:')
 .replace(/CPF\/CNPJ:\s*/g, '🪪 CPF/CNPJ:')
 .replace(/LOGRADOURO:\s*/g, '🏠 Logradouro:')
 .replace(/NÚMERO:\s*/g, '🔢 Número:')
 .replace(/COMPLEMENTO:\s*/g, '📦 Complemento:')
 .replace(/BAIRRO:\s*/g, '🏘️ Bairro:')
 .replace(/CIDADE:\s*/g, '🌆 Cidade:')
 .replace(/ESTADO:\s*/g, '🗺️ Estado:')
 .replace(/CEP:\s*/g, '📮 CEP:')
 .trim()
const resposta = `🔍 *👾CONSULTA POR TELEFONE👾*\n\n${resultado}`
await enviar(resposta)
} catch (err) {
console.error(err)
enviar('Ocorreu um erro ao processar a consulta.')
}}
break






  


/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧CASES ACIMA  ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
default:
if (isCmd) {
reagir("👾");
const prefixoBuffer = fs.readFileSync('./arquivos/image/tumlb.jpg');
const mensagem = {
text: `  Bot: ${NomeDoBot}`,
contextInfo: {
externalAdReply: {
title: `Olá ${pushname} comando nao existe`,
body: `🪀Leia o  [ ${prefix}menu ]🪀`,
thumbnail: prefixoBuffer, // imagem local
mediaType: 1,
sourceUrl: 'https://api.blackout.toshiruz.site' }}, mentions: [sender] }; await client.sendMessage(from, mensagem, { quoted: seloMeta });
}
}



/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧COMANDOS SEM PREFIXO ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─tosh.id
*/




/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧MULTAR-DELT ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
function loadMuted() {
try {
const data = fs.readFileSync(mutedFile, 'utf8');
return JSON.parse(data);
} catch (err) {
console.log('[muted] Erro ao carregar arquivo:', err);
return [];
}}

const handleMutedMessages = async (message, client) => {
try {
if (!message || !client) return;
const from = message.key?.remoteJid;
const sender = message.key?.participant || message.key?.remoteJid;

const muted = loadMuted();
if (!Array.isArray(muted) || muted.length === 0) return;

const groupData = muted.find(g => g.jid === from);
if (!groupData || !Array.isArray(groupData.numbers)) return;
if (!groupData.numbers.includes(sender)) return;

await client.sendMessage(from, { delete: message.key }).catch(() => {});
console.log(`[muted] Mensagem de ${sender} apagada no grupo ${from}`);
} catch (err) {
console.log('[muted] Erro ao apagar mensagem de mutado:', err);
}};
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧.MODO ALUGUEL  ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
setInterval(async () => {
const agora = moment.tz('America/Sao_Paulo').format('YYYY-MM-DD');
  const dadosAluguel = JSON.parse(fs.readFileSync("./database/grupos/aluguel/aluguel.json"));

for (const grupo of dadosAluguel) {
if (moment(agora).isAfter(moment(grupo.expira_em))) {
try {
await client.sendMessage(grupo.id, {
text: `O período de aluguel do grupo *${grupo.nome}* expirou.\nestou saindo do grupo falar com meu dono ${NomeDono}  contato ${numerodono}... 🕒` });
await client.groupLeave(grupo.id);
const index = dadosAluguel.findIndex(g => g.id === grupo.id);
if (index !== -1) dadosAluguel.splice(index, 1);
fs.writeFileSync("./database/grupos/aluguel/aluguel.json", JSON.stringify(dadosAluguel, null, 2));
} catch (err) {
console.error(`Erro ao sair do grupo ${grupo.id}:`, err);
}}}
}, 60 * 60 * 1000); // Verifica a cada 1 hora
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧AUTO-REPO  ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
if (body.toLowerCase().startsWith('prefixo')) {
reagir('🪀')
if (!isAutorepo) return enviar(mensagens.isAutorepo);
const prefixoBuffer = fs.readFileSync('./arquivos/image/prefixo.jpg');
const mensagem = {
text: `Aqui neu prefixo [ ${prefix} ] mussarelo`,
contextInfo: {
externalAdReply: {
title: `${pushname}`,
body: `Bot: ${NomeDoBot}`,
thumbnail: prefixoBuffer, // imagem local
mediaType: 1,
sourceUrl: 'https://api.blackout.toshiruz.site' }}, mentions: [sender] }; await client.sendMessage(from, mensagem, { quoted: seloMeta });
}

if (body && body.toLowerCase().startsWith('conselho')) {
if(!isGroup) return enviar(mensagens.isGroup);
if (!isAutorepo) return enviar(mensagens.isAutorepo);
const conselhoBiblico = conselhos[Math.floor(Math.random() * conselhos.length)];
await enviar(conselhoBiblico);
}

//✘‿✘ PESQUISA AUDIO✘‿✘ 
if (body.toLowerCase().startsWith('tocar')) {
const q = body.slice(5).trim();
if(!isGroup) return enviar(mensagens.isGroup);
if (!isAutorepo) return enviar(mensagens.isAutorepo);
async function carregamento() {
const txt1 = `*_ʙᴀꜱᴇ 👾ᴅᴇʟᴛᴀ👾 ᴍᴀᴛʀɪx_*`;
const carre = [
        `${txt1}\n*Volume:* ■□□□□□□□🔊 10%`,
        `${txt1}\n*Volume:* ■■□□□□□□🔊 35%`,
        `${txt1}\n*Volume:* ■■■■□□□□🔊 51%`,
        `${txt1}\n*Volume:* ■■■■■□□□🔊 62%`,
        `${txt1}\n*Volume:* ■■■■■■□□🔊 80%`,
        `${txt1}\n*Volume:* ■■■■■■■□🔊 100%`,
        `${txt1}\n*Volume:* ■■■■■■■■MAX`,
        `@${sender.split("@")[0]}_\n *_enviando áudio volume no max_*`  ];
const { key } = await client.sendMessage( from,{ text: `Ok @${sender.split("@")[0]}_\n_• Obtendo os resultados da pesquisa..._`, mentions: [sender] }, { quoted: seloMeta });
for (let i = 0; i < carre.length; i++) { await new Promise(r => setTimeout(r, 700)); // tempo entre cada atualização
await client.sendMessage(from, { text: carre[i], mentions: [sender], edit: key });
}}
await carregamento();
if (!q) return enviar("Use: tocar nome da música 🎶");
enviar("🎧 Baixando sua música, aguarde um instante...");
const res = await fetch(`${BLACKOUT_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`);
const dados = await res.json();
const resultados = Array.isArray(dados?.resultado) ? dados.resultado : [];
if (!resultados.length) return enviar("Nenhum resultado encontrado.");
const video = resultados.find(v => v.videoId || v.url);
if (!video) return enviar("Vídeo não encontrado.");
if (video?.duration?.seconds >= 3600) return enviar("Vídeos acima de 1 hora não são suportados.");

const mensagem = `> *Música escolhida por:* ${pushname}\n\n🎵 ${video.title}\n📅 ${video.ago}\n👤 ${video.author?.name}\n\n🎚️ *Duração:* ${video.duration?.timestamp || '??'}\n\n${NomeDoBot}`;
await client.sendMessage(from, { image: { url: video.thumbnail || video.image }, caption: mensagem }, { quoted: seloMeta });

const audioUrl = `${BLACKOUT_API}/api/download/play?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { audio: { url: audioUrl }, mimetype: 'audio/mpeg', fileName: `${video.title}.mp3` }, { quoted: seloMeta });
return;
}

//✘‿✘ PESQUISA VÍDEO✘‿✘ 
if (body.toLowerCase().startsWith('baixar')) {
const q = body.slice(10).trim();
if(!isGroup) return enviar(mensagens.isGroup);
if (!isAutorepo) return enviar(mensagens.isAutorepo);
async function carregamento() {
const txt1 = `*_ʙᴀꜱᴇ 👾ᴅᴇʟᴛᴀ👾 ᴍᴀᴛʀɪx_*`;
const carre = [
        `${txt1}\n*Volume:* ■□□□□□□□🔊 10%`,
        `${txt1}\n*Volume:* ■■□□□□□□🔊 35%`,
        `${txt1}\n*Volume:* ■■■■□□□□🔊 51%`,
        `${txt1}\n*Volume:* ■■■■■□□□🔊 62%`,
        `${txt1}\n*Volume:* ■■■■■■□□🔊 80%`,
        `${txt1}\n*Volume:* ■■■■■■■□🔊 100%`,
        `${txt1}\n*Volume:* ■■■■■■■■MAX`,
        `@${sender.split("@")[0]}_\n *_enviando áudio volume no max_*`  ];
const { key } = await client.sendMessage( from,{ text: `Ok @${sender.split("@")[0]}_\n_• Obtendo os resultados da pesquisa..._`, mentions: [sender] }, { quoted: seloMeta });
for (let i = 0; i < carre.length; i++) { await new Promise(r => setTimeout(r, 700)); // tempo entre cada atualização
await client.sendMessage(from, { text: carre[i], mentions: [sender], edit: key });
}}
await carregamento();
if (!q) return enviar("Use: baixar nome do vídeo 🎬");
enviar("Baixando seu vídeo, um momento...");

const res = await fetch(`${BLACKOUT_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`);
const dados = await res.json();

if (!dados?.resultado?.length) return enviar("Nenhum resultado encontrado.");
const video = dados.resultado.find(v => v.type === 'video');
if (!video) return enviar("Vídeo não encontrado.");
if (video?.duration?.seconds >= 3600) return enviar("Vídeos acima de 1 hora não são suportados.");

const mensagem = `> *Vídeo escolhido por:* ${pushname}\n\n🎬 ${video.title}\n📅 ${video.ago}\n👤 ${video.author?.name}\n\n🕒 *Duração:* ${video.duration?.timestamp || '??'}\n\n${NomeDoBot}`;
await client.sendMessage(from, { image: { url: video.thumbnail || video.image }, caption: mensagem }, { quoted: seloMeta });

const videoUrl = `${BLACKOUT_API}/api/download/playvd?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { video: { url: videoUrl }, mimetype: 'video/mp4', fileName: `${video.title}.mp4` }, { quoted: seloMeta });
 return;
}

//✘‿✘ PESQUISA PINTEREST✘‿✘ 
if (body.toLowerCase().startsWith('pinterest ')) {
const q = body.slice(10).trim();
if(!isGroup) return enviar(mensagens.isGroup);
if (!isAutorepo) return enviar(mensagens.isAutorepo);
if (!q) return enviar("Use: pinterest nome da imagem 🖼️");
enviar("🔎 Procurando imagem no Pinterest...");

const url = `${BLACKOUT_API}/api/pesquisa/pinterest?query=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { image: { url }, caption: `🖼️ *Imagem de:* ${q}` }, { quoted: seloMeta });
 return;
}



/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧IFS ACIMA  ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
} catch (error) {
const msgOriginal = error.message || String(error);
const msgTraduzida = await translate(msgOriginal);
const stackLine = error.stack  ?.split('\n')  .find(line => line.includes('.js'))  ?.trim() || 'Sem localização detectada';
const linhaMatch = stackLine.match(/:(\d+):\d+\)?$/);
const linha = linhaMatch ? linhaMatch[1] : 'Desconhecida';
console.log(chalk.red.bold('\n[ ERRO DETECTADO ]'));
console.log(chalk.yellow('Original:'), chalk.white(msgOriginal));
console.log(chalk.green('Tradução:'), chalk.white(msgTraduzida));
console.log(chalk.cyan(`Local:`), chalk.white(stackLine));
console.log(chalk.magenta(`Linha exata: [ ${linha} ]`));
}
});
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧DEFINIÇAO DA CONEXÃO ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/

client.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update;
if (connection === 'open') {//CONEXÃO ABERTA
client.updateProfileStatus(`${NomeDoBot} online Criador: ${NomeDono} dominando tudo`)
console.log("[ LOG ] - Bot conectado com sucesso ✅")
if (typeof banner3 !== 'undefined') console.log(banner3.string || banner3);
if (typeof banner2 !== 'undefined') console.log(banner2.string || banner2);
} else if (connection === "connecting") {
console.log(``)
console.log("[ CONEXÃO ] - Estabelecendo conexão com o whatsapp...")
} else if (connection === 'close') {//CONEXÃO FECHADA
const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
if (shouldReconnect) {
console.log('[ LOG ] - Tentando reconectar...');
iniciarBlackout();
} else {
console.log('Desconectado. Finalizando...');
}}
})
}
iniciarBlackout()
 

/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •👾•୨୧REINICIAÇÃO AUTOMÁTICA ୨୧•👾• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
fs.watchFile(__filename, (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇ ʙᴀꜱᴇ 👾ᴅᴇʟᴛᴀ👾 ᴍᴀᴛʀɪx
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/


/*
const coins = require('./lib/blackoutcoins');

// Quando o usuário joga algo:
const ganho = coins.GanharBlackoutcoins(sender, 10, 25);
enviar(`🎯 Você ganhou ${ganho} 🪙 BlackoutCoins!`);

// Quando usa o comando !saldo
const saldo = coins.VerSaldoBlackoutcoins(sender);
enviar(`💰 Seu saldo atual: ${saldo} 🪙 BlackoutCoins`);

// Quando cobra algo (ex: usar Pinterest custa 15)
const custo = 15;
const saldoAtual = coins.VerSaldoBlackoutcoins(sender);
if (saldoAtual < custo) return enviar('❗ Você não tem BlackoutCoins suficientes!');
coins.RemoverBlackoutcoins(sender, custo);
enviar(`🪙 Você gastou ${custo} BlackoutCoins para usar o comando.`);
*/

