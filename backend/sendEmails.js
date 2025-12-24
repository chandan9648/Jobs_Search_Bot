const nodemailer = require("nodemailer");

async function sendEmail(content) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD, 
    }
  });

  //for mail
  await transporter.sendMail({
    from: "Job Alert Bot",
    to: "chandankkumar156@gmail.com",
    subject: "Daily MERN / Full Stack Job Alerts",
    text: content
  });
}

module.exports = sendEmail;
