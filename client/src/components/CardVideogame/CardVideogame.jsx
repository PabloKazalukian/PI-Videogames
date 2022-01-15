import React from "react";
import { Link } from "react-router-dom";

import {Container} from './CardVideogame.js';

function CardVideogame(props){

    
    return(
        <Container>
            <div>
                <img src={props.images} 
                    style={{width:'250px',height:'250px'}}
                    alt={props.name}
                    />
                <h2>{props.name}</h2>
                <p>{props.genres?.map(g=>{
                    return g.name
                }).join(', ')}</p>
                <p>Rating: {props.rating}</p>
                <Link to={`/Api/search/${props.id}`}>{props.id}</Link>
            </div>

        </Container>
    )
}

export default CardVideogame;