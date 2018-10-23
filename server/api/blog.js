const router = require('express').Router()
const {Blog} = require('../db/models')
const asyncHandler = require('express-async-handler')
const {isBlogger} = require('../permissions')
module.exports = router

router.get('/', asyncHandler(async (req, res, next) => {
  const blogs = await Blog.findAll()
  res.json(blogs)
}))

router.post('/', isBlogger, asyncHandler(async (req, res, next) => {
  const newBlog = await Blog.create(req.body)
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
