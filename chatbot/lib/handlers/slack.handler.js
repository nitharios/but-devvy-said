const stringBuilder = require('../helpers/stringBuilder');
const user = require('../responses/user.responses');
const EXAMPLES = 'examples';
const NOTES = 'notes';
const RESOURCES = 'resources';
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
      bot.reply(message, stringBuilder(name, RESOURCES, Resources), (err, response) => {
        // response carries the details of the message passed back to the user
        bot.createConversation(message, (err, convo) => {
          conversationHandler(err, convo, message);
        });
      });

    } else {
      bot.reply(message, `${randomResponse(missing_info)}`);
    }
  }

  function conversationHandler(err, convo, message) {
    const { name, Examples, Notes } = message.results;
    
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
      text : stringBuilder(name, NOTES, Notes),
      action : 'completed'
    }, 'notes_thread');

    // creates a path when the user wants to see examples
    convo.addMessage({
      text : stringBuilder(name, EXAMPLES, Examples),
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
        pattern : 'notes',
        callback : (response, convo) => {
          convo.gotoThread('notes_thread');
        }
      },
      {
        pattern : 'examples',
        callback : (response, convo) => {
          convo.gotoThread('examples_thread');
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