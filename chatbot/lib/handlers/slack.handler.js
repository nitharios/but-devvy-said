const stringBuilder = require('../helpers/stringBuilder');
const { error_msgs,
        greetings, 
        missing_info,
        randomResponse
      } = require('../responses/slack.responses');

module.exports = (function() {

  return {
    responseHandler : responseHandler
  };

  function responseHandler(bot, message) {
    if (message.error) {
      bot.reply(message, randomResponse(error_msgs));

    } else if (message.greetings) {
      bot.reply(message, randomResponse(greetings));

    } else if (message.results) {
      const { name, Resources } = message.results;
      bot.reply(message, stringBuilder(name, Resources));
      bot.startConversation(message, conversationHandler);

    } else {
      bot.reply(message, `${randomResponse(missing_info)}...`);
    }
  }

  function conversationHandler(err, convo) {
    convo.say('Hello!');
  }
})();