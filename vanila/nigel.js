// 'use strict''
const Readline = require('readline');
const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
const matcher = require('./matcher');


rl.setPrompt('<TALK :) >');
rl.prompt();

rl.on('line', reply => {
  matcher(reply, data => {
    switch(data.intent){
      case "Hello":
        console.log(`${data.entities.greeting} to you too! :D`);
        rl.prompt();
        break;
      case "Intro":
        console.log("I am Nigel, I know things");
        rl.prompt();
        break;
      case "CurrentWeather":
        console.log(`Looking for the Weather in ${data.entities.city}...`)
        rl.prompt();
        //weather api..
        break;
      case "Exit":
        console.log("ok goodbye ;)");
        process.exit(0);
        break;
      default: {
        console.log("I dont know what you mean :( , But i am learning ! :D ");
        rl.prompt();
      }
    }
  });
});