/*THIS QUERIES ALL NOTES */

const { Note } = require('../../../server/models');

module.exports = function(bot, message, next) {
  return Note.findAll({
    limit : 5,
    order : [ ['updatedAt', 'DESC'] ],
    where : { topic_id : topicId }
  })
  .then(notes => {
    message.results = notes;
    next();
  })
  .catch(err => {
    message.error = true;
    next();
  });

};

