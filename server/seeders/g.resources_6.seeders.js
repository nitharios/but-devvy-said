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
      {
        name : 'Jane',
        cohort : 16,
        title : 'Nested for loops',
        tags : ['array', 'for loop', 'control flow'],
        note : `To work with a 2d-array, or a nested array, you can use a for loop inside a for loop. It will increment the inner until completion, then increment the outer by one and repeat the code for the inner loop.`,

        example : `
var arr = [[1,2], [3,4], [5,6]];
    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }`,

        link : 'http://bit.ly/2jAWQmh',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 66 //for loop
      },
      {
        name : 'Ella',
        cohort : 19,
        title : 'For in loop is a for loop for objects.',
        tags : ['objects', 'loops', 'for in'],
        note : `The for/in statement loops through the properties of an object.\n The block of code inside the loop will be executed once for each property. Use square-brackets to indicate the value for a key.`,

        example : `
var obj = {a: 1, b: 2, c: 3};
    
for (const prop in obj) {
  console.log(obj.${prop} = ${obj[prop]});
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"`,

        link : 'https://mzl.la/1EhWBNV',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 67 //for in loop
      },
      {
        name : 'Coach',
        cohort : 19,
        title : 'Framework vs. Library',
        tags : ['framework', 'front-end', 'library'],
        note : `A framework provides functionalities/solution to the particular problem area.\n It is somewhat similar to a library, but there is a distinct difference. A library is a toolkit that abstract different layers, whereas a framework describes the structure of how you present your code.`,

        example : ``,
        link : 'http://bit.ly/2kaWW7V',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 68 //framework
      },
      {
        name : '',
        cohort : 19,
        title : 'What are functions in Javascript?',
        tags : ['function', 'subroutine', 'javascript'],
        note : `Functions are the bread and butter of JavaScript programming.\n The concept of wrapping a piece of program in a value has many uses.\n It is a tool to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other.`,
        example : ``,
        link : 'http://bit.ly/2njb2FA',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 69 //function
      },
      {
        name : '',
        cohort : 19,
        title : 'Functions are first-class objects.',
        tags : ['functions', 'objects', 'first-class', 'arguments'],
        note : `In JavaScript, functions are objects.\n You can work with functions as if they were objects.\n For example, you can assign functions to variables, to array elements, and to other objects.\n They can also be passed around as arguments to other functions or be returned from those functions.`,

        example : `
//we confirm if a function is indeed an object instance
function message() {
    alert("Greetings Linda!");
};

alert(typeof message);                   // logs 'function'
alert(message instanceof Object);        // logs 'true'`,

        link : `http://bit.ly/2zSS8vd`,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 69 //function
      },
      {
        name : 'Linda',
        cohort : 19,
        title : 'Why use Functions in Javascript?',
        tags : ['functions', 'javascript', 'code reuse'],
        note : ``,
        example : ``,
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 69 //function
      },
      {
        name : 'Dave',
        cohort : 19,
        title : 'Defining a function through declaration',
        tags : ['function', 'function declaration', 'hoisting'],
        note : `The function keyword used at the start of a statement followed by a name is a way to define a function through function declaration. These are hoisted to the top of code, unlike function expressions.`,
        example : `
console.log("The future says:", future());

function future() {
  return "We STILL have no flying cars.";
}`,
        link : 'https://mzl.la/17ehAI9',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 70 //function declaration
      },
      {
        name : 'Tyler',
        cohort : 18,
        title : 'Using variables to store function objects, function expression.',
        tags : ['function expression', 'function', 'variable'],
        note : `A function expression is very similar to and has almost the same syntax as a function statement.\n The main difference between a function expression and a function statement is the function name, which can be omitted in function expressions to create anonymous functions.\n A function expression can be used as a IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.`,
        example : `
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar');
};`,
        link : 'https://mzl.la/17lOhTZ',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 71 //function expression
      },
      {
        name : 'Katrina',
        cohort : 17,
        title : 'Function invocation patterns',
        tags : ['function invocation', 'context', 'this'],
        note : `The process of executing code within a function happens after you invoke the function. Another common term used is to 'call a function.' Invoke is the overall better term, since the call() prototype method is a specific way to invoke a function.`,

        example : `
function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2); // Will return 20`,

        link : 'http://bit.ly/2kcavEf',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 72 //function invocation
      },
      {
        name : 'Inca',
        cohort : 16,
        title : 'What is functional programming?',
        tags : ['functional programming', 'paradigm'],
        note : `Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects.\n Functional programming is a programming paradigm, meaning that it is a way of thinking about software construction based on some fundamental, defining principles (listed above).`,

        example : ``,

        link : 'http://bit.ly/2qSaxAh',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 73 //functional programming
      },
      {
        name : 'Jay',
        cohort : 19,
        title : '',
        tags : [],
        note : `Scope has to do with what data, or variables, are accessible.\n Variables declared within a function are local variables and are only accessible within that function or by functions inside that function. This is function-level scope.`,

        example : `
var name = "Richard";
​
​function showName () {
    var name = "Jack"; // local variable; only accessible in this showName function​
    console.log (name); // Jack​
}
console.log (name); // Richard: the global variable`,

        link : 'http://bit.ly/28ZKDmL',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 74 //function level scope
      },
      {
        name : 'Gerry',
        cohort : 19,
        title : 'What is GitHub?',
        tags : ['version control', 'terminal', 'git'],
        note : `GitHub is a version control system used by developers. It makes working on a project much safer, since you can branch away from the main line of development as you add individual features. You can also revert to a previous commit whenever you need to.`,
        example : ``,
        link : 'http://bit.ly/2hIvfjJ',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 75 //github
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};