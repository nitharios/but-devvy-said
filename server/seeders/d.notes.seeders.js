'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('notes', [

      {
        title : 'Notes on Arrow Functions',
        student : 'Chris',
        cohort : 19,
        bullets : "These are notes on Arrow Functions.",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'Example of Context',
        student : 'Nathan',
        cohort : 19,
        bullets : "These are notes on Context.",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'Exercise on Closures',
        student : 'Justin',
        cohort : 19,
        bullets : "These are notes on Closures.",
        createdAt : new Date(),
        updatedAt : new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('notes', null, {});

  }
};
