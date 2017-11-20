/*THIS IS A STRETCH GOAL*/

module.exports = function (sequelize, DataTypes) {
  
  const Tag = sequelize.define('Tag', {
    name : {
      type : DataTypes.STRING, 
      allowNull : false
    }
  },
  {
    tableName : 'tags',
    timestamps : false
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
      through : 'resource_tags', 
      foreignKey : 'tag_id',
      onDelete : 'CASCADE'
    });
  };

  return Tag;
};