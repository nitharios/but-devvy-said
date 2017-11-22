/*This model represents a code snippet.*/

module.exports = function(sequelize, DataTypes) {

  const Example = sequelize.define('Example', {
    title : {type : DataTypes.STRING, allowNull : true},
    format : {type : DataTypes.STRING, allowNull : false},
    comment : {type : DataTypes.TEXT, allowNull : true},
    code : {
      type : DataTypes.TEXT,
      allowNull : false
    }
  });

  Example.associate = function(models) {

    Example.belongsTo(models.Topic, {
      foreignKey : 'topic_id'
    });

    Example.belongsTo(models.Note, {
      foreignKey : 'note_id'
    });

  };

  return Example;

};
