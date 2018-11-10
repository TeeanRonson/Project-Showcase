'use strict'
//This table indicate the coin's type and amount a user currently hold 
module.exports = (sequelize, DataTypes) => {
  var Repo = sequelize.define('Repo', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING
    },
    fork: {
      type: DataTypes.BOOLEAN,
    },
    stargazers_count: {
      type: DataTypes.INTEGER
    },
    language: {
      type: DataTypes.STRING
    }
  }, {});
  Repo.associate = function(models) {
    Repo.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Repo;
};