const stringBuilder = require('../helpers/stringBuilder');
const user = require('../responses/user.responses');
console.log(user);

const { additional_query,
        affirmations,
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
    // let { utterances } = convo.context.bot;
    // console.log(utterances);
    // creates a path when the user says 'no'
    convo.addMessage({
      text : randomResponse(bye_msgs),
      action : 'completed'
    }, 'no_thread');

    // creates a path when the user says 'yes'
    convo.addMessage({
      text : randomResponse(affirmations),
      action : 'completed'
    }, 'yes_thread');

    // creates a path when the user wants to see notes
    convo.addMessage({
      text : randomResponse(affirmations),
      action : 'completed'
    }, 'notes_thread');

    // creates a path when the user wants to see examples
    convo.addMessage({
      text : randomResponse(affirmations),
      action : 'completed'
    }, 'examples_thread');


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
        pattern : user.yes,
        callback : (response, convo) => {
          convo.gotoThread('yes_thread');
        }
      },
      {
        pattern : user.no,
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

    // times out after 15 seconds
    convo.setTimeout(15000);
    // activate conversation
    convo.activate();
  }
})();