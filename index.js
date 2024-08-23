const TelegramBot = require('node-telegram-bot-api');
const token = '7471958304:AAGeWd_pcfLLO8YNT-SUOWtPVKOGZi_4LMg';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {

  //anything

});
bot.on('message', (msg) => {

var Hi = "hi";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
bot.sendMessage(msg.chat.id,"Hello dear user");
}

});
