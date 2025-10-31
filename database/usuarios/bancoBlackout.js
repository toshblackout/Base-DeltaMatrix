//Tosh Blackout banco
const fs = require("fs");
const path = "./database/usuarios/BlackoutRpg/bancoBlackout.json";

function carregarBanco() {
if (!fs.existsSync(path)) {
fs.writeFileSync(path, JSON.stringify([], null, 2))};
return JSON.parse(fs.readFileSync(path))};

function salvarBanco(db) {
fs.writeFileSync(path, JSON.stringify(db, null, 2));
}

function garantirUsuario(db, UserID) {
let user = db.find(u => u.id === UserID);
if (!user) { user = { id: UserID, money: 0 };
db.push(user);
}
return user;
}

exports.AdicionarBlackoutcoins = (UserID, ValorA) => {
const db = carregarBanco();
const user = garantirUsuario(db, UserID);
user.money += Number(ValorA);
salvarBanco(db);
return user.money;
};

exports.RemoverBlackoutcoins = (UserID, ValorR) => {
const db = carregarBanco();
const user = garantirUsuario(db, UserID);
user.money = Math.max(0, user.money - Number(ValorR));
salvarBanco(db);
return user.money;
};

exports.VerSaldoBlackoutcoins = (UserID) => {
const db = carregarBanco();
const user = db.find(u => u.id === UserID);
return user ? user.money : 0;
};

exports.GanharBlackoutcoins = (UserID, min = 5, max = 20) => {
const db = carregarBanco();
 const user = garantirUsuario(db, UserID);
const recompensa = Math.floor(Math.random() * (max - min + 1)) + min;
user.money += recompensa;
salvarBanco(db);
return recompensa;
};

exports.TransferirBlackoutcoins = (deID, paraID, valor) => {
const db = carregarBanco();
const remetente = garantirUsuario(db, deID);
const destinatario = garantirUsuario(db, paraID);

valor = Number(valor);
if (isNaN(valor) || valor <= 0) return { sucesso: false, motivo: "Valor inválido" };
if (remetente.money < valor) return { sucesso: false, motivo: "Saldo insuficiente" };
remetente.money -= valor;
destinatario.money += valor;
salvarBanco(db);
return { sucesso: true, valor, de: remetente.id, para: destinatario.id };
};