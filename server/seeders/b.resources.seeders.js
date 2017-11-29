'use strict';

//RESOURCES
//WILL CONTAIN topic_id 1 - 15 (x2)
//currently contains : 1, 2, 3, 4, 6, 12, 15
//want to randomize date..

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('resources', [

      {
        name : 'Alexis',
        cohort : 18,
        title : 'What is abstraction in computer science?',
        tags : ['abstraction', 'complexity', 'computer science'],
        note : 'Abstraction is a technique for arranging the complexity of computer systems. It also has to deal with suppressing the most complex details so that a person can interact with a system more straightforwardly.',
        example : null, //null
        link : 'http://bit.ly/2AdTz6r', //YouTube 'Computer Science Concept - Abstraction'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1 //'abstraction'
      },
      {
        name : 'John',
        cohort : 16,
        title : 'What do we use algorithms for?',
        tags : ['algorithm', 'computer science', 'efficiency', 'sorting', 'big O notation'],

        note : 'An algorithm is a well-defined procedure, or series of steps that allows a computer to solve a problem. It is a lot like a recipe, involving ingredients, or inputs, a series of steps to follow, and a final result, or output.',

        example : `var colours = new Array ("Black", "Blue", "Brown", "Green", "Pink", "Red", "White", "Yellow"); 
var numbersHalf = new Array(); 
for (var i = 1; i < 2500; i++) { 
  numbersHalf.push(i); 
}; 
var numbersFull = new Array(); 
for (var i = 1; i < 5000; i++) { 
  numbersFull.push(i); 
};`,

        link : 'http://bit.ly/2zOrmnm', //Khan Academy 'What is an algorithm?'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 2 //'algorithm'
      },
      {
        name : 'Jayce',
        cohort : 13,
        title : 'What is Angular?',
        tags : ['front-end', 'framework', 'javascript'],

        note : 'AngularJS is an extremely powerful framework that front-end web developers rely on to create the interactive aspects of a website. AngularJS uses a very modular approach, and gives developers all they need to set up the front-end of an application. It mainly involves the use of controllers, services, directives, and expressions.',

        example : null, //null

        link : 'http://bit.ly/2AgD4qF', //YouTube JsWiz 'What is AngularJS?'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 3 //'angular'
      },
      {
        name : 'kevin',
        cohort : 19,
        title : 'Why use anonymous functions?',
        tags : ['function', 'anonymous function', 'arguments'],
        note : 'Sometimes a function is only called in one place. In these situations, it makes sense to declare a function without a name. It also makes the code more readable when an inline and singular purpose function has no name. The most common use for anonymous function is as an argument to another function.',

        example : `setTimeout(function() { 
  alert('hello'); 
}, 1000);`,

        link : 'http://bit.ly/2zyGLUN', //SO - benefits of anon functions
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 4 //'anonymous function'
      },
      {
        name : 'Virgi',
        cohort : 19,
        title : 'What does the fat arrow do?',
        tags : ['arrow function', 'context', 'this', 'bind'],
        note : 'The arrow function, or Fat Arrow, is a simple, short, and concise syntax for writing a function. It does not bind its own value for context. It saves time, and simplifies function scope. It is often used for inline functions.',

        example : `var multiply = function(x, y) { 
return x * y; 
};

var multiply = (x, y) => { 
  return x * y 
};`,

        link : 'http://bit.ly/2AdWQlV', //SitePoint
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 6 //'arrow function'
      },
      {
        name : 'Kristin',
        cohort : 14,
        title : 'How to append something to the end of an array?',
        tags : ['arrays', 'prototype methods', 'push'],

        note : 'An array is a collection of values, or a simple data structure. It is zero-indexed, meaning the first element is represented by a 0, the second a 1, and so on. It is a common procedure to add something to an array, which can be done through the push() method.',

        example : `let pushExample = function(val) { 
  let arr = ["mango", "banana", "apple"]; 
  arr.push(val); 
  return arr; 
    }; 
  pushExample("tomato");`,

        link : 'http://bit.ly/2j14IxJ', //SO -- 'how to append sth to an array', 
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 12 //'array prototype method'
      },
      {
        name : 'Kaley',
        cohort : 19,
        title : 'Asynchronous vs. Synchronous',
        tags : ['asynchronous', 'synchronous'],

        note : 'Synchronous programming is like being in line to buy a movie ticket. You cannot buy yours until everyone in front of you has bought theirs. In asynchronous programming, it is like waiting for your food at a sit-down restaurant. Other people order their food, but you can also order your food. You do not have to wait for them to receive their food and finish eating before you order. SetTimeout is the simplest example of asynchronous programming.',

        example : `console.log("Hello."); 
setTimeout(function() { 
  console.log("Goodbye!"); 
}, 2000); 
console.log("Hello again!");`,

        link : 'http://bit.ly/2sTnrRl', //PluralSight
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 15 //'asynchronous'
      },
 
      //END
      

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }
};