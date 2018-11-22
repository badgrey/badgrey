const router = require('express').Router()
const {OriginalContent} = require('../db/models')
const asyncHandler = require('express-async-handler')
const { isAdmin} = require('../permissions')
module.exports = router

router.get('/', asyncHandler(async (req, res, next) => {
  const originalContent = await OriginalContent.findAll()
  res.json(originalContent)
}))

router.post('/admin', isAdmin, asyncHandler(async (req, res, next) => {
  const newOriginalContent = await OriginalContent.create(req.body)
  res.status(201).json(newOriginalContent)
}))
