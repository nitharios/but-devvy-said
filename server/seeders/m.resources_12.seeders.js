'use strict';

//contains topic_id 126 - 135
//TOTAL : 

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

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