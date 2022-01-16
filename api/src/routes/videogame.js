const { Router } = require('express');
const { Videogame,Genre } = require('../db');
const router = Router();


router.post('/',async(req,res,next)=>{
    const{name,description,release_date,rating,image,platforms,genre}= req.body;
    const newVideogame = await Videogame.create({name,description,release_date,rating,image,platforms})
    await newVideogame.addGenre(genre);
    res.send(newVideogame);

})




module.exports = router;