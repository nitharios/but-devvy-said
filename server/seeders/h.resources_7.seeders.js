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
      },
      {
        name: 'johhny belcher',
        cohort: 5,
        title:'what is inheritance',
        tags:['inheritance', 'scope', 'function block'],
        note:'When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property (referred to as [[Prototype]] ) which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.',
        example:`
var o = {
  a: 2,
  m: function() {
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// When calling o.m in this case, 'this' refers to o

var p = Object.create(o);
// p is an object that inherits from o

p.a = 4; // creates a property 'a' on p
console.log(p.m()); // 5
// when p.m is called, 'this' refers to p.
// So when p inherits the function m of o, 
// 'this.a' means p.a, the property 'a' of p`,
        link:'https://mzl.la/1FXbcAX',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 87 // inheritance
      },
      {
        name: 'sorty joe',
        cohort: 19,
        title: 'what is insertion sort',
        tags:['sorting', 'algorithm', 'sorting algorithm'],
        note:'Insertion sort algorithm iterates, consuming one input element each repetition, and growing a sorted output list. Each iteration removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.',
        example:`
function sort(values) {
  var length = values.length;
  for(var i = 1; i < length; ++i) {
    var temp = values[i];
    var j = i - 1;
    for(; j >= 0 && values[j] > temp; --j) {
      values[j+1] = values[j];
    }
    values[j+1] = temp;
  }
};
sort([7, 4, 5, 2, 9, 1]);
//finished`,

        link:'http://bit.ly/2Bqzffp',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 88 // insertion sort
      },
      {
        name:'blowfish tim',
        cohort: 12,
        title: 'what is the instance of something',
        tags:['instance of', 'instance'],
        note:'The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.',
        example:`
object instanceof constructor //syntax
// defining constructors
function C() {}
function D() {}

var o = new C();

// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, because D.prototype is nowhere in o's prototype chain
o instanceof D;

o instanceof Object; // true, because:
C.prototype instanceof Object // true

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
o instanceof C; 

D.prototype = new C(); // add C to [[Prototype]] linkage of D
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true since C.prototype is now in o3's prototype chain`,

        link:'http://bit.ly/2Bqzffp',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id:  89 // instance of
      },
      {
        name: 'johnny',
        cohort:2,
        title:'what is an interpreted language',
        tags:['language', 'interpreted language'],
        note:'JavaScript is a high-level, dynamic, untyped interpreted programming language \n An interpreted language is a programming language for which most of its implementations execute instructions directly and freely, without previously compiling a program into machine-language instructions. The interpreter executes the program directly, translating each statement into a sequence of one or more subroutines already compiled into machine code.',
        example:`
See above note ^^`,
        link: 'http://bit.ly/2tdzs13',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id:  90 //interpreted language
      }
      {
        name: 'Nigel',
        cohort: 1,
        title: 'technical interviews',
        tags:['interview', 'technical interview', 'behavioral interview'],
        note:'The technical interview is a part of the process in which you are tested and asked questions that reflect your technical knowledge and your ability to problem solve, many technical interviews have white. boarding, coding and knowledge questions \n behavioral Interviews are interviews that usually revolve around A job interviewing technique whereby the applicant is asked to describe past behavior in order to determine whether she is suitable for a position. For example, an interviewer may ask "Tell me about a time when you dealt with a disruptive customer". Responses are expected to give an indication of an applicants professional conduct.\n Cultural Interviews Interviewers ask questions about company culture to ensure that the employees they hire are a good fit for the organization. Company culture includes a range of issues, from how employees dress, to how they interact with company leaders, to how often employees volunteer to work after hours.' ,

        example:`
please see above note :) -devvy`,

        link:'http://bit.ly/2BAmDmJ',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 91 // interview
      },
      {
        name: 'kyle simpson',
        cohort: 1,
        title: 'what is javascript',
        tags:[javascript],
        note:'JavaScript is a programming language that allows you to implement complex things on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, or interactive maps, or animated 2D/3D graphics, or scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.',
        example:`
check link below ^^ -devvy`,
        link:'https://mzl.la/2tJZOv3',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 92 // javascript
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};