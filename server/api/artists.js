const router = require('express').Router();
const { Artist, User, Blog } = require('../db/models');
const asyncHandler = require('express-async-handler');
const { isAdmin, isLoggedIn } = require('../permissions');
const { Op } = require('sequelize');
module.exports = router;

//get artists including user associated with them
router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    const artists = await Artist.findAndCountAll({
      where: {
        name: {
          [Op.iLike]: `%${req.query.search}%`
        }
      },
      include: [
        { model: User },
        { model: User, as: 'ArtistLikes' },
        { model: User, as: 'ArtistDislikes' },
        { model: Blog }
      ],
      order: ['name'],
      offset: (req.query.page - 1) * 50,
      limit: 50
    });
    res.json(artists);
  })
);

//get state artists
router.get(
  '/state/:state',
  asyncHandler(async (req, res, next) => {
    const artists = await Artist.findAndCountAll({
      where: {
        stateAbbrev: req.params.state,
        name: {
          [Op.iLike]: `%${req.query.search}%`
        }
      },
      include: [
        { model: User },
        { model: User, as: 'ArtistLikes' },
        { model: User, as: 'ArtistDislikes' },
        { model: Blog }
      ],
      order: ['name'],
      offset: (req.query.page - 1) * 50,
      limit: 50
    });
    res.json(artists);
  })
);

//get genre artists
router.get(
  '/genre/:genre',
  asyncHandler(async (req, res, next) => {
    const artists = await Artist.findAndCountAll({
      where: {
        genre: req.params.genre,
        name: {
          [Op.iLike]: `%${req.query.search}%`
        }
      },
      include: [
        { model: User },
        { model: User, as: 'ArtistLikes' },
        { model: User, as: 'ArtistDislikes' },
        { model: Blog }
      ],
      order: ['name'],
      offset: (req.query.page - 1) * 50,
      limit: 50
    });
    res.json(artists);
  })
);

//gets saved artists
router.get(
  '/saved',
  isLoggedIn,
  asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    const savedArtists = await user.getArtists();
    res.json(savedArtists);
  })
);

//add a saved artist
router.post(
  '/saved/add/:id',
  isLoggedIn,
  asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    const artist = await Artist.findById(req.params.id);
    await user.addArtist(artist);
    res.status(201).json(artist);
  })
);

//remove a saved artist
router.delete(
  '/saved/:id',
  isLoggedIn,
  asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    const artist = await Artist.findById(req.params.id);
    await user.removeArtist(artist);
    res.status(204);
    res.json(artist);
  })
);

//get a specific artist. not sure if in use
router.get(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const artist = await Artist.findById(req.params.id);
    res.json(artist);
  })
);

//create new artist, must be admin. returns artist with user and likes/dislikes
router.post(
  '/admin',
  isAdmin,
  asyncHandler(async (req, res, next) => {
    const newArtist = await Artist.create(req.body);
    const artist = await Artist.findAll({
      where: {
        id: newArtist.id
      },
      include: [
        { model: User },
        { model: User, as: 'ArtistLikes' },
        { model: User, as: 'ArtistDislikes' }
      ]
    });
    res.status(201).json(artist[0]);
  })
);

//edit artist, must be admin. returns artist with user as likes and dislikes
router.put(
  '/admin/:id',
  isAdmin,
  asyncHandler(async (req, res, next) => {
    const editedartist = await Artist.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    });
    const artist = await Artist.findAll({
      where: {
        id: editedartist.id
      },
      include: [
        { model: User },
        { model: User, as: 'ArtistLikes' },
        { model: User, as: 'ArtistDislikes' }
      ]
    });
    res.json(artist[0]);
  })
);

//delete artist. must be admin
router.delete(
  '/admin/:id',
  isAdmin,
  asyncHandler(async (req, res, next) => {
    const artist = await Artist.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(204);
    res.json(artist);
  })
);

//likes artist, returns the entire artist with user likes/dislikes
router.post(
  '/like',
  isLoggedIn,
  asyncHandler(async (req, res, next) => {
    const likedArtist = await Artist.findAll({
      where: {
        id: req.body.artist.id
      }
    });
    await likedArtist[0].addArtistLikes(req.body.user.id);
    const artist = await Artist.findAll({
      where: {
        id: req.body.artist.id
      },
      include: [
        { model: User },
        { model: User, as: 'ArtistLikes' },
        { model: User, as: 'ArtistDislikes' }
      ]
    });
    res.status(200).json(artist);
  })
);

//dislikes artist, returns the entire artist with user likes/dislikes
router.post(
  '/dislike',
  isLoggedIn,
  asyncHandler(async (req, res, next) => {
    const dislikedArtist = await Artist.findAll({
      where: {
        id: req.body.artist.id
      }
    });
    await dislikedArtist[0].addArtistDislikes(req.body.user.id);
    const artist = await Artist.findAll({
      where: {
        id: req.body.artist.id
      },
      include: [
        { model: User },
        { model: User, as: 'ArtistLikes' },
        { model: User, as: 'ArtistDislikes' }
      ]
    });
    res.status(200).json(artist);
  })
);
