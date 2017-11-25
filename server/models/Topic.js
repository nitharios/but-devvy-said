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

    Topic.hasMany(models.Answer, {
      foreignKey : 'topic_id'
    });

  };

  

  return Topic;


};