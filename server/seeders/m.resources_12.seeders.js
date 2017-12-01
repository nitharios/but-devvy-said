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
        example:`
function replace(ref) {
    ref = {};           // this code does _not_ affect the object passed
}

function update(ref) {
    ref.key = 'newvalue';  // this code _does_ affect the _contents_ of the object
}

var a = { key: 'value' };
replace(a);  // a still has its original value - it's unmodfied
update(a);   // the _contents_ of 'a' are changed`,

        link: 'http://bit.ly/2iw45vZ',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 127 // pass by reference
      },
      {
        name: ' jj abrams',
        cohort: 6,
        title: 'pass by value',
        tags: ['pass by value'],
        note: 'Primitives are passed by value, Objects are passed by "copy of a reference".Specifically, when you pass an object (or array) you are (invisibly) passing a reference to that object, and it is possible to modify the contents of that object, but if you attempt to overwrite the reference it will not affect the copy of the reference held by the caller - i.e. the reference itself is passed by value:',
        example:`
function replace(ref) {
    ref = {};           // this code does _not_ affect the object passed
}

function update(ref) {
    ref.key = 'newvalue';  // this code _does_ affect the _contents_ of the object
}

var a = { key: 'value' };
replace(a);  // a still has its original value - it's unmodfied
update(a);   // the _contents_ of 'a' are changed`,

        link: 'http://bit.ly/2iw45vZ',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 128 // pass by value
      },
      {
        name: 'jason vorhees',
        cohort: 6,
        title: 'what is a port',
        tags: ['port'],
        note:'The port property sets or returns the port number the server uses for a URL.Note: If the port number is not specified in the URL (or if it is the schemes default port - like 80, or 443), some browsers will display 0 or nothing',
        example:`
location.port = port
Return Value: A String, representing the port number of a URL.

Note: If the port number is not specified or if it is the scheme's default port (like 80 or 443), an empty string is returned`,

        link: 'http://bit.ly/2zVGVtP',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id:  129 // Port
      },
      {
        name: 'ranger danger',
        cohort: 9,
        title: 'what is postgresql',
        tags:['postgres', 'postgresql'],
        note: 'PostgreSQL is a powerful, open source object-relational database system. It has more than 15 years of active development and a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness. \n It runs on all major operating systems, including Linux, UNIX (AIX, BSD, HP-UX, SGI IRIX, macOS, Solaris, Tru64), and Windows. It is fully ACID compliant, has full support for foreign keys, joins, views, triggers, and stored procedures (in multiple languages)',

        example:`
// see link`,

        link: 'http://bit.ly/2BqoCJk',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id:  130 //postgresql
      },
      {
        name: 'ape',
        cohort: 3,
        title: 'what is a Primitive',
        tags: ['Primitive', 'data type'],
        note:'A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types: string, number, boolean, null, undefined, symbol (new in ECMAScript 2015). \n Most of the time, a primitive value is represented directly at the lowest level of the language implementation. \n All primitives are immutable (cannot be changed).',

        example:`
// string
// number
//boolean
//symbol
`,
        link: 'https://mzl.la/2zPPq8B',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id:  131 // Primitive
      },
      {
        name: 'hbomb',
        cohort: 15,
        title: 'what is a Private method',
        tags:['private method'],
        note: 'Private Methods are are attached to the object, but they are not accessible to the outside, nor are they accessible to the objects own public methods. They are accessible to private methods. \nPrivate methods are inner functions of the constructor.',
        example:`
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();`,

        link: 'https://mzl.la/17lRliK',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id:  132 // Private method
      },
      {
        name: 'peepin tom',
        cohort: 19,
        title:'what are private variables',
        tags:['private variables'],
        note:'similar to private methods, privte variables can also be made through closures',
        example:`
var Car = (function() {

  var _ = PrivateParts.createKey();

  function Car(mileage) {
    // Store the mileage property privately.
    _(this).mileage = mileage;
  }

  Car.prototype.drive = function(miles) {
    if (typeof miles == 'number' && miles > 0) {
      _(this).mileage += miles;
    } else {
      throw new Error('drive only accepts positive numbers');
    }
  }

  Car.prototype.readMileage = function() {
    return _(this).mileage;
  }

  return Car;
}());`,

        link:'http://bit.ly/2af5gOc',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id:  133 // private variables
      }

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};