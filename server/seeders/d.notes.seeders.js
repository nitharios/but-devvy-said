'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('notes', [

      {
        title : 'Notes on Arrow Functions',
        student : 'Chris',
        cohort : 19,
        bullets : "These are notes on Arrow Functions.",
        topic_id : 9,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'Example of Context',
        student : 'Nathan',
        cohort : 19,
        bullets : "These are notes on Context.",
        topic_id : 10,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'Exercise on Closures',
        student : 'Justin',
        cohort : 19,
        bullets : "These are notes on Closures.",
        topic_id : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('notes', null, {});

  }
};
