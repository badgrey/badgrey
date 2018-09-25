const User = require('./user')
const Artist = require('./artist')
const Blog = require('./blog')

User.belongsToMany(Artist, {through: 'Saved'})
Artist.belongsToMany(User, {through: 'Saved'})

module.exports = {
  User,
  Artist,
  Blog
}
