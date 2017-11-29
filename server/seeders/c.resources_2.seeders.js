'use strict';

//RESOURCES 20 TOTAL
//HAS TOPIC ID 16 - 25, 2 EACH
//want to randomize date..

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      {
        name : 'Corey',
        cohort : 14,
        title : 'What is Big O Notation?',
        tags : ['algorithm', 'efficiency', 'sorting'],
        note : 'Big O Notation is used to describe performance or complexity of an algorithm. It specifically describes the worst case scenario. It can be used to describe the execution time required or the space used. ',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 16
      },
      {
        name : 'Jon',
        cohort : 19,
        title : 'What is O(2n) in Big O Notation?',
        tags : ['algorithm', 'computer science', 'recursion'],
        note : 'An O(2n) algorithm is one whose growth doubles with each addition to the input data set. The growth curve of this algorithm is exponential, starting off shallow, then rising meteorically.',

        example : `int Fibonacci(int number) 
{ 
    if (number <= 1) return number; 
    return Fibonacci(number -2) + Fibonacci(number - 1); 
}`,

        link : 'http://bit.ly/1LdV93M',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 16
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : '',
        tags : ['function invocation', 'context', 'this'],
        note : 'Bind allows us to set our own context for a function. It returns a new function that we can then invoke ourselves. It is a very powerful tool.',

        example : `var user = { 
    data : [ 
        {name : "T.Woods", age : 37}, 
        {name : "P.Mickelson", age : 43} 
    ], 
    clickHandler : function(event) { 
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1; //random number btwn 0 and 1 
        
        //This line adds a random person from data array to the text field 
        $("input").val(this.data[randomNum].name + " " + this.data[randomNum].age); 
    } 
}
 
    //Assign an eventHandler to the button's click event 
    $("button').click(user.clickHandler); `,

        link : null,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 17
      },
      {
        name : 'Corey',
        cohort : 14,
        title : 'Example usage of bind in Javascript',
        tags : ['context', 'advanced', 'this'],
        note : 'Bind creates a new function that will have this keyword set to the first parameter passed to bind().',

        example : `var Button = function(content) { 
    this.content = content; 
}; 
Button.prototype.click = function() { 
    console.log(this.content + ' clicked'); 
} 

var myButton = new Button('OK'); 
myButton.click(); 
 
var looseClick = myButton.click; 
looseClick(); //this is not bound, 'this' is not myButton - it is the global obj 

var boundClick = myButton.click.bind(myButton); 
boundClick(); //bound, 'this' is myButton`,

        link : 'http://bit.ly/2k6yNiP', //SO
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 17
      },
      {
        name : 'Jon',
        cohort : 19,
        title : 'How block-level scope can go wrong.',
        tags : ['scope', 'block level scope', 'variable', 'let'],
        note : `Variable scoping can be something that trips up a developer. The problem is that many expect variables to be scoped to a particular block, like a for loop. However, variables declared with 'var' are scoped to the nearest parent function.`,

        example : `//this is an example of how block-level scope can go wrong. 
var avatar = "Ang"; 
var element = "Air"; 
 
var elements = [ 
    "Air", 
    "Earth", 
    "Fire", 
    "Water" 
]; 
 
for (var i = 0; i < elements.length; i++) { 
    var element = elements[i]; 
    console.log(avatar + " has mastered " + element); 
} 

//Outputs : "Ang's primary element is Water" 
console.log(avatar + "'s primary element is " + element);`,

        link : null,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 18
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : 'Example of block level scope',
        tags : ['block level scope', 'function level scope', 'variable'],
        note : 'Block scopes are what you get when you use if statements, for loops, and the like. You can also use them with simple begin and end curly braces.',

        example : `var a = {} // empty object literal 
{ var a } //this is an undefined object in a block level scope 

if ( 3 == '3') { 
    //this is the block level scope for the if statement 
} 

for (var i = 0; i < 10; i++) { 
    //this is the block level scope for the for loop 
}`,

        link : 'http://bit.ly/2BvAryK',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 18
      },
      {
        name : 'Corey',
        cohort : 14,
        title : 'How to use body parser in expressjs',
        tags : ['middleware', 'body parser', 'express'],
        note : 'Body parser is a middleware that express uses. It is almost required, as it saves you a ton of work from having to manually tinker with the request and response objects.',

        example : `const express = require('express'); 
const Diagram = require('./api/diagram/diagram.controller'); 
const router = express.Router(); 
router.post('saveUpdateDiagram', function(req, res) { 
    console.log(req.body); 
});`,

        link : null,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 19
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
        topic_id : 19
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
        topic_id : 20
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
        topic_id : 20
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
        topic_id : 21
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
        topic_id : 21
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
        topic_id : 22
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
        topic_id : 22
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
        topic_id : 23
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
        topic_id : 23
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
        topic_id : 24
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
        topic_id : 24
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
        topic_id : 25
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
        topic_id : 25
      }
      //END
      //TOTAL 20

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};