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
        name : 'angularjs'
      },
      {
        name : 'anonymous function' 
      },
      {
        name : 'argument'
      },
      { 
        name : 'fat arrow'
      },
      {
        name : 'application programming interface'
      },
      {
        name : 'apply' 
      },
      {
        name : 'application middleware'
      },
      {
        name : 'arithmetic operator' //Topic ID# 10
      },
      {
        name : 'array'
      },
      {
        name : 'array method'
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
        name : 'big o notation'
      },
      {
        name : 'bind'
      },
      {
        name : 'block level scope'
      },
      {
        name : 'body parser'
      },
      {
        name : 'boolean' //Topic ID# 20
      },
      {
        name : 'branch'
      },
      {
        name : 'break'
      },
      {
        name : 'bubble sort'
      },
      {
        name : 'call'
      },
      {
        name : 'callback function'
      },
      {
        name : 'callback hell'
      },
      {
        name : 'case'
      },
      {
        name : 'catch'
      },
      {
        name : 'chaijs'
      },
      {
        name : 'class' //Topic ID# 30
      },
      {
        name : 'closure'
      },
      {
        name : 'code editor'
      },
      {
        name : 'colemak'
      },
      {
        name : 'component'
      },
      {
        name : 'conditional'
      },
      {
        name : 'console'
      },
      {
        name : 'const'
      },
      {
        name : 'constructor'
      },
      {
        name : 'container'
      },
      {
        name : 'context' //Topic ID# 40
      },
      {
        name : 'continue'
      },
      {
        name : 'controller'
      },
      {
        name : 'curly bracket'
      },
      {
        name : 'currying'
      },
      {
        name : 'datatype'
      },
      {
        name : 'debugger'
      },
      {
        name : 'debug'
      },
      {
        name : 'default'
      },
      {
        name : 'default constructor'
      },
      {
        name : 'denormalization' //Topic ID# 50
      },
      {
        name : 'delete'
      },
      {
        name : 'devops'
      },
      {
        name : 'directive'
      },
      {
        name : 'document object model'
      },
      {
        name : 'do while loop'
      },
      {
        name : 'dvorak'
      },
      {
        name : 'encapsulation'
      },
      {
        name : 'error'
      },
      {
        name : 'event'
      },
      {
        name : 'export' //Topic ID# 60
      },
      {
        name : 'expression (angular)'
      },
      {
        name : 'expressjs'
      },
      {
        name : 'extends'
      },
      {
        name : 'finally'
      },
      {
        name : 'flexbox'
      },
      {
        name : 'for loop'
      },
      {
        name : 'for in loop'
      },
      {
        name : 'framework'
      },
      {
        name : 'function'
      },
      {
        name : 'function declaration' //Topic ID# 70
      },
      {
        name : 'function expression'
      },
      {
        name : 'function invocation'
      },
      {
        name : 'functional programming'
      },
      {
        name : 'function level scope'
      },
      {
        name : 'github'
      },
      {
        name : 'git terminal'
      },
      {
        name : 'global object'
      },
      {
        name : 'global scope'
      },
      {
        name : 'heap sort'
      },
      {
        name : 'hoisting'
      },
      {
        name : 'if statement'
      },
      {
        name : 'if else statement'
      },
      {
        name : 'immediately invoked function expression'
      },
      {
        name : 'in'
      },
      {
        name : 'indentation'
      },
      {
        name : 'indexing'
      },
      {
        name : 'inheritance'
      },
      {
        name : 'insertion sort'
      },
      {
        name : 'instance'
      },
      {
        name : 'interpreted language'
      },
      {
        name : 'interview'
      },
      {
        name : 'javascript'
      },
      {
        name : 'jquery'
      },
      {
        name : 'json'
      },
      {
        name : 'keyboard'
      },
      {
        name : 'key-value pair'
      },
      {
        name : 'keyword'
      },
      {
        name : 'let'
      },
      {
        name : 'library'
      },
      {
        name : 'local repository'
      },
      {
        name : 'lo dash'
      },
      {
        name : 'logical operator'
      },
      {
        name : 'loop'
      },
      {
        name : 'loosely typed language'
      },
      {
        name : 'mechanical keyboard'
      },
      {
        name : 'merge conflict'
      },
      {
        name : 'merge sort'
      },
      {
        name : 'middleware'
      },
      {
        name : 'mochajs'
      },
      {
        name : 'mongodb'
      },
      {
        name : 'mysql'
      },
      {
        name : 'new'
      },
      {
        name : 'next'
      },
      {
        name : 'nodejs'
      },
      {
        name : 'normalization'
      },
      {
        name : 'nosql'
      },
      {
        name : 'null'
      },
      {
        name : 'object initialization'
      },
      {
        name : 'object literal'
      },
      {
        name : 'object'
      },
      {
        name : 'object-oriented programming'
      },
      {
        name : 'operator'
      },
      {
        name : 'object relational mapping'
      },
      {
        name : 'pair-programming'
      },
      {
        name : 'parameter'
      },
      {
        name : 'parenthesis'
      },
      {
        name : 'pass-by-reference'
      },
      {
        name : 'pass-by-value'
      },
      {
        name : 'port'
      },
      {
        name : 'postgresql'
      },
      {
        name : 'primitive'
      },
      {
        name : 'private method'
      },
      {
        name : 'private variable'
      },
      {
        name : 'programming paradigm'
      },
      {
        name : 'promise'
      },
      {
        name : 'prop'
      },
      {
        name : 'prototypal inheritance'
      },
      {
        name : 'prototype'
      },
      {
        name : 'prototype chain'
      },
      {
        name : 'pull request'
      },
      {
        name : 'quick sort'
      },
      {
        name : 'qwerty'
      },
      {
        name : 'reactjs'
      },
      {
        name : 'recursion'
      },
      {
        name : 'reference error'
      },
      {
        name : 'relational database management system'
      },
      {
        name : 'relational operator'
      },
      {
        name : 'remote repository'
      },
      {
        name : 'return'
      },
      {
        name : 'router middleware'
      },
      {
        name : 'runtime environment'
      },
      {
        name : 'scope'
      },
      {
        name : 'semi-colon'
      },
      {
        name : 'sequelizejs'
      },
      {
        name : 'single page application'
      },
      {
        name : 'socket'
      },
      {
        name : 'spread operator'
      },
      {
        name : 'stack'
      },
      {
        name : 'stack overflow'
      },
      {
        name : 'state'
      },
      {
        name : 'string'
      },
      {
        name : 'subclass'
      },
      {
        name : 'super'
      },
      {
        name : 'superclass'
      },
      {
        name : 'switch statement'
      },
      {
        name : 'synchronous'
      },
      {
        name : 'syntactical sugar'
      },
      {
        name : 'syntax'
      },
      {
        name : 'syntax error'
      },
      {
        name : 'technical debt'
      },
      {
        name : 'ternary'
      },
      {
        name : 'test driven development'
      },
      {
        name : 'that'
      },
      {
        name : 'third-party middleware'
      },
      {
        name : 'this'
      },
      {
        name : 'thread'
      },
      {
        name : 'throw'
      },
      {
        name : 'try'
      },
      {
        name : 'type error'
      },
      {
        name : 'typeof'
      },
      {
        name : 'undefined'
      },
      {
        name : 'variable'
      },
      {
        name : 'vim'
      },
      {
        name : 'virtual document object model'
      },
      {
        name : 'web service'
      },
      {
        name : 'while loop'
      },
      {
        name : 'with'
      },
      {
        name : 'xmlhttprequest'
      },
      {
        name : 'yield'
      }
      //END
      //TOTAL :

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('topics', null, {});

  }
};