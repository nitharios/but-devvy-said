/*This is our new model according to Jesse's suggestion.*/
module.exports = function(sequelize, DataTypes) {

  const Resource = sequelize.define('Resource', {
    // 'arrow function notes'
    title : {
      type : DataTypes.STRING, 
      allowNull : false
    },
    //'http://bit.ly/2zOQycP'
    links : {
      type : DataTypes.STRING, 
      allowNull : true
    },
    // code snippet
    examples : {
      type : DataTypes.TEXT, 
      allowNull : true
    },
    // class notes
    notes : {
      type : DataTypes.TEXT, 
      allowNull : true
    },
    // C19
    cohort : {
      type : DataTypes.INTEGER, 
      allowNull : true
    },
    // 'Chris'
    name : {
      type : DataTypes.STRING, 
      allowNull : false
    },
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