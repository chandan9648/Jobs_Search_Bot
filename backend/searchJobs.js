const axios = require("axios");

async function searchJobs() {
  const queries = [
    "Entry level MERN Stack Developer jobs India startup",
    "Junior Full Stack Developer jobs startup India",
    "React Node MongoDB fresher jobs startup"
  ];

  let results = [];

  for (let q of queries) {
    results.push(`🔎 ${q}
  https://www.google.com/search?q=${encodeURIComponent(q)}\n`);
  }

  return results.join("\n");
}

module.exports = searchJobs;
