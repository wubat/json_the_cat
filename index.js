const breedFetcher = require('./breedFetcher');
const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.slice(2);
const catBreed = args[0];

fetchBreedDescription(catBreed, (error, desc) => {
  if (error) {
    console.log("error in fetching details: ", error);
  } else {
    console.log(desc);
  }
});

