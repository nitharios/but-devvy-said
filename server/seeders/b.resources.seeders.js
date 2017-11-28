'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('resources', [

      {
        name : 'Alexis',
        cohort : 18,
        title : 'What is abstraction in computer science?',
        tags : ['abstraction', 'advanced', 'confusing', 'computer science'],
        note : 'Abstraction is a technique for arranging the complexity of computer systems. It also has to deal with suppressing the most complex details so that a person can interact with a system more straightforwardly.',
        example : '', //null
        link : 'http://bit.ly/2AdTz6r', //YouTube 'Computer Science Concept - Abstraction'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'John',
        cohort : 16,
        title : 'What do we use algorithms for?',
        tags : ['algorithm', 'computer science', 'efficiency', 'sorting', 'big O notation'],

        note : 'An algorithm is a well-defined procedure, or series of steps that allows a computer to solve a problem. It is a lot like a recipe, involving ingredients, or inputs, a series of steps to follow, and a final result, or output.',

        example : '// Set up a simple array of colours var colours = new Array ("Black", "Blue", "Brown", "Green", "Pink", "Red", "White", "Yellow"); // Set up numbers from 1 to 2500 var numbersHalf = new Array(); for (var i = 1; i < 2500; i++) { numbersHalf.push(i); }; // Set up numbers from 1 to 5000 var numbersFull = new Array(); for (var i = 1; i < 5000; i++) { numbersFull.push(i); };', 

        link : 'http://bit.ly/2zOrmnm', //Khan Academy 'What is an algorithm?'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 2
      },
      {
        name : 'Jayce',
        cohort : 13,
        title : 'What is Angular?',
        tags : ['front-end', 'framework', 'javascript'],

        note : 'AngularJS is an extremely powerful framework that front-end web developers rely on to create the interactive aspects of a website. AngularJS uses a very modular approach, and gives developers all they need to set up the front-end of an application. It mainly involves the use of controllers, services, directives, and expressions.',

        example : '', //null

        link : 'http://bit.ly/2AgD4qF', //YouTube JsWiz 'What is AngularJS?'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 3
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }
};