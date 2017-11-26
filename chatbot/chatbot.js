const Botkit = require('botkit');
const { responseHandler } = require('./lib/handlers/slack.handler');
const dotenv = require('dotenv');
// loads .env file to process.env
dotenv.load();

module.exports = (function() {

  const SLACK_TOKEN = process.env.SLACK_TOKEN;
  // invoke wit middleware and pass in token
  const wit = require('./lib/middleware/wit.middleware');
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
  (function start() {
    slackBot.startRTM((err, bot, payload) => {
      if (err) {
        slackController.log('ERROR! Could not connect to Slack');
        slackController.log('Retrying connection in 60 seconds...');
        return setTimeout(start, 60000);
      }

      slackController.log('Slack connection established');
    }); 
  })();

  // activates when @DevvyCho is used
  // sends message to Wit to be deciphered
  slackController.middleware.heard.use(wit.receive);
  // queries the db based on the intent of the user as determined by the user
  slackController.middleware.heard.use(dbQuery);
  // listener that handles incoming messages
  slackController.hears(['.*'], ['mention', 'direct_message', 'direct_mention'], wit.hears, responseHandler);
  // restarts connection if autonomously closed
  slackController.on('rtm_close', (bot, err) => {
    start();
  });

})();
