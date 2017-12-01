'use strict';

//UNSORTED
//TOTAL = ?
//CONTAINS : 98 x2, 104, 106, 121, 127

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      {
        name : 'Allyson',
        cohort : 19,
        title : 'What is a let?',
        tags : ['let', 'scope', 'variable'],
        note : 'let declares a variable able to be re-assigned within its block scope, making it ideal for loops.',

        example : null,

        link : 'http://bit.ly/1WF3VSB', //Medium
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 98 //'let'
      },
      {
        name : 'Walter',
        cohort : 10,
        title : 'Does let replace var entirely?',
        tags : ['variable', 'let', 'loops', 'block scope'],
        note : 'let is a version of var that is specifically block scoping. let should replace var only when var was already signaling block scoping. let improves scoping options in JS, but does not entirely replace var. var is still useful as a signal for variables that are used throughout a function.',

        example : null,

        link : 'http://bit.ly/2quX6rF', //JSTips
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 98 //'let'
      },
      {
        name : 'Felicia',
        cohort : 5,
        title : 'What is meant by a loosely typed language?',
        tags : ['javascript', 'loosely typed language', 'scripting language'],
        note : 'A loosely typed language is a language where you do not have to declare types for your variables. The Javascript engine will figure out the type for you. This is especially handy for a set of three or more function parameters.',

        example : null,

        link : 'http://bit.ly/2AjBKR2', //Quora
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 104 //'loosely typed language'
      },
      {
        name : 'Debbie',
        cohort : 7,
        title : 'What is a merge conflict?',
        tags : ['github', 'merge conflict', 'git terminal'],
        note : 'A merge conflict happens when integrating another branch into your current working branch. Often times, one person will delete a file, while the other person has modified it. Git cannot know what is correct, and this is when a merge conflict occurs.',

        example : null,

        link : 'http://bit.ly/2ieOnbS', //GitTower
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 106 //'merge conflict'
      },
      {
        name : 'Ricky',
        cohort : 19,
        title : 'What do they mean by Object Oriented Programming?',
        tags : ['object oriented programming', 'paradigm', 'objects'],
        note : 'Objected Oriented Programming, or OOP, is a programming paradigm. Before OOP, most programs were simply a procedural list of instructions. The essence of OOP is the intricate interaction of many objects, each with state and behavior. Classes or prototypes generate, or initialize these objects, as well as define their structure much like a blueprint.',

        example : null,

        link : 'http://bit.ly/2AE3sLq', //StackExchange -- 'OOP for the non-technical'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 121 //'object oriented programming'
      },
      {
        name : 'Edward',
        cohort : 9,
        title : 'What does it mean to pass by reference?',
        tags : ['objects', 'pass by reference', 'variables'],
        note : 'Variables that are assigned a non-primitive value are given a reference to that value. It is like passing a remote control pointing to that non-primitive into the variable. The remote control points to the memory location.',

        example : null,
        link : 'http://bit.ly/2AcyVmS',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 127 //'pass by reference'
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};