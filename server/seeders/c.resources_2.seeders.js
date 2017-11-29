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
        note : 'Body parser is a middleware that express uses. It saves you a ton of work from having to manually tinker with the request and response objects. It gives you easy access to req.body. You supply body parser as an argument the express app.use().',

        example : `app.use(bodyParser.json()); // for parsing application/json 
app.use(bodyParser.urlencoded({ extended: true })); // for parsing 
application/x-www-form-urlencoded 
app.use(multer()); // for parsing multipart/form-data `,

        link : null,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 19
      },
      {
        name : 'Jon',
        cohort : 19,
        title : 'Why do we use body parser?',
        tags : ['request', 'http', 'body parser', 'express'],
        note : 'Body parser will extract the body portion of an incoming request and expose it on req.body. It becomes a lot easier to work with the data in the body of a long and complicated request object.',
        example : null,
        link : 'http://bit.ly/2BxQTyH',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 19
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : 'How is a boolean useful?',
        tags : ['boolean', 'data type', 'variable'],
        note : 'A boolean represents exactly one of two values: true or false. Sometimes, you will run into a situation where you need to represent yes/no, on/off, or true/false. These are when you should booleans.',
        example : null,
        link : 'http://bit.ly/2AH9lI1',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 20
      },
      {
        name : 'Corey',
        cohort : 14,
        title : 'Difference between boolean object and boolean primitive',
        tags : ['primitive', 'new', 'object', 'boolean'],
        note : 'An object of which the value is not undefined or null, including a Boolean object whose value is false will actually evaluate to true when passed to a conditional.',

        example : `var x = new Boolean(false); 
if (x) { 
    //this code will execute. 
} 

var x = false; 
if (x) { 
    //this code will NOT execute. 
}`,

        link : 'https://mzl.la/1zgVz8P', //MDN
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 20
      },
      {
        name : 'Jon',
        cohort : 19,
        title : 'What is a branch in GIT?',
        tags : ['git terminal', 'branch', 'github'],
        note : 'A branch is a tool integrated in GIT that allows anyone to work away from the main line of development. In our workflow, we use a branch for every feature we are working on. It also important to communicate in a team what you are working on.',
        example : null,
        link : 'http://bit.ly/2k7WGGJ', //GCM
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 21
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : 'How do I create a branch in GitHub?',
        tags : ['github', 'branch', 'workflow'],
        note : `A branch is like a sticky note, or pointer that is pointing to a commit. It is very lightweight. You add a new branch with the 'git checkout -b your_branch' command.`,

        example : `git checkout -b your_branch 
git push -u origin your_branch 
//show all branches 
git branch`,

        link : 'http://bit.ly/2wZqIRj',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 21
      },
      {
        name : 'Corey',
        cohort : 14,
        title : 'How can you use the break keyword?',
        tags : ['keyword', 'break', 'continue', 'label'],
        note : 'You can use the break keyword in a non-conditional as long as you provide a',
        example : '',
        link : 'https://mzl.la/1zi77Gd', //MDN
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 22
      },
      {
        name : 'Jon',
        cohort : 19,
        title : 'When to use the break keyword',
        tags : ['break', 'loops', 'keyword'],
        note : 'You can use the break keyword to jump out of a for loop, as well as a switch statement. A for loop is much more common than a switch statement, and I find break much more useful in this situation.',

        example : `for (i = 0; i < 10; i++) { 
    if (i === 3) { break; } 
    text += "The number is " + i + "<br>"; 
}`,

        link : 'https://www.w3schools.com/js/js_break.asp', //W3 schools
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 22
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : 'What kind of algorithm is bubble sort?',
        tags : ['algorithm', 'sorting', 'efficiency', 'bubble sort'],
        note : 'Bubble sort is based on the idea of repeatedly comparing pairs of adjacent elements and then swapping their positions if they exist in the wrong order. The complexity of bubble sort is O(n2), because the entire array needs to be iterated for every element.',

        example : `void bubble_sort( int A[ ], int n ) { 
    int temp; 
    for(int k = 0; k< n-1; k++) { 
        // (n-k-1) is for ignoring comparisons of elements which have already been compared in earlier iterations 
        for(int i = 0; i < n-k-1; i++) { 
            if(A[ i ] > A[ i+1] ) { 
                // here swapping of positions is being done. 
                temp = A[ i ]; 
                A[ i ] = A[ i+1 ]; 
                A[ i + 1] = temp; 
            } 
        } 
    } 
}`,

        link : 'http://bit.ly/2yQg6Wx', //Geeks4Geeks
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 23
      },
      {
        name : 'Corey',
        cohort : 14,
        title : 'A working example of bubble sort.',
        tags : ['bubble sort', 'sorting', 'computer science', 'big o notation'],
        note : 'Bubble sort is an algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. It is typically not suitable for large data sets.',

        example : null,

        link : 'http://bit.ly/2k2kzxY',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 23
      },
      {
        name : 'Jon',
        cohort : 19,
        title : 'What is the call() method?',
        tags : ['context', 'apply', 'bind', 'call'],
        note : 'Call will invoke a function with the context that you supply yourself. It is slightly different from apply() in that it expects all parameters to be passed individually and not as an array.',

        example : 
`var pokemon = { 
    firstName : 'Pika',
    lastName : 'Chu ',
    getPokeName : function() { 
        var fullname = this.firstname + ' ' + this.lastname; 
        return fullname; 
    } 
}; 

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms`,

        link : 'http://bit.ly/2nebTqS',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 24
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : 'How to use the call() method to invoke a function.',
        tags : ['function invocation', 'context', 'call'],
        note : 'The call() method calls a function with a given this value and arguments provided individually. We call, or invoke, a function a explicityly specify what the this keyword should reference within the calling function. Apply, bind, and call are functions that are built-in to Javascript.',

        example : null,

        link : 'http://bit.ly/2zQ3qQV',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 24
      },
      {
        name : 'Corey',
        cohort : 14,
        title : 'what is a callback function?',
        tags : ['callback function', 'function', 'argument'],
        note : 'A callback function is a function passed as an argument into another function. It is executed after another function has finished executing.',

        example : 
`function greeting(name) { 
    alert('Hello ' + name); 
} 

function processUserInput(callback) { 
    var name = prompt('Please enter your name.'); 
    callback(name);
}

processUserInput(greeting);`,

        link : 'http://bit.ly/2ikmQFO',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 25
      },
      {
        name : 'Jon',
        cohort : 19,
        title : 'An analogy for callback functions.',
        tags : ['function', 'analogy', 'example'],
        note : 'Imagine you are expecting a package in a couple of days. The package is a gift for your neighbor. Therefore, once you get the package, you want it brought over to the neighbors. You are out of town, and so you leave instructions for your spouse. The receiving of the package is like an event, and the instructions to bring the package to the neighbors is the callback.',

        example : null,
        link : 'http://bit.ly/2BmwgEJ',
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