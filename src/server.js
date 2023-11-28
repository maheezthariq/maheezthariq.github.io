const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

app.post('/send', async (req, res) => {
  let { subject, email, text } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mediamahee@gmail.com',
      pass: 'Heemaz7786'
    }
  });

  let mailOptions = {
    from: 'mediamahee@gmail.com',
    to: email,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return res.json({ status: 'fail' });
    } else {
      return res.json({ status: 'success' });
    }
  });
});

app.listen(5000, () => console.log('Server is running on port 5000'));