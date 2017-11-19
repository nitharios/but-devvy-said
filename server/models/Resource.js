/*This can be a link to a video, tutorial, or StackOverflow Q&A. It can also be a code or text snippet from a DevLeague student.*/

module.exports = function (sequelize, DataTypes) {

  const Resource = sequelize.define('Resource', {
    type : {type : DataTypes.STRING, allowNull : false}
  },
    {tableName : 'links', timestamps : false}
  );

  Resource.associate = function (models) {
    Resource.belongsTo(models.Topic, {
      foreignKey : 'topic_id',
      as: 'Topic'
    });
    Resource.hasMany(models.Tag, {
      foreignKey : 'tag_id',
      as : 'Tag'
    });
  }

  return Resource;
}