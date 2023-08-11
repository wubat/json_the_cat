const request = require('request');

function fetchBreedDescription(catBreed, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const bodyObj = JSON.parse(body);
      
      if (bodyObj[0] === undefined) {
        callback(null, "NOT FOUND SORRY");
      } else {
        callback(null, bodyObj[0].description);
      }
    }
  });
};



module.exports = { fetchBreedDescription };


