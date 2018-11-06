const router = require('express').Router()
const {Artist, User} = require('../db/models')
const asyncHandler = require('express-async-handler')
const { isAdmin, isLoggedIn } = require('../permissions')
module.exports = router

router.get('/', asyncHandler(async (req, res, next) => {
  const artists = await Artist.findAll({
    include: [
      {model: User},
      {model: User, as: 'ArtistLikes'},
      {model: User, as: 'ArtistDislikes'}
    ]
  })
  res.json(artists)
}))

router.get('/saved', isLoggedIn, asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  const savedArtists = await user.getArtists()
  res.json(savedArtists)
}))

router.post('/saved/add/:id', isLoggedIn, asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  const artist = await Artist.findById(req.params.id)
  await user.addArtist(artist)
  res.status(201).json(artist)
}))

router.delete('/saved/:id', isLoggedIn, asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  const artist = await Artist.findById(req.params.id)
  await user.removeArtist(artist)
  res.status(204)
  res.json(artist)
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
  const artist = await Artist.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204)
  res.json(artist)
}))


router.post('/like', isLoggedIn, asyncHandler(async (req, res, next) => {
  const likedArtist = await Artist.findAll({
    where: {
      id: req.body.artist.id
    }
  })
  await likedArtist[0].addArtistLikes(req.body.user.id)
  const artist = await Artist.findAll({
    where: {
      id: req.body.artist.id
    },
    include: [
      {model: User},
      {model: User, as: 'ArtistLikes'},
      {model: User, as: 'ArtistDislikes'}
    ]
  })
  res.status(200).json(artist)
}))

router.post('/dislike', isLoggedIn, asyncHandler(async (req, res, next) => {
  const dislikedArtist = await Artist.findAll({
    where: {
      id: req.body.artist.id
    }
  })
  await dislikedArtist[0].addArtistDislikes(req.body.user.id)
  const artist = await Artist.findAll({
    where: {
      id: req.body.artist.id
    },
    include: [
      {model: User},
      {model: User, as: 'ArtistLikes'},
      {model: User, as: 'ArtistDislikes'}
    ]
  })
  res.status(200).json(artist)
}))
