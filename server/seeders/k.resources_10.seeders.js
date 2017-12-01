'use strict';

//contains topic_id 106 - 115
//TOTAL : 

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


    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};