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

router.post('/volume', asyncHandler(async (req, res, next) => {
  console.log('in backend')
  await BricksVolume.create({title: 'test volume', description: 'test', coverImage: 'test'})
  // res.json(newVolume)
}))

router.post('/chapter', asyncHandler(async (req, res, next) => {
  const newChapter = await BricksChapter.create({title: 'test volume', description: 'test', coverImage: 'test', pages: ['yerr']})
  await newChapter.setBricksVolume(1)
  // res.json(newChapter)
}))
