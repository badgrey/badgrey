const Sequelize = require('sequelize')
const db = require('../db')

const Interview = db.define('interview', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  interview: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  soundcloud: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Interview
