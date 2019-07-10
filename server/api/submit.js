const router = require('express').Router()
const nodemailer = require('nodemailer')
const Mailgen = require('mailgen');
module.exports = router

//file sets up automated email for when signing up

//creates mailgen and email with random number sent back through front end and sendsmail from specified email address
router.post('/', (req, res, next) => {
  const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'Bad Grey',
      link: 'https://www.badgrey.com/',
    }
  });

  const createdOrderEmail = {
    body: {
      name: 'Cole',
      intro: `${req.body.name} // ${req.body.city} // ${req.body.soundcloud} // ${req.body.youtube}`
    }
  };

  const emailBody = mailGenerator.generate(createdOrderEmail);

  const mailOptions = {
    from: 'Bad Grey',
    to: process.env.COMPANYEMAIL,
    subject: 'New Artist Alert',
    text: `New Artist Alert`,
    html: emailBody
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASS,
    }
  });

  transporter.sendMail(mailOptions, function(err, response) {
    if (err) {
      console.error(err)
    } else {
      console.log('Success!', { success: response });
      res.status(201).send('Success')
    }
  })

})
