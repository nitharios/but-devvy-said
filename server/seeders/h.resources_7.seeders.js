'use strict';

//contains topic_id 76 - 85
//TOTAL : 

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      {
        name : 'Ella',
        cohort : 19,
        title : 'What is hoisting?',
        tags : ['javascript', 'hoisting', 'variable'],
        note : 'Hoisting is unique to Javascript. It is when variable and function declarations are moved to the top of the code. This means you could assign a value to a variable, or invoke a function before it is declared or defined.',

        example : `x = 5; // Assign 5 to x 
elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x; // Display x in the element 
var x; // Declare x`,

        link : 'http://bit.ly/2ieHJCs', //Scotch.IO -- 'Understanding Hoisting'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 80 //'hoisting'
      },
      {
        name : 'Christy',
        cohort : 3,
        title : 'How to declare an immediately invoked function expression?',
        tags : ['iife', 'anonymous function', 'function'],
        note : 'An immediately invoked function expression is a special kind of anonymous function. It is wrapped inside a set of parenthesis, and has a set of opening and closing parenthesis after the code body, which serves to invoke it immediately.',

        example : `//anonymous function 
function() { 
//any code goes here 
}(); //this set of parenthesis is what invokes it immediately.`,

        link : 'http://bit.ly/1AwyeMO', //GregFranko blog
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 83 //'immediately invoked function expression'
      },
      {
        name : 'Katherine',
        cohort : 17,
        title : 'Why use an immediately invoked function expression?',
        tags : ['iife', 'closure', 'scope'],
        note : 'The main reason to use an IIFE is to avoid polluting the global namespace. The variables used inside the IIFE are not visible outside its scope.',

        example : `(function () { 
    var count = 10;
})(); 
console.log(count); //Reference Error: count is not defined`,

        link : null,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 83 //'immediately invoked function expression'
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};