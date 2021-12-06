const TelegramBot = require('node-telegram-bot-api');
const core = require('@actions/core');
const github = require('@actions/github');

try {
    const token = core.getInput('token');
    const bot = new TelegramBot(token, { polling: true });
    bot.sendMessage(187940793, "Action Completa!");
    process.exit(1)
} catch (error) {
    core.setFailed(error.message);
}


