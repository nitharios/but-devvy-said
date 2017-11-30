const stringBuilder = require('../helpers/stringBuilder');
const user = require('../responses/user.responses');
const EXAMPLES = 'example';
const NOTES = 'note';
const LINKS = 'link';
const names = require('../responses/names.responses');
const { c19,
        familiar,
        nathan } = names;
const RESPONSES = require('../responses/slack.responses');
const { additional_query,
        affirmations,
        bye_msgs,
        cohort_19,
        error_msgs,
        familiarResponse,
        greetings, 
        missing_info,
        other_msgs,
        query_type,
        thanks_reply,
        timeout_msgs,
        randomResponse,
        stranger,
        waifu_target } = RESPONSES;

module.exports = (function() {

  return {
    responseHandler : responseHandler
  };

  function responseHandler(bot, message) {
    console.log('Slack message received');

    if (message.error) {
      bot.replyWithTyping(message, randomResponse(error_msgs));

    } else if (message.bye) {
      bot.replyWithTyping(message, randomResponse(bye_msgs));

    } else if (message.greetings) {
      bot.replyWithTyping(message, randomResponse(greetings));

    } else if (message.thanks) {
      bot.replyWithTyping(message, randomResponse(thanks_reply));

    } else if (message.results) {

      bot.reply(message, { type: "typing" });
      bot.createConversation(message, (err, convo) => {
        resourcesHandler(err, convo, message);
      });

    } else if (message.contact) {
      bot.reply(message, { type: "typing" });
      bot.createConversation(message, (err, convo) => {
        contactHandler(err, convo, message);
      });

    } else {
      bot.replyWithTyping(message, `${randomResponse(missing_info)}`);
    }
  }

  // handles named individual contacts
  function contactHandler(err, convo, message) {
    console.log('CONTACT', message);
    const { contact } = message;
    const patternsArr = [
      {
        pattern : c19,
        callback : (response, convo) => {
          convo.gotoThread('c19_thread');
        }
      },      
      {
        pattern : familiar,
        callback : (response, convo) => {
          convo.gotoThread('familiar_thread');
        }
      },
      {
        pattern : nathan,
        callback : (response, convo) => {
          convo.gotoThread('nathan_thread');
        }
      },
      {
        default : true,
        callback : (response, convo) => {
          convo.gotoThread('stranger_thread');
        }        
      }
    ];

    convo.addMessage({
      text : randomResponse(cohort_19),
      action : 'completed'
    }, 'c19_thread');

    convo.addMessage({
      text : familiarResponse(),
      action : 'completed'
    }, 'familiar_thread');

    convo.addMessage({
      text : randomResponse(waifu_target),
      action : 'completed'
    }, 'nathan_thread');

    convo.addMessage({
      text : randomResponse(stranger),
      action : 'stop'
    }, 'stranger_thread');

    convo.activate();
  }

  function resourcesHandler(err, convo, message) {
    // Resources is an array
    const { name, Resources } = message.results;
    const { info_type } = message;
    const patternsArr = [
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
          convo.gotoThread('default');
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
    ];

    // if user asked for specific resource, go to that thread
    // if (info_type) {
    //   actionThread = info_type[0].value.concat('_thread');
    // }

    // default message and 'yes' path
    convo.addMessage({
      text : randomResponse(affirmations),
      action : 'primary_query',
    }, 'default');

    // what type of resource would you like?
    convo.addQuestion(randomResponse(query_type), patternsArr, {}, 'primary_query');

    // would you like to see more resources?
    convo.addQuestion(randomResponse(additional_query), patternsArr, {}, 'additional_query');

    // creates a path when the user says 'no'
    convo.addMessage({
      text : randomResponse(bye_msgs),
      action : 'completed'
    }, 'no_thread');

    // creates a path when the user wants to see examples
    convo.addMessage({
      text : stringBuilder(name, EXAMPLES, Resources),
      action : 'additional_query'
    }, 'examples_thread');

    // creates a path when the user wants to see links
    convo.addMessage({
      text : stringBuilder(name, LINKS, Resources),
      action : 'additional_query'
    }, 'links_thread');

    // creates a path when the user wants to see notes
    convo.addMessage({
      text : stringBuilder(name, NOTES, Resources),
      action : 'additional_query'
    }, 'notes_thread');

    // creates a path when no options are matched
    convo.addMessage({
      text : randomResponse(error_msgs),
      action : 'stop'
    }, 'bad_response');
    
    // creates a path for response timeout
    convo.addMessage({
      text : randomResponse(timeout_msgs),
      action : 'stop'
    }, 'on_timeout');

    // times out after 15 seconds
    convo.setTimeout(15000);
    // activate resources
    convo.activate();
  }
})();