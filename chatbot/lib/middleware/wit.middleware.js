const { Wit, log } = require('node-wit');
const { client, MIN_CONFIDENCE } = require('../../../node-wit/wit.js');

module.exports = (function() {

  return {
    receive : receive,
    hears : hears    
  };

  function receive(bot, message, next) {

    // Wit will only recieve TEXT
    if (message.text && message.type !== 'self_message') {
      // sends the received message to Wit
      return client.message(message.text)
      .then(data => {
        console.log(data);
        
        // possible returns on a message
        message.entities = data.entities;
        message.info_type = message.entities.info_type;
        message.db_query = message.entities.db_query;
        message.number = message.entities.number;
        message.greetings = message.entities.greetings;
        message.bye = message.entities.bye;
        message.thanks = message.entities.thanks;

        next();

      })
      .catch(err => {
        console.log('wit error', err);
        message.error = true;
        next();

      });
    }
  }

  function hears(patterns, message) { 
    // patterns is the first argument of controller.hears
    if (patterns) return true;
    // not currently being used
    if (patterns && message.entities && message.entities.db_query) {
      return message.entities.db_query.some(query => {
        return patterns.some(pattern => {
          // check for a pattern that wants everything
          if (query.value === pattern && query.confidence >= MIN_CONFIDENCE) {
            return true;
          }
        });
      });
    }

    return false;
  }
})();
