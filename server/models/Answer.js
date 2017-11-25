/*This is our new model according to Jesse's suggestion.*/

module.exports = function(sequelize, DataTypes) {

  const Answer = sequelize.define('Answer', {
    title : {type : DataTypes.STRING, allowNull : false}, //'Arrow Function Notes'
    links : {type : DataTypes.STRING, allowNull : false}, //'http://bit.ly/2zOQycP'
    example : {type : DataTypes.TEXT, allowNull : false}, //code snippet
    notes : {type : DataTypes.TEXT, allowNull : false}, //page of class notes
    cohort : {type : DataTypes.INTEGER, allowNull : false}, //C19
    name : {type : DataTypes.STRING, allowNull : false}, //'Chris'
  },

  {
    tableName : 'answers',
    timestamps : true,
    createdAt : 'Submission Date',
    updatedAt : 'Last Updated'
  });

  Answer.associate = function(models) {

    Answer.belongsTo(models.Topic, {
      foreignKey : 'topic_id'
    });

  };

  return Answer;

};