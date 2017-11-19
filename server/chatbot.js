const Botkit = require('botkit');

const slack_token = process.env.SLACK_TOKEN;
const slack_oauth = process.env.SLACK_OAUTH;

// module.exports = function DevvyCho() {
  console.log("HERE");
  
  // initialize
  const slackController = Botkit.slackbot({
    // wait for a confirmation event for each outgoing message before continuing to the next message in a conversation
    require_delivery : true
  });

  const slackBot = slackController.spawn({
    token : slack_token
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

// };

// module.exports = slackController;