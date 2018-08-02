const router = require('express').Router()
const {Artist, Saved, User} = require('../db/models')
const asyncHandler = require('express-async-handler')
const { isAdmin, isLoggedIn } = require('../permissions')
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

router.get('/saved', isLoggedIn, asyncHandler(async (req, res, next) => {
  const savedArtists = await Saved.findAll({
    where: {
      id: req.id
    }
  })
  res.json(savedArtists)
}))

router.post('/saved', isLoggedIn, asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.id)
  const newArtist = await user.addArtist(req.artistId)
  res.status(201).json(newArtist)
}))

router.delete('/saved', isLoggedIn, asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.id)
  await user.removeArtist(req.artistId)
  res.status(204)
}))

