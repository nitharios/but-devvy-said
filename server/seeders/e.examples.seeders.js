'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('examples', [

      {
        title : 'Event Listener Arrow Function',
        format : 'Javascript',
        comment : 'A situation where lexical scope matters',
        code : 'This is a code snippet.',
        topic_id : 9,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'Using a Constructor',
        format : 'Javascript ES6',
        comment : 'From Articles and Products',
        code : 'This is a code snippet.',
        topic_id : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'Callback Function',
        format : 'Javascript',
        comment : 'A function passed into another function',
        code : 'This is a code snippet.',
        topic_id : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('examples', null, {});

  }
};
