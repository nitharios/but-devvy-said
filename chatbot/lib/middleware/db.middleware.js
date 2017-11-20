const { Resource,
        Topic 
      } = require('../../../server/models');

module.exports = function(bot, message, next) {
  
  if(message.db_query) {
    Topic.findOne({
      where : { name : message.db_query[0].value },
      include : [{ model : Resource }]
    })
    .then(singleTopic => {
      /*
        if no match, singleTopic will === null
      */
      message.results = singleTopic;
    })
    .catch(err => {
      console.log('db ERROR', err);
      message.error = true;
    });
  }

  next();
};