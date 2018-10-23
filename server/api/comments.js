const router = require('express').Router()
const {Comment, User} = require('../db/models')
const asyncHandler = require('express-async-handler')
const {isLoggedIn, isSelf} = require('../permissions')
module.exports = router

router.get('/blog/:id', asyncHandler(async (req, res, next) => {
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

// router.get('/comment/:id', asyncHandler(async (req, res, next) => {
//   const comment = await Comment.findAll({
//     where: {
//       id: req.params.id
//     },
//     include: [
//       {model: User},

//     ]
//   })
// }))

router.post('/', isLoggedIn, asyncHandler(async (req, res, next) => {
  const newComment = await Comment.create(req.body.comment)
  await newComment.setUser(req.body.user.id)
  await newComment.setBlog(req.body.blog.id)
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

