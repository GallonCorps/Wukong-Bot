import { Client } from "discord.js";
import {} from "dotenv/config.js";

const client = new Client();
const prefix = process.env.BOT_PREFIX;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content.startsWith(prefix)) {
    const args = msg.content.slice(prefix.length).trim().split(" ");
    const command = args[0];
    args.shift();
    switch (command) {
      case "spam":
        args.forEach((arg) => {
          if (arg != command) {
            msg.channel.send(arg);
          }
        });
        break;
      case "sum":
        var number = 0;
        args.forEach((arg) => {
          number = number + Number(arg);
        });
        if (isNaN(number)) {
          msg.channel.send("alguma coisa ai não é número burro");
        } else {
          msg.channel.send(`A soma é: ${number}`);
        }
        break;
    }
  }
});

client.login(process.env.BOT_TOKEN);
