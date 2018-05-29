const router = require('express').Router()
const {Artist} = require('../db/models')
const asyncHandler = require('express-async-handler')
const { isAdmin } = require('../permissions')
module.exports = router

router.get('/', asyncHandler(async (req, res, next) => {
  const artists = await Artist.findAll()
  res.json(artists)
}))

router.get('/:id', asyncHandler(async (req, res, next) => {
  const artist = await Artist.findById(req.params.id)
  res.json(artist)
}))

router.post('/admin', isAdmin, asyncHandler(async (req, res, next) => {
  console.log('YOOOOOO WHAT ARE WE HERE WHAT IS THIS SHIT???!!!!', req)
  const newArtist = await Artist.create(req.body)
  res.status(201).json(newArtist)
}))

router.put('/admin/:id', isAdmin, asyncHandler(async (req, res, next) => {
  const artist = await Artist.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
  res.json(artist[1][0])
}))

router.delete('/admin/:id', isAdmin, asyncHandler(async (req, res, next) => {
  await Artist.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204)
}))

