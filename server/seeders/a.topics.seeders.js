'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('topics', [
      {
        name : 'asynchronous'
      },
      {
        name : 'promise'
      },
      {
        name : 'function'
      },
      {
        name : 'object'
      },
      {
        name : 'callback function'
      },
      {
        name : 'IIFE'
      },
      {
        name : 'closure'
      },
      {
        name : 'anonymous function'
      },
      {
        name : 'arrow function'
      },
      {
        name : 'context'
      },
      {
        name : 'prototype'
      },
      {
        name : 'inheritance'
      },
      {
        name : 'recursion'
      },
      {
        name : 'pass by value'
      },
      {
        name : 'pass by reference'
      },
      {
        name : 'sockets and ports'
      },
      {
        name : 'data normalization'
      },
      {
        name : 'primitive'
      },
      {
        name : 'parameter'
      },
      {
        name : 'DOM'
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('topics', null, {});

  }
};