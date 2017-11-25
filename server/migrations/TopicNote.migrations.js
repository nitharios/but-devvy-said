'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('topicnote', 
      {
        id : {
          type : Sequelize.INTEGER,
          primaryKey : true,
          autoIncrement : true
        },
        topicId : {
          type : Sequelize.INTEGER,
          references : {
            model : 'topics',
            key : 'id'
          },
          allowNull : false
        },
        noteId : {
          type : Sequelize.INTEGER,
          references : {
            model : 'notes',
            key : 'id'
          },
          allowNull : false
        },
        createdAt : Sequelize.DATE,
        updatedAt : Sequelize.DATE
      })

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('topicnote');

  }
  
};
