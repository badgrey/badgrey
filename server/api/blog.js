const router = require('express').Router()
const {Blog, User} = require('../db/models')
const asyncHandler = require('express-async-handler')
const {isBlogger, isLoggedIn} = require('../permissions')
module.exports = router

router.get('/', asyncHandler(async (req, res, next) => {
  const blogs = await Blog.findAll({
    include: [
      {model: User},
      {model: User, as: 'BlogLikes'},
      {model: User, as: 'BlogDislikes'}
    ]
  })
  res.json(blogs)
}))

router.post('/', isBlogger, asyncHandler(async (req, res, next) => {
  const newBlog = await Blog.create(req.body.blogInfo)
  await newBlog.setUser(req.body.user)
  await newBlog.setArtist(req.body.artist)
  res.status(201).json(newBlog)
}))

router.put('/edit/:id', isBlogger, asyncHandler(async (req, res, next) => {
  const blog = await Blog.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
  res.json(blog[1][0])
}))

router.delete('/delete/:id', isBlogger, asyncHandler(async (req, res, next) => {
  const blog = await Blog.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204)
  res.json(blog)
}))

router.get('/:id', asyncHandler(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id)
  res.json(blog)
}))


router.post('/like', isLoggedIn, asyncHandler(async (req, res, next) => {
  const likedBlog = await Blog.findAll({
    where: {
      id: req.body.blog.id
    }
  })
  await likedBlog[0].addBlogLikes(req.body.user.id)
  const blog = await Blog.findAll({
    where: {
      id: req.body.blog.id
    },
    include: [
      {model: User},
      {model: User, as: 'BlogLikes'},
      {model: User, as: 'BlogDislikes'}
    ]
  })
  res.status(200).json(blog)
}))

router.post('/dislike', isLoggedIn, asyncHandler(async (req, res, next) => {
  const dislikedBlog = await Blog.findAll({
    where: {
      id: req.body.blog.id
    }
  })
  await dislikedBlog[0].addBlogDislikes(req.body.user.id)
  const blog = await Blog.findAll({
    where: {
      id: req.body.blog.id
    },
    include: [
      {model: User},
      {model: User, as: 'BlogLikes'},
      {model: User, as: 'BlogDislikes'}
    ]
  })
  res.status(200).json(blog)
}))
