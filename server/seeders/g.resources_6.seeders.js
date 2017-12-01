'use strict';

//contains topic_id 66 - 75
//TOTAL : 16

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      {
        name : 'Nara',
        cohort : 18,
        title : 'What is a for loop?',
        tags : ['loops', 'repetition', 'for loop'],
        note : 'A for loop is a control flow statement that is used to repeatedly run a block of code until a certain condition is met. It is the most frequently used one especially for new students.',

        example : `var sum = 0; 
for (var i = 1; i <= 50; i++) { 
    sum = sum + i; 
} 
alert("Sum = " + sum); // => Sum = 1275`,

        link : null,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 66 //for loop
      },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 66 //for loop
      // },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 67 //for in loop
      // },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 68 //framework
      // },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 69 //function
      // },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 69 //function
      // },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 70 //function declaration
      // },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 71 //function expression
      // },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 71 //function expression
      // },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 72 //function invocation
      // },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 72 //function invocation
      // },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 73 //functional programming
      // },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 73 //functional programming
      // },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 74 //function level scope
      // },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 75 //github
      // },
      // {
      //   name : '',
      //   cohort : 19,
      //   title : '',
      //   tags : [],
      //   note : ``,
      //   example : ``,
      //   link : '',
      //   createdAt : new Date(),
      //   updatedAt : new Date(),
      //   topic_id : 75 //github
      // }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};