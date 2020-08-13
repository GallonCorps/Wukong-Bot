function scramble(msg, args){
    var phrase = ""
    args.forEach((arg) => {
        const word = args[Math.floor(Math.random() * args.length)]
        phrase = phrase + " " + word;
    });
    msg.channel.send(phrase);
}
export {scramble}