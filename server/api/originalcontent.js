const router = require('express').Router()
const {OriginalContent, User} = require('../db/models')
const asyncHandler = require('express-async-handler')
const { isAdmin, isLoggedIn} = require('../permissions')
module.exports = router

router.get('/', asyncHandler(async (req, res, next) => {
  const originalContent = await OriginalContent.findAll({
    include: [
      {model: User},
      {model: User, as: 'OriginalContentLikes'},
      {model: User, as: 'OriginalContentDislikes'}
    ]
  })
  res.json(originalContent)
}))

router.post('/admin', isAdmin, asyncHandler(async (req, res, next) => {
  const newOriginalContent = await OriginalContent.create(req.body)
  res.status(201).json(newOriginalContent)
}))

router.post('/like', isLoggedIn, asyncHandler(async (req, res, next) => {
  const likedOriginalContent = await OriginalContent.findAll({
    where: {
      id: req.body.oc.id
    }
  })
  await likedOriginalContent[0].addOriginalContentLikes(req.body.user.id)
  const oc = await OriginalContent.findAll({
    where: {
      id: req.body.oc.id
    },
    include: [
      {model: User},
      {model: User, as: 'OriginalContentLikes'},
      {model: User, as: 'OriginalContentDislikes'}
    ]
  })
  res.status(200).json(oc)
}))

router.post('/dislike', isLoggedIn, asyncHandler(async (req, res, next) => {
  const dislikedOriginalContent = await OriginalContent.findAll({
    where: {
      id: req.body.oc.id
    }
  })
  await dislikedOriginalContent[0].addOriginalContentDislikes(req.body.user.id)
  const oc = await OriginalContent.findAll({
    where: {
      id: req.body.oc.id
    },
    include: [
      {model: User},
      {model: User, as: 'OriginalContentLikes'},
      {model: User, as: 'OriginalContentDislikes'}
    ]
  })
  res.status(200).json(oc)
}))
