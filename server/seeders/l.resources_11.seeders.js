'use strict';

//contains topic_id 116 - 125
//TOTAL : 

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      {
        name : 'Nancy',
        cohort : 19,
        title : 'NoSQL explained',
        tags : ['nosql', 'database', 'mongodb'],
        note : `Developers are working with applications that create massive volumes of new, rapidly changing data types — structured, semi-structured, unstructured and polymorphic data.\n Relational databases were not designed to cope with the scale and agility challenges that face modern applications.\n This is what NoSQL was created for.`,

        example : ``,
        link : 'http://bit.ly/1lvqNnb',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 116 //nosql
      },
      {
        name : 'Jesse',
        cohort : 19,
        title : 'What is the null data type?',
        tags : ['null', 'data type', 'keyword'],
        note : `A property to which a programmer has not assigned anything will be undefined , but in order for a property to become null , null must be explicitly assigned to it.\n I once thought that there was a need for null because undefined is a primitive value and null an object.`,
        example : ``,
        link : 'https://mzl.la/1zDsM8O',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 117 //null
      },
      {
        name : 'Jason',
        cohort : 19,
        title : 'How do you initialize an object?',
        tags : ['constructor', 'initializer', 'object'],
        note : `There are three ways to create or initialize an object.\n You can use new Object(), Object.create(), or use the literal notation.\n The literal notation is a comma-delimited list of zero or more pairs of property names and associated values enclosed in curly braces.`,
        example : `
var o = {};
var o = {a: 'foo', b: 42, c: {}};

var a = 'foo', b = 42, c = {};
var o = {a: a, b: b, c: c};

var o = {
  property: function ([parameters]) {},
  get property() {},
  set property(value) {}
};`,
        link : 'https://mzl.la/1GIMi82',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 118 //object initialization
      },
/*      {
        name : 'Oscar',
        cohort : 19,
        title : 'Is an object literal just a series of key-value pairs?',
        tags : ['object', 'key', 'value'],
        note : ``,
        example : ``,
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 119 //object literal
      },
      {
        name : 'Esther',
        cohort : 19,
        title : 'How is everything an object in Javascript?',
        tags : ['Javascript', 'object', 'prototype'],
        note : ``,
        example : ``,
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 120 //objects
      },*/
      {
        name : 'Ricky',
        cohort : 19,
        title : 'What do they mean by Object Oriented Programming?',
        tags : ['object oriented programming', 'paradigm', 'objects'],
        note : 'Objected Oriented Programming, or OOP, is a programming paradigm. Before OOP, most programs were simply a procedural list of instructions. The essence of OOP is the intricate interaction of many objects, each with state and behavior. Classes or prototypes generate, or initialize these objects, as well as define their structure much like a blueprint.',

        example : null,

        link : 'http://bit.ly/2AE3sLq', //StackExchange -- 'OOP for the non-technical'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 121 //'object oriented programming'
      }
/*      {
        name : 'Peach',
        cohort : 19,
        title : 'Is pair programming popular?',
        tags : ['pair programming', 'procedure', 'partner'],
        note : ``,
        example : ``,
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 122 //pair programming
      },
      {
        name : 'Bugs Bunny',
        cohort : 13,
        title : 'What is a parameter, and how is different from an argument?',
        tags : ['parameter', 'argument', 'method signature'],
        note : ``,
        example : ``,
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 123 //parameter
      },
      {
        name : 'Julius',
        cohort : 19,
        title : 'Why are there so many parenthesis in any code body?',
        tags : ['syntax', 'parenthesis', 'code'],
        note : ``,
        example : ``,
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 124 //parenthesis
      },
      {
        name : 'Roy',
        cohort : 18,
        title : 'When you pass an object by reference, is a copy of the object generated?',
        tags : ['reference', 'remote control', 'memory location'],
        note : ``,
        example : ``,
        link : '',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 125 //pass by reference
      }*/

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};