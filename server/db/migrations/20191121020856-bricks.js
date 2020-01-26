'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BricksChapter', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      coverImage: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('BricksChapter');
  }
};
