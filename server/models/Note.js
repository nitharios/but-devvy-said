/*This model represents a student's page of notes.*/

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

    Note.hasMany(models.Snippet, {

    });

  };


  return Note;

};