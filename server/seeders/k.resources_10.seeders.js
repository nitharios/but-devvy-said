'use strict';

//contains topic_id 106 - 115
//TOTAL : 10

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      {
        name : 'Debbie',
        cohort : 7,
        title : 'What is a merge conflict?',
        tags : ['github', 'merge conflict', 'git terminal'],
        note : 'A merge conflict happens when integrating another branch into your current working branch. Often times, one person will delete a file, while the other person has modified it. Git cannot know what is correct, and this is when a merge conflict occurs.',

        example : null,

        link : 'http://bit.ly/2ieOnbS', //GitTower
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 106 //'merge conflict'
      },
      {
        name : 'Van',
        cohort : 17,
        title : 'What is merge sort?',
        tags : ['sorting', 'algorithm'],
        note : 'Merge sort is a divide and conquer algorithm that divides a list in half multiple times. We divide the unsorted list into two half-lists. We then repeat that step until we have lists with only element. Then we work backwards, merging the sublists into one sorted list.',

        example : `
var internalMergeSort = function(elements, onSort) {          
    if (elements.length < 2) {                               
        return elements;  
    }           
             
    // Calculate the middle of the elements
    var middle = Math.floor(elements.length / 2);           
               
    // Divide 
    var leftRange = elements.slice(0, middle);
    var rightRange = elements.slice(middle, elements.length);                                                      
   
    // Conquer                                                                                                        
    var mergingResult = merge(internalMergeSort(leftRange, onSort), 
                              internalMergeSort(rightRange, onSort));                                   
             
    onSort(mergingResult);           
               
    return mergingResult;
};`,

        link : 'http://bit.ly/2kfTGYZ', 
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 107 //merge sort
      },
      {
        name : 'Cool',
        cohort : 17,
        title : 'What is middleware?',
        tags : ['middleware', 'express', 'request'],
        note : 'Middleware is a function or set of functionality that is specific and singular purpose. In web development, middleware functions have access to the request and response object, and the next function in the request-response cycle. You can create your own or use third-party middleware.',

        example : `
var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)`,

        link : 'http://bit.ly/2ieOnbS', 
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 108 //middleware
      },
      {
        name : 'Debbie',
        cohort : 19,
        title : 'What is MochaJS?',
        tags : ['framework', 'testing', 'mocha'],
        note : 'MochaJS is a Javascript test framework running on Node with very intuitive syntax. We used it for a ton of our assignments. The most common test is testing whether a value is a certain type, or if a function returns the expected value.',

        example : `
//testing async code with mocha is simple
describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(function(err) {
        if (err) done(err);
        else done();
      });
    });
  });
});`,

        link : 'http://bit.ly/2zSUkTp', //youtube
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 109 //mochaJS
      },
      {
        name : 'Dan',
        cohort : 17,
        title : 'When do we use mongoDB and not postgres?',
        tags : ['database', 'mongodb', 'nosql'],
        note : 'MongoDB has a lot of distinct differences compared to postgres. It is ideal for certain challenges, in particular, having location-based data, not having a DBA< and/or having an especially large data set.',

        example : ``,

        link : 'http://bit.ly/1HHWe73', //GitTower
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 106 //mongodb
      },
      {
        name : 'Doris',
        cohort : 19,
        title : 'What is MySQL?',
        tags : ['rdbms', 'database', 'relational'],
        note : 'MySQL is an open-source RDBMS. There are many databases that support the use of SQL to access their data. MySQL and PostgreSQL are the most popular. These are very popular among web apps. For web apps that are not especially complex, the differences between MySQL and PostgreSQL are negligible.',

        example : ``,

        link : 'http://bit.ly/2ngaBIp', 
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 111 //mysql
      },
      {
        name : 'Nao',
        cohort : 19,
        title : 'What is the new keyword?',
        tags : ['new', 'keyword', 'initialization'],
        note : 'The new operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function. Imagine a machine in a factory spitting out some kind of object on its conveyer belt.',

        example : `
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car('Eagle', 'Talon TSi', 1993);`,

        link : 'https://mzl.la/1xM2M9S', 
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 112 //new
      },
      {
        name : 'Kayle',
        cohort : 17,
        title : 'What is the next function in an Express app?',
        tags : ['parameter', 'next', 'middleware'],
        note : 'Next is the name given to a function that succeeds the current middleware function. It is invoked at the end of the code body. If this is not invoked, errors will occur.',

        example : `
//a simple express app
var express = require('express');
var app = express();

//at the end of a custom middleware we invoke next
var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
}`,

        link : 'http://bit.ly/2Apmtyv', 
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 113 //next
      },
      {
        name : 'Debbie',
        cohort : 7,
        title : 'What is NodeJS?',
        tags : ['runtime environment', 'node', 'server'],
        note : 'Node.JS is a lean, fast, cross-platform Javascript runtime environment that iuseful for servers and desktop applications. Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests.',

        example : `
//the http module in NodeJS
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);`,

        link : 'http://bit.ly/2jCEVeX',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 114 //node
      },
      {
        name : 'Baker',
        cohort : 17,
        title : 'What is normalization in a database?',
        tags : ['github', 'merge conflict', 'git terminal'],
        note : 'Database normalization is the process of organizing data into tables in such a way that the results of using the database are always unambiguous and as intended. Database normalization is typically a refinement process after the initial exercise of identifying the data objects that should be in the relational database, identifying their relationships and defining the tables required and the columns within each table.',

        example : ``,

        link : 'http://bit.ly/2AnGVQ1',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 115 //normalization
      }


    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};