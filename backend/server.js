const cron = require("node-cron");
const searchJobs = require("./searchJobs");
const sendEmail = require("./sendEmails");

// Runs every day at 1:00 PM IST
cron.schedule("0 13 * * *", async () => {
  console.log("Searching jobs...");
  const jobs = await searchJobs();
  await sendEmail(jobs);
  console.log("Email sent successfully");
}, {
  timezone: "Asia/Kolkata"
});

console.log("Job search bot is running...");