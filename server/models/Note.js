/*This model represents a student's page of notes.*/
module.exports = function(sequelize, DataTypes) {

  const Note = sequelize.define('Note', {
    title : {
      type : DataTypes.STRING, 
      allowNull : true
    }, //Optional title
    student : {
      type : DataTypes.STRING, 
      allowNull : true
    }, //EG: from Chris Min @ C19 
    cohort : {
      type : DataTypes.INTEGER, 
      allowNull : true
    },
    bullets : {
      type : DataTypes.TEXT,
      allowNull : false
    }
  },

  {
    tableName : 'notes'
  },
  
  {
    indexes : [
      {
        name : 'notes_pk',
        fields : ['id']
      }
    ]
  });

  Note.associate = function(models) {

    Note.belongsToMany(models.Topic, {
      through : 'TopicNote',
      foreignKey : 'noteId',
      otherKey : 'topicId'
    });

  };

  return Note;
};