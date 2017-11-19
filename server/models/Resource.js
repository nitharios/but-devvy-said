/*This can be a link to a video, tutorial, or StackOverflow Q&A. It can also be a code or text snippet from a DevLeague student.*/

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
    Resource.belongsTo(models.Topic, {
      foreignKey : 'topic_id'
    });
    
    Resource.belongsToMany(models.Tag, {
      through : 'resource_tags', 
      foreignKey : 'tag_id',
      onDelete : 'CASCADE'
    });
  };

  return Resource;
};