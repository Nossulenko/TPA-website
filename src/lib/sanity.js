const { createClient } = require("@sanity/client");

const sanityClient = createClient({
  projectId: "xh1730zu", // you can find this in sanity.json
  dataset: "production", // or the name you chose in sanity.json
  useCdn: false, // `false` if you want to ensure fresh data
});

module.exports = sanityClient;
