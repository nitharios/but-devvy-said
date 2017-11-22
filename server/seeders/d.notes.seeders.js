'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('notes', [

      {
        title : 'Notes on Arrow Functions',
        student : 'Chris Min',
        date : new Date(),
        data : {}
      },
      {
        title : 'DOM Notes',
        student : 'Nathan',
        date : new Date(),
        data : {}
      },
      {
        title : 'Data Normalization Page 1',
        student : 'Justin',
        date : new Date(),
        data : {}
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('notes', null, {});

  }
};
