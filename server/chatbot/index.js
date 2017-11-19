const Botkit = require('botkit');

module.exports = function DevvyCho(SLACK_TOKEN) {
  // initialize
  const slackController = Botkit.slackbot({
    // wait for a confirmation event for each outgoing message before continuing to the next message in a conversation
    require_delivery : true
  });

  const slackBot = slackController.spawn({
    token : SLACK_TOKEN
  });

  // create RTM connection
  slackBot.startRTM((err, bot, payload) => {
    if (err) {
      throw new Error('Could not connect to Slack');
    }

    console.log('Slack connection established');
    slackController.log('Slack connection established');
  });

  // listener that handles incoming messages
  slackController.hears(['.*'], ['mention', 'direct_message', 'direct_mention'], (bot, message) => {
    console.log('Slack message received');
    slackController.log('Slack message received');
    bot.reply(message, 'I have received your message');
    
  });
};

// module.exports = slackController;