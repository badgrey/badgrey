const router = require('express').Router();
const { BricksChapters, ComicPage } = require('../db/models');
const asyncHandler = require('express-async-handler');
module.exports = router;

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    const chapters = await BricksChapters.findAll();
    res.json(chapters);
  })
);

router.get(
  '/pages/:id',
  asyncHandler(async (req, res, next) => {
    const pages = await ComicPage.findAll({
      where: {
        BricksChapterId: req.params.id
      }
    });
    res.json(pages);
  })
);

// router.get(
//   '/chapter/:name',
//   asyncHandler(async (req, res, next) => {
//     const chapter = await BricksChapters.findOne({
//       where: {
//         title: req.params.name
//       }
//     });
//     console.log()
//     res.json(chapter);
//   })
// );

// router.post('/volume', asyncHandler(async (req, res, next) => {
//   await BricksVolume.create({title: 'test volume', description: 'test', coverImage: 'test'})
//   // res.json(newVolume)
// }))

// router.post('/chapter', asyncHandler(async (req, res, next) => {
//   const newChapter = await BricksChapter.create({title: 'test volume', description: 'test', coverImage: 'test', pages: ['yerr']})
//   await newChapter.setBricksVolume(1)
//   // res.json(newChapter)
// }))
