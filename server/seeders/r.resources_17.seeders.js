'use strict';

//LAST PAGE contains a little more than usual.
//contains topic_id 176 - 189
//TOTAL : 

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      //THIS IS HERE FOR TESTING PURPOSE DELETE IT
      {
        name : 'Nancy',
        cohort : 19,
        title : 'NoSQL explained',
        tags : ['nosql', 'database', 'mongodb'],
        note : `Developers are working with applications that create massive volumes of new, rapidly changing data types — structured, semi-structured, unstructured and polymorphic data.\n Relational databases were not designed to cope with the scale and agility challenges that face modern applications.\n This is what NoSQL was created for.`,

        example : ``,
        link : 'http://bit.ly/1lvqNnb',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 116 //nosql
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};