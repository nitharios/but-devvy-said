module.exports = function(sequelize, DataTypes) {

  const Note = sequelize.define('Note', {

    data : {
      type : DataTypes.JSONB,
      allowNull : false
    }

  });

  Note.associate = function(models) {
    Note.belongsTo(models.Topic, {

    });

    Note.belongsToMany(models.Tag, {

    });

  };


  return Note;

};