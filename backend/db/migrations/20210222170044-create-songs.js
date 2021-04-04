"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Songs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(256),
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      audioFile: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      genreId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Genres" },
      },
      artistName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Songs");
  },
};
