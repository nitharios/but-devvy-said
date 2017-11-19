'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('topics', [{

      {
        name : 'Asynchronous'
      },
      {
        name : 'Promises'
      },
      {
        name : 'Functions'
      },
      {
        name : 'Objects'
      },
      {
        name : 'Callback Functions'
      },
      {
        name : 'IIFE'
      },
      {
        name : 'Closure'
      },
      {
        name : 'Anonymous'
      },
      {
        name : 'Arrow Functions'
      },
      {
        name : 'Context'
      },
      {
        name : 'Prototype'
      },
      {
        name : 'Inheritance'
      },
      {
        name : 'Recursion'
      },
      {
        name : 'Pass by value and reference'
      },
      {
        name : 'Callback hell'
      },
      {
        name : 'Sockets and ports'
      },
      {
        name : 'Data normalization'
      },
      {
        name : 'Primitives'
      },
      {
        name : 'Parameters'
      },
      {
        name : 'Arguments'
      },
      {
        name : 'Document Object Model'
      }

    }], {});

  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('topics', null, {});

  }
};
