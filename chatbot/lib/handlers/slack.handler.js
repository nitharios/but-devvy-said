const stringBuilder = require('../helpers/stringBuilder');
const { additional_query,
        bye_msgs,
        error_msgs,
        greetings, 
        missing_info,
        timeout,
        randomResponse
      } = require('../responses/slack.responses');

module.exports = (function() {

  return {
    // mentionHandler : mentionHandler,
    responseHandler : responseHandler
  };

  function responseHandler(bot, message) {
    console.log('Slack message received');

    if (message.error) {
      bot.reply(message, randomResponse(error_msgs));

    } else if (message.greetings) {
      bot.reply(message, randomResponse(greetings));

    } else if (message.results) {
      const { name, Resources } = message.results;
      bot.reply(message, stringBuilder(name, Resources), (err, response) => {
        // response carries the details of the message passed back to the user
        bot.createConversation(message, conversationHandler);
      });

    } else {
      bot.reply(message, `${randomResponse(missing_info)}`);
    }
  }

  function conversationHandler(err, convo) {
    // contains variants of 'yes', 'no', and 'quit' 
    let { utterances } = convo.context.bot;
      
    // creates a path when the user says 'yes'
    convo.addMessage({
      text : 'Okay, let me check...',
      action : 'completed'
    }, 'yes_thread');

    // creates a path when the user says 'no'
    convo.addMessage({
      text : randomResponse(bye_msgs),
      action : 'completed'
    }, 'no_thread');

    // creates a path when no options are matched
    convo.addMessage({
      text : randomResponse(error_msgs),
      action : 'stop'
    }, 'bad_response');
    
    // creates a path for response timeout
    convo.addMessage({
      text : randomResponse(timeout),
      action : 'stop'
    }, 'on_timeout');

    convo.addQuestion(randomResponse(additional_query), [
      {
        pattern : utterances.yes,
        callback : (response, convo) => {
          convo.gotoThread('yes_thread');
        }
      },
      {
        pattern : utterances.no,
        callback : (response, convo) => {
          convo.gotoThread('no_thread');
        }
      },
      {
        default : true,
        callback : (response, convo) => {
          convo.gotoThread('bad_response');
        }
      }
    ], {}, 'default');

    // times out after 5 seconds
    convo.setTimeout(5000);
    // activate conversation
    convo.activate();
  }
})();