'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [
      {
        topic_id : 1,
        url : 'http://bit.ly/2zOQycP', //SO async
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 1,
        url : 'http://bit.ly/2mDwgh3', //YT NetNinja 'what is async javascript?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 1,
        url : 'http://bit.ly/2iu3Q4u', //hongkiat, a blog post about async
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 2,
        url : 'http://bit.ly/2zQPmFe', //YT DecipherMedia 'How to Use Promises'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 2,
        url : 'https://mzl.la/1vPzDhk', //MDN 'Promises'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 2,
        url : 'http://bit.ly/2ppt4pJ', //Medium 'Promises'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 3,
        url : 'http://bit.ly/2zSsZ0n', //Quora 'what is the difference..'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 3,
        url : 'http://bit.ly/2AT46kf', //SO 'every function is an obj..'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 3,
        url : 'http://bit.ly/2ATkSzX', //Just JavaScript
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 4,
        url : 'http://bit.ly/2zf7sBT', //CodeProject 'is everything an object?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 4,
        url : 'http://bit.ly/2Ad9bYE', //SO 'How is everything an object?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 4,
        url : 'http://bit.ly/1oKSkkc', //YT HeadFirst 'Objects'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 5,
        url : 'http://bit.ly/1g8CNBy', //JavascriptIsSexy 'Understand callbacks'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 5,
        url : 'http://bit.ly/2B0pwN9', //DashingD3J 'callback functions'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 5,
        url : 'http://bit.ly/2hOTDT7', //SO 'What is a callback function?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 6,
        url : 'http://bit.ly/1e8noUk', //BenAlman 'what is an iife?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 6,
        url : 'http://bit.ly/2zP5qrw', //CodeBurst.io 'what the heck is an IIFE?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 6,
        url : 'http://bit.ly/2hC8Vqs', //CodeProject IIFE
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 7,
        url : 'http://bit.ly/2zOrjqX', //Medium 'what is a closure?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 7,
        url : 'http://bit.ly/2j7eMVk', //Medium 'let's use closures'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 7,
        url : 'http://bit.ly/2jEAmEt', //SO 'what is a use for closures?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 8,
        url : 'http://bit.ly/2zTWZsv', //ScottLogicBlog 'JS anonymous function'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 8,
        url : 'http://bit.ly/2itTlOP', //Robot ThoughtBot 'JS anonymous function'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 8,
        url : 'http://bit.ly/2AcoKQ7', //YT 'How to use anonymous functions'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 9,
        url : 'http://bit.ly/2zRDHq0', //Exploring JS 'Arrow Functions'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 9,
        url : 'http://bit.ly/2jDJlWG', //SO 'When should I use arrow functions?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 9,
        url : 'http://bit.ly/2xE8SUJ', //CodeBurst 'Arrow Functions for Beginners'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 10,
        url : 'http://bit.ly/2mGRQRN', //KevinChisholm 'scope vs. context'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 10,
        url : 'http://bit.ly/2B12W7o', //ToddMotto 'Understanding this'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 10,
        url : 'http://bit.ly/1iZXghe', //JavascriptIsSexy 'Understand this with clarity'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 11,
        url : 'http://bit.ly/2ruvf9z', //W3Schools 'Javascript Prototypes'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 11,
        url : 'http://bit.ly/1md86yR', //YehudaKatz 'Understanding prototypes'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 11,
        url : 'http://bit.ly/1h9JjtP', //JavascriptIsSexy 'Prototypes in Plain Language'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 12,
        url : 'https://mzl.la/1FXbcAX', //MDN 'Inheritance and Prototype chain'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 12,
        url : 'http://bit.ly/2yX8RJc', //2ality 'Inheritance by Example'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 12,
        url : 'http://bit.ly/2dxx4w9', //SitePoint 'Simple Inheritance'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 13,
        url : 'http://bit.ly/2B2vihp', //Codecademy 'Recursion'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 13,
        url : 'http://bit.ly/2jGknGd', //Medium 'Recursion functionally'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 13,
        url : 'http://bit.ly/2jAr4t4', //Medium 'Practical uses for Recursion'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 14,
        url : 'http://bit.ly/2AZG2gu', //SO 'Passing by reference'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 14,
        url : 'http://bit.ly/2zTqta1', //SO 'How to pass an obj by value'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 14,
        url : 'http://bit.ly/2iw45vZ', //SO 'Does JS pass by reference?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 15,
        url : 'http://bit.ly/1T430nN', //CallbackHell 'Learn how to ..'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 15,
        url : 'http://bit.ly/2ASxCqu', //SO 'What is callback hell..'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 15,
        url : 'http://bit.ly/2zPBPxS', //StackExchange 'Example of callback hell'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 16,
        url : 'http://bit.ly/2yWdFyg', //GitHub 'NodeJS tcp example'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 16,
        url : 'http://bit.ly/2mFsXpv', //SO 'What is a Websocket?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 16,
        url : 'http://bit.ly/2iw41wp', //SO 'NodeJS how to get the server's port'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 17,
        url : 'http://bit.ly/2AZItj8', //EssentialSQL 'DB Normalization in English'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 17,
        url : 'http://bit.ly/2ASqqL2', //Guru99 'What is normalization?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 17,
        url : 'http://bit.ly/1IJVezb', //AgileData 'Introduction to Data Normalization'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 18,
        url : 'http://bit.ly/1Eq4EIz', //JavascriptWeblog 'Secret Life of primitives'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 18,
        url : 'https://mzl.la/2zPPq8B', //MDN Primitive
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 18,
        url : 'http://bit.ly/2ARYc36', //Learn.co 'JS Primitives and DataTypes'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 19,
        url : 'http://bit.ly/2zgjDhM', //W3Schools 'Function Parameters'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 19,
        url : 'http://bit.ly/2j7mqiC', //Codecademy 'Don't understand primitives'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 19,
        url : 'http://bit.ly/2zQPvZB', //CodeBurst 'Parameters and Arguments'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 20,
        url : 'https://mzl.la/1rEMm5S', //MDN 'Arguments'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 20,
        url : 'http://bit.ly/2zUYXsX', //Javascript Weblog 'Arguments obj and beyond'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 20,
        url : 'http://bit.ly/2hJjGem', //Nodejitsu 'What is the arguments object?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 21,
        url : 'http://bit.ly/2j5Wunp', //Lynda 'What is the DOM?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 21,
        url : 'http://bit.ly/2yYfXx0', //SO 'What do people mean by DOM manipulation?'
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        topic_id : 21,
        url : 'http://bit.ly/2cwvvzM', //CSSTricks 'What is the DOM?'
        createdAt : new Date(),
        updatedAt : new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }
};
