const axios = require('axios');
const { Router } = require('express');
const { Genre } = require('../db');
const {VIDEOGAMES_URL,BASE_URL,GENRES_URL} = require('../constant.js');
const { API_KEY } = process.env;



//routes videogames
async function get100Videogame (){
    let videogameApi, arr=[],url;
    videogameApi= await axios.get(VIDEOGAMES_URL);
    arr=[...arr,...videogameApi.data.results]
    //get 100 videogame, the api only gives 15 results
    for(let i=1;i<5;i++){
        url=videogameApi.data.next;        
        videogameApi= await axios.get(url);
        arr=[...arr,...videogameApi.data.results];
    }
    return arr
}

async function getSearchVideogame(name){
    console.log(API_KEY)
    let videogameApi= await axios.get(`${BASE_URL}games?search=${name}&&key=${API_KEY}`);
    let arr=[...videogameApi.data.results];
    //filter at 15
    arr=arr.slice(0,15);
    return arr;
}
//end router videogames

//router genres

async function getGenres(){
    let genresAPI= await axios.get(GENRES_URL)
    .then(e=>{
        let genres =e.data.results.map(async(genre)=>{

            await Genre.findOrCreate({
                where:{ id: genre.id,
                    name: genre.name.toLowerCase()}
            })
        })
    })
}

//end router genres


module.exports={
    get100Videogame,
    getSearchVideogame,
    getGenres
};