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
Comment.belongsToMany(User, {through: 'Like_Comment', as: 'Likes'})
Comment.belongsToMany(User, {through: 'Dislike_Comment', as: 'Dislikes'})
Comment.belongsTo(User)
User.hasMany(Comment)

module.exports = {
  User,
  Artist,
  Blog,
  Comment
}
