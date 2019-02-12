const router = require('express').Router()
const AWS = require('aws-sdk')
module.exports = router

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

// create S3 instance
const s3 = new AWS.S3()

const bucket = process.env.ARTISTS_BUCKET

router.post('/', async (req, res) => {
  let params = {
    Bucket: bucket,
    Key: req.body.name
  }
  await s3.deleteObject(params, function (err, data) {
    if (data) {
        console.log('File deleted successfully' + res);
        return res.send('Great Job!')
    }
    else {
        console.log('Check if you have sufficient permissions : ' + err);
        return res.send(err)
    }
  });
})
