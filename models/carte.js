'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carte extends Model {
    static associate(models) {
      this.belongsTo(models.Liste, { as: "liste" });
    }
  };
  Carte.init({
    nom: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    activite: DataTypes.STRING(1000),
    date_debut: DataTypes.DATE,
    date_limite: DataTypes.DATE,
    piece: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Carte',
  });
  return Carte;
};