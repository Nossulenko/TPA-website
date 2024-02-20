const { createClient } = require("@sanity/client");

const sanityClient = createClient({
  projectId: "xh1730zu", // you can find this in sanity.json
  dataset: "production", // or the name you chose in sanity.json
  apiVersion: '2024-02-20',
  oken: process.env.SANITY_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
});

module.exports = sanityClient;
