const fetch = require('node-fetch');

const getNowPlaying = (req, res) => {
  // logic to fetch NowPlaying movies from the database
const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTRhOWM3Y2NlOWYwZjlmMDJkZDIwOWY4MmNmZGNjYSIsInN1YiI6IjY1MTU3ZjM5MWRiNjVkMDBhZGM2NWZkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.35Nmmn89cWC7iswaZ7CsACeP4VsE3RU5vx8A7Moa1O0'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
  // Send the response
};

module.exports = {
  getNowPlaying,
};
