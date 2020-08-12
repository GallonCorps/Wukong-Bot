const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NzE3NTE4Nzg3MjgwMjQwNjkw.XtbfcQ.z6wPsI3mjPQoR-UrF0jpjvJ42nc');