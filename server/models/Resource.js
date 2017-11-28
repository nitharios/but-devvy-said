/*This is our new model according to Jesse's suggestion.*/
module.exports = function(sequelize, DataTypes) {

  const Resource = sequelize.define('Resource', {
    //'Chris'
    firstName : {
      type : DataTypes.STRING, 
      allowNull : false
    },
    //'Min'
    lastName : {
      type : DataTypes.STRING, 
      allowNull : false
    },
    //'chris.min216@gmail.com'
    email : {
      type : DataTypes.STRING, 
      allowNull : false
    },
    //'Full-Time'
    track : {
      type : DataTypes.STRING, 
      allowNull : false
    },
    //C19
    cohort : {
      type : DataTypes.INTEGER, 
      allowNull : false
    },
    //['javascript', 'asynchronous', 'promises']
    topics : {
      type : DataTypes.ARRAY(DataTypes.STRING),
      allowNull : false
    },
    //These are class notes, bullet points.
    note : {
      type : DataTypes.TEXT, 
      allowNull : true
    },
    //This is a body of code snippet, using HighlightJS.
    example : {
      type : DataTypes.TEXT, 
      allowNull : true
    },
    //'http://bit.ly/2zOQycP'
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