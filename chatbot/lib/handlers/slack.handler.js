const stringBuilder = require('../helpers/stringBuilder');
const user = require('../responses/user.responses');
const EXAMPLES = 'examples';
const NOTES = 'notes';
const LINKS = 'links';
const RESPONSES = require('../responses/slack.responses');
const { additional_query,
        affirmations,
        bye_msgs,
        error_msgs,
        greetings, 
        missing_info,
        query_type,
        timeout,
        randomResponse } = RESPONSES;

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
      
      bot.createConversation(message, (err, convo) => {
        conversationHandler(err, convo, message);
      });
      
      // bot.reply(message, stringBuilder(name, LINKS, links), (err, response) => {
      //   // response carries the details of the message passed back to the user
      // });

    } else {
      bot.reply(message, `${randomResponse(missing_info)}`);
    }
  }

  function conversationHandler(err, convo, message) {
    const { name, Resources } = message.results;
    const { examples, links, notes } = Resources;
    
    // first question posed to user
    convo.addQuestion(randomResponse(query_type), [
      {
        pattern : EXAMPLES,
        callback : (response, convo) => {
          convo.gotoThread('examples_thread');
        }
      },
      {
        pattern : LINKS,
        callback : (response, convo) => {
          convo.gotoThread('links_thread');
        }
      },
      {
        pattern : NOTES,
        callback : (response, convo) => {
          convo.gotoThread('notes_thread');
        }
      },
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

    // additional query posted to user
    convo.addQuestion(randomResponse(additional_query), [
      {
        pattern : LINKS,
        callback : (response, convo) => {
          convo.gotoThread('links_thread');
        }
      },
      {
        pattern : EXAMPLES,
        callback : (response, convo) => {
          convo.gotoThread('examples_thread');
        }
      },
      {
        pattern : NOTES,
        callback : (response, convo) => {
          convo.gotoThread('notes_thread');
        }
      },
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
    ], {}, 'additional_query');

    // creates a path when the user says 'no'
    convo.addMessage({
      text : randomResponse(bye_msgs),
      action : 'completed'
    }, 'no_thread');

    // creates a path when the user says 'yes'
    convo.addMessage({
      text : randomResponse(affirmations),
      action : 'default'
    }, 'yes_thread');

    // creates a path when the user wants to see examples
    convo.addMessage({
      text : stringBuilder(name, EXAMPLES, examples),
      action : 'additional_query'
    }, 'examples_thread');

    // creates a path when the user wants to see links
    convo.addMessage({
      text : stringBuilder(name, LINKS, links),
      action : 'additional_query'
    }, 'links_thread');

    // creates a path when the user wants to see notes
    convo.addMessage({
      text : stringBuilder(name, NOTES, notes),
      action : 'additional_query'
    }, 'notes_thread');

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

    // times out after 15 seconds
    convo.setTimeout(15000);
    // activate conversation
    convo.activate();
  }
})();