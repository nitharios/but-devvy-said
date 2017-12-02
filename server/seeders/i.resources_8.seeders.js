'use strict';

//contains topic_id 86 - 95
//TOTAL : 

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      {
        name : 'Schooze',
        cohort : 19,
        title : 'What is indexing for?',
        tags : ['database', 'index', 'sql'],
        note : `An index is a copy of selected columns of data from a table that can be searched very efficiently that also includes a low-level disk block address or direct link to the complete row of data it was copied from.\n Some databases extend the power of indexing by letting developers create indexes on functions or expressions. \nIn other words, it is a data structure that makes searching for a specific column in a database faster.`,

        example : ``,
        link : 'http://bit.ly/2AvSjvD',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 86 //indexing
      },
      {
        name : 'John',
        cohort : 19,
        title : 'Inheritance in Javascript uses the objects themselves.',
        tags : ['constructor', 'inheritance', 'prototype'],
        note : `JavaScript does support inheritance on a prototypal way.\n What you need here is not classes but the encapsulation of behavior and the ability to override.`,
        example : `
function Piece() { }

Piece.prototype.color = "white";
Piece.prototype.getColor = function() { return this.color }
Piece.prototype.move = function() { throw "pure function" };

function Pawn() { }
Pawn.prototype = new Piece();    
Pawn.prototype.move = function() { alert("moved"); }

//and now..
var p = new Pawn(); p.color = "black";

> p instanceof Piece`,

        link : 'http://bit.ly/2dxx4w9',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 87 //inheritance
      },
      {
        name : 'Schmoo',
        cohort : 19,
        title : 'Visualizing Insertion Sort',
        tags : ['algorithm', 'sorting', 'complexity'],
        note : `Insertion sort is kind of like how we would sort a playing-card deck.\n Insertion sort algorithm iterates, consuming one input element each repetition, and growing a sorted output list.\n Each iteration removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.\n It repeats until no input elements remain.`,

        example : `
// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]`,

        link : 'http://bit.ly/2ngFCiU',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 88 //insertion sort
      },
      {
        name : 'Andy',
        cohort : 19,
        title : 'What is the instanceof operator?',
        tags : ['keyword', 'instanceof', 'javascript'],
        note : `The instanceof operator is used to check the type of an object at run time.\n The instanceof operator returns a boolean value that indicates if an object is an instance of a particular class.`,

        example : `
var string1 = "w3resource"; //Declaring string object  
var date1 = new Date();  //Declaring Date object  
if (string1 instanceof String) {  
    console.log('it worked!');    
};//this code will work and 'it worked!' will be logged`,

        link : 'http://bit.ly/2jArgF7',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 89 //instanceof
      },
      {
        name : 'Wayne',
        cohort : 19,
        title : 'What is an interpreted language?',
        tags : ['javascript', 'interpreted language', 'compiler'],
        note : `JavaScript is an interpreted language, not a compiled language.\n A program such as C++ or Java needs to be compiled before it is run. In Javascript, most of its implementations execute code directly.`,
        example : ``,
        link : 'http://bit.ly/2ApeoJZ',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 90 //interpreted language
      },
      //DEMO
      //DEMO
      //DEMO
      //DEMO
      //DEMO
      {
        name : 'Kyle',
        cohort : 19,
        title : 'What is Javascript?',
        tags : ['javascript', 'language', 'scripting', 'interpreted'],
        note : `10.11.2017 notes\n What is Javascript?\n\n - JavaScript is a programming language that allows you to implement complex things on web pages.\n - JavaScript is an interpreted language; the code is run from top to bottom and the result of running the code is immediately returned.\n - It does not need a compiler like Java or C++.\n - All the interactivity you see on a web site is done with Javascript.`,

        example : `
//we first start off with script tags, and add code inside!
<script>

  // JavaScript goes here

</script>

//next, we'll add some real stuff inside our script tags!
function createParagraph() {
  var para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}`,

        link : 'http://bit.ly/2Bzb4vT',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 92 //javascript #1
      },
      {
        name : 'Quince',
        cohort : 19,
        title : 'What makes Javascript a powerful language?',
        tags : ['loosely typed', 'interpreted', 'prototypal'],
        note : `November 26, 2017\n What makes Javascript powerful?\n\n - Javascript is an extremely flexible language that runs straight out of your browser and has the support of a thriving community and tons of powerful and free frameworks.\n - It is also an interpreted language, meaning there is no time consuming edit-compile-execute cycle to have to contend with.\n - It is also much easier and intuitive to debug than other languages, as you can do it right from your browser!`,

        example : ``,

        link : 'http://bit.ly/2BBfGlb',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 92 //javascript #2
      },
      {
        name : 'Quince',
        cohort : 19,
        title : 'Famous apps built in Javascript.',
        tags : ['famous web apps', 'javascript', 'nodeJS'],
        note : `September 19, 2017\n What are some famous web apps that were built with Javascript?\n\n - Polarr was created in Javascript, which is a browser photo editor comparable to the likes of Adobe Lightroom.\n Polarr allows photographers to create and share filters, has amazing UI design that compares to native desktop apps.\n\n - Flowkey is an amazing web app that teaches you how to play piano, using web APIs to access your computer's microphone to respond to you as you play along!\n\n - SoundCloud is another famous web app now one of the most popular platforms for sharing music.\n\n - DuoLingo is something I have used a ton to learn French.\n DuoLingo has over 120 million users and is constantly growing.`,

        example : ``,

        link : 'http://bit.ly/2AqCAMe',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 92 //javascript #3
      },
/*      {
        name : 'Corey',
        cohort : 18,
        title : '',
        tags : [''],
        note : `May 16, 2016\n How does Javascript use objects?\n\n - `,

        example : ``,

        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 92 //javascript #4
      },*/
      {
        name : 'Quince',
        cohort : 19,
        title : 'What is jQuery for?',
        tags : ['library', 'jQuery', 'javascript'],
        note : `The purpose of jQuery is to make it much easier to use JavaScript on your website.\n jQuery is a lightweight, "write less, do more", JavaScript library.\n jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.`,

        example : `
//jQuery syntax goes like this..
$(document).ready(function(){

   // jQuery methods go here...

});`,

        link : 'http://bit.ly/2i7qiQq',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 93 //jquery
      },
      {
        name : 'Colin',
        cohort : 9,
        title : 'What is JSON?',
        tags : ['json', 'objects', 'arrays', 'javascript'],
        note : 'JSON is an easily readable and lightweight data format. It is a nest of objects and arrays used for structuring data. You must keep in mind that the keys for a JSON object are surrounded by quotes, unlike a regular object.',

        example : `{  
  "id": "0001",
  "type": "donut",
  "name": "Cake",
  "ppu": 0.55,
  "batters":
    {
      "batter":
        [
          { "id": "1001", "type": "Regular" },
          { "id": "1002", "type": "Chocolate" },
          { "id": "1003", "type": "Blueberry" },
          { "id": "1004", "type": "Devil's Food" }
        ]
    },
  "topping":
    [
      { "id": "5001", "type": "None" },
      { "id": "5002", "type": "Glazed" },
      { "id": "5005", "type": "Sugar" },
      { "id": "5007", "type": "Powdered Sugar" },
      { "id": "5006", "type": "Chocolate with Sprinkles" },
      { "id": "5003", "type": "Chocolate" },
      { "id": "5004", "type": "Maple" }
    ]
}`,

        link : 'http://bit.ly/2Aiqogc', //InfoWorld -- 'JSON Explained'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 94 //'json'
      },
      {
        name : 'Kay',
        cohort : 19,
        title : 'What keyboard should I use as a dev?',
        tags : ['poker2', 'mechanical', 'dev'],
        note : `I highly recommend using a mechanical keyboard. The Poker2 is an excellent choice. The tools you use as a dev make all the difference in the long run.`,
        example : ``,
        link : 'http://amzn.to/2j5WZyx',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 95 //keyboard
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};