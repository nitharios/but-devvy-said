/*This model represents a code snippet.*/

module.exports = function(sequelize, DataTypes) {

  const Example = sequelize.define('Example', {
    title : {type : DataTypes.STRING, allowNull : true}, //text input OPTIONAL
    format : {type : DataTypes.STRING, allowNull : false}, //drop-down
    comment : {type : DataTypes.TEXT, allowNull : true}, //text input OPTIONAL
    code : {
      type : DataTypes.TEXT, //textbody of code, formatted on front-end with a library
      allowNull : false
    }
  },
  {
    tableName : 'examples'
  },
  {
    timestamps : true,
    createdAt : 'Submission Date',
    updatedAt : 'Last Updated'
  });

  Example.associate = function(models) {

    Example.belongsTo(models.Topic, {
      foreignKey : 'topic_id'
    });

  };

  return Example;

};
