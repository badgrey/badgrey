const router = require('express').Router()
const {Comment, User} = require('../db/models')
const asyncHandler = require('express-async-handler')
const {isLoggedIn} = require('../permissions')
module.exports = router

//gets all comments for a specific blog
router.get('/blog/:id', asyncHandler(async (req, res, next) => {
  console.log('HERE', req.params)
  const comments = await Comment.findAll({
    where: {
      blogId: req.params.id
    },
    include: [
      {model: User},
      {model: User, as: 'Likes'},
      {model: User, as: 'Dislikes'},
    ]
  })
  res.json(comments)
}))

//gets all comments for a specific artist
router.get('/artist/:id', asyncHandler(async (req, res, next) => {
  const comments = await Comment.findAll({
    where: {
      artistId: req.params.id
    },
    include: [
      {model: User},
      {model: User, as: 'Likes'},
      {model: User, as: 'Dislikes'},
    ]
  })
  res.json(comments)
}))

//gets all comments for a specific interview
router.get('/interview/:id', asyncHandler(async (req, res, next) => {
  const comments = await Comment.findAll({
    where: {
      interviewId: req.params.id
    },
    include: [
      {model: User},
      {model: User, as: 'Likes'},
      {model: User, as: 'Dislikes'},
    ]
  })
  res.json(comments)
}))

//posts new comment. must be logged in. checks to see if for blog or artist, returns comment with user likes/dislikes
router.post('/', isLoggedIn, asyncHandler(async (req, res, next) => {
  const newComment = await Comment.create(req.body.comment)
  await newComment.setUser(req.body.user.id)
  if (req.body.blog) {
    await newComment.setBlog(req.body.blog.id)
  }
  if (req.body.artist) {
    await newComment.setArtist(req.body.artist.id)
  }
  const comment = await Comment.findAll({
    where: {
      id: newComment.id
    },
    include: [
      {model: User},
      {model: User, as: 'Likes'},
      {model: User, as: 'Dislikes'}
    ]
  })
  res.status(201).json(comment)
}))

//likes comment and returns comment with user likes/dislikes
router.post('/like', isLoggedIn, asyncHandler(async (req, res, next) => {
  const likedComment = await Comment.findAll({
    where: {
      id: req.body.comment.id
    }
  })
  await likedComment[0].addLikes(req.body.user.id)
  const comment = await Comment.findAll({
    where: {
      id: req.body.comment.id
    },
    include: [
      {model: User},
      {model: User, as: 'Likes'},
      {model: User, as: 'Dislikes'}
    ]
  })
  res.status(200).json(comment)
}))

//dislikes comment and returns comment with user likes and dislikes
router.post('/dislike', isLoggedIn, asyncHandler(async (req, res, next) => {
  const dislikedComment = await Comment.findAll({
    where: {
      id: req.body.comment.id
    }
  })
  await dislikedComment[0].addDislikes(req.body.user.id)
  const comment = await Comment.findAll({
    where: {
      id: req.body.comment.id
    },
    include: [
      {model: User},
      {model: User, as: 'Likes'},
      {model: User, as: 'Dislikes'}
    ]
  })
  res.status(200).json(comment)
}))

//deletes comment
router.delete('/delete/:id', isLoggedIn, asyncHandler(async (req, res, next) => {
  const comment = await Comment.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204)
  res.json(comment)
}))

