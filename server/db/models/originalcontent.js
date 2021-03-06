const Sequelize = require('sequelize')
const db = require('../db')

const OriginalContent = db.define('originalContent', {
  youtubeId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contentType: {
    type: Sequelize.STRING
  }
})

module.exports = OriginalContent
