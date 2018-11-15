const User = require('./user')
const Artist = require('./artist')
const Blog = require('./blog')
const Comment = require('./comment')
const Interview = require('./interview')

User.belongsToMany(Artist, {through: 'Saved'})
Artist.belongsToMany(User, {through: 'Saved'})

Blog.belongsTo(User)
User.hasMany(Blog)
Blog.belongsTo(Artist)
Artist.hasMany(Blog)


Comment.belongsTo(Blog)
Blog.hasMany(Comment)
Comment.belongsTo(Artist)
Artist.hasMany(Comment)

Comment.belongsTo(User)
User.hasMany(Comment)

Interview.belongsTo(Artist)
Artist.hasMany(Interview)

Comment.belongsToMany(User, {through: 'Like_Comment', as: 'Likes'})
Comment.belongsToMany(User, {through: 'Dislike_Comment', as: 'Dislikes'})

Blog.belongsToMany(User, {through: 'Like_Blog', as: 'BlogLikes'})
Blog.belongsToMany(User, {through: 'Dislike_Blog', as: 'BlogDislikes'})

Artist.belongsToMany(User, {through: 'Like_Artist', as: 'ArtistLikes'})
Artist.belongsToMany(User, {through: 'Dislike_Artist', as: 'ArtistDislikes'})

Interview.belongsToMany(User, {through: 'Like_Interview', as: 'InterviewLikes'})
Interview.belongsToMany(User, {through: 'Dislike_Interview', as: 'InterviewDislikes'})

module.exports = {
  User,
  Artist,
  Blog,
  Comment,
  Interview
}
