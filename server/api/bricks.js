const router = require('express').Router()
const {BricksVolume, BricksChapter} = require('../db/models')
const asyncHandler = require('express-async-handler')
module.exports = router

router.get('/', asyncHandler(async (req, res, next) => {
  const artists = await BricksVolume.findAll()
  res.json(artists)
}))

router.get('/:chapter', asyncHandler(async (req, res, next) => {
  const artists = await BricksChapter.findAll({
    where: {
      name: req.params.chapter
    }})
  res.json(artists)
}))
