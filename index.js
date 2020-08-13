import Discord from "discord.js";
import dotenv from "dotenv";
import { commandHandler } from "./commandHandling.js";

const client = new Discord.Client();
dotenv.config();

const token = process.env.BOT_PREFIX;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content.startsWith(token)) {
    const command = msg.content.slice(token.length).trim().split(" ")[0];
    const argumentos = msg.content.split(" ").slice(1);
    commandHandler(command, argumentos, msg);
  }
});

client.login(process.env.CACAJA);
