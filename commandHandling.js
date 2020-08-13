import {ping} from './commands/ping.js'
function commandHandler(command, argumentos, originalMsg){
    switch(command){
        case 'ping':
            ping(originalMsg)
        break;
    }
}

export {commandHandler}