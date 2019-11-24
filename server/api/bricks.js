const router = require('express').Router()
const {BricksVolume, BricksChapter} = require('../db/models')
const asyncHandler = require('express-async-handler')
module.exports = router

router.get('/', asyncHandler(async (req, res, next) => {
  const volumes = await BricksVolume.findAll()
  res.json(volumes)
}))

router.get('/volume/:id', asyncHandler(async (req, res, next) => {
  console.log('MADE IT')
  const volume = await BricksVolume.findById(req.params.id, {
    include: [
      {model: BricksChapter},
    ]})
    console.log(volume)
  res.json(volume)
}))


router.get('/chapter/:name', asyncHandler(async (req, res, next) => {
  const chapter = await BricksChapter.findOne({
    where: {
      title: req.params.name
    }
  })
  res.json(chapter)
}))

// router.post('/volume', asyncHandler(async (req, res, next) => {
//   await BricksVolume.create({title: 'test volume', description: 'test', coverImage: 'test'})
//   // res.json(newVolume)
// }))

// router.post('/chapter', asyncHandler(async (req, res, next) => {
//   const newChapter = await BricksChapter.create({title: 'test volume', description: 'test', coverImage: 'test', pages: ['yerr']})
//   await newChapter.setBricksVolume(1)
//   // res.json(newChapter)
// }))
