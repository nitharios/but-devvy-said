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
      

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};