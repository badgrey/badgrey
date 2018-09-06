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


