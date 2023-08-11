const request = require('request');

const args = process.argv.slice(2);
const catBreed = "siberian";

const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`;

request(apiUrl, (error, response, body) => {
  const bodyObj = JSON.parse(body);

  if (error) {
    console.log("error: ", error);
  } else if(bodyObj[0] === undefined) {
    console.log( "NOT FOUND SORRY");
  } else  {
    console.log(bodyObj[0].description);
  }
});