'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('resources', [

      {
        title : 'What is meant by Asynchronous Javascript?',
        link : 'http://bit.ly/2zOQycP', //SO async
        example : 'This is a code snippet.',
        note : 'These are class notes.',
        cohort : 19,
        name : 'Justin',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        title : 'Promises',
        link : 'http://bit.ly/2zQPmFe', //how to use Promise
        example : 'This is a code snippet.',
        note : 'These are class notes.',
        cohort : 18,
        name : 'Nathan',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 2,
      },
      {
        title : 'How to use Promises',
        link : 'http://bit.ly/2zQPmFe', //how to use Promise
        example : 'This is a code snippet.',
        note : 'These are class notes.',
        cohort : 18,
        name : 'Nathan',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 2,
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }
};