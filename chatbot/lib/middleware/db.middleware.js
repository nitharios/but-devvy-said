const db = require('../../../server/models');
const { Topic, Resource } = db;

module.exports = (bot, message, next) => {
  // if a db_query has been recognized query db with it
  if (message.db_query) {
    // need to handle the case where there are multiple queries
    let topicName = message.db_query[0].value;

    // find a topic where name is topicName and include only the following attributes
    return Topic.findOne({
      where : { name : topicName },
      attributes : [
        'examples', 
        'links', 
        'notes'
      ]
    })
    .then(singleTopic => {
      // if no match, singleTopic === null
      message.results = singleTopic;
      next();
    })
    .catch(err => {
      console.log('db ERROR', err);
      message.error = true;
      next();
    });

  // else pass to next middleware
  } else {
    next();
  }

  next();
};