'use strict';

//Stretch and polish
//CONTAINS topic_id 36 - 45 (x2) for 20 TOTAL
//only (x1) for topics that cant really have snippets, EG 'angular' or 'api'

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [
      {
        name: 'justin',
        cohort: 19,
        title: 'const vs variables',
        tags: ['console', 'terminal', 'debug'],
        note: 'Modern browsers have development tools built in to work with JavaScript and other web technologies. These tools include the Console which is similar to a shell interface, along with tools to inspect the DOM, debug, and analyze network activity.\n The Console can be used to log information as part of the JavaScript development process, as well as allow you to interact with a web page by carrying out JavaScript expressions within the page’s context. Essentially, the Console provides you with the ability to write, manage, and monitor JavaScript on demand',

        example: `
//hit cmd + option + j  ON a mac computer to open developer tools in crome or right click insepct
//then you can write: 
  var a = 4;
  a + 4
// should return 8 in your console`,

        link: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 36 //console
      },
      {
        name: 'batman',
        cohort: 19,
        title: 'what is const',
        tags: ['const', 'variable', 'es6'],
        note: 'const is a way to declare a variable to avoid overwritting, once the keyword const is used that keyword can no longer be used since it is hard saved to that particular keyword',
        example: `
//example - const
  const coffee = 'some coffe'
  console.log(coffee)
//will return string coffee
//however if you try to make another var with coffee
  var coffee = 'cold coffe'
  console.log(coffee)
//you will get an error / likewise with eslint it will complain youve used the keyword 2 times`,
        link: 'https://mzl.la/2bvCtUR',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 37 //const
      },
      {
        name: 'ed swim',
        cohort: 1,
        title: 'what is a constructor?',
        tags: ['constructor', 'JavaScript'],
        note: 'All objects will have a constructor property. Objects created without the explicit use of a constructor function (i.e. the object and array literals) will have a constructor property that points to the Fundamental Object constructor type for that object.',

        example: `
var o = {};
o.constructor === Object; // true

var o = new Object;
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var a = new Array;
a.constructor === Array // true

var n = new Number(3);
n.constructor === Number; // true`,
    
        link: 'https://mzl.la/20YLVQS',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 38 //constructor

      },
      { 
        name: 'darth vader',
        cohort: 18,
        title: 'what is a container',
        tags: ['container', 'React', 'Redux'],
        note:'Container components are components that are aware of Redux \n a container component is a component that is responsible for retrieving data, and in order to get that data, the component needs to use Reduxs connect and mapStateToProps functions. \n A container component will grab data from state via mapStateToProps. The component will then pass necessary portions of that data down to its children as props \n A container component is also responsible for dispatching actions that make changes to application state.',
        example: `
import React from 'react';  
import DayPicker, { DateUtils } from 'react-day-picker'  
import {connect} from 'react-redux';  
import {bindActionCreators} from 'redux';  
import * as attendanceRecordActions from '../../actions/attendanceRecordActions';

class ScheduleContainer extends React.Component {  
  componentDidMount() {
    if (this.props.attendanceRecords.length = = 0) {
      this.props.actions.fetchAttendanceRecords();
    }
  }

  render() {
    return (
      < DayPicker
        locale='us'
        selectedDays={day => {
         DateUtils.isSameDay(new Date())
        }} /> 
    )
  }
}

function mapStateToProps(state, ownProps) {  
  return {attendanceRecords: state.attendanceRecords}
}

function mapDispatchToProps(dispatch) {  
  return {actions: bindActionCreators(attendanceRecordActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);`, 

        link: 'http://bit.ly/2tCTfHR',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 39 //container 
      },
      {
        name: 'tyler durden',
        cohort: 4,
        title: 'what is context?',
        tags: ['context','javascript', 'scope'],
        note: 'Every function invocation has both a scope and a context associated with it. Fundamentally, scope is function-based while context is object-based. \n In other words, scope pertains to the variable access of a function when it is invoked and is unique to each invocation. Context is always the value of the this keyword which is a reference to the object that “owns” the currently executing code.',
        example: `
var obj = {
foo: function() {
  return this;   
  }
};

obj.foo() === obj; // true`, 

        link: 'http://bit.ly/VHXAYB',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 40 //context 
      },
      {
        name: 'mr bean',
        cohort:19,
        title:'how to use continue',
        tags:['continue','javascript'],
        note:'The continue statement breaks one iteration (in a loop), if a specified condition occurs, and continue with the next iteration in the loop.This example skips the value of 3',
        example:`
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}`,
        link: 'http://bit.ly/2i4Oa72',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 41 //continue
      },
      {
        name: 'mavrick',
        cohort: 6,
        title:'what is a controller',
        tags:['javascript','controller','react','angular','mvc'],
        note:'A controller is a function you write to control your data.With a self-written controller, you can modify data anyway you want \n  controller is also used in MVC. \n MVC is a software architectural pattern for implementing user interfaces on computers. It divides a given application into three interconnected parts. This is done to separate internal representations of information from the ways information is presented to, and accepted from, the user. \n The MVC design pattern decouples these major components allowing for efficient code reuse and parallel development.',
        example:`
<script>
w3.getHttpObject("customers.js", myFunction);

function myFunction(myObject) {
  var i;
  var myArray = myObject.customers;
  for (i = 0; i < myArray.length; i++) {
      myArray[i]["CustomerName"] =
      myArray[i]["CustomerName"].toUpperCase();
  }
  w3.displayObject("id01", myObject);
}
</script>`,

        link: 'http://bit.ly/2kble1J',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 42 //controller 
      },
      {
        name:'I AM Groot!',
        cohort: 19,
        title:'when to use curly braces',
        tags:['curly braces','objects','object','function', 'brackets'],
        note:'A block statement (or compound statement in other languages) is used to group zero or more statements. The block is delimited by a pair of curly brackets',
        example:`
var object = {
  sum: function(foo, bar) {
  return foo + bar;
  }
};`,
        link: 'http://bit.ly/2ALbDWn',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 43 //curly brace
      },
      {
        name: 'i am groot?',
        cohort: 18,
        title:'what is currying',
        tags:['currying', 'function', 'javascript'],
        note:'currying is a way of constructing functions that allows partial application of a function’s arguments. What this means is that you can pass all of the arguments a function is expecting and get the result, or pass a subset of those arguments and get a function back that’s waiting for the rest of the arguments. It really is that simple.',
        example:`
var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};

var greetHello = greetCurried("Hello");
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"

greetCurried("Hi there")("Howard"); //"Hi there, Howard"`, 

        link: 'http://bit.ly/2zB6GLx',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 44 //curryng
      },
      {
        name:'alan turing',
        cohort: 19,
        title: 'what are data types', 
        tags:['data','types','data types'],
        note:'JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript. \nPrimitive data type Non-primitive (reference) data type JavaScript is a dynamic type language, means you dont need to specify type of the variable because it is dynamically used by JavaScript engine. You need to use var here to specify the data type \n There are five types of primitive data types in JavaScript. String, Number, Boolean, Undefined, Null',
        example:`
//loose example with javascript
var myVar = 100;
myVar = true;
myVar = null;
myVar = undefined;
myVar = "Steve";

alert(myVar); // Steve`,

        link: 'http://bit.ly/2zTlnOs',
        createdAt: new Date(),
        updatedAt: new Date(),
        topic_id: 45 //data types
      }

    ], {});

  },


  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', null, {});

  }

};