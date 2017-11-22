/*This model represents a student's page of notes.*/

module.exports = function(sequelize, DataTypes) {

  const Note = sequelize.define('Note', {
    topic : {type : DataTypes.STRING, allowNull : false},
    title : {type : DataTypes.STRING, allowNull : false},
    student : {type : DataTypes.STRING, allowNull : true},
    bullets : {
      type : DataTypes.JSONB, // ['Bullet point 1', 'Bullet point 2', 'Bullet point 3']
      allowNull : false
    }
  },
  {
    tableName : 'notes'
  },
  {
    timestamps : true,
    createdAt : 'Submission Date',
    updatedAt : 'Last Updated'
  });

  Note.associate = function(models) {

    Note.belongsTo(models.Topic, {
      foreignKey : 'topic_id'
    });

    Note.hasMany(models.Example, {
      foreignKey : 'note_id'
    });

  };


  return Note;

};