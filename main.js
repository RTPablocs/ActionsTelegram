const TelegramBot = require('node-telegram-bot-api');
const core = require('@actions/core');
const github = require('@actions/github');
const token = core.getInput('token');
const bot = new TelegramBot('5006496437:AAHDGiorUdm2pa4sI_8U8QvJBfQKzxZ2PNc', { polling: true });


bot.sendMessage(187940793, "Action Completada!");
console.log('Done!');
setTimeout(() => {
    process.exit(0)
}, 1000)