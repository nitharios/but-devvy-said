const Botkit = require('botkit');
const { error_msg,
        greeting, 
        missing_info 
      } = require('./lib/responses/slack.responses');
const dotenv = require('dotenv');
// loads .env file to process.env
dotenv.load();

module.exports = (function DevvyCho() {

  const SLACK_TOKEN = process.env.SLACK_TOKEN || '';
  const WIT_TOKEN = process.env.WIT_TOKEN;
  // invoke wit middleware and pass in token
  const wit = require('./lib/middleware/wit.middleware')(WIT_TOKEN);
  const dbQuery = require('./lib/middleware/db.middleware');
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

    slackController.log('Slack connection established');
  });

  slackController.middleware.heard.use(wit.receive);
  slackController.middleware.heard.use(dbQuery);

  // listener that handles incoming messages
  slackController.hears(['.*'], ['mention', 'direct_message', 'direct_mention'], wit.hears, (bot, message) => {
    slackController.log('Slack message received');

    if (message.error) {
      bot.reply(message, error_msg[0]);

    } else if (message.greetings) {
      bot.reply(message, greeting[0]);

    } else if (message.results) {      
      bot.reply(message, 'This is what Nigel knows: ');

    } else {
      bot.reply(message, `${missing_info[0]} ${message.db_query[0].value}...`);
    }

  });

})();
