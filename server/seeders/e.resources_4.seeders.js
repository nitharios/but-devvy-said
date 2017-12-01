'use strict';

//contains topic_id 46 - 55
//TOTAL : 14

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

        {
          name : 'Scott',
          cohort : 17,
          title : 'How to use the debugger in a function.',
          tags : ['function', 'errors', 'debugger', 'keyword'],
          note : 'In a function with many lines, we may want to debug line by line to check for errors. We would insert the debugger keyword at a line in the function that we want to begin checking for errors.',

          example : `
function potentiallyBuggyCode() { 
    debugger; 
    //do things here, step through, step in, etc. 
}`,

          link : 'https://mzl.la/18tVD8x',
          createdAt : new Date(),
          updatedAt : new Date(),
          topic_id : 46 //debugger
        },
        {
          name : 'Corey',
          cohort : 18,
          title : 'What is debugging?',
          tags : ['debugger', 'errors', 'javascript'],
          note : 'Sometimes, code may have syntax or logical errors. And sometimes, nothing will happen even if there are errors. Finding these errors is called debugging, we typically use the built-in Javascript debugger, with the debugger keyword placed in our code.',

          example : `
var x = 15 * 5;
debugger; 
document.getElementById("demo").innerHTML = x;`,

          link : 'http://bit.ly/2AkUy2D',
          createdAt : new Date(),
          updatedAt : new Date(),
          topic_id : 47 //debugging
        },
        {
          name : 'Ed',
          cohort : 19,
          title : 'Default keyword in a switch statement.',
          tags : ['conditional', 'switch', 'default', 'keyword'],
          note : 'The default keyword in a switch statement describes what to do when none of the cases are met. It is done at the very bottom of the statement. Do not forget the break keyword at the end.',

          example : `
switch (expression) {
  case value1:
    //Statements executed when the result of expression matches value1
    [break;]
  default:
    //Statements executed when none of the values match the value of the expression
    [break;]
}`,

          link : 'https://mzl.la/2BpPQj9',
          createdAt : new Date(),
          updatedAt : new Date(),
          topic_id : 48 //default 
        },
        {
          name : 'Ace',
          cohort : 19,
          title : 'Default keyword in export statement.',
          tags : ['exporting', 'keyword', 'default'],
          note : 'Export default is used to export a single class, function, or primitive from a script file. Modules that only export single values are very popular in NodeJS.',

          example : `
export default function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = function() {
  return "" + this.string;
};`,

          link : 'http://bit.ly/2Agxrbn',
          createdAt : new Date(),
          updatedAt : new Date(),
          topic_id : 48 //default 
        },
        {
          name : 'Kevo',
          cohort : 19,
          title : 'What is the default constructor?',
          tags : ['object', 'class', 'constructor', 'method'],
          note : 'There can only be one special method with the name of constructor in a class. Having more than one will throw a syntax error. If no constructor is specified, a default constructor is used.',

          example : ``,

          link : 'https://mzl.la/2i70Zhu',
          createdAt : new Date(),
          updatedAt : new Date(),
          topic_id : 49 //default constructor
        },
        {
          name : 'Debbie',
          cohort : 17,
          title : 'What is denormalization?',
          tags : ['database', 'normalization', 'denormalization'], 

          note : 'Denormalization is done on a normalized database to increase performance. It involves adding redundant data to where we think it will help the most. It can be extra attributes to an existing table, or entirely new tables.',

          example : ``,

          link : 'http://bit.ly/2njkqZG',
          createdAt : new Date(),
          updatedAt : new Date(),
          topic_id : 50 //denormalization
        },
        {
          name : 'Levi',
          cohort : 19,
          title : 'Why use denormalization?',
          tags : ['denormalization', 'tables', 'optimization'],
          note : `Maintaining history of data is one of the main reasons to use denormalization. Someone's first and last name can change, a business can change, etc. Adding a new table containing this history through denormalization could solve this problem.`,

          example : ``,

          link : 'http://bit.ly/2nfiEZu',
          createdAt : new Date(),
          updatedAt : new Date(),
          topic_id : 50 //denormalization
        },
        {
          name : 'Alex',
          cohort : 15,
          title : 'Delete operator in Javascript',
          tags : ['keyword', 'javascript', 'property'],
          note : 'The delete operator removes a given property from an object. It will return true or false if successful or not. If the property does not exist, delete will have no effect and return true.',

          example : `
//let's create an employee object and try to remove some properties.
var Employee = {
  age: 28,
  name: 'abc',
  designation: 'developer'
}
//these will log true after removing the property from Employee
console.log(delete Employee.name);
console.log(delete Employee.age);

//also logs true, even though salary does not exist!
console.log(delete Employee.salary);`,

          link : 'https://mzl.la/1GIMLHi',
          createdAt : new Date(),
          updatedAt : new Date(),
          topic_id : 51 //delete
        },
        {
          name : 'Christie',
          cohort : 18,
          title : 'What is DevOps?',
          tags : ['development', 'operations', 'procedure'],
          note : `“DevOps” as a term was first coined in 2009 by Patrick Debois, who became one of its chief proponents.\n Simply put, DevOps is a combination of software development and operations — and as its name suggests, it's a melding of these two disciplines in order to emphasize communication, collaboration, and cohesion between the traditionally separate developer and IT operations teams.`,

          example : ``,

          link : 'http://bit.ly/2itwRAv',
          createdAt : new Date(),
          updatedAt : new Date(),
          topic_id : 52 //devops
        },
        {
          name : 'Carey',
          cohort : 19,
          title : 'What is a directive in Angular?',
          tags : ['angular', 'framework', 'front-end'],
          note : `A directive is like an extension of an HTML tag. You supply an attribute with the prefix "ng-". You can initialize an Angular app, starting data, or bind the value of HTML controls to application data.`,

          example : ``,

          link : 'http://bit.ly/2wJWGk5',
          createdAt : new Date(),
          updatedAt : new Date(),
          topic_id : 53 //directive (angular)
        },
        {
          name : 'Reese',
          cohort : 19,
          title : 'An example of the ng-init directive in Angular.',
          tags : ['directive', 'html', 'data binding', 'initialize'],
          note : `The ng-init directive is not as common as the others, but it has its uses. It basically initializes a starting set of data for an HTML tag. `,

          example : `
//we declare a variable 'TutorialName' using ng-init and then display its value
<div ng-app="" ng-init="TutorialName='Angular JS'">
    Tutorial Name : {{ TutorialName }} 
</div>`,

          link : 'http://bit.ly/2ivoTXE',
          createdAt : new Date(),
          updatedAt : new Date(),
          topic_id : 53 //directive (angular)
        },
        {
          name : 'Dee',
          cohort : 11,
          title : 'What is the document object model?',
          tags : ['dom', 'document object model', 'hierarchy'],
          note : 'The document object model is a hierarchy of objects, with the document object being at the top. It is what allows us to create, modify, delete, and edit existing page content. We select and isolate elements and modify attributes through DOM methods to achieve this.',

          example : `
window.onload = addElement;

function addElement() { 
  // create a new div element and give it some content 
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div.
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 

  // document.body.insertBefore(newDiv, currentDiv);
  currentDiv.appendChild(newDiv);
}`,

          link : 'http://bit.ly/2j5Wunp',
          createdAt : new Date(),
          updatedAt : new Date(),
          topic_id : 54 // document object model
        },
        {
          name : 'Walter',
          cohort : 19,
          title : 'What is the do while loop?',
          tags : ['looping', 'conditional', 'while'],
          note : 'The do while statement will create a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.',

          example : `
//start off with an empty string
var result = '';
var i = 0;

//execute a statement once then begin a loop
do {
   i += 1;
   result += i + ' ';
} while (i < 5);

document.getElementById('example').innerHTML = result;

//output : 1 2 3 4 5`,

          link : 'https://mzl.la/1FpMNGa',
          createdAt : new Date(),
          updatedAt : new Date(),
          topic_id : 55 //do while
        },
        {
          name : 'Allen',
          cohort : 19,
          title : 'Why use a do while loop instead of a for loop?',
          tags : ['for loop', 'repetition', 'while'],
          note : 'A do while loop is a control statement with the condition at the bottom. A typical use case is when you need to ask a user for a password and then initiate a conditional check.',

          example : `
//done in Java 
String input; 

do { 
    System.out.print("Password? "); 
    input = scanner.nextLine().trim(); 
} while (!input.equals(PASSWORD));`, 

          link : '',
          createdAt : new Date(),
          updatedAt : new Date(),
          topic_id : 55 //do while
        }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', null, {});

  }

};