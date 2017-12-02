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
      //DEMO
      {
        name : 'Jason',
        cohort : 19,
        title : 'How do you create an object in javascript?',
        tags : ['constructor', 'initializer', 'object'],
        note : `devleague notes\n How to create an object\n\n - There are three ways to create or initialize an object.\n - You can use new Object(), Object.create(), or use the literal notation.\n - The literal notation is a comma-delimited list of zero or more pairs of property names and associated values enclosed in curly braces.`,
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
        topic_id : 120 //object #1
      },
      {
        name : 'Esther',
        cohort : 19,
        title : 'What is an object?',
        tags : ['key value', 'properties', 'real-life example'],
        note : `sept. 26 notes\n Real-life examples of Objects\n\n - In real life, a car is an object with state and behavior.\n - The car's state could be weight, color, model, and name.\n - The car's behavior could be start, drive, brake, and stop.\n - All cars have identical properties, though the values differ from car to car.\n - All car's share the same behaviors, but they are performed at different times.`,

        example : `
//create a simple person object 
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};`,

        link : 'http://bit.ly/2mzBAlc',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 120 //object #2
      },
      {
        name : 'Justin',
        cohort : 19,
        title : 'What does [object Object] mean?',
        tags : ['error', 'object', 'type error'],
        note : `November 5, 2017\n What does [object Object] mean?\n\n - Sometimes when console logging or dealing with errors, you will get back a serialization of a certain object type.\n - In other words, it is the return value of that object's toString() function.\n - There are also plenty of other serializations you could see like [object Function], [object Array], [object RegExp], [object Date].`,

        example : `
//an example of alerting an instance of an object
var objA = {};
var objB = new Object;
var objC = {};

objC.toString = function () { return "objC" };

alert(objA); // [object Object]
alert(objB); // [object Object]
alert(objC); // objC`,

        link : 'http://bit.ly/2AkIHDN',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 120 //object #3
      },
      {
        name : 'Ricky',
        cohort : 19,
        title : 'What do they mean by Object Oriented Programming?',
        tags : ['object oriented programming', 'paradigm', 'objects'],
        note : 'May 19, 2016\n What is meant by Object-Oriented Programming?\n\n - Objected Oriented Programming, or OOP, is a programming paradigm.\n - Before OOP, most programs were simply a procedural list of instructions.\n - The essence of OOP is the intricate interaction of many objects, each with their own state and behavior.\n - Classes or prototypes, which are very much like blueprints, are what initialize or spawn these objects that make up any program.',

        example : ``,

        link : 'http://bit.ly/2AE3sLq', 
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 120 //object #4
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};