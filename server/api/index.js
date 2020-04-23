const router = require('express').Router();
module.exports = router;

//traffic coming in through here will be routed to these routers below

router.use('/users', require('./users'));
router.use('/artists', require('./artists'));
router.use('/send', require('./email'));
router.use('/contact', require('./contact'));
// router.use('/blog', require('./blog'));
router.use('/comment', require('./comments'));
// router.use('/originalcontent', require('./originalcontent'));
// router.use('/uploadBlogPicture', require('./uploadBlogPicture'));
router.use('/uploadArtistPicture', require('./uploadArtistPicture'));
router.use('/deleteArtistPicture', require('./deleteArtistPicture'));
// router.use('/deleteBlogPicture', require('./deleteBlogPicture'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
