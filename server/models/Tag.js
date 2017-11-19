/*THIS IS A STRETCH GOAL*/

module.exports = function (sequelize, DataTypes) {
  const Tag = sequelize.define('Tag', {
    name : {
      type : DataTypes.STRING, 
      allowNull : false
    }
  },
  {
    tableName : 'tags'
  },
  {
    indexes : [
      {
        name : 'tags_pk',
        unique : true,
        fields : ['id']
      }
    ]
  });

  Tag.associate = function (models) {
    Tag.belongsToMany(models.Resource, {
      through : 'tags', 
      foreignKey : 'tag_id',
      onDelete : 'CASCADE'
    });
  };

  return Tag;
};