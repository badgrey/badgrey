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
        name: req.body.email,
        intro: 'Thank you signing up with Bad Grey',
        action: {
            instructions: `Please Enter The Following Code to Complete Your Sign Up with Us: ${req.body.rand}`,
            button: {
                color: '#ff0000', // Optional action button color
                text: req.body.rand,
            }
        }
    }
  };

  const emailBody = mailGenerator.generate(createdOrderEmail);

  const mailOptions = {
    from: 'Bad Grey',
    to: req.body.email,
    subject: 'Welcome to Bad Grey - Underground Everywhere',
    text: `Please Enter The Following Code to Complete Your Sign Up with Us: ${req.body.rand}`,
    html: emailBody
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASS,
    }
  });

  transporter.sendMail(mailOptions, function(err, response) {
    if (err) {
      console.log(err)
    } else {
      console.log('Success!', { success: response });
      res.status(201).send('Success')
    }
  })

})
