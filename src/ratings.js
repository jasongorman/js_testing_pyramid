function ratings(imdbId){
    const request = require("sync-request");

    const response = request('GET', 'http://www.omdbapi.com/?i=' + imdbId + '&apikey=6487ec62');
    const body = response.getBody();

   return JSON.parse(body).Ratings;
}

module.exports = ratings;