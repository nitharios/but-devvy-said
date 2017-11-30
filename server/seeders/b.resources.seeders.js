'use strict';

//TOTAL = 25
//contains topic_id 1 - 15
//want to randomize date..

module.exports = {

  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('resources', [

      {
        name : 'Alexis',
        cohort : 18,
        title : 'What is abstraction in computer science?',
        tags : ['abstraction', 'complexity', 'computer science'],
        note : 'Abstraction is a technique for arranging the complexity of computer systems. It also has to deal with suppressing the most complex details so that a person can interact with a system more straightforwardly. We can create something resembling an interface in Javascript using prototypes.',

        example : `
//this is an ItemRepo interface
var ItemRepo = {
  addItem : function(item){}, 
  removeItem : function(id){}, 
  getItem:function(id){} 
};

//two implementations for ItemRepo
//first one to save and retrieve data by ajax, second to save and retrieve data from cookie

var ItemRepoAjax = function(url) { 
  this.url = url;
}; 

var ItemRepoCookie = function() {};
//Extend the ItemRepo for Ajax
ItemRepoAjax.prototype = Object.create(ItemRepo); 
//Extend the ItemRepo for Cookie 
ItemRepoCookie.prototype = Object.create(ItemRepo); 
ItemRepoAjax.prototype.addItem = function(item) {
  //actual add item code 
};
ItemRepoCookie.prototype.addItem = function(item) { 
  //actual add item code 
};`, 

        link : 'http://bit.ly/2AdTz6r', //YouTube 'Computer Science Concept - Abstraction'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1 //abstraction
      },
      {
        name : 'Harry',
        cohort : 13,
        title : 'Can too much abstraction be bad?',
        tags : ['computer science', 'abstraction', 'complexity'],
        note : 'No abstraction is perfect. The details of the layer that abstractions sit atop are there for a clear reason. It can serve to simplify a lot of things, but if that complexity was not necessary at some point, it probably would not be there in the first place.',

        example : null,

        link : 'http://bit.ly/2BtGl3n',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 1 //abstraction
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
        topic_id : 2 //algorithm
      },
      {
        name : 'Curry',
        cohort : 19,
        title : 'A simple algorithm in Javascript.',
        tags : ['algorithm', 'fibonacci', 'math'],
        note : 'An algorithm is simply a well-defined procedure, or a recipe to solve a problem. Today we did the Fibonacci sequence, which is a series of numbers where each is the sum of the previous 2 values. We can use a simple algorithm in Javascript to solve it.',

        example : `
function fibonacci(num) { 
  var a = 1, b = 0, temp; 

  while (num >= 0) { 
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}`,

        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 2 //algorithm
      },
      {
        name : 'Jayce',
        cohort : 13,
        title : 'What is Angular?',
        tags : ['front-end', 'framework', 'javascript'],

        note : 'AngularJS is an extremely powerful framework that front-end web developers rely on to create the interactive aspects of a website. AngularJS uses a very modular approach, and gives developers all they need to set up the front-end of an application. It mainly involves the use of controllers, services, directives, and expressions.',

        example : null,

        link : 'http://bit.ly/2AgD4qF', //YouTube JsWiz 'What is AngularJS?'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 3 //angular
      },
      {
        name : 'kevin',
        cohort : 19,
        title : 'Why use anonymous functions?',
        tags : ['function', 'anonymous function', 'arguments'],
        note : 'Sometimes a function is only called in one place. In these situations, it makes sense to declare a function without a name. It also makes the code more readable when an inline and singular purpose function has no name. The most common use for anonymous function is as an argument to another function.',

        example : `
//pass setTimeout a function that has no name since it has one clear purpose
setTimeout(function() { 
    alert('hello'); 
}, 1000);`,

        link : 'http://bit.ly/2zyGLUN', //SO - benefits of anon functions
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 4 //anonymous function
      },
      {
        name : 'Aaron',
        cohort : 11,
        title : 'A use case for anonymous function.',
        tags : ['function', 'argument', 'return'],
        note : 'An anonymous function is one that is not bound to an identifier. They are often used for constructing the result of a higher-order function that needs to return a function. You can use these to implement partial application in Javascript.',

        example : `
//certain functions definitely dont need a named identifier
Function.prototype.papply = function() { 
    var fixed = Array.prototype.slice.call(arguments),
        fn = this;
    return function() {
        return fn.apply(this, fixed.concat(Array.prototype.slice.call(arguments))); 
    }; 
}`,

        link : 'http://bit.ly/2i4Yax7',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 4 //anonymous function
      },
     
      {
        name : 'Kaley',
        cohort : 19,
        title : 'What are arguments?',
        tags : ['arguments', 'function', 'variables'],
        note : 'Arguments are values passed to functions as they are invoked. The function starts off with access to those variables to begin with. It is slightly different from a parameter. Argument is like what you throw at a function, and a parameter is that function catching what you threw at it.',

        example : `
function foo(one, two) { 
    return one + two; 
};
//this is invoking foo, while supplying two arguments, 5 and 6.
foo(5, 6);`,

        link : 'http://bit.ly/2j3WzIR',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 5 //argument
      },
      {
        name : 'Devon',
        cohort : 19,
        title : 'Difference between argument and parameter',
        tags : ['parameter', 'argument', 'variables', 'scope'],
        note : 'A parameter is a variable defined within a function definition, whether through function declaration or expression. When a function is called or invoked, the data passing into the parameters are the arguments.',

        example : `
// Define a method with two parameters 
int Sum(int num1, int num2) 
{ 
    return num1 + num2;
}

//Call the method using two arguments 
var ret = Sum(2, 3);`,

        link : 'http://bit.ly/2BntJtL',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 5 //argument
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
        topic_id : 6 //arrow function
      },
      {
        name : 'Reid',
        cohort : 18,
        title : 'Why the fat arrow is awesome.',
        tags : ['function', 'arrow function', 'context'],
        note : '',

        example : `
//the fat arrow syntax is amazingly short and concise for single param functions
hello = name => "Hi, "+name; 

//'hello' is the variable, name is the single parameter
//what is after the arrow is the return statement and you dont need the keyword`,

        link : 'http://bit.ly/2zEeHze',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 6 //arrow function
      },
      
      {
        name : 'Chris',
        cohort : 19,
        title : 'API in plain english',
        tags : ['asynchronous', 'server', 'api', 'web service'],
        note : 'One type of API is web service or web API. It is not necessarily the remote server, but rather part of the server that receives requests and sends responses. If we send a request to Facebook, to our browser, Facebook server is an API.',

        example : null,

        link : 'http://bit.ly/2AgbyJ6',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 7 //api
      },
      
      {
        name : 'Nigel',
        cohort : 19,
        title : 'Difference between call() and apply()',
        tags : ['context', 'call', 'apply', 'bind'],
        note : 'The difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly. A useful mnemonic is .. A for array and C for comma.',
        example : `
function theFunction(name, profession) { 
    console.log("My name is " + name + " and I am a " + profession + "."); 
} 
theFunction("John", "fireman"); 
theFunction.apply(undefined, ["Susan", "school teacher"]); 
theFunction.call(undefined, "Claude", "mathematician"); 
theFunction.call(undefined, ...["Matthew", "physicist"]); // used with the spread operator 

//Output : 

// My name is John and I am a fireman. 
// My name is Susan and I am a school teacher. 
// My name is Claude and I am a mathematician. 
// My name is Matthew and I am a physicist.`,

        link : 'http://bit.ly/2AJPQP5',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 8 //apply
      },
      {
        name : 'Virgie',
        cohort : 19,
        title : 'Example of apply()',
        tags : ['apply', 'console', 'function invocation'],
        note : 'Apply lets you pass in an array to supply your own context for a function. The array can have only one element. It is highly similar to call().',

        example : `
function log() { 
    console.log.apply(console, arguments); 
}

//If you call this like log('foo')..
//then that translates to console.log.apply(console, ['foo']);`,

        link : 'http://bit.ly/2i1D17a',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 8 //apply
      },
      
      {
        name : 'Schmoo',
        cohort : 18,
        title : 'Using app level middleware',
        tags : ['middleware', 'express', 'request'],
<<<<<<< HEAD
        note : 'Middleware can be defined on the application level in express. It is functionality that is executed on the end of each request to any route. You write app.use() and supply a custom or third-party middleware.',

        example : `
//do the normal requiring in
var express    = require('express');
var app        = express(); 

//make sure to include req, res, and next in your own custom middleware
function myMiddleware (req, res, next) {
    res.on('finish', function() {
        console.log('Response sent.');
    });
    next();
}

//do not forget app.use()
app.use(myMiddleware);`,

        link : 'http://bit.ly/2zSqj69',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 9 //app middleware
      },
      
      {
        name : 'Kyle',
        cohort : 19,
        title : 'What is an arithmetic operator?',
        tags : ['math', 'addition', 'arithmetic operator', 'primitive'],
        note : 'This is simply an operator that takes numerical values as operands and returns a single numerical value. The standard ones are addition, subtraction, multiplication, and division. We typically use these for Number and String primitive data types.',

        example : `
// Number + Number -> addition
1 + 2 // 3

// String + String -> concatenation
'foo' + 'bar' // "foobar"`,

        link : 'https://mzl.la/1EnKfqa',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 10 //arithmetic operator
      },
      {
        name : 'Ko',
        cohort : 11,
        title : 'Is modulus an arithmetic operator?',
        tags : ['divison', 'modulus', 'conditional'],
        note : 'A lot of beginner problems involve the use of the modulus arithmetic operator. We used a conditional inside of a for loop a few times to solve problems. It is an arithmetic operator that calculates the remainder of a quotient after division.',

        example : `
// Initialize function to test if a number is even
const isEven = x => {
    // If the remainder after dividing by two is 0, return true
    if (x % 2 === 0) {
        return true;
    }
    // If the number is odd, return false
    return false;
}

// Test the number
isEven(12);`,

        link : 'http://do.co/2At8dqB',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 10 //arithmetic operator
      },
      
      {
        name : 'steve',
        cohort : 18,
        title : 'What is an array?',
        tags : ['array', 'object', 'indices'],

        note : `Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.\n Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense.\n This depends on how the programmer chooses to use them.`,

        example : `
var arr = ['this is the first element', 'this is the second element', 'this is the last element'];
console.log(arr[0]);              // logs 'this is the first element'
console.log(arr[1]);              // logs 'this is the second element'
console.log(arr[arr.length - 1]); // logs 'this is the last element'`,

        link : 'http://bit.ly/2kekdGh',

        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 11 //array
      },
      {
        name : 'Trent',
        cohort : 19,
        title : 'Example use of an array.',
        tags : ['array', 'values', 'indices'],

        note : `A numerically indexed map of values.\n Traditionally an array reserves a continuous allocation of memory of predefined length. In JavaScript this is not the case.\n A JavaScript array is simply a glorified object with a unique constructor and literal syntax and an additional set of properties and methods inherited from Array.prototype.\n A common usage of an array is to append or pop off an element to the end of it.`,

        example : `
//extract the last element of an array and return it
let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange 

//append the element to the end of the array 
let fruits = ["Apple", "Orange"]; 
fruits.push("Pear"); 
alert( fruits ); // Apple, Orange, Pear`,

        link : 'http://bit.ly/2AtV6W9',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 11 //array
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
        topic_id : 12 //array prototype method
      },
      {
        name : 'Jerry',
        cohort : 19,
        title : 'Finding the index of an array using a value.',
        tags : ['array indices', 'zero-index', 'object'],

        note : `Sometimes you have an array of values, and you want to find the index that corresponds to a particular value. You can use the indexOf() method on the array to return you the exact number of the index. If no value is found, -1 will be returned.`,

        example : `
//using the indexOf() method 
var imageList = [100,200,300,400,500];
var index = imageList.indexOf(200); // 1 

//you will get -1 if indexOf() cannot locate any value`,

        link : 'http://bit.ly/2AKnPXl',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 13 //array indices
      },
      {
        name : 'Baseem',
        cohort : 19,
        title : 'Using the filter method.',
        tags : ['array iterative method', 'array', 'filter'],

        note : `Filter is my favorite array method, and the one I have used most throughout the cohort. It saves a ton of time from having to manually loop through and take objects out of an array.`,

        example : `
//we start with an array of values 
var sidekicks = [
    { name: "Robin",     hero: "Batman"   },
    { name: "Supergirl", hero: "Superman" },
    { name: "Oracle",    hero: "Batman"   },
    { name: "Krypto",    hero: "Superman" }
];

//we then call filter and return only objects whose hero property is 'Batman'
var batKicks = sidekicks.filter(function (el) {
    return (el.hero === "Batman");
});`,

        link : 'http://bit.ly/2jCpROa',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 14 //array iterative method
      },
      {
        name : 'Flash',
        cohort : 18,
        title : 'Using map to return a new array from an original array.',
        tags : ['map', 'iterative method', 'arrays'],
        note : `Map is very useful for doing what ForEach does, but returning something new to work with. `,

        example : `
//we start with an array of persons
var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];

//we now want to map through and return a new array with their full name.
persons.map(person => person.firstname + person.lastname;`,

        link : 'http://bit.ly/2k98xV0',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 14 //array iterative method
      },
      {
        name : 'Why is asynchronous programming important in Node?',
        cohort : 19,
        title : 'Nate',
        tags : ['NodeJS', 'async', 'callback hell'],
        note : `Asynchronous programming refers to a style of structuring a program whereby a call to some unit of functionality triggers an action that is allowed to continue outside of the ongoing flow of the program.\n This is especially important when we make network requests, we cannot exactly predict when they will finish.`,

        example : `
//Simple use case of asynchronous XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open("GET", "/bar/foo.txt", true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);`,

        link : 'http://bit.ly/2BnmjXG',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 15 //asynchronous
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
        topic_id : 15 //asynchronous
      }
      //END
      //TOTAL 25
      
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }
};