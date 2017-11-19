module.exports = function (sequelize, DataTypes) {

  const Link = sequelize.define('Link', {
    type : {type : DataTypes.STRING, allowNull : false}
  },
    {tableName : 'links', timestamps : false}
  );

  Link.associate = function (models) {
    Link.belongsTo(models.Topic, {
      foreignKey : 'topic_id',
      as: 'Topic'
    })
  }

  return Link;
}