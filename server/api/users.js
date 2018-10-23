const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'username', 'email', 'isAdmin', 'isBlogger', 'isEmployee']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/username', (req, res, next) => {
  User.findAll({
    attributes: ['id', 'username']
  })
  .then(usernames => res.json(usernames))
  .catch(next)
})

router.get('/username/:username', (req, res, next) => {
  User.findAll({
    where: {
      username: req.params.username
    }
  })
  .then(user => res.json(user))
  .catch(next)
})

router.get('/email/:email', (req, res, next) => {
  User.findAll({
    where: {
      email: req.params.email
    }
  })
  .then(user => res.json(user))
  .catch(next)
})

router.delete('/delete/:id', (async (req, res, next) => {
  const user = await User.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204)
  res.json(user)
}))

router.put('/:id', async (req, res, next) => {
  const response = await User.update(req.body, {
    where: { id: req.params.id },
    returning: true,

  });
  res.json(response)
})

