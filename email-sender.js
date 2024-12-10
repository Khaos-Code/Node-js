
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-email-password' // Replace with your email password
  }
});

// Define email options
const mailOptions = {
  from: 'your-email@gmail.com', // Sender address
  to: 'your-email@gmail.com',   // Receiver address (use your email here)
  subject: 'Test Email from Node.js', // Subject line
  text: 'Hello, this is a test email sent using Node.js and Nodemailer!' // Email body
};

// Sends the email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('Error occurred:', err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
