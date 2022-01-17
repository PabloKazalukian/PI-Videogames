import React from "react";
import { Link } from "react-router-dom";

import {Container,ContainerAll,Name,Button,Img,Text} from './CardVideogame.js';

function CardVideogame(props){

    
    return(
        <Container>
            <ContainerAll>
                <Img src={props.images} 
                    alt={props.name}
                    />
                <Name>{props.name}</Name>
                <Text>{props.genres?.map(g=>{
                    return g.name
                }).join(', ')}</Text>
                <p>Rating: {props.rating}</p>
                <Button to={`/Api/search/${props.id}`}>Detail</Button>
            </ContainerAll>
        </Container>
    )
}

export default CardVideogame;