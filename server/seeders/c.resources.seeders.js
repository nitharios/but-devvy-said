'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [
    //   {
    //     url : 'http://bit.ly/2zOQycP' //SO async
    //   },
    //   {
    //     url : 'http://bit.ly/2mDwgh3' //YT NetNinja 'what is async javascript?'
    //   },
    //   {
    //     url : 'http://bit.ly/2iu3Q4u' //hongkiat, a blog post about async
    //   },
    //   {
    //     url : 'http://bit.ly/2zQPmFe' //YT DecipherMedia 'How to Use Promises'
    //   },
    //   {
    //     url : 'https://mzl.la/1vPzDhk' //MDN 'Promises'
    //   },
    //   {
    //     url : 'http://bit.ly/2ppt4pJ' //Medium 'Promises'
    //   },
    //   {
    //     url : 'http://bit.ly/2zSsZ0n' //Quora 'what is the difference..'
    //   },
    //   {
    //     url : 'http://bit.ly/2AT46kf' //SO 'every function is an obj..'
    //   },
    //   {
    //     url : 'http://bit.ly/2ATkSzX' //Just JavaScript
    //   },
    //   {
    //     url : 'http://bit.ly/2zf7sBT' //CodeProject 'is everything an object?'
    //   },
    //   {
    //     url : 'http://bit.ly/2Ad9bYE' //SO 'How is everything an object?'
    //   },
    //   {
    //     url : 'http://bit.ly/1oKSkkc' //YT HeadFirst 'Objects'
    //   },
    //   {
    //     url : 'http://bit.ly/1g8CNBy' //JavascriptIsSexy 'Understand callbacks'
    //   },
    //   {
    //     url : 'http://bit.ly/2B0pwN9' //DashingD3J 'callback functions'
    //   },
    //   {
    //     url : 'http://bit.ly/2hOTDT7' //SO 'What is a callback function?'
    //   },
    //   {
    //     url : 'http://bit.ly/1e8noUk' //BenAlman 'what is an iife?'
    //   },
    //   {
    //     url : 'http://bit.ly/2zP5qrw' //CodeBurst.io 'what the heck is an IIFE?'
    //   },
    //   {
    //     url : 'http://bit.ly/2hC8Vqs' //CodeProject IIFE
    //   },
    //   {
    //     url : 'http://bit.ly/2zOrjqX' //Medium 'what is a closure?'
    //   },
    //   {
    //     url : 'http://bit.ly/2j7eMVk' //Medium 'let's use closures'
    //   },
    //   {
    //     url : 'http://bit.ly/2jEAmEt' //SO 'what is a use for closures?'
    //   },
    //   {
    //     url : 'http://bit.ly/2zTWZsv' //ScottLogicBlog 'JS anonymous function'
    //   },
    //   {
    //     url : 'http://bit.ly/2itTlOP' //Robot ThoughtBot 'JS anonymous function'
    //   },
    //   {
    //     url : 'http://bit.ly/2AcoKQ7' //YT 'How to use anonymous functions'
    //   },
    //   {
    //     url : 'http://bit.ly/2zRDHq0' //Exploring JS 'Arrow Functions'
    //   },
    //   {
    //     url : 'http://bit.ly/2jDJlWG' //SO 'When should I use arrow functions?'
    //   },
    //   {
    //     url : 'http://bit.ly/2xE8SUJ' //CodeBurst 'Arrow Functions for Beginners'
    //   },
    //   {
    //     url : 'http://bit.ly/2mGRQRN' //KevinChisholm 'scope vs. context'
    //   },
    //   {
    //     url : 'http://bit.ly/2B12W7o' //ToddMotto 'Understanding this'
    //   },
    //   {
    //     url : 'http://bit.ly/1iZXghe' //JavascriptIsSexy 'Understand this with clarity'
    //   },
    //   {
    //     url : 'http://bit.ly/2ruvf9z' //W3Schools 'Javascript Prototypes'
    //   },
    //   {
    //     url : 'http://bit.ly/1md86yR' //YehudaKatz 'Understanding prototypes'
    //   },
    //   {
    //     url : 'http://bit.ly/1h9JjtP' //JavascriptIsSexy 'Prototypes in Plain Language'
    //   },
    //   {
    //     url : 'https://mzl.la/1FXbcAX' //MDN 'Inheritance and Prototype chain'
    //   },
    //   {
    //     url : 'http://bit.ly/2yX8RJc' //2ality 'Inheritance by Example'
    //   },
    //   {
    //     url : 'http://bit.ly/2dxx4w9' //SitePoint 'Simple Inheritance'
    //   },
    //   {
    //     url : 'http://bit.ly/2B2vihp' //Codecademy 'Recursion'
    //   },
    //   {
    //     url : 'http://bit.ly/2jGknGd' //Medium 'Recursion functionally'
    //   },
    //   {
    //     url : 'http://bit.ly/2jAr4t4' //Medium 'Practical uses for Recursion'
    //   },
    //   {
    //     url : 'http://bit.ly/2AZG2gu' //SO 'Passing by reference'
    //   },
    //   {
    //     url : 'http://bit.ly/2zTqta1' //SO 'How to pass an obj by value'
    //   },
    //   {
    //     url : 'http://bit.ly/2iw45vZ' //SO 'Does JS pass by reference?'
    //   },
    //   {
    //     url : 'http://bit.ly/1T430nN' //CallbackHell 'Learn how to ..'
    //   },
    //   {
    //     url : 'http://bit.ly/2ASxCqu' //SO 'What is callback hell..'
    //   },
    //   {
    //     url : 'http://bit.ly/2zPBPxS' //StackExchange 'Example of callback hell'
    //   },
    //   {
    //     url : 'http://bit.ly/2yWdFyg' //GitHub 'NodeJS tcp example'
    //   },
    //   {
    //     url : 'http://bit.ly/2mFsXpv' //SO 'What is a Websocket?'
    //   },
    //   {
    //     url : 'http://bit.ly/2iw41wp' //SO 'NodeJS how to get the server's port'
    //   },
    //   {
    //     url : 'http://bit.ly/2AZItj8' //EssentialSQL 'DB Normalization in English'
    //   },
    //   {
    //     url : 'http://bit.ly/2ASqqL2' //Guru99 'What is normalization?'
    //   },
    //   {
    //     url : 'http://bit.ly/1IJVezb' //AgileData 'Introduction to Data Normalization'
    //   },
    //   {
    //     url : 'http://bit.ly/1Eq4EIz' //JavascriptWeblog 'Secret Life of primitives'
    //   },
    //   {
    //     url : 'https://mzl.la/2zPPq8B' //MDN Primitive
    //   },
    //   {
    //     url : 'http://bit.ly/2ARYc36' //Learn.co 'JS Primitives and DataTypes'
    //   },
    //   {
    //     url : 'http://bit.ly/2zgjDhM' //W3Schools 'Function Parameters'
    //   },
    //   {
    //     url : 'http://bit.ly/2j7mqiC' //Codecademy 'Don't understand primitives'
    //   },
    //   {
    //     url : 'http://bit.ly/2zQPvZB' //CodeBurst 'Parameters and Arguments'
    //   },
    //   {
    //     url : 'https://mzl.la/1rEMm5S' //MDN 'Arguments'
    //   },
    //   {
    //     url : 'http://bit.ly/2zUYXsX' //Javascript Weblog 'Arguments obj and beyond'
    //   },
    //   {
    //     url : 'http://bit.ly/2hJjGem' //Nodejitsu 'What is the arguments object?'
    //   },
    //   {
    //     url : 'http://bit.ly/2j5Wunp' //Lynda 'What is the DOM?'
    //   },
    //   {
    //     url : 'http://bit.ly/2yYfXx0' //SO 'What do people mean by DOM manipulation?'
    //   },
    //   {
    //     url : 'http://bit.ly/2cwvvzM' //CSSTricks 'What is the DOM?'
    //   }

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }
};
