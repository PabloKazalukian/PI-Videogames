const { Router } = require('express');
const {Op}=require('sequelize');
const axios = require('axios');
const { Genre } = require('../db');
const { API_KEY } = process.env;

const router = Router();

//controllers
const {getGenres} = require('../controllers');


router.get('/',async(req,res,next)=>{
    
    try{
        let promiseDB = await Genre.findAll({});
        if(promiseDB.length<2){

            await getGenres();
            promiseDB = await Genre.findAll({});
           
        }
        promiseDB.sort(function(a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        return res.send(promiseDB);
    }
    catch(err){
        next(err);
    }
})


module.exports = router;