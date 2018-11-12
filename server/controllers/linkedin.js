module.exports = (sequelize, DataTypes) => {
  var Linkedin = sequelize.define('Linkedin', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    
  });
  return Linkedin;
};