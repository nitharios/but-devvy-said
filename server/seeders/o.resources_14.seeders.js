'use strict';

//contains topic_id 146 - 155
//TOTAL : 

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

     {
        name: 'redward skrim',
        cohort: 14,
        title: 'what are relational database management systems',
        tags:['rdms', 'relational database'],
        note: 'A relational database management system (RDBMS) is a program that lets you create, update, and administer a relational database. Most commercial RDBMSs use the Structured Query Language (SQL) to access the database, although SQL was invented after the development of the relational model and is not necessary for its use.',
        example:``,

        link: 'http://bit.ly/2it8A95',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id:  146 // relational database management system
      },
      {
        name: 'gruntal grinds',
        cohort: 4,
        title: 'what is a relational operator',
        tags:['relational operator'],
        note:'In computer science, a relational operator is a programming language construct or operator that tests or defines some kind of relation between two entities. These include numerical equality (e.g., 5 = 5) and inequalities (e.g., 4 ≥ 3).\n In programming languages that include a distinct boolean data type in their type system, like Pascal, Ada, or Java, these operators usually evaluate to true or false, depending on if the conditional relationship between the two operands holds or not. In languages such as C, relational operators return the integers 0 or 1, where 0 stands for false and any non-zero value stands for true. \n An expression created using a relational operator forms what is termed a relational expression or a condition. Relational operators can be seen as special cases of logical predicates.',
        example:`
see link ^^ -devvy`,
        link: 'http://bit.ly/2i9GKjh',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id:  147// relational operator
      },
      


    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};