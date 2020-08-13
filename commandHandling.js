import { ping } from "./commands/ping.js";
import { sum } from "./commands/sum.js";
import { scramble } from "./commands/scramble.js"
function commandHandler(command, argumentos, originalMsg) {
  switch (command) {
    case "ping":
      ping(originalMsg);
      break;
    case "sum":
      sum(originalMsg, argumentos);
      break;
    case "image":
      image(originalMsg, argumentos);
      break;
    case "scramble":
      scramble(originalMsg, argumentos);
      break;
  }
}

export { commandHandler };
