import { ping } from "./commands/ping.js";
import { sum } from "./commands/sum.js";
function commandHandler(command, argumentos, originalMsg) {
  switch (command) {
    case "ping":
      ping(originalMsg);
      break;
    case "sum":
      sum(originalMsg, argumentos);
      break;
  }
}

export { commandHandler };
