/*
  * Sript By Thadz BotZ
  * Contact : wa.me/6288232991394
  * Library : @adiwajshing/baileys-md
*/
require('./lib/config.js');
const { default: makeWASocket, Browsers, AnyMessageContent, delay, proto, generateWAMessageFromContent, DisconnectReason, fetchLatestBaileysVersion, useSingleFileAuthState } = require('@adiwajshing/baileys-md');
const fs = require('fs');
const P = require ('pino');
const { exec } = require("child_process")
const { Boom } = require('@hapi/boom')
const chalkanim = require('chalk-animation');
const package = require('./package.json');
const CFonts = require('cfonts');
const { state, saveState } = useSingleFileAuthState(`./session.json`);


const startBot = async() => {
const { version, isLatest } = await fetchLatestBaileysVersion();

CFonts.say(`${botName}`, {
font: 'simpleBlock',
align: 'center',
colors: ['greenBright'],
background: 'transparent',
letterSpacing: 1,
space: true,
});
CFonts.say(`V${package.version}`, {
font: 'console',
align: 'center',
colors: ['greenBright'],
background: 'transparent',
letterSpacing: 1,
space: true,
});
console.log('Author  : Thadz BotZ');
console.log('GitHub  : http://github.com/thadz');
console.log('Library : @adiwajshing/baileys-md');
console.log('\n\n');
const client = makeWASocket({ version, logger: P({ level: 'silent' }), printQRInTerminal: true, auth: state, browser: ['Thadz', 'Chrome', '3.0.0'] });

client.ev.on('messages.upsert', async ({ messages }) => {
const msg = messages[0];
if (msg.fromMe) return;
require('./index')(client, msg);
});

client.ev.on('group-participants.update', async (apdet) =>{
console.log(apdet)
})

client.ev.on('connection.update', (update) => {
console.log('Connection update:', update)
if (update.connection === 'open')
console.log()
else if (update.connection === 'close')
startBot()

})


client.ev.on('creds.update', saveState);
};



startBot();

