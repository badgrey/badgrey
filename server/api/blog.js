const router = require('express').Router()
const {Blog, User, Artist} = require('../db/models')
const asyncHandler = require('express-async-handler')
const {isBlogger, isLoggedIn} = require('../permissions')
module.exports = router

//gets blogs, includes associated artist and user likes/dislikes
router.get('/', asyncHandler(async (req, res, next) => {
  const blogs = await Blog.findAll({
    include: [
      {model: Artist},
      {model: User},
      {model: User, as: 'BlogLikes'},
      {model: User, as: 'BlogDislikes'}
    ]
  })
  res.json(blogs)
}))

//creates blog, returns blog with associated artist and user likes/dislikes. must be blogger
router.post('/', isBlogger, asyncHandler(async (req, res, next) => {
  const newBlog = await Blog.create(req.body.blogInfo)
  await newBlog.setUser(req.body.user)
  await newBlog.setArtist(req.body.artist)
  const blog = await Blog.findAll({
    where: {
      id: newBlog.id
    },
    include: [
      {model: Artist},
      {model: User},
      {model: User, as: 'BlogLikes'},
      {model: User, as: 'BlogDislikes'}
    ]
  })
  res.status(201).json(blog[0])
}))

//edits specific blog and returns blog with associated artist and user likes/dislikes. must be blogger
router.put('/edit/:id', isBlogger, asyncHandler(async (req, res, next) => {
  const editedblog = await Blog.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
  const blog = await Blog.findAll({
    where: {
      id: editedblog.id
    },
    include: [
      {model: Artist},
      {model: User},
      {model: User, as: 'BlogLikes'},
      {model: User, as: 'BlogDislikes'}
    ]
  })
  res.json(blog[0])
}))

//deletes blog. must be blogger
router.delete('/delete/:id', isBlogger, asyncHandler(async (req, res, next) => {
  const blog = await Blog.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204)
  res.json(blog)
}))

//gets specific blog, not sure if in use.
router.get('/:id', asyncHandler(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id)
  res.json(blog)
}))

//likes blog, returns blog with artist and user likes/dislikes
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
      {model: Artist},
      {model: User},
      {model: User, as: 'BlogLikes'},
      {model: User, as: 'BlogDislikes'}
    ]
  })
  res.status(200).json(blog)
}))

//dislikes blog, returns blog with artist and user likes/dislikes
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
      {model: Artist},
      {model: User},
      {model: User, as: 'BlogLikes'},
      {model: User, as: 'BlogDislikes'}
    ]
  })
  res.status(200).json(blog)
}))
