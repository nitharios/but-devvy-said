'use strict';

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      {
        name : 'Corey',
        cohort : 14,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Jon',
        cohort : 19,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Corey',
        cohort : 14,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Jon',
        cohort : 19,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Corey',
        cohort : 14,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Jon',
        cohort : 19,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Corey',
        cohort : 14,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Jon',
        cohort : 19,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Corey',
        cohort : 14,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Jon',
        cohort : 19,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Corey',
        cohort : 14,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Jon',
        cohort : 19,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Corey',
        cohort : 14,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      },
      {
        name : 'Jon',
        cohort : 19,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1
      }
      //END
      //TOTAL 20

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};