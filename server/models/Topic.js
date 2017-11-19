module.exports = function (sequelize, DataTypes) {

  const Topic = sequelize.define('Topic', {
    type : {type : DataTypes.STRING, allowNull : false}
  },
    {tableName : 'topics', timestamps : false}
  );

  Topic.associate = function (models) {
    Topic.hasMany(models.Resource, {
      foreignKey : 'link_id',
      as : 'Link'
    });
  }

  return Topic;
}