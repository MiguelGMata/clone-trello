'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tableaus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Users",
          key: "id",
        }
      },
      /*
      equipeId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Equipes",
          key: "id",
        }
      },*/
      titre: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING(1000)
      },
      modele: {
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
    await queryInterface.dropTable('Tableaus');
  }
};