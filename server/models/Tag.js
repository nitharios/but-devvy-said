/*THIS IS A STRETCH GOAL*/

module.exports = function (sequelize, DataTypes) {

  const Tag = sequelize.define('Tag', {
    title : {type : DataTypes.STRING, allowNull : false}
  },
    {tableName : 'tags', timestamps : false}
  );

  Tag.associate = function (models) {
    Tag.belongsToMany(models.Resource, {
      foreignKey : 'resource_id',
      as: 'Resource'
    })
  }

  return Tag;
}