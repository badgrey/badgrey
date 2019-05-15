'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'originalContents',
        'contentType',
        Sequelize.STRING
      )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'originalContents',
      'contentType'
    )
  }
};
