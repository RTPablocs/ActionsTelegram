const TelegramBot = require('node-telegram-bot-api');
const core = require('@actions/core');
const github = require('@actions/github');
const token = core.getInput('token');
const bot = new TelegramBot(token, { polling: true });

try {
    bot.sendMessage(187940793, "Action Completada!");
    console.log('Done!');
} catch (error) {
    core.setFailed(error.message);
}


