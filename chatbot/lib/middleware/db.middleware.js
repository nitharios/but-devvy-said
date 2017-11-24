const { Resource,
        Topic,
        Note,
        Example
      } = require('../../../server/models');

module.exports = function(bot, message, next) {
  let model = Resource;
  // if there is an info type, user wants a specific model query
  // if (message.info_type && message.db_query) {
  //   switch(message.info_type) {
  //     case 'notes':
  //       model = Note;
  //       break;

  //     case 'examples':
  //       model = Example;
  //       break;

  //     default:
  //       break;
  //   }
  // }

  if (message.db_query) {
    let topicName = message.db_query[0].value;

    return Topic.findOne({
      where : { name : topicName },
      include : [
        { 
          model : Example,
          order : [[ 'createdAt', 'DESC' ]],
          limit : 3
        },
        { 
          model : Note,
          order : [[ 'createdAt', 'DESC' ]],
          limit : 3
        },
        { 
          model : Resource,
          order : [[ 'createdAt', 'DESC' ]],
          limit : 5
        }
      ]
    })
    .then(singleTopic => {
      // if no match, singleTopic == null
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

  next();
};