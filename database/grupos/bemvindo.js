/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧BEM VINDO ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const dirGroup = path.join(__dirname, './activation_gp');
if (!fs.existsSync(dirGroup)) fs.mkdirSync(dirGroup, { recursive: true });

const linksPath = path.join(__dirname, 'imgs_bemvidos.json');
const { fundo1, fundo2 } = JSON.parse(fs.readFileSync(linksPath, 'utf-8'));

function gerarPossiveisIds(numero) {
if (!numero) return [];
const cleanNum = numero.toString().replace(/[^0-9]/g, '');
if (!cleanNum) return [];
return [cleanNum + "@s.whatsapp.net", cleanNum + "@lid"];
}

function obterMembroValido(idOuNumero, groupMembers = []) {
const possiveisIds = gerarPossiveisIds(idOuNumero);
if (possiveisIds.length === 0) return null;
if (!Array.isArray(groupMembers)) return null;
const membro = groupMembers.find(m => possiveisIds.includes(m.id) || possiveisIds.includes(m.lid) || possiveisIds.includes(m.phoneNumber));
return membro ? (membro.id || membro.lid) : null;
}

module.exports = async function bemvindo(client, Tosh, jsonGp, time, config, getBuffer, getRandom, DLT_FL) {
try {
if (!jsonGp || !jsonGp[0] || !jsonGp[0].wellcome) return;

const groupEnabled1 = jsonGp[0].wellcome[0]?.bemvindo1 ?? false;
const groupEnabled2 = jsonGp[0].wellcome[1]?.bemvindo2 ?? false;
if (!groupEnabled1 && !groupEnabled2) return;

let mdata_2 = {};
try { mdata_2 = await client.groupMetadata(Tosh.id); } 
catch (e) { return; }

const groupMembers = mdata_2.participants || [];
const groupDesc = mdata_2.desc ?? '';
if (jsonGp[0].antifake && !Tosh.participants[0].startsWith('55')) return;

async function getProfilePic(user) {
try { return await client.profilePictureUrl(user, 'image'); }
catch { return 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'; }
}

const membroId = obterMembroValido(Tosh.participants[0], groupMembers) || Tosh.participants[0];
const pushname = '@' + membroId.split('@')[0];
const ppimg = await getProfilePic(membroId);

if (groupEnabled1) {
if (Tosh.action === 'add') {
let teks = jsonGp[0].wellcome[0]?.legendabv
 ? jsonGp[0].wellcome[0].legendabv
 .replace('#hora#', time)
 .replace('#nomedogp#', mdata_2.subject)
 .replace('#numerodele#', pushname)
 .replace('#numerobot#', '@' + client.user.id.split(':')[0])
 .replace('#prefixo#', jsonGp[0].multiprefix ? jsonGp[0].prefixos[0] : config.prefix)
 .replace('#descrição#', groupDesc)
 : `Seja bem-vindo(a) ${pushname} ao grupo ${mdata_2.subject}!`;

 const ranBV = [
 `ao grupo ${encodeURIComponent(mdata_2.subject)}`,
 `O membro ${pushname} chegou!`,
 `Leia as regras.`,
 `Aqui é um hospício kkk!`,
 `Gostou de mim me aluga bb`,
 `Não contavam com minha astúcia!` ];

 const cardUrl = `https://api.popcat.xyz/welcomecard?background=${fundo1}&text1=${pushname}&text2=BEM%20VINDO(A)&text3=${encodeURIComponent(ranBV[Math.floor(Math.random() * ranBV.length)])}&avatar=${encodeURIComponent(ppimg)}`;
await client.sendMessage(mdata_2.id, { image: { url: cardUrl }, caption: teks, mentions: [membroId] });

} else if (Tosh.action === 'remove') {
let teks = jsonGp[0].wellcome[0]?.legendasaiu
 ? jsonGp[0].wellcome[0].legendasaiu
 .replace('#hora#', time)
 .replace('#nomedogp#', mdata_2.subject)
 .replace('#numerodele#', pushname)
 .replace('#numerobot#', '@' + client.user.id.split(':')[0])
 .replace('#prefixo#', jsonGp[0].multiprefix ? jsonGp[0].prefixos[0] : config.prefix)
 .replace('#descrição#', groupDesc)
 : `${pushname} saiu do grupo ${mdata_2.subject}.`;

const ranSI = [
 `ao grupo ${encodeURIComponent(mdata_2.subject)}`,
 `O membro ${pushname} saiu.`,
 `Menos um!`,
 `Saiu nem faz falta.`, ];

const cardUrl = `https://api.popcat.xyz/welcomecard?background=${fundo2}&text1=${pushname}&text2=ADEUS&text3=${encodeURIComponent(ranSI[Math.floor(Math.random() * ranSI.length)])}&avatar=${encodeURIComponent(ppimg)}`;
await client.sendMessage(mdata_2.id, { image: { url: cardUrl }, caption: teks, mentions: [membroId] });
}}

if (groupEnabled2) {
if (Tosh.action === 'add') {
const teks = jsonGp[0].wellcome[1]?.legendabv
 ? jsonGp[0].wellcome[1].legendabv
 .replace('#hora#', time)
 .replace('#nomedogp#', mdata_2.subject)
 .replace('#numerodele#', pushname)
 .replace('#numerobot#', '@' + client.user.id.split(':')[0])
 .replace('#prefixo#', jsonGp[0].multiprefix ? jsonGp[0].prefixos[0] : config.prefix)
 .replace('#descrição#', groupDesc)
 : `Seja bem-vindo(a) ${pushname} ao grupo ${mdata_2.subject}!`;

await client.sendMessage(mdata_2.id, { text: teks, mentions: [membroId] });

} else if (Tosh.action === 'remove') {
const teks = jsonGp[0].wellcome[1]?.legendasaiu
 ? jsonGp[0].wellcome[1].legendasaiu
 .replace('#hora#', time)
 .replace('#nomedogp#', mdata_2.subject)
 .replace('#numerodele#', pushname)
 .replace('#numerobot#', '@' + client.user.id.split(':')[0])
 .replace('#prefixo#', jsonGp[0].multiprefix ? jsonGp[0].prefixos[0] : config.prefix)
 .replace('#descrição#', groupDesc)
 : `${pushname} saiu do grupo ${mdata_2.subject}.`;

await client.sendMessage(mdata_2.id, { image: { url: ppimg }, caption: teks, mentions: [membroId] });
}}
} catch (e) {
console.log('[BEM-VINDO ERROR]', e);
}
};
/*
┌──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
│̇·̣̣̇·̣̇̇·̇ •🩸•୨୧TOSH BLACKOUT ୨୧•🩸• ·̇·̣̇̇
╰──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
*/