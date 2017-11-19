const { Wit, log } = require('node-wit');
const MIN_CONFIDENCE = 0.75;

module.exports = function(token) {
  if (!token) {
    throw new Error ('Pleare provide a Wit token!');
  }

  // new instatiation of Wit
  const client = new Wit({
    // pass Wit a valid token
    accessToken : token,
    logger : new log.Logger(log.DEBUG) // optional
  });

  return {
    receive : receive,
    hears : hears    
  };

  function receive(bot, message, next) {
    // necessary so Wit only recieves TEXT
    // otherwise, Wit would receive EVERYTHING
    if (message.text) {
      // sends the received message to Wit
      client.message(message.text, (error, data) => {
        if (error) {
          next(error);
        // } else if (message.attachments) {
        //   message.intents = [];
        //   next();
        // }
        }   
      });

    next();

    }
  }

  function hears(tests, messages) {
    if (tests && message.entities && message.entities.intent) {
      return message.entities.intent.some(intent => {
        return tests.some(test => {
          if (intent.value === test && intent.confidence >= MIN_CONFIDENCE) {
            return true;
          }
        });
      });
    }

    return false;
  }

};
