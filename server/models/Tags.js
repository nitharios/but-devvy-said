/*THIS IS A STRETCH GOAL*/

module.exports = function (sequelize, DataTypes) {

  const Tag = sequelize.define('Tag', {
    type : {type : DataTypes.STRING, allowNull : false}
  },
    {tableName : 'tags', timestamps : false}
  );

  Tag.associate = function (models) {
    Tag.belongsTo(models.Topic, {
      foreignKey : 'topic_id',
      as: 'topic'
    })
  }

  return Tag;
}