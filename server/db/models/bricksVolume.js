const Sequelize = require('sequelize')
const db = require('../db')

const BricksVolume = db.define('BricksVolume', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  coverImage: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = BricksVolume
