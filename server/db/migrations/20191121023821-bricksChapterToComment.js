'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'comments',
      'bricksChapterId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'BricksChapters',
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
