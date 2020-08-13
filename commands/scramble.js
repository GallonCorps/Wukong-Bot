function scramble(msg, args){
    var phrase = ""
    if (args.length){
        args.forEach((arg) => {
            const word = args[Math.floor(Math.random() * args.length)]
            phrase = phrase + " " + word;
        });
        msg.channel.send(phrase);
    }
    else {
        msg.channel.send("onde estas argumento");
    }
}
export {scramble}