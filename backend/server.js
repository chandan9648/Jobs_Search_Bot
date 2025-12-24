const dotenv = require("dotenv");
dotenv.config();
const cron = require("node-cron");
const searchJobs = require("./searchJobs");
const sendEmail = require("./sendEmails");
const express = require("express");
const app = express();



// Runs every day at 1:00 PM IST
cron.schedule("0 13 * * *", async () => {
  console.log("Searching jobs...");
  const jobs = await searchJobs();
  await sendEmail(jobs);
  console.log("Email sent successfully");
}, {
  timezone: "Asia/Kolkata"
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
