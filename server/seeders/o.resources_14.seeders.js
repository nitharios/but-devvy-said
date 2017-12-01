'use strict';

//contains topic_id 146 - 155
//TOTAL : 

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [


    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};