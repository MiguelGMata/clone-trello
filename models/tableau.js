'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tableau extends Model {
    static associate(models) {
      this.belongsTo(models.User, { as: "user" });
      this.hasMany(
        models.Liste, {
        foreignKey: "tableauId",
      }
      );
    }
  };
  Tableau.init({
    titre: DataTypes.STRING,
    image: DataTypes.STRING(1000),
    modele: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tableau',
  });
  return Tableau;
};