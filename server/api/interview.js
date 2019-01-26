const router = require('express').Router()
const {Artist, Interview, User} = require('../db/models')
const asyncHandler = require('express-async-handler')
const { isAdmin, isLoggedIn} = require('../permissions')
module.exports = router


//gets all interviews and includes artist and user likes/dislikes
router.get('/', asyncHandler(async (req, res, next) => {
  const interviews = await Interview.findAll({
    include: [
      {model: Artist},
      {model: User, as: 'InterviewLikes'},
      {model: User, as: 'InterviewDislikes'}
    ]
  })
  res.json(interviews)
}))

//creates interview, must be admin. returns interview with artist and user likes/dislikes
router.post('/admin', isAdmin, asyncHandler(async (req, res, next) => {
  const newInterview = await Interview.create(req.body.interview)
  await newInterview.setArtist(req.body.artist)
  const interview = await Interview.findAll({
    where: {
      id: newInterview.id
    },
    include: [
      {model: Artist},
      {model: User, as: 'InterviewLikes'},
      {model: User, as: 'InterviewDislikes'}
    ]
  })
  res.status(201).json(interview[0])
}))

//deletes interview must be admin
router.delete('/admin/:id', isAdmin, asyncHandler(async (req, res, next) => {
  const interview = await Interview.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204)
  res.json(interview)
}))

//likes interview and returns interview with likes and dislikes
router.post('/like', isLoggedIn, asyncHandler(async (req, res, next) => {
  const likedInterview = await Interview.findAll({
    where: {
      id: req.body.interview.id
    }
  })
  await likedInterview[0].addInterviewLikes(req.body.user.id)
  const interview = await Interview.findAll({
    where: {
      id: req.body.interview.id
    },
    include: [
      {model: Artist},
      {model: User, as: 'InterviewLikes'},
      {model: User, as: 'InterviewDislikes'}
    ]
  })
  res.status(200).json(interview)
}))

//dislikes interview and returns interview with likes and dislikes
router.post('/dislike', isLoggedIn, asyncHandler(async (req, res, next) => {
  const dislikedInterview = await Interview.findAll({
    where: {
      id: req.body.interview.id
    }
  })
  await dislikedInterview[0].addInterviewDislikes(req.body.user.id)
  const interview = await Interview.findAll({
    where: {
      id: req.body.interview.id
    },
    include: [
      {model: Artist},
      {model: User, as: 'InterviewLikes'},
      {model: User, as: 'InterviewDislikes'}
    ]
  })
  res.status(200).json(interview)
}))
