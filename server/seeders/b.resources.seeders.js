'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('resources', [

      {
        name : 'Justin',
        cohort : 19,
        title : 'What is meant by Asynchronous Javascript?',
        tags : ['asynchronous', 'promises'],
        note : 'These are class notes.',
        example : 'This is a code snippet.',
        link : 'http://bit.ly/2zOQycP', 
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Chris',
        cohort : 19,
        title : 'How to Use Arrow Functions',
        tags : ['arrow function', 'context'],
        note : 'These are class notes.',
        example : 'This is a code snippet.',
        link : 'http://bit.ly/2zOQycP', 
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Nathan',
        cohort : 19,
        title : 'All About Prototypes and Inheritance',
        tags : ['prototype', 'inheritance'],
        note : 'These are class notes.',
        example : 'This is a code snippet.',
        link : 'http://bit.ly/2zOQycP', 
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }
};