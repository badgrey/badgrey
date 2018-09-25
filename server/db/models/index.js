const User = require('./user')
const Artist = require('./artist')
const Blog = require('./blog')

User.belongsToMany(Artist, {through: 'Saved'})
Artist.belongsToMany(User, {through: 'Saved'})
Blog.belongsTo(User)
User.hasMany(Blog)

module.exports = {
  User,
  Artist,
  Blog
}
