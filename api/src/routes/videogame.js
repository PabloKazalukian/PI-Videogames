const { Router } = require('express');
const { Videogame,Genre } = require('../db');
const router = Router();


router.post('/',async(req,res,next)=>{
    try{
        const{name,description,release_date,rating,image,plataforms,genre}= req.body;
        const platforms = plataforms.join(', ');
        const newVideogame = await Videogame.create({name,description,release_date,rating,image,platforms})
        await newVideogame.addGenre(genre);
        res.send(newVideogame);

    }
    catch(err){
        next(err);
    }

})




module.exports = router;