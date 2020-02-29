'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('blogs', 'spotlight', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('blogs', 'spotlight');
  }
};
