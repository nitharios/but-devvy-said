'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('notes', [

      {
        topic : 'Arrow Functions',
        title : 'Notes on Arrow Functions',
        student : 'Chris',
        cohort : 19,
        bullets : {
          "one" : "A shorter syntax for Function.",
          "two" : "Lexical binding of this.",
          "three" : "Usually on a single line."
        },
        topic_id : 9
      },
      {
        topic : 'Context',
        title : 'Example of Context',
        student : 'Nathan',
        cohort : 19,
        bullets : {
          "one" : "Context is confusing.",
          "two" : "The object calling a function.",
          "three" : "Similar to scope."
        },
        topic_id : 10
      },
      {
        topic : 'Closures',
        title : 'Exercise on Closures',
        student : 'Justin',
        cohort : 19,
        bullets : {
          "one" : "Closures are useful.",
          "two" : "Making private variables.",
          "three" : "Avoid polluting global scope."
        },
        topic_id : 7
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('notes', null, {});

  }
};
