const Botkit = require('botkit');
const botkitStoragePostgres = require('botkit-storage-postgres');
const dotenv = require('dotenv');
// loads .env file to process.env
dotenv.load();

module.exports = (function DevvyCho() {

  const SLACK_TOKEN = process.env.SLACK_TOKEN || '';
  const WIT_TOKEN = process.env.WIT_TOKEN;
  // invoke wit middleware and pass in token
  const wit = require('./lib/middleware/wit.middleware')(WIT_TOKEN);
  // initialize
  const slackController = Botkit.slackbot({
    // wait for a confirmation event for each outgoing message before continuing to the next message in a conversation
    require_delivery : true,
    storage : botkitStoragePostgres({
      host : 'localhost',
      user : 'postgres',
      password : '5zduWmw8$',
      database : 'devvy'
    })
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

  slackController.middleware.receive.use(wit.receive);

  // listener that handles incoming messages

  slackController.on('message_received', (bot, message) => {
    slackController.log('Slack message received');
    bot.reply(message, 'Message Received.');
  });


  slackController.hears(['.*'], ['mention', 'direct_message', 'direct_mention'], wit.hears, (bot, message) => {
    slackController.log('Slack message received');

    bot.reply(message, 'I have received your message');
  });

  

})();
