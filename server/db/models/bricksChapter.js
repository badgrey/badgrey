const Sequelize = require('sequelize');
const db = require('../db');

const BricksChapter = db.define('BricksChapter', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
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

module.exports = BricksChapter;
