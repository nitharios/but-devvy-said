'use strict';

//contains topic_id 96 - 105
//TOTAL : 10

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      {
        name : 'Harry',
        cohort : 13,
        title : 'Adding a key value pair to an object.',
        tags : ['object literal', 'object', 'key', 'value'],
        note : 'There are two ways to add a new property to an object.\n You can use dot notation if you know the key name of the property.\n You can use square bracket notation to give the key name dynamically.',
        example : `
//dot notation
obj.key3 = "value3"; 

//use square bracket notation
obj["key3"] = "value3";`,

        link : 'http://bit.ly/2AiSLwQ',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 96 //key value pair
      },
      {
        name : 'Ashley',
        cohort : 19,
        title : 'What is a keyword?',
        tags : ['keyword', 'javascript', 'operator'],
        note : 'A keyword is a reserved word that cannot be used as variable, label, or function names. These all carry an important, specific purpose. The most common one is var, function, and return.',
        example : ``,
        link : 'http://bit.ly/2zDar3h',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 97 //keyword
      },
      {
        name : 'Walter',
        cohort : 10,
        title : 'Does let replace var entirely?',
        tags : ['variable', 'let', 'loops', 'block scope'],
        note : 'let is a version of var that is specifically block scoping. let should replace var only when var was already signaling block scoping. let improves scoping options in JS, but does not entirely replace var. var is still useful as a signal for variables that are used throughout a function.',

        example : `
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}`,

        link : 'http://bit.ly/2quX6rF', //JSTips
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 98 //'let'
      },
      {
        name : 'Harry',
        cohort : 13,
        title : 'What is a library?',
        tags : ['library', 'toolkit', 'import'],
        note : 'A library is a JavaScript file that contains a bunch of functions, and those functions accomplish some useful task for your webpage.\n These are pre-packaged toolkits that we can incorporate in our apps to save time.\n Also can be referred to as a module.',
        example : ``,
        link : 'https://mzl.la/1PY7nnm',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 99 //library 
      },
      { 
        name : 'Harry',
        cohort : 13,
        title : 'What is a local repository?',
        tags : ['repository', 'local', 'github'],
        note : `A local repository is simply the repository between the workstation and the remote repository.\n When you use 'git fetch' to grab data from the remote repository, your local repository is what receives the data.`,
        example : ``,
        link : 'http://bit.ly/2Aw3Ivr',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 100 //local repository
      },
      {
        name : 'Wizard',
        cohort : 19,
        title : 'Lo Dash is a good library to start with.',
        tags : ['lo dash', 'library'],
        note : 'Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, and strings.\n It is great for iterating arrays, objects, and strings.\n As well as manipulating and testing values.',
        example : ``,
        link : 'http://bit.ly/28MTc26',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 101 //lo dash
      },
      {
        name : 'Kristin',
        cohort : 18,
        title : '',
        tags : ['operator', 'logical', 'variable'],
        note : 'AND, OR, and NOT are the logical operators. These are typically used in a conditional statement, and with booleans.',
        example : ``,
        link : 'https://mzl.la/19VbTj5',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 102 //logical operator
      },
      {
        name : 'Peter',
        cohort : 19,
        title : 'What are the different loops in Javascript?',
        tags : ['loops', 'repetition', 'for'],
        note : 'Loops give you the ability to repeat a body of code.\n These can also be referred to as repetition statements.\n The different kinds are for, for in, while, do while.',
        example : ``,
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 103 //loops
      },
      {
        name : 'Felicia',
        cohort : 5,
        title : 'What is meant by a loosely typed language?',
        tags : ['javascript', 'loosely typed language', 'scripting language'],
        note : 'A loosely typed language is a language where you do not have to declare types for your variables. The Javascript engine will figure out the type for you. This is especially handy for a set of three or more function parameters.',

        example : `
//a loosely typed language saves you from having to declare variable types!
function doSomething(a, b, c) { //code here } ;

//i can invoke doSomething with all sorts of stuff
var a = doSomething(1, 2, 'apple');
var c = doSomething(true, 3, 'banana');`,

        link : 'http://bit.ly/2AjBKR2', //Quora
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 104 //loosely typed language
      },
      {
        name : 'Bruce',
        cohort : 19,
        title : 'What are the benefits of a mechanical keyboard?',
        tags : ['poker2', 'keyboard', 'developer'],
        note : 'Mechanical keyboards have a significantly longer life span.\n Most of the mechanical switches are tested for 30 to 70 million key presses.\n Common membrane keyboards only offer a life span of about 5 million key presses.',
        example : ``,
        link : 'http://bit.ly/2zDCAHw',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 105 //mechanical keyboard
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};