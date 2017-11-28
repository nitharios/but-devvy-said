'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('resources', [

      {
        firstName : 'Chris',
        lastName : 'Min',
        email : 'chris.min216@gmail.com',
        track : 'Full-Time',
        cohort : 19,
        topics : ["asynchronous", "callback functions"],
        note : 'These are class notes.',
        example : 'This is a code snippet.',
        link : 'http://bit.ly/2zOQycP', 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName : 'Justin',
        lastName : 'Lee',
        email : 'jlee808@gmail.com',
        track : 'Part-Time',
        cohort : 17,
        topics : ["parameter", "function"],
        note : 'These are class notes.',
        example : 'This is a code snippet.',
        link : 'http://bit.ly/2zOQycP', 
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        firstName : 'Kaley',
        lastName : 'Kriminger',
        email : 'kkrim808@gmail.com',
        track : 'Part-Time',
        cohort : 18,
        topics : ["prototype", "inheritance"],
        note : 'These are class notes.',
        example : 'This is a code snippet.',
        link : 'http://bit.ly/2zOQycP', 
        createdAt : new Date(),
        updatedAt : new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }
};