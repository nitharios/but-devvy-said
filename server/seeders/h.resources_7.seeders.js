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
      },
      {
        name: 'cpt mcTavish',
        cohort: 12,
        title: 'what is the in keyword',
        tags:['in', 'keyword','operator'],
        note:'The in operator returns true if the specified property is in the specified object or its prototype chain.',
        example:`
prop in object
var trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple');
trees[3] = undefined;
3 in trees; // returns true`, 

        link: 'https://mzl.la/1GIORar',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 84 // in
      },
      {
        name: 'winward jim',
        cohort: 13,
        title: 'what is indentation',
        tags:['indentation', 'structure', 'code block'],
        note:'Indentation is a style within javascript and other programming languages to help other programemrs to read said programs, in Javascript it is also used to easily identify scope',
        example:`
function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}`,

        link: 'https://mzl.la/2BAjLGt',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 85 //indentation
      },
      {
        name: 'jesse james',
        cohort: 11,
        title:'what is indexing',
        tags:['indexing'],
        note:'An array is an ordered set of values that you refer to with a name and an index. For example, you could have an array called emp that contains employees names indexed by their employee number.\n So emp[1] would beemployee number one, emp[2] employee number two, and so on.',
        example:`
var arr = [42]; // Creates an array with only one element:
                // the number 42.

var arr = Array(42); // Creates an array with no elements
                     // and arr.length set to 42; this is
                     // equivalent to:
var arr = [];
arr.length = 42;`,

        link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 86 // indexing
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};