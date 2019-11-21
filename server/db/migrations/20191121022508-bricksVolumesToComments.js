'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'comments',
      'bricksVolumeId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'BricksVolumes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'comments',
      'bricksVolumeId'
    )
  }
};
