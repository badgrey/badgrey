const Sequelize = require('sequelize');
const db = require('../db');

const BricksVolume = db.define('comicPage', {
  pageImage: {
    type: Sequelize.STRING,
    allowNull: false
  },
  partOfDouble: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = BricksVolume;
