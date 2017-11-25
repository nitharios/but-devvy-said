'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('TopicResource', 
      {
        id : {
          type : Sequelize.INTEGER,
          primaryKey : true,
          autoIncrement : true,
          allowNull : false
        },
        topicId : {
          type : Sequelize.INTEGER,
          references : {
            model : 'Topic',
            key : 'id'
          },
          allowNull : false
        },
        resourceId : {
          type : Sequelize.INTEGER,
          references : {
            model : 'Resource',
            key : 'id'
          },
          allowNull : false
        },
        createdAt :  {
          type : Sequelize.DATE,
          allowNull : false
        },
        updatedAt : {
          type : Sequelize.DATE,
          allowNull : false
        }
      })

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('TopicResource');

  }
  
};
