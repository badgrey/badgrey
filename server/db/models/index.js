const User = require('./user')
const Artist = require('./artist')
const Blog = require('./blog')
const Comment = require('./comment')
const Interview = require('./interview')
const OriginalContent = require('./originalcontent')
const BricksVolume = require('./bricksVolume')
const BricksChapter = require('./bricksChapter')

//Setting model associations here and exporting them


//setting up saved artist associations
User.belongsToMany(Artist, {through: 'Saved'})
Artist.belongsToMany(User, {through: 'Saved'})


//setting up basic blog associations with user and artist
Blog.belongsTo(User)
User.hasMany(Blog)
Blog.belongsTo(Artist)
Artist.hasMany(Blog)

//setting up comment association with artists and blogs and interviews and Bricks
Comment.belongsTo(Blog)
Blog.hasMany(Comment)
Comment.belongsTo(Artist)
Artist.hasMany(Comment)
Comment.belongsTo(Interview)
Interview.hasMany(Comment)
Comment.belongsTo(BricksVolume)
BricksVolume.hasMany(Comment)
Comment.belongsTo(BricksChapter)
BricksChapter.hasMany(Comment)
//setting association between user and comment
Comment.belongsTo(User)
User.hasMany(Comment)

//setting association with interview and artist
Interview.belongsTo(Artist)
Artist.hasOne(Interview)

//setting associtation of bricks volume to bricks chapter
BricksChapter.belongsTo(BricksVolume)
BricksVolume.hasMany(BricksChapter)

//setting up new tables for likes and dislikes through associations between users and everytihng else
Comment.belongsToMany(User, {through: 'Like_Comment', as: 'Likes'})
Comment.belongsToMany(User, {through: 'Dislike_Comment', as: 'Dislikes'})

Blog.belongsToMany(User, {through: 'Like_Blog', as: 'BlogLikes'})
Blog.belongsToMany(User, {through: 'Dislike_Blog', as: 'BlogDislikes'})

Artist.belongsToMany(User, {through: 'Like_Artist', as: 'ArtistLikes'})
Artist.belongsToMany(User, {through: 'Dislike_Artist', as: 'ArtistDislikes'})

Interview.belongsToMany(User, {through: 'Like_Interview', as: 'InterviewLikes'})
Interview.belongsToMany(User, {through: 'Dislike_Interview', as: 'InterviewDislikes'})

OriginalContent.belongsToMany(User, {through: 'Like_OriginalContent', as: 'OriginalContentLikes'})
OriginalContent.belongsToMany(User, {through: 'Dislike_OriginalContent', as: 'OriginalContentDislikes'})

module.exports = {
  User,
  Artist,
  Blog,
  Comment,
  Interview,
  OriginalContent,
  BricksChapter,
  BricksVolume
}
