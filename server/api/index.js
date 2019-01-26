const router = require('express').Router()
module.exports = router

//traffic coming in through here will be routed to these routers below

router.use('/users', require('./users'))
router.use('/artists', require('./artists'))
router.use('/send', require('./email'))
router.use('/blog', require('./blog'))
router.use('/comment', require('./comments'))
router.use('/interview', require('./interview'))
router.use('/originalcontent', require('./originalcontent'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
