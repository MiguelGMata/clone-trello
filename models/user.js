'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(
        models.Equipe, {
        foreignKey: "userId",
      }
      );
      this.hasMany(
        models.Tableau, {
        foreignKey: "userId",
      }
      );
    }
  };
  User.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    initiales: DataTypes.STRING,
    nom_utilisateur: DataTypes.STRING,
    biographie: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};