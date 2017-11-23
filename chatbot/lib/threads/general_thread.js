module.exports = controller.hears(['question me', 'lets chat', 'hey devvy lets chat'], 'message_received', function(bot, message) {
  // start a conversation to handle this response.
  bot.startConversation(message, function(err, convo) {

    convo.addQuestion('Shall we proceed Say YES, NO or DONE to quit.',[
      {
        pattern: 'done',
        callback: function(response, convo) {
          console.log(convo, 'console log line 9 in threads')
          convo.say('OK you are done!');
          convo.next();
        }
      },

      {
        pattern: bot.utterances.yes,
        callback: function(response, convo) {
          convo.say('Great! I will continue...');
          convo.say('so lets get warmed up and talk about javascript are you ready?');
          if ('yes'){
               convo.next();
          } else{
            convo.say('ok i hope you study hard :)');
          }
        }
      },

      {
        pattern: bot.utterances.no,
        callback: function(response,convo) {
          convo.say('Perhaps later.');
          // do something else...
          convo.next();
        }
      },
      {
        default: true,
        callback: function(response,convo) {
          // just repeat the question
          convo.repeat();
          convo.next();
        }
      }
    ],{},'default');

  });

});