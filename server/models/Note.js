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
      type : DataTypes.JSONB, // ['Bullet point 1', 'Bullet point 2', 'Bullet point 3']
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
    Note.belongsTo(models.Topic, {
      foreignKey : 'topic_id'
    });
  };

  return Note;
};