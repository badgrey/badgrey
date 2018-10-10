const router = require('express').Router()
const {Comment} = require('../db/models')
const asyncHandler = require('express-async-handler')
const {isLoggedIn, isSelf} = require('../permissions')
module.exports = router

router.get('/', asyncHandler(async (req, res, next) => {
  const comments = await Comment.findAll()
  res.json(comments)
}))

router.post('/', isLoggedIn, asyncHandler(async (req, res, next) => {
  const newComment = await Comment.create(req.body)
  res.status(201).json(newComment)
}))

router.put('/edit/:id', isSelf, asyncHandler(async (req, res, next) => {
  const comment = await Comment.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
  res.json(comment[1][0])
}))

router.delete('/delete/:id', isSelf, asyncHandler(async (req, res, next) => {
  const comment = await Comment.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204)
  res.json(comment)
}))
