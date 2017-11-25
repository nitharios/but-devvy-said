'use strict';
const Moment = require('moment');
Moment().format('MMMM Do YYYY, h:mm:ss a');
const MomentRandom = require('moment-random');

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('answers', [

      {
        title : 'What is meant by Asynchronous Javascript?',
        links : 'http://bit.ly/2zOQycP', //SO async
        example : 'This is a code snippet.',
        notes : 'These are class notes.',
        cohort : 19,
        name : 'Justin',
        "Submission Date" : new Date(),
        "Last Updated" : new Date()
      },
      {
        title : 'How to use Promises',
        links : 'http://bit.ly/2zQPmFe', //how to use Promise
        example : 'This is a code snippet.',
        notes : 'These are class notes.',
        cohort : 18,
        name : 'Nathan',
        "Submission Date" : new Date(),
        "Last Updated" : new Date()
      },
      {
        title : 'Every Function is an Object',
        links : 'http://bit.ly/2AT46kf', //every function is obj
        example : 'This is a code snippet.',
        notes : 'These are class notes.',
        cohort : 17,
        name : 'Chris',
        "Submission Date" : new Date(),
        "Last Updated" : new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('answers', null, {});

  }
};