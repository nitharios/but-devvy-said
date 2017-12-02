'use strict';

//contains topic_id 166 - 175
//TOTAL : 10

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      {
        name : 'Lee',
        cohort : 19,
        title : 'How does state work in react?',
        tags : ['data management', 'state', 'component'],
        note : `A React component is like a state machine that represents an user interface. Every user action potentially triggers a change in that state machine. Then, the new state is represented by a different React element.`,

        example : `
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.incrementCounter = this.updateCounter.bind(this, 1);
        this.decrementCounter = this.updateCounter.bind(this, -1);
    }
    
    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <input type='button' value='+' onClick={this.incrementCounter} />
                <input type='button' value='-' onClick={this.decrementCounter} />
            </div>
        );
    }
    
    updateCounter(count) {
        this.setState({count: this.state.count + count});
    }
}`,

        link : 'http://bit.ly/2BCgTJj',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 166 //state (react)
      },
      {
        name : 'Nancy',
        cohort : 19,
        title : 'What is syntactical sugar?',
        tags : [''],
        note : `It makes the language "sweeter" for human use: things can be expressed more clearly, more concisely, or in an alternative style that some may prefer. An example is a class in Javascript, it is actually a function beneath the surface, but it simply allows a developer accustomed to a classical language to have an easier time.`,

        example : `
//classes are just syntactical sugar for the prototype pattern
class Thing {
   someFunc() {}
}

console.log("someFunc" in Thing.prototype); // true`,

        link : 'http://bit.ly/2AAvCXg',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 167 //syntactical sugar
      },
      {
        name : 'Ben',
        cohort : 17,
        title : 'Why is syntax important in Javascript?',
        tags : ['syntax', 'readability'],
        note : `Any error in syntax will also break a program, one reason why proper syntax is important. Another reason is for code readability. Whitespce and indentation done wrong will confuse other developers.`,

        example : `
//an example of whitespace and its importance

//bad
const userLocation      =    "New York City, "     +  "NY";
const userLocation="New York City, "+"NY";

//good
const userLocation = "New York City, " + "NY";`,

        link : 'http://do.co/2zVtlXc',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 168 //syntax
      },
      {
        name : 'Ricky',
        cohort : 19,
        title : 'What is a SyntaxError?',
        tags : ['error', 'syntax', 'parse'],
        note : `A SyntaxError is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.`,

        example : `
//catching a SyntaxError
try {
  eval('hoo bar');
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);                // "missing ; before statement"
  console.log(e.name);                   // "SyntaxError"
  console.log(e.fileName);               // "Scratchpad/1"
  console.log(e.lineNumber);             // 1
  console.log(e.columnNumber);           // 4
  console.log(e.stack);                  // "@Scratchpad/1:2:3\n"
}`,

        link : 'https://mzl.la/2ABAtaE',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 169 //syntax error
      },
      {
        name : 'Nancy',
        cohort : 19,
        title : 'What is technical debt?',
        tags : ['software development', 'technical debt'],
        note : `In any application, every line of code has to be maintained and reviewed going forward. Leaving issues or bugs for later while pushing forward with new features or functionality greatly increases technical debt.`,

        example : ``,

        link : 'http://bit.ly/2nn4khA',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 170 //technical debt
      },
      {
        name : 'Nancy',
        cohort : 19,
        title : 'What is a ternary operator?',
        tags : ['conditional', 'ternary'],
        note : `The ternary is a very concise way of writing a conditional statement in Javascript. Instead of an if-else statement, you can use a one-liner to accomplish about the same thing.`,

        example : `
//an example of an if-else that can be changed to ternary
if(userIsYoungerThan21) {
  serveGrapeJuice();
}
else {
  serveWine();
}

//change to ternary
userIsYoungerThan21 ? serveGrapeJuice() : serveWine();`,

        link : 'http://bit.ly/2jBZOXq',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 171 //ternary
      },
      {
        name : 'Nancy',
        cohort : 19,
        title : 'What is Test-Driven Development?',
        tags : ['tdd', 'mocha', 'chai'],
        note : `Test Driven Development (TDD) is a programming practice that instructs developers to write new code only if an automated test has failed. This avoids duplication of code. The primary goal of TDD is to make the code clearer, simple and bug free`,

        example : `
"use strict";

var expect = require('chai').expect;

// Simple assertions
expect({}).to.exist;  
expect(26).to.equal(26);  
expect(false).to.be.false;  
expect('hello').to.be.string;

// Modifiers ('not')
expect([1, 2, 3]).to.not.be.empty;

// Complex chains
expect([1, 2, 3]).to.have.length.of.at.least(3);`,

        link : 'http://bit.ly/2iBfOgc',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 172 //test-driven development
      },
      {
        name : 'Mark',
        cohort : 19,
        title : 'What does that = this mean?',
        tags : ['context', 'that', 'this'],
        note : `It is a common naming convention for a private variable that stores the value of the current context. In Python, the convention is 'self.' It is a workaround for an error in the ECMAScript Language Specification which causes the value of 'this' to be set incorrectly for inner functions.`,

        example : `
function usesThis(name) {
    this.myName = name;

    function returnMe() {
        return this;        //scope is lost because of the inner function
    }

    return {
        returnMe : returnMe
    }
}

function usesThat(name) {
    var that = this;
    this.myName = name;

    function returnMe() {
        return that;            //scope is baked in with 'that' to the "class"
    }

    return {
        returnMe : returnMe
    }
}

var usesthat = new usesThat('Dave');
var usesthis = new usesThis('John');
alert("UsesThat thinks it's called " + usesthat.returnMe().myName + '\r\n' +
      "UsesThis thinks it's called " + usesthis.returnMe().myName);`,

        link : 'http://bit.ly/2jBAjWm',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 173 //that
      },
      {
        name : 'Kevin',
        cohort : 19,
        title : 'What is third-party middleware?',
        tags : ['middleware', 'express', 'third-party'],
        note : `Third-party middleware is simply a small set of functionality written by someone else that you import into your express app. The most popular one we have used in our cohort was body-parser.`,

        example : `
//a simple app using the cookie parser third-party middleware
var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())`,

        link : 'http://bit.ly/2npkRlw',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 174 //third-party middleware
      },
      {
        name : 'Myko',
        cohort : 18,
        title : 'The this keyword is confusing!',
        tags : ['context', 'advanced'],
        note : `The best analogy I can think of for context is comparing it to scope. Scope is about what variables a function can see, and context is about what object is currently using a function. Context can vary a lot, so it is kind of slippery to keep track of.`,

        example : `
//a simple context example
// In web browsers, the window object is also the global object:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"`,

        link : 'http://bit.ly/2Apxwrt',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 175 //this
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};