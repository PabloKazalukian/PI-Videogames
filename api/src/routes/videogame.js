const { Router } = require('express');
const {Op}=require('sequelize');
const axios = require('axios');
const { Videogame,Genre } = require('../db');
const { API_KEY } = process.env;
const {BASE_URL} = require('../constant.js');

const router = Router();


router.post('/',async(req,res,next)=>{
    const{name,description,release_date,rating,image,platforms,genres}= req.body;
    const newVideogame = await Videogame.create({name,description,release_date,rating,image,platforms})
    await newVideogame.addGenre(genres);
    console.log(newVideogame);
    res.send(newVideogame);

})




module.exports = router;