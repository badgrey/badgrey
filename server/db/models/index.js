const User = require('./user')
const Artist = require('./artist')
const Blog = require('./blog')
const Comment = require('./comment')

User.belongsToMany(Artist, {through: 'Saved'})
Artist.belongsToMany(User, {through: 'Saved'})
Blog.belongsTo(User)
User.hasMany(Blog)
Comment.belongsTo(Blog)
Blog.hasMany(Comment)
User.belongsToMany(Comment, {through: 'Likes'})
User.belongsToMany(Comment, {through: 'Dislikes'})
Comment.belongsTo(User)

module.exports = {
  User,
  Artist,
  Blog,
  Comment
}
