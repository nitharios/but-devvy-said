'use strict';

//contains topic_id 156 - 165
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
        name : 'Nate',
        cohort : 19,
        title : 'What is the null data type?',
        tags : ['null', 'data type'],
        note : `Null is not quite the same as undefined. Null is a special data type that you have to set yourself. We have used it a few times when we wanted a variable to exist with no starting value.`,

        example : `
//null is similar but not identical to undefined
// foo does not exist. It is not defined and has never been initialized:
foo;
"ReferenceError: foo is not defined"

// foo is known to exist now but it has no type or value:
var foo = null; 
foo;
"null"`,

        link : 'https://mzl.la/1zDsM8O',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 117 //null
      },
      {
        name : 'Spider Man',
        cohort : 19,
        title : 'Initializing an object in javascript',
        tags : ['constructor', 'object', 'initialization'],
        note : `Initializing an object is important in Javascript when you want to build things of decent complexity. In Javascript, there are no classes that define an object structure. Instead it is the object itself. You still use the new operator in Javascript, though.`,

        example : `
//an example using prototyping
var PageSlider = function() {
    this.sliders = [];
}

PageSlider.prototype.addSlider = function(display, target, itemClass, width, height, itemsPerPage, defaultPage){
    var slideConfig = {
            display : display,
            target : target
    };
    var slider = this.createSlider(slideConfig);
    slider.initSlider();
    this.sliders.push(slider);

}

slider = new PageSlider();`,

        link : 'http://bit.ly/2zGN0pI',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 118 //object initialization
      },
      {
        name : 'Lucy',
        cohort : 18,
        title : 'What is an object literal?',
        tags : ['object', 'simple', 'initialization'],
        note : `A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. It is the simplest way to initialize or create an object. It quickly becomes outdated, however once you need to build more modular programs.`,

        example : `
var myObject = {  
  myString: 'value 1',
  get myNumber() {
    return this._myNumber;
  },
  set myNumber(value) {
    this._myNumber = Number(value);
  }
};
myObject.myString; // => 'value 1'  
myObject.myNumber = '15';  
myObject.myNumber; // => 15`,

        link : 'http://bit.ly/2ANmu1U',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 119 //object literal
      },
      {
        name : 'Don',
        cohort : 19,
        title : `What do they mean by 'Everything is an Object?'`,
        tags : ['paradigm', 'object', 'javascript'],
        note : `Everything in Javascript, including Functions, Arrays, and even Primitives are actually hashmaps with keys and values.`,
        example : ``,
        link : 'http://bit.ly/2Ad9bYE',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 120 //object DEMO
      },
      {
        name : 'Nancy',
        cohort : 19,
        title : 'What is object-oriented programming?',
        tags : ['paradigm', 'oop', 'javascript'],
        note : `Object-Oriented programming is a paradigm that is based on the concept of objects which may contain state and behaviors. A program is a large nest of these objects interacting with each other. Many people view OOP as a better way to solving computer problems compared to a procedural language such as C.`,

        example : `
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
  return obj;
}`,

        link : 'https://mzl.la/2fq3LjD',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 121 //object-oriented programming
      },
      {
        name : 'Dale',
        cohort : 19,
        title : 'What are the operators in Javascript?',
        tags : ['arithmetic', 'logical', 'relational'],
        note : `There are three types of operators in Javascript : arithmetic, logical, and relational. These are used for simple mathematical operations, conditional statements, as well as control flow statements.`,

        example : `
//example of assignment operator
//this assigns the value '1' to the variable 'a'
let a = 1;
let b = 2;

//this is addition and assignment
let a += 1;
let b += 2;`,

        link : 'https://mzl.la/1ubAAis',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 122 //operator
      },
      {
        name : 'Roy',
        cohort : 19,
        title : 'What is object relational mapping?',
        tags : ['ORM', 'database', 'server'],
        note : `Object relational mapping is a technique for converting data between incompatible type system using an object-oriented language. This creates a virtual object database that can be used from within the OOP language. Sequelize was our tool of choice for DevLeague.`,

        example : `
//an example of an ORM in Node.. Sequelize
var User = sequelize.define('user', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'compositeIndex'
  },
  lastName: {
    type: DataTypes.STRING,
    unique: 'compositeIndex'
  },
    .........
    .........
    .........
  dateJoined: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  getterMethods   : {
    address: function()  { return this.state + ', ' + this.country }
  },
  setterMethods   : {
    address: function(value) {
      var names = value.split(', ');
      this.setDataValue('country', names[0]);
      this.setDataValue('state', names[1]);
    },
  }
});`,

        link : 'http://bit.ly/2zVxZVc',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 123 //object relational mapping
      },
      {
        name : 'Jade',
        cohort : 18,
        title : 'What are the difficulties with pair programming?',
        tags : ['practice', 'technique', 'partnering'],
        note : `Pair programming can be viewed as an needlessly expensive cost. However, this is most likely in worst-case outcomes of poorly applied pairings. It also cannot be fruitfully forced upon people especially if relationship issues, even mundane ones like hygiene, are getting in the way.`,

        example : ``,

        link : 'http://bit.ly/2sOlQcI',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 124 //pair programming
      },
      {
        name : 'Celery',
        cohort : 18,
        title : 'What is a parameter?',
        tags : ['parameter', 'method signature'],
        note : `A parameter is a variable listed as part of a function's definition. It is somewhat similar to arguments, but there is a distinct difference. Arguments are values passed to the function when it is invoked. You can think of a parameter as a receiver of arguments.`,

        example : `
//a basic function with three parameters
function argCheck(paramter1, parameter2, parameter3){
  console.log(parameter1 + parameter2 + parameter3);
}`,

        link : 'http://bit.ly/2zQPvZB',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 125 //parameter
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};