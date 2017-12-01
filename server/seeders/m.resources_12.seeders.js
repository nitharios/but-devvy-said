'use strict';

//contains topic_id 126 - 135
//TOTAL : 

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      {
        name: 'victor bot',
        cohort: 4,
        title: 'using parenthesis',
        tags:['parens', 'parenthesis'],
        note:'are used to wrap params in JS and can also wrap functions such as an IIFE (Immediatly Invoked Function Expression',
        example:`
(function() {
    var Dom = YAHOO.util.Dom,
    Event = YAHOO.util.Event,
    layout = null,
})();`,

        link:'https://mzl.la/1NY4S1G',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 126 // parenthesis
      },
      {
        name: 'jackobyte',
        cohort: 1,
        title:'pass by reference',
        tags:[' pass by reference'],
        note: 'Primitives are passed by value, Objects are passed by "copy of a reference".Specifically, when you pass an object (or array) you are (invisibly) passing a reference to that object, and it is possible to modify the contents of that object, but if you attempt to overwrite the reference it will not affect the copy of the reference held by the caller - i.e. the reference itself is passed by value:',
        example:``
        link:
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 127 //
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};