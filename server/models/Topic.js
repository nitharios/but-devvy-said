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
    Topic.hasMany(models.Resource, {
      foreignKey : 'topic_id',
    });
    Topic.hasMany(models.Note, {
      foreignKey : 'topic_id',
    });
  };

  return Topic;
};