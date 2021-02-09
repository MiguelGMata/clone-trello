'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Liste extends Model {
    static associate(models) {
      this.hasMany(
        models.Carte, {
        foreignKey: "listeId",
      }
      );
      this.belongsTo(models.Tableau, { as: "tableau" });
    }
  };
  Liste.init({
    titre: DataTypes.STRING,
    suivre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Liste',
  });
  return Liste;
};