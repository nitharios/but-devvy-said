'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('tags', [
      {
        name : 'fundamental'
      },
      {
        name : 'intermediate'
      },
      {
        name : 'advanced'
      },
      {
        name : 'back end'
      },
      {
        name : 'front end'
      },
      {
        name : 'library'
      },
      {
        name : 'framework'
      },
      {
        name : 'database'
      },
      {
        name : 'browser'
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('tags', null, {});

  }
};
