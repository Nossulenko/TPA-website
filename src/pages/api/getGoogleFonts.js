// tpa-website/src/pages/api/getGoogleFonts.js

import Cors from 'cors'
import fetch from "node-fetch";


// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function getGoogleFonts(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors)
  const apiKey = "AIzaSyCqFD2uZdnq_qqz7McxoyfrbmrsMD5ESXc";
  const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`);
  const data = await response.json();
  console.log("font data received", data);

  res.status(200).json(data.items);
}
