const { Router } = require('express');
const {Op}=require('sequelize');
const axios = require('axios');
const { Videogame,Genre } = require('../db');
const { API_KEY } = process.env;
const {BASE_URL} = require('../constant.js');
// const controllers = require('../controllers')

const router = Router();
const {get100Videogame} = require('../controllers');
const {getSearchVideogame} = require('../controllers');


router.get('/',async(req,res,next)=>{
    const name = req.query.name;
    let videogameApi,videogameDb;
    try{

        if(name){
            videogameApi = await getSearchVideogame(name);
            videogameDb= await Videogame.findAll({include: Genre })

        }else{
            videogameDb= await Videogame.findAll({include: Genre })
            videogameApi = await get100Videogame();
        }
        Promise.all([videogameApi,videogameDb])
        .then(response =>{
            const [videoAPI,videoDB] = response;//destructuring of the promise
            //data filtering
            let videogameFilterAPI = videoAPI.map((game) =>{

                return{
                    id: game.id,
                    name: game.name,
                    description: game.slug,
                    release_date: game.released,
                    image: game.background_image,
                    rating: game.rating,
                    platforms: game.platforms.map(p =>{
                        return p.platform.name
                    }).join(', '),
                    genres: game.genres.map(genre =>{
                        return{
                            id: genre.id,
                            name: genre.name
                        }
                    })                
                }
            })

            let allVideogame= [...videogameFilterAPI,...videoDB];

            res.send(allVideogame);
        })
    }
    catch(err){
        next(err);
    }
})

router.get('/:idVideogame',async(req,res,next)=>{
    const {idVideogame} = req.params;
    try{
        //Data Base
        if(typeof idVideogame === 'string' && idVideogame.length>8 ){
            const videogameDB = await Videogame.findByPk(idVideogame,{include: Genre});
            return res.send(videogameDB);
        }else{
            //Api
            const videogameAPI = await axios.get(`${BASE_URL}games/${idVideogame}?key=${API_KEY}`)
            .then(async e=>{
                let {data}= e;
                let game= data;
                let videogameFilterAPI ={
                    id: game.id,
                    name: game.name,
                    description: game.description,
                    release_date: game.released,
                    rating: game.rating,
                    image: game.background_image,
                    platforms: game.platforms.map(p =>{
                        return p.platform.name
                    }).join(', '),
                    genres: game.genres.map(genre =>{
                        return{
                            id: genre.id,
                            name: genre.name
                        }
                    })                
                }
            
            res.send(videogameFilterAPI);
        })
        }
    }
    catch(err){
        next(err);
    }
})



module.exports = router;