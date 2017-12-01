'use strict';

//contains topic_id 56 - 65
//TOTAL : 14

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      {
        name : 'Nathan',
        cohort : 19,
        title : 'Should I use an alternative keyboard layout like dvorak?',
        tags : ['keyboard', 'layout', 'dvorak'],
        note : `The home row where you fingers rest on the keyboard is the main difference with dvorak. It may be uncomfortable at first to learn, but once you get it, you use much less effort to hit the vowels. The potential cap is much higher with dvorak.`,
        example : ``,
        link : 'http://bit.ly/2zFXLsp',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 56 //dvorak
      },
      {
        name : 'Otacon',
        cohort : 19,
        title : 'Encapsulation in Javascript',
        tags : ['encapsulation', 'scope', 'variables'],
        note : `Sometimes you do not want to create a variable that can be accessed or modified directly. This is called encapsulation, and quickly becomes important as applications scale. We typically set methods that serve as 'getters' and 'setters' to work with these protected variables.`,

        example : `
var person = {
  fullName : "Jason Shapiro",
  setFullName : function (newValue) {
    var reg = new RegExp(/\d+/);
    if( reg.test(newValue) ) {
      alert("Invalid Name");
    }
    else {
      this.fullName = newValue;
    }
  },
  "getFullName" : function() {
    return this.fullName;
  }
};
 
alert( person.getFullName() );   // Jason Shapiro
person.setFullName( "Jim White" );
alert( person.getFullName() );   // Jim White
person.setFullName( 42 );        // Invalid Name
alert( person.getFullName() );   // Jim White`,

        link : 'http://bit.ly/2AvHZUG',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 57 //encapsulation
      },
      {
        name : 'Eric',
        cohort : 19,
        title : 'Example of encapsulation.',
        tags : ['private variable', 'methods', 'encapsulation'],
        note : `JavaScript does not provide a built-in way to manage the visibility of an object’s members.\n However its flexibility does allow us to recreate encapsulation. \nA common approach is to use a function that contains the private data and functions, and then return a limited set of public functions that can interact with the private data.`,

        example : `
var Customer = function(id) {
    var totalSpend = 0;

    function isSpecial() {
        return totalSpend > 100;
    }

    return {
        placeOrder: function(order) {
            totalSpend += order.total;
        },
        getReward: function() {
            if (isSpecial()) {
                return "Special Customer Coupon!";
            } else {
                return "Nothing Today";
            }
        },
        toString: function() {
            return "Customer #" + id;
        }
    };
};`,

        link : 'http://bit.ly/2jA6qpi',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 57 //encapsulation
      },
      {
        name : 'Virgie',
        cohort : 19,
        title : 'Error is an object in Javascript',
        tags : ['error', 'constructor', 'object'],
        note : `Any time we have a runtime error, a new Error object gets created and 'thrown.' The most common is ReferenceError, SyntaxError, and TypeError. The try catch statement handles potential errors, any part of code that can throw an error must have one.`,

        example : `
function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; //throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // pass exception object to error handler -> your own function
}`,

        link : 'https://mzl.la/2zTOL6Z',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 58 //errors
      },
      {
        name : '',
        cohort : 19,
        title : 'Events in Javascript.',
        tags : [],
        note : `Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired.\n For example if the user clicks a button on a webpage, you might want to respond to that action by displaying an information box.`,
        example : ``,
        link : 'https://mzl.la/2it893s',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 59 //events
      },
      {
        name : '',
        cohort : 19,
        title : 'How do events get handled?',
        tags : [],
        note : `We use addEventListener and supply a callback to a DOM node to handle events.\n When you call addEventListener as shown previously, you are calling it as a method on the whole window because in the browser the global scope is equivalent to the window object. Every DOM element has its own addEventListener method, which allows you to listen specifically on that element.`,
        example : `
<button>Click me</button>
<p>No handler here.</p>
<script>
  var button = document.querySelector("button");
  button.addEventListener("click", function() {
    console.log("Button clicked.");
  });
</script>`,
        link : 'http://bit.ly/2iqYSJ7',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 59 //events
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
        name : '',
        cohort : 19,
        title : 'What are the double curly braces in an Angular app?',
        tags : [],
        note : `Any time you see double curly braces, that is the value of an expression. It very much resembles handlebars, and is intuitive to use. We can define a string somewhere in our app, then render it onto our page. This allows for much more dynamic data flow on our front-end.`,
        example : `
<div ng-app ng-init="name='Arun Banik'">
     My name is <b> {{ name }} </b>
</div>`,
        link : 'http://bit.ly/1BzvXyL',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 61 //expression (angular)
      },
      {
        name : '',
        cohort : 19,
        title : 'A simple example with Numbers as expressions in AngularJS',
        tags : [],
        note : `We can define an expression 'cost' and 'quantity' in our application using Angular expressions. Then use double curly braces in our HTML to render it. `,
        example : `
<p>Expense on Books : {{cost * quantity}} Rs</p>`,
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 61 //expression (angular)
      },
      {
        name : '',
        cohort : 19,
        title : 'Why is Express so popular?',
        tags : [],
        note : `Express is a module framework that is the backbone for many web applications. Its flagship feature is its routing system that handles the interaction between two hosts. There are plenty of alternatives, however people love Express for its simplicity and clean syntax.`,
        example : `
//this is a hello world in express
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))`,

        link : 'http://bit.ly/2zTISHa',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 62 //expressjs
      },
      {
        name : '',
        cohort : 19,
        title : 'What does the extends keyword do?',
        tags : [],
        note : `This keyword allows you to subclass custom classes, as well as built-in objects. In other words you can create classes that inherit from a parent class. A good example is Dog extends Animal.`,
        example : `
//this is a simple example of the extends keyword
class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }
}`,
        link : 'https://mzl.la/2zGfuzJ',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 63 //extends
      },
      {
        name : '',
        cohort : 19,
        title : 'The finally keyword',
        tags : [],
        note : `It is a very uncommon keyword that has to do with error handling. The finally statement lets you execute code after a try-catch regardless of its result.`,
        example : `
function myFunction()
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try { 
        if(x == "") throw "Empty";
        if(isNaN(x)) throw "Not a number";
        if(x > 10) throw "Too high";
        if(x < 5) throw "Too low";
    }
    catch(err) {
        message.innerHTML = "Error: " + err + ".";
    }
    finally {
        document.getElementById("demo").value = "";
    }
}`,
        link : 'http://bit.ly/2iuolBp',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 64 //finally
      },
      {
        name : '',
        cohort : 19,
        title : 'What is the flexbox framework?',
        tags : [],
        note : `Flexbox makes CSS a little more intuitive. It is an amazing framework that allows you to make CSS grids very easily. Normally making rows, columns, and centering them is a pain.`,
        example : `
//this is the HTML
<div class="flex-grid">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>

//this is the stylesheet
.flex-grid {
  display: flex;
}
.col {
  flex: 1;
}`,
        link : 'http://bit.ly/29ggD4s',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 65 //flexbox
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};