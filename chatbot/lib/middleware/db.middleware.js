const { Resource,
        Topic,
        Note,
        Example
      } = require('../../../server/models');

module.exports = function(bot, message, next) { 
  console.log('=====dbQuery HEARD MIDDLEWARE======');
  console.log(message);

  let model = null;
  let intent = message.info_type[0].value;
  
  // if there is an info type user wants a specific model query
  if (message.info_type && message.db_query) {
    switch(intent) {
      case 'notes':
        model = Note;
        break;

      case 'examples':
        model = Example;
        break;

      default:
        model = Note;
        break;
    }
  }

  if (message.db_query) {

    let topicName = message.db_query[0].value;

    return Topic.findOne({
      where : { name : topicName },
      include : [ { model : model } ]
    })
    .then(singleTopic => {
      //if no match, singleTopic == null

      message.results = singleTopic;
      next();
    })
    .catch(err => {
      console.log('db ERROR', err);
      message.error = true;
      next();
    });
  } else {
    console.log('Message is not a db_query');
    next();
  }


};