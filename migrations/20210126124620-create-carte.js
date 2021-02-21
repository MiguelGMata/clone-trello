'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cartes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      listeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Listes",
          key: "id",
        }
      },
      nom: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING(1000)
      },
      activite: {
        type: Sequelize.STRING(1000)
      },
      date_debut: {
        type: Sequelize.DATE
      },
      date_limite: {
        type: Sequelize.DATE
      },
      piece: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cartes');
  }
};