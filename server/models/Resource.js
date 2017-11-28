/*This is our new model according to Jesse's suggestion.*/
module.exports = function(sequelize, DataTypes) {

  const Resource = sequelize.define('Resource', {
    
    name : {
      type : DataTypes.STRING, 
      allowNull : true
    },
    cohort : {
      type : DataTypes.INTEGER, 
      allowNull : true
    },
    title : {
      type : DataTypes.STRING,
      allowNull : false
    },
    tags : {
      type : DataTypes.ARRAY(DataTypes.STRING),
      allowNull : true
    },
    note : {
      type : DataTypes.TEXT, 
      allowNull : true
    },
    example : {
      type : DataTypes.TEXT, 
      allowNull : true
    },
    link : {
      type : DataTypes.STRING, 
      allowNull : true
    }
  },
  {
    tableName : 'resources',
  },
  {
    indexes : [
      {
        name : 'resources_pk',
        unique : true,
        fields : ['id']
      }
    ]
  });

  Resource.associate = function(models) {

    Resource.belongsTo(models.Topic, {
      foreignKey : 'topic_id'
    });

  };

  return Resource;
};