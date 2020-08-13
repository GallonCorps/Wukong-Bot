import { Client } from 'discord.js';
import {} from 'dotenv/config.js';

const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content == 'ping') {
    msg.reply('pong');
  }
});

client.login(process.env.BOT_TOKEN);