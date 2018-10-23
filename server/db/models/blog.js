const Sequelize = require('sequelize')
const db = require('../db')

const Blog = db.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  blogPic: {
    type: Sequelize.STRING,
    allowNull: false
  },
  blogPost: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Blog
