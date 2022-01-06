import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getVideogame} from '../../redux/actions'



function CardVideogame(props){


    return(
        <div>
            <div>
                <h2>{props.name}</h2>
                <img src={props.images} style={{width:'250px',height:'250px'}}/>
                <p>{props.genres?.map(g=>{
                    return g.name
                }).join(', ')}</p>
                <p>Rating: {props.rating}</p>
            </div>

        </div>
    )
}

export default CardVideogame;