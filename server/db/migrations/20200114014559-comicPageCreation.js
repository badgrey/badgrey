'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ComicPage', {
      pageImage: {
        type: Sequelize.STRING,
        allowNull: false
      },
      partOfDouble: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('ComicPage');
  }
};
