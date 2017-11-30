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
        topic_id : 1 //'abstraction'
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
        topic_id : 1
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
        topic_id : 2
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
        topic_id : 3 //'angular'
      }
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
        topic_id : 4 //'anonymous function'
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
        topic_id : 4
      },
      //THIS IS 5
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
        topic_id : 5
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
        topic_id : 5
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
        topic_id : 6
      },
      //THIS IS 7
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
        topic_id : 7
      },
      //THIS IS 8
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
        topic_id : 8
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
        topic_id : 8
      },
      //THIS IS 9
      {
        name : 'Schmoo',
        cohort : 18,
        title : 'Using app level middleware',
        tags : ['middleware', 'express', 'request'],
        note : 'Middleware',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 9
      },
      {
        name : '',
        cohort : 19,
        title : '',
        tags : [],
        note : '',
        example : '',
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 9
      },
      //THIS IS 10
      {
        name : '',
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
        name : '',
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
      //THIS IS 11
      {
        name : '',
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
        name : '',
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
      //THIS IS 12
      {
        name : '',
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
      //THIS IS 13
      {
        name : '',
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
        name : '',
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
      //THIS IS 14
      {
        name : '',
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
        name : '',
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
      //THIS IS 15
      {
        name : '',
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
      }
 
      //END
      //TOTAL 30
      

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }
};