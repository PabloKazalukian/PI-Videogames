import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getVideogame} from '../../redux/actions'
import CardVideogame from "../CardVideogame/CardVideogame.jsx";

function Videogame(props){

    const dispatch = useDispatch();
    const videogame = useSelector(state => state.videogame)
    const videogameFilter = useSelector(state => state.videogameFilter)
    const genres = useSelector(state => state.genres)

    useEffect(()=>{
        dispatch(getVideogame())
    },[])

    
    return(
        <div>
            <h1>Hola</h1>
            {videogameFilter?.map((game)=>{
                return <CardVideogame
                name={game.name}
                images={game.image}
                genres={game.genres}
                rating={game.rating}
                key={game.id}
                id={game.id}
                />
            })}

        </div>
    )

}

export default Videogame;