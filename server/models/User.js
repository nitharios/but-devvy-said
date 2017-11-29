module.exports = function(sequelize, DataType) {
  const User = sequelize.define('User', {
    username : {
      type : DataType.STRING,
      allowNull : false,
      unique : true
    },
    password : {
      type : DataType.STRING
    },
    email : {
      type : DataType.STRING,
      allowNull : false,
      unique : true,
      // validate : { isEmail: true }
    },
  },
  {
    tableName : 'users'
  });

  // User.associate = function(models) {
  //   User.hasMany(models.Resources, {
  //     foreignKey : "user_id",
  //   });
  // };
  return User;
};