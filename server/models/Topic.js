module.exports = function (sequelize, DataTypes) {

  const Topic = sequelize.define('Topic', {
    name : {
      type : DataTypes.STRING, 
      allowNull : false
    }
  },
  {
    tableName : 'topics',
    timestamps : false
  }, 
  {
    indexes : [
      {
        name : 'topics_pk',
        unique : true,
        fields : ['id']
      }
    ]
  });

  Topic.associate = function(models) {

    Topic.belongsToMany(models.Resource, {
      through : 'TopicResource',
      foreignKey : 'topicId',
      otherKey : 'resourceId'
    });

    Topic.belongsToMany(models.Note, {
      through : 'TopicNote',
      foreignKey : 'topicId',
      otherKey : 'noteId'
    });

    Topic.belongsToMany(models.Example, {
      through : 'TopicExample',
      foreignKey : 'topicId',
      otherKey : 'exampleId'
    });

  };

  

  return Topic;


};