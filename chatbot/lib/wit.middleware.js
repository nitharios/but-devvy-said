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
    // logger : new log.Logger(log.DEBUG) // optional
  });

  return {
    receive : receive,
    hears : hears    
  };

  function receive(bot, message, next) {
    // console.log(message.type);
    // necessary so Wit only recieves TEXT
    // otherwise, Wit would receive EVERYTHING
    if (message.text && message.type !== 'self_message') {
      // sends the received message to Wit
      client.message(message.text)
      .then(data => {
        message.entities = data.entities || null;
        message.db_query = data.entities.db_query || null;
        next();
      })
      .catch(err => {
        console.log('error', err);
        next();
      });

    } else {
      next();

    }
  }

  function hears(patterns, message) {
    // patterns is the first argument of controller.hears

    // check for a pattern that wants everything
    if (patterns.includes('.*')) return true;

    if (patterns && message.entities && message.entities.db_query) {
      return message.entities.intent.some(intent => {
        return patterns.some(pattern => {          
          if (intent.value === pattern && intent.confidence >= MIN_CONFIDENCE) {
            return true;
          }
        });
      });
    }

    return false;
  }

};
