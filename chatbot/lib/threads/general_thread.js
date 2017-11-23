controller.hears(['question me', 'how are you', 'lets chat', 'hey devvy lets chat'], 'message_received', function(bot,message) {

  // start a conversation to handle this response.
  bot.startConversation(message, function(err,convo) {

    convo.addQuestion('How are you?',function(response, convo) {

      convo.say('Cool, you said: ' + response.text);
      convo.next();

      controller.hears(['question me'], 'message_received', function(bot,message) {



    convo.addQuestion('Shall we proceed Say YES, NO or DONE to quit.',[
      {
        pattern: 'done',
        callback: function(response,convo) {
          convo.say('OK you are done!');
          convo.next();
        }
      },

      {
        pattern: bot.utterances.yes,
        callback: function(response,convo) {
          convo.say('Great! I will continue...');
          // do something else...
          convo.next();

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




