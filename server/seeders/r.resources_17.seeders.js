'use strict';

//LAST PAGE contains a little more than usual.
//contains topic_id 176 - 189
//TOTAL : 

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [
      // 176
      {
        name : 'Dash',
        cohort : 3,
        title : 'Is Javascript Single-Threaded?',
        tags : ['context', 'browser'],
        note : 'TL; DR Your JavaScript code is single-threaded in the same context, but all other stuff which is done by browser (AJAX request, rendering, event triggers etc.) is not.',
        example : '',
        link : 'http://bit.ly/2jDEiBQ',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 176
      },
      // 177
      {
        name : 'Dash',
        cohort : 3,
        title : 'What is a throw statement?',
        tags : ['throw', 'catch', 'try'],
        note : "The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.",
        example : `function UserException(message) {
   this.message = message;
   this.name = 'UserException';
}
function getMonthName(mo) {
   mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   if (months[mo] !== undefined) {
      return months[mo];
   } else {
      throw new UserException('InvalidMonthNo');
   }
}

try {
   // statements to try
   var myMonth = 15; // 15 is out of bound to raise the exception
   var monthName = getMonthName(myMonth);
} catch (e) {
   monthName = 'unknown';
   console.log(e.message, e.name); // pass exception object to err handler
}`,
        link : 'https://mzl.la/1CkHpEM',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 177
      },
      // 178
      {
        name : 'Dash',
        cohort : 3,
        title : 'What is a try-catch statement?',
        tags : ['throw', 'try', 'catch'],
        note : 'The try statement lets you test a block of code for errors.',
        example : `try {
    adddlert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}`,
        link : 'http://bit.ly/2pZzZBU',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 178
      },
      // 179
      {
        name : 'Dash',
        cohort : 3,
        title : 'What is a type error?',
        tags : ['error'],
        note : 'A TypeError is thrown when an operand or argument passed to a function is incompatible with the type expected by that operator or function.',
        example : `try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // "null has no properties"
  console.log(e.name);                 // "TypeError"
  console.log(e.fileName);             // "Scratchpad/1"
  console.log(e.lineNumber);           // 2
  console.log(e.columnNumber);         // 2
  console.log(e.stack);                // "@Scratchpad/2:2:3\n"
}`,
        link : 'https://mzl.la/2BCGx0v',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 179
      },
      // 180
      {
        name : 'Dash',
        cohort : 3,
        title : 'How do I use typeof?',
        tags : ['data type', 'primitive', 'string'],
        note : 'The typeof operator returns a string indicating the type of the unevaluated operand.',
        example : `// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';

// Strings
typeof '' === 'string';
typeof 'bla' === 'string';

// Booleans
typeof true === 'boolean';

// Symbols
typeof Symbol() === 'symbol'

// Undefined
typeof undefined === 'undefined';

// Objects
typeof {a: 1} === 'object';

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object';

// The following is confusing. Don't use!
typeof new Boolean(true) === 'object'; 

// Functions
typeof function() {} === 'function';`,
        link : 'https://mzl.la/1adFxB9',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 180
      },
      {
        name : 'Dash',
        cohort : 3,
        title : 'What is the difference between null and undefined?',
        tags : ['variable', 'assignment'],
        note : 'In JavaScript, undefined means a variable has been declared but has not yet been assigned a value. Undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.',
        example : ``,
        link : 'http://bit.ly/2zFGUG8',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 181
      },
      {
        name : 'Dash',
        cohort : 3,
        title : 'What is a variable in JavaScript?',
        tags : ['variable'],
        note : 'JavaScript variables are containers for storing data values.',
        example : `var x = 5;
var y = 6;
var z = x + y;`,
        link : 'http://bit.ly/2zTsztF',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 182
      },
      {
        name : 'Dash',
        cohort : 3,
        title : 'VIM 101',
        tags : ['code editor', 'unix'],
        note : "In Vim, you can save a file without your hands leaving the keyboard, and sometimes without even leaving the home keys. From Vim's insert mode, hit Escape and then :w. That's all",
        example : ``,
        link : 'http://bit.ly/29esX5B',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 183
      },
      {
        name : 'Dash',
        cohort : 3,
        title : 'The difference between the DOM and Virtual DOM',
        tags : ['document object model', 'virtual document object model'],
        note : 'The Virtual DOM is an abstraction of the HTML DOM. It is lightweight and detached from the browser-specific implementation details. Since the DOM itself was already an abstraction, the virtual DOM is, in fact, an abstraction of an abstraction.',
        example : ``,
        link : 'http://bit.ly/2oi7TkH',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 184
      },
      {
        name : 'Dash',
        cohort : 3,
        title : 'What is a web service in plain English',
        tags : ['xmlhttprequest'],
        note : 'A simple definition: A web service is a function that can be accessed by other programs over the web (Http). To clarify a bit, when you create a website in PHP that outputs HTML its target is the browser and by extension the human being reading the page in the browser. A web service is not targeted at humans but rather at other programs.',
        example : ``,
        link : 'http://bit.ly/2Bs7nr3',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 185
      },
      {
        name : 'Dash',
        cohort : 3,
        title : 'What is a While Loop?',
        tags : ['loop', 'while loop'],
        note : 'The while loop loops through a block of code as long as a specified condition is true.',
        example : `while (i < 10) {
  text += "The number is " + i;
  i++;
}`,
        link : 'http://bit.ly/2zTxyKR',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 186
      },
      {
        name : 'Dash',
        cohort : 3,
        title : 'Why should I not use WITH?',
        tags : ['with'],
        note : 'Use of the with statement is not recommended, as it may be the source of confusing bugs and compatibility issues. See the "Ambiguity Contra" paragraph in the "Description" section below for details.',
        example : ``,
        link : 'https://mzl.la/1CrKM6u',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 187
      },
      {
        name : 'Dash',
        cohort : 3,
        title : 'How do I use XHR?',
        tags : ['xmlhttprequest'],
        note : `The XMLHttpRequest object can be used to request data from a web server.
The XMLHttpRequest object is a developers dream, because you can:

- Update a web page without reloading the page
- Request data from a server - after the page has loaded
- Receive data from a server  - after the page has loaded
- Send data to a server - in the background`,
        example : `var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();`,
        link : 'http://bit.ly/2h08GsG',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 188
      },
      {
        name : 'Dash',
        cohort : 3,
        title : 'What is XHR?',
        tags : ['xmlhttprequest'],
        note : 'Use XMLHttpRequest objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.  XMLHttpRequest is used heavily in Ajax programming.',
        example : ``,
        link : 'https://mzl.la/1FVeqpr',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 188
      },
      {
        name : 'Dash',
        cohort : 3,
        title : '',
        tags : ['yield'],
        note : 'The yield keyword is used to pause and resume a generator function (function* or legacy generator function).',
        example : `function* countAppleSales () {
  var saleList = [3, 7, 5];
  for (var i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}

var appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }`,
        link : 'https://mzl.la/1GIPX5X',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 189
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};