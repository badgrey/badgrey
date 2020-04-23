const User = require('./user');
const Artist = require('./artist');
// const Blog = require('./blog');
const Comment = require('./comment');
// const OriginalContent = require('./originalcontent');
// const BricksChapters = require('./bricksChapter');
// const ComicPage = require('./comicPage');

//Setting model associations here and exporting them

//setting up saved artist associations
User.belongsToMany(Artist, { through: 'Saved' });
Artist.belongsToMany(User, { through: 'Saved' });

//setting up basic blog associations with user and artist
// Blog.belongsTo(User);
// User.hasMany(Blog);
// Blog.belongsTo(Artist);
// Artist.hasMany(Blog);

//setting up comment association with artists and blogs and Bricks
// Comment.belongsTo(Blog);
// Blog.hasMany(Comment);
Comment.belongsTo(Artist);
Artist.hasMany(Comment);
// Comment.belongsTo(BricksChapters);
// BricksChapters.hasMany(Comment);
//setting association between user and comment
Comment.belongsTo(User);
User.hasMany(Comment);

//setting associtation of bricks volume to bricks chapter
// ComicPage.belongsTo(BricksChapters);
// BricksChapters.hasMany(ComicPage);

//setting up new tables for likes and dislikes through associations between users and everytihng else
Comment.belongsToMany(User, { through: 'Like_Comment', as: 'Likes' });
Comment.belongsToMany(User, { through: 'Dislike_Comment', as: 'Dislikes' });

// Blog.belongsToMany(User, { through: 'Like_Blog', as: 'BlogLikes' });
// Blog.belongsToMany(User, { through: 'Dislike_Blog', as: 'BlogDislikes' });

Artist.belongsToMany(User, { through: 'Like_Artist', as: 'ArtistLikes' });
Artist.belongsToMany(User, { through: 'Dislike_Artist', as: 'ArtistDislikes' });

// OriginalContent.belongsToMany(User, {
//   through: 'Like_OriginalContent',
//   as: 'OriginalContentLikes'
// });
// OriginalContent.belongsToMany(User, {
//   through: 'Dislike_OriginalContent',
//   as: 'OriginalContentDislikes'
// });

module.exports = {
  User,
  Artist,
  // Blog,
  Comment
  // OriginalContent,
  // BricksChapters,
  // ComicPage
};
