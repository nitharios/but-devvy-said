'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('resources', [

      {
        title : 'What is meant by Asynchronous Javascript?',
        links : 'http://bit.ly/2zOQycP', //SO async
        example : 'This is a code snippet.',
        notes : 'These are class notes.',
        cohort : 19,
        name : 'Justin',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'How to use Promises',
        links : 'http://bit.ly/2zQPmFe', //how to use Promise
        example : 'This is a code snippet.',
        notes : 'These are class notes.',
        cohort : 18,
        name : 'Nathan',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'Every Function is an Object',
        links : 'http://bit.ly/2AT46kf', //every function is obj
        example : 'This is a code snippet.',
        notes : 'These are class notes.',
        cohort : 17,
        name : 'Chris',
        createdAt : new Date(),
        updatedAt : new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }
};