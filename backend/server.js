const dotenv = require("dotenv");
dotenv.config();

const searchJobs = require("./searchJobs");
const sendEmail = require("./sendEmails");

(async () => {

  try {
    console.log("Searching jobs...");
    const jobs = await searchJobs();
    await sendEmail(jobs);
    console.log("Email sent successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
})();
