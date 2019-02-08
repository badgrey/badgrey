const Sequelize = require('sequelize')
const db = require('../db')

//blogPic string that will match picture file name

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
  },
  fileKey: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

module.exports = Blog
