
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    github: {
      type: DataTypes.STRING,
      allowNull: false
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  // User.associate = function(models) {
  //   // associations can be defined here
  //   User.hasMany(models.Repo, {
  //     foreignKey: 'userId',
  //     as: 'repo',
  //   })
  // };
  return User;
};