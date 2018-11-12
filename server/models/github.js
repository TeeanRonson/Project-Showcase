'use strict'
//This table indicate the coin's type and amount a user currently hold 
module.exports = (sequelize, DataTypes) => {
  var Github = sequelize.define('Github', {
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
    }
  });
  Github.associate = function(models) {
    Github.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Github;
};