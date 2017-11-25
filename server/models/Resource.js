/*This model represents a link to an external resource.*/
module.exports = function (sequelize, DataTypes) {
  
  const Resource = sequelize.define('Resource', {
    url : {
      type : DataTypes.STRING, 
      allowNull : true
    }
  },
  {
    tableName : 'resources'
  },
  {
    indexes : [
      {
        name : 'resources_pk',
        unique : true,
        fields : ['id']
      }
    ]
  });

  Resource.associate = function(models) {
    
    Resource.belongsToMany(models.Topic, {
      through : 'TopicResource',
      foreignKey : 'resourceId',
      otherKey : 'topicId'

    });
  };

  return Resource;
};