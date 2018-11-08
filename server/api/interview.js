const router = require('express').Router()
const {Artist, Interview} = require('../db/models')
const asyncHandler = require('express-async-handler')
const { isAdmin } = require('../permissions')
module.exports = router

router.get('/', asyncHandler(async (req, res, next) => {
  const interviews = await Interview.findAll({
    include: [
      {model: Artist},
    ]
  })
  res.json(interviews)
}))

router.post('/admin', isAdmin, asyncHandler(async (req, res, next) => {
  const newInterview = await Interview.create(req.body)
  res.status(201).json(newInterview)
}))

router.delete('/admin/:id', isAdmin, asyncHandler(async (req, res, next) => {
  const interview = await Interview.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204)
  res.json(interview)
}))
