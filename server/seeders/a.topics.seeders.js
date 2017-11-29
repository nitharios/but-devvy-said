'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('topics', [
      {
        name : 'abstraction'
      },
      {
        name : 'algorithm'
      },
      {
        name : 'angular'
      },
      {
        name : 'anonymous function' 
      },
      { 
        name : 'arrow function'
      },
      {
        name : 'application programming interface'
      },
      {
        name : 'apply' //context
      },
      {
        name : 'array'
      },
      {
        name : 'array prototype method'
      },
      {
        name : 'array indices'
      },
      {
        name : 'array iterative method'
      },
      {
        name : 'asynchronous'
      },
      {
        name : 'callback function'
      },
      {
        name : 'class'
      },
      {
        name : 'closure'
      },
      {
        name : 'code editor'
      },
      {
        name : 'conditional'
      },
      {
        name : 'console'
      },
      {
        name : 'constructor'
      },
      {
        name : 'context'
      },
      {
        name : 'currying'
      },
      {
        name : 'data types'
      },
      {
        name : 'debugging'
      },
      {
        name : 'devops'
      },
      {
        name : 'document object model'
      },
      {
        name : 'encapsulation'
      },
      {
        name : 'errors'
      },
      {
        name : 'events'
      },
      {
        name : 'exporting'
      },
      {
        name : 'expressjs'
      },
      {
        name : 'flexbox'
      },
      {
        name : 'framework'
      },
      {
        name : 'function'
      },
      {
        name : 'functional programming'
      },
      {
        name : 'github'
      },
      {
        name : 'hoisting'
      },
      {
        name : 'immediately invoked function expression'
      },
      {
        name : 'indexing'
      },
      {
        name : 'inheritance'
      },
      {
        name : 'interview'
      },
      {
        name : 'javascript'
      },
      {
        name : 'json'
      },
      {
        name : 'keyboard'
      },
      {
        name : 'keyword'
      },
      {
        name : 'library'
      },
      {
        name : 'loops'
      },
      {
        name : 'middleware'
      },
      {
        name : 'nodejs'
      },
      {
        name : 'normalization'
      },
      {
        name : 'objects'
      },
      {
        name : 'object oriented programming'
      },
      {
        name : 'operators'
      },
      {
        name : 'object relational mapping'
      },
      {
        name : 'pair programming'
      },
      {
        name : 'pass by reference'
      },
      {
        name : 'pass by value'
      },
      {
        name : 'prototype'
      },
      {
        name : 'relational database management system'
      },
      {
        name : 'reactjs'
      },
      {
        name : 'recursion'
      },
      {
        name : 'scope'
      },
      {
        name : 'single page application'
      },
      {
        name : 'sockets'
      },
      {
        name : 'stack'
      },
      {
        name : 'syntax'
      },
      {
        name : 'technical debt'
      },
      {
        name : 'test driven development'
      },
      {
        name : 'thread'
      },
      {
        name : 'variable'
      },
      {
        name : 'controller'
      },
      {
        name : 'services'
      },
      {
        name : 'directive'
      },
      {
        name : 'expression'
      },
      {
        name : 'web service'
      },
      {
        name : 'spread operator'
      },
      {
        name : 'synchronous'
      },
      {
        name : 'promise'
      },
      {
        name : 'xmlhttprequest'
      },
      {
        name : 'callback hell'
      },
      {
        name : 'superclass'
      },
      {
        name : 'subclass'
      },
      {
        name : 'extends'
      },
      {
        name : 'private variable'
      },
      {
        name : 'private method'
      },
      {
        name : 'sublime text'
      },
      {
        name : 'vim'
      },
      {
        name : 'if statement'
      },
      {
        name : 'if-else statement'
      },
      {
        name : 'ternary'
      },
      {
        name : 'switch statement'
      },
      {
        name : 'console.log'
      },
      {
        name : 'object initialization'
      },
      {
        name : 'super'
      },
      {
        name : 'default constructor'
      },
      {
        name : 'bind'
      },
      {
        name : 'call'
      },
      {
        name : 'this'
      },
      {
        name : 'that'
      },
      {
        name : 'primitive'
      },
      {
        name : 'number'
      },
      {
        name : 'string'
      },
      {
        name : 'boolean'
      },
      {
        name : 'null'
      },
      {
        name : 'undefined'
      },
      {
        name : 'debugger'
      },
      {
        name : 'events'
      },
      {
        name : 'type error'
      },
      {
        name : 'reference error'
      },
      {
        name : 'syntax error'
      },
      {
        name : 'big o notation'
      },
      {
        name : 'bubble sort'
      },
      {
        name : 'heap sort'
      },
      {
        name : 'quick sort'
      },
      {
        name : 'merge sort'
      },
      {
        name : 'insertion sort'
      },
      {
        name : 'module.exports'
      },
      {
        name : 'body parser'
      },
      {
        name : 'parameter'
      },
      {
        name : 'argument'
      },
      {
        name : 'function declaration'
      },
      {
        name : 'function expression'
      },
      {
        name : 'function invocation'
      },
      {
        name : 'branch'
      },
      {
        name : 'pull request'
      },
      {
        name : 'merge conflict'
      },
      {
        name : 'local repository'
      },
      {
        name : 'remote repository'
      },
      {
        name : 'git terminal'
      },
      {
        name : 'interview questions'
      },
      {
        name : 'interview tips'
      },
      {
        name : 'technical interview'
      },
      {
        name : 'interview books'
      },
      {
        name : 'interpreted language'
      },
      {
        name : 'loosely typed language'
      },
      {
        name : 'mechanical keyboard'
      },
      {
        name : 'qwerty'
      },
      {
        name : 'colemak'
      },
      {
        name : 'dvorak'
      },
      {
        name : 'lo dash'
      },
      {
        name : 'jQuery'
      },
      {
        name : 'do while'
      },
      {
        name : 'while'
      },
      {
        name : 'for loop'
      },
      {
        name : 'for in loop'
      },
      {
        name : 'next'
      },
      {
        name : 'app middleware'
      },
      {
        name : 'router middleware'
      },
      {
        name : 'error handling middleware'
      },
      {
        name : 'built-in middleware'
      },
      {
        name : 'third-party middleware'
      },
      {
        name : 'runtime environment'
      },
      {
        name : 'denormalization'
      },
      {
        name : 'object literal'
      },
      {
        name : 'key value pair'
      },
      {
        name : 'for in loop'
      },
      {
        name : 'programming paradigm'
      },
      {
        name : 'logical operator'
      },
      {
        name : 'arithmetic operator'
      },
      {
        name : 'relational operator'
      },
      {
        name : 'sequelize'
      },
      {
        name : 'prototype chain'
      },
      {
        name : 'postgresql'
      },
      {
        name : 'mysql'
      },
      {
        name : 'nosql'
      },
      {
        name : 'mongodb'
      },
      {
        name : 'component'
      },
      {
        name : 'container'
      },
      {
        name : 'state'
      },
      {
        name : 'props'
      },
      {
        name : 'virtual dom'
      },
      {
        name : 'block level scope'
      },
      {
        name : 'function level scope'
      },
      {
        name : 'global scope'
      },
      {
        name : 'port'
      },
      {
        name : 'full stack'
      },
      {
        name : 'stack overflow'
      },
      {
        name : 'syntactic sugar'
      },
      {
        name : 'curly brace'
      },
      {
        name : 'parenthesis'
      },
      {
        name : 'semi-colon'
      },
      {
        name : 'indentation'
      },
      {
        name : 'mocha'
      },
      {
        name : 'chai'
      },
      {
        name : 'let'
      },
      {
        name : 'const'
      },
      {
        name : 'break'
      },
      {
        name : 'case'
      },
      {
        name : 'catch'
      },
      {
        name : 'continue'
      },
      {
        name : 'default'
      },
      {
        name : 'delete'
      },
      {
        name : 'finally'
      },
      {
        name : 'in'
      },
      {
        name : 'instanceof'
      },
      {
        name : 'new'
      },
      {
        name : 'return'
      },
      {
        name : 'throw'
      },
      {
        name : 'try'
      },
      {
        name : 'typeof'
      },
      {
        name : 'void'
      },
      {
        name : 'with'
      },
      {
        name : 'yield'
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('topics', null, {});

  }
};