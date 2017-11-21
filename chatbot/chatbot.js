const Botkit = require('botkit');
const stringBuilder = require('./lib/helpers/stringBuilder');
const { error_msgs,
        greetings, 
        missing_info,
        randomResponse
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
      bot.reply(message, randomResponse(error_msgs));

    } else if (message.greetings) {
      bot.reply(message, randomResponse(greetings));

    } else if (message.results) {
      bot.reply(message, stringBuilder(message.results.Resources));

    } else {
      bot.reply(message, `${randomResponse(missing_info)} ${message.db_query[0].value}...`);
    }

  });

})();
