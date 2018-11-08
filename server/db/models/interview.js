const Sequelize = require('sequelize')
const db = require('../db')

const Interview = db.define('interview', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Interview
