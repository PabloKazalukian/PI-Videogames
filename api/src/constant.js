// require('dotenv').config();
const { API_KEY } = process.env;


const BASE_URL = 'https://api.rawg.io/api/';
const VIDEOGAMES_URL = `${BASE_URL}games?key=${API_KEY}`;
const GENRES_URL = `${BASE_URL}genres?key=${API_KEY}`;



module.exports = {
    BASE_URL,
    VIDEOGAMES_URL,
    GENRES_URL
}