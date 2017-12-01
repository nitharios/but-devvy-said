'use strict';

//contains topic_id 116 - 125
//TOTAL : 

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

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
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};