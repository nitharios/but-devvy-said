'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('tags', [{

      {
        name : 'Fundamentals'
      },
      {
        name : 'Intermediate'
      },
      {
        name : 'Frustrating'
      },
      {
        name : 'Advanced'
      },
      {
        name : 'Back-end'
      },
      {
        name : 'Front-end'
      },
      {
        name : 'Libraries'
      },
      {
        name : 'Frameworks'
      },
      {
        name : 'Database'
      },
      {
        name : 'Browser'
      }


    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('tags', null, {});

  }
};
