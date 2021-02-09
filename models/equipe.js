'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipe extends Model {
    /* static associate(models) {
       this.hasMany(
         models.Tableau, {
         foreignKey: "equipeId",
       }
       );
     }*/
  };
  Equipe.init({
    nom: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Equipe',
  });
  return Equipe;
};