import Discord from 'discord.js'
import dotenv from 'dotenv'
import {commandHandler} from './commandHandling.js'

const client = new Discord.Client();
dotenv.config()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content.startsWith('!')){
    const command = msg.content.split(' ')[0].slice(1)
    const argumentos = msg.content.split(' ').slice(1)
    commandHandler(command, argumentos, msg)
  }
});

client.login(process.env.BOT_TOKEN);