/*THIS QUERIES ALL NOTES */

const { Topic, Resource, Note, Example } = require('../../../server/models');

module.exports = function() {

  return {
    queryResources : queryResources,
    queryNotes : queryNotes,
    queryExamples : queryExamples
  };

  function queryResources(bot, message, next) {
    return Resource.findAll({
      limit : 5,
      order : [ ['updatedAt', 'DESC'] ]
    })
    .then(notes => {
      message.results = notes;
      next();
    })
    .catch(err => {
      message.error = true;
      next();
    });
  }

  function queryNotes(bot, message, next) {
    return Note.findAll({
      limit : 5,
      order : [ ['updatedAt', 'DESC'] ]
    })
    .then(notes => {
      message.results = notes;
      next();
    })
    .catch(err => {
      message.error = true;
      next();
    });
  }

  function queryExamples(bot, message, next) {
    return Example.findAll({
      limit : 5,
      order : [ ['updatedAt', 'DESC'] ]
    })
    .then(notes => {
      message.results = notes;
      next();
    })
    .catch(err => {
      message.error = true;
      next();
    });
  }


};
