/*This model represents a link to an external resource.*/
module.exports = function (sequelize, DataTypes) {
  
  const Resource = sequelize.define('Resource', {
    title : {
      type : DataTypes.STRING,
      allowNull : false
    },
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