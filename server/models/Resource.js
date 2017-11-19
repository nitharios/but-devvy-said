/*This can be a link to a video, tutorial, or StackOverflow Q&A. It can also be a code or text snippet from a DevLeague student.*/

module.exports = function (sequelize, DataTypes) {

  const Resource = sequelize.define('Resource', {
    title : {type : DataTypes.STRING, allowNull : false},
    url : {type : DataTypes.STRING, allowNull : true},
    description : {type : DataTypes.TEXT, allowNull : false},
    body : {type : DataTypes.TEXT, allowNull : false},
    student : {type : DataTypes.STRING, allowNull : true},
    teacher : {type : DataTypes.STRING, allowNull : true}
  },
    {tableName : 'resources', timestamps : false}
  );

  Resource.associate = function (models) {
    Resource.belongsTo(models.Topic, {
      foreignKey : 'topic_id',
      as: 'Topic'
    });
    Resource.belongsToMany(models.Tag, {through : 'tags', foreignKey : 'tag_id'});
  }

  return Resource;
}