module.exports = function (sequelize, DataTypes) {

  const Topic = sequelize.define('Topic', {
    type : {type : DataTypes.STRING, allowNull : false}
  },
    {tableName : 'topics', timestamps : false}
  );

  Topic.associate = function (models) {
    Topic.hasMany(models.Link, {
      foreignKey : 'link_id',
      as : 'Link'
    });
    Topic.hasMany(mode.sTag, {
      foreignKey : 'tag_id',
      as : 'Tag'
    });
  }

  return Topic;
}