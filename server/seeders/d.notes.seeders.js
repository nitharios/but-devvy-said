'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('notes', [

      {
        topic : 'Arrow Functions',
        title : 'Notes on Arrow Functions',
        student : 'Chris Min',
        bullets : [
          'A shorter syntax for Function.',
          'Lexical binding of this.',
          'Usually on a single line.'
        ]
      },
      {
        topic : 'Context',
        title : 'Example of Context',
        student : 'Nathan',
        bullets : [
          'Context is confusing.',
          'The object calling a function.',
          'Similar to scope.'
        ]
      },
      {
        topic : 'Closures',
        title : 'Exercise on Closures',
        student : 'Justin',
        bullets : [
          'Closures are useful.',
          'Making private variables.',
          'Avoid polluting global scope.'
        ]
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('notes', null, {});

  }
};
