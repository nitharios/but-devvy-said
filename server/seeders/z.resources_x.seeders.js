'use strict';

//UNSORTED
//TOTAL = ?
//CONTAINS : 31 (x3), 32, 36, 37 (x2), 42, 47, 55, 116 (x2), 125 (x2), 134, 143, 184 (x3)

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [
      {
        name : 'Avinash',
        cohort : 15,
        title : 'What is a closure?',
        tags : ['closure', 'scope', 'private variable'],
        note : 'A closure is an inner function. A function defined within a function that has access to the outer function variables, its own variables, as well as global variables. It is the Javascript way of enforcing public and private methods or variables.',

        example : `var a = (function () { 
  var privateFunction = function () { 
    alert('hello');
  }

  return {
    publicFunction : function() { 
      privateFunction();
    }
  } 
})();`,

        link : null,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 31 //'closure'
      },
      {
        name : 'Asil',
        cohort : 19,
        title : 'A real usage case of a closure.',
        tags : ['closure', 'return', 'function', 'private variable'],
        note : 'Understanding closures will make you a much better coder very quickly. It is a very powerful tool. Here is an example from class today.',

        example : `function outer() { 
  var counter = 0; 
  function inner() { 
    alert(counter); 
    counter++; 
  } 
  
  return inner;
}

var x = outer(); //x is a reference to inner 
x(); //alerts 0 
x(); //alerts 1 
x(); //alerts 2`,

        link : null,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 31 //'closure'
      },
      {
        name : 'Jennifer',
        cohort : 15,
        title : 'What is a closure?',
        tags : ['closures', 'variables', 'scope'],
        note : 'A closure is an inner function that has access the outer, or enclosing, function variables. It is the Javascript way of imitating private variables.',

        example : `var G = 'G'; 
// Define a function and create a closure 
function functionA() { 
    var A = 'A' 
    // Define a function and create a closure 
    function functionB() { 
        var B = 'B' 
        console.log(A, B, G); 
    } 

    functionB(); // prints A, B, G 

    // functionB closure does not get discarded 
    A = 42; 
    functionB(); // prints 42, B, G 
} 

functionA();`,

        link : null,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 31 //'closure'
      },
      {
        name : 'Mister',
        cohort : 11,
        title : 'What makes a good code editors?',
        tags : ['code editor', 'developer', 'syntax'],
        note : 'The most important part of a good editor is workflow and organization. Things should be easy to find and intuitive. It should also have good predictive ability, it should guess well as to what you are trying to do, what you tried to do, and what you will do. It should also do it behind the scenes.',

        example : null,

        link : 'http://bit.ly/2Bnlwpv', //Quora
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 32 //'code editor'
      },
      {
        name : 'Bobby',
        cohort : 18,
        title : 'What is module.exports?',
        tags : ['exporting', 'module.exports', 'importing'],
        note : 'Module.exports is a special object included in every JS file by default. Module is a variable that represents the current module, and exports is an object that will be exposed as a module. Whatever you assign to module.exports will be exposed as a module.',

        example : `module.exports = 'Hello world'; 
//or exports = 'Hello world'; 

//we then import this message module in another file and use it 
//app.js 
var msg = require('./Messages.js'); 
console.log(msg);`,

        link : null, 
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 60 //'exporting'
      },
      {
        name : 'Connie',
        cohort : 19,
        title : 'Why do we need module.exports?',
        tags : ['modularity', 'exports', 'nodejs'],
        note : 'Using modules is essential to building complete applications and systems. Without modules, code would be too fragmented and difficult to run, let alone maintain. A single module is a discrete program contained in a single file.',

        example : `//fiz.js 
exports.fiz = function () { 
    console.log('fiz!'); 
} 
// app.js 
var fiz = require('./fiz.js').fiz; 
fiz();`,

        link : 'http://bit.ly/2juoJMx', //StackAbuse
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 60 //'exporting'
      },
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
        topic_id : 66 //'for loop'
      },
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
      },
      {
        name : 'Colin',
        cohort : 9,
        title : 'What is JSON?',
        tags : ['json', 'objects', 'arrays', 'javascript'],
        note : 'JSON is an easily readable and lightweight data format. It is a nest of objects and arrays used for structuring data. You must keep in mind that the keys for a JSON object are surrounded by quotes, unlike a regular object.',

        example : `{  
  "id": "0001",
  "type": "donut",
  "name": "Cake",
  "ppu": 0.55,
  "batters":
    {
      "batter":
        [
          { "id": "1001", "type": "Regular" },
          { "id": "1002", "type": "Chocolate" },
          { "id": "1003", "type": "Blueberry" },
          { "id": "1004", "type": "Devil's Food" }
        ]
    },
  "topping":
    [
      { "id": "5001", "type": "None" },
      { "id": "5002", "type": "Glazed" },
      { "id": "5005", "type": "Sugar" },
      { "id": "5007", "type": "Powdered Sugar" },
      { "id": "5006", "type": "Chocolate with Sprinkles" },
      { "id": "5003", "type": "Chocolate" },
      { "id": "5004", "type": "Maple" }
    ]
}`,

        link : 'http://bit.ly/2Aiqogc', //InfoWorld -- 'JSON Explained'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 94 //'json'
      },
      {
        name : 'Allyson',
        cohort : 19,
        title : 'What is a let?',
        tags : ['let', 'scope', 'variable'],
        note : 'let declares a variable able to be re-assigned within its block scope, making it ideal for loops.',

        example : null,

        link : 'http://bit.ly/1WF3VSB', //Medium
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 98 //'let'
      },
      {
        name : 'Walter',
        cohort : 10,
        title : 'Does let replace var entirely?',
        tags : ['variable', 'let', 'loops', 'block scope'],
        note : 'let is a version of var that is specifically block scoping. let should replace var only when var was already signaling block scoping. let improves scoping options in JS, but does not entirely replace var. var is still useful as a signal for variables that are used throughout a function.',

        example : null,

        link : 'http://bit.ly/2quX6rF', //JSTips
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 98 //'let'
      },
      {
        name : 'Felicia',
        cohort : 5,
        title : 'What is meant by a loosely typed language?',
        tags : ['javascript', 'loosely typed language', 'scripting language'],
        note : 'A loosely typed language is a language where you do not have to declare types for your variables. The Javascript engine will figure out the type for you. This is especially handy for a set of three or more function parameters.',

        example : null,

        link : 'http://bit.ly/2AjBKR2', //Quora
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 104 //'loosely typed language'
      },
      {
        name : 'Debbie',
        cohort : 7,
        title : 'What is a merge conflict?',
        tags : ['github', 'merge conflict', 'git terminal'],
        note : 'A merge conflict happens when integrating another branch into your current working branch. Often times, one person will delete a file, while the other person has modified it. Git cannot know what is correct, and this is when a merge conflict occurs.',

        example : null,

        link : 'http://bit.ly/2ieOnbS', //GitTower
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 106 //'merge conflict'
      },
      {
        name : 'Ricky',
        cohort : 19,
        title : 'What do they mean by Object Oriented Programming?',
        tags : ['object oriented programming', 'paradigm', 'objects'],
        note : 'Objected Oriented Programming, or OOP, is a programming paradigm. Before OOP, most programs were simply a procedural list of instructions. The essence of OOP is the intricate interaction of many objects, each with state and behavior. Classes or prototypes generate, or initialize these objects, as well as define their structure much like a blueprint.',

        example : null,

        link : 'http://bit.ly/2AE3sLq', //StackExchange -- 'OOP for the non-technical'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 121 //'object oriented programming'
      },
      {
        name : 'Edward',
        cohort : 9,
        title : 'What does it mean to pass by reference?',
        tags : ['objects', 'pass by reference', 'variables'],
        note : 'Variables that are assigned a non-primitive value are given a reference to that value. It is like passing a remote control pointing to that non-primitive into the variable. The remote control points to the memory location.',

        example : null,
        link : 'http://bit.ly/2AcyVmS',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 127 //'pass by reference'
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};