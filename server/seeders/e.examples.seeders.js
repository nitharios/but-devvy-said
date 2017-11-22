'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('examples', [

      {
        title : 'Event Listener Arrow Function',
        format : 'Javascript',
        comment : 'A situation where lexical scope matters',
        code : 'CODE IS HERE',
        topic_id : 9
      },
      {
        title : 'Using a Constructor',
        format : 'Javascript ES6',
        comment : 'From Articles and Products',
        code : 'CODE IS HERE',
        topic_id : 3
      },
      {
        title : 'Callback Function',
        format : 'Javascript',
        comment : 'A function passed into another function',
        code : 'CODE IS HERE',
        topic_id : 5
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('examples', null, {});

  }
};
