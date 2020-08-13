function sum(msg, arg){
    var number = 0;
    arg.forEach((arg) => {
      number = number + Number(arg);
    });
    if (isNaN(number)) {
      msg.channel.send("alguma coisa ai não é número burro");
    } else {
      msg.channel.send(`A soma é: ${number}`);
    }
}
export {sum}