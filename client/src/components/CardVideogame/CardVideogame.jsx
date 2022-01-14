import React from "react";
import { Link } from "react-router-dom";



function CardVideogame(props){

    
    return(
        <div>
            <div>
                <h2>{props.name}</h2>
                <img src={props.images} 
                    style={{width:'250px',height:'250px'}}
                    alt={props.name}
                />
                <p>{props.genres?.map(g=>{
                    return g.name
                }).join(', ')}</p>
                <p>Rating: {props.rating}</p>
            </div>
            <Link to={`/Api/search/${props.id}`}>{props.id}</Link>

        </div>
    )
}

export default CardVideogame;