import React from "react";

import {Container,ContainerAll,Name,Button,Img,Text,Reference,References} from './CardVideogame.js';

function CardVideogame(props){


    //Defaulr Images generator
    let imggs=`https://pbs.twimg.com/media/FC891KzUUAIhbGP?format=jpg&name=large`; 
    if(props.images?.length > 32){
        imggs = props.images;
    } 
    
    return(
        <Container>
            <ContainerAll>
                <Img src={imggs} 
                    alt={props.name}
                    
                    />
                <Name>{props.name}</Name>
                {props.howShow?
                    <>
                    <Reference>Genres:</Reference>
                    <Text>{props.genres?.map(g=>{
                        return g.name
                    }).join(', ')}</Text>
                    </>
                    :<><Reference>Platforms:</Reference>
                    <Text>{props.platforms}</Text>
                    </>
                
                }
                

                <References>Rating: {props.rating}</References>
                <Button to={`/Api/search/${props.id}`}>Detail</Button>
            </ContainerAll>
        </Container>
    )
}

export default CardVideogame;