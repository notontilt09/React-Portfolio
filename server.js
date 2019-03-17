const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const nodemailer = require('nodemailer');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send('It lives')
});


server.post('/send', async (req, res) => {
    const { name, email, message } = req.body
    if (!name || !email || !message) {
        res.status(400).json({ message: 'Please provide your name, email, and a message' });
    } else {
        const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>
            </ul>
            <h3>Message</h3>
            <p>${message}</p>
        `
          // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 25,
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.GMAIL_USER, 
              pass: process.env.GMAIL_PW 
            },
            tls: {
                rejectUnauthorized: false
            }
          });
        
          // setup email data with unicode symbols
          let mailOptions = {
            from: '"Dan Weinman" <dan@weinman.dev>', // sender address
            to: "dan@weinman.dev", // list of receivers
            subject: "Web Dev Contact", // Subject line
            html: output // html body
          };
        
          // send mail with defined transport object
          await transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                  console.log(error);
                  res.status(500).json({ message: 'error sending email' })
              }
              res.status(200).json({ message: 'email sent!' });
          })
    }
})

module.exports = server;