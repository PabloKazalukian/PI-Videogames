import React, { useState } from "react";
import {useParams} from 'react-router';
import { useEffect } from "react";
import Loading from "../Loading/Loading.jsx";
import Error from "../Error404/Error404";


import {Container,ContainerDetail,ContainerImg,ContainerRest,Description,Img,Name} from './VideogameDetail'

function VideogameDetail (){

    const[state,setGame] = useState(null);
    const[error,setError]= useState(null)
    const [loading,setLoading] = useState(false);

    let {id} = useParams();

    
    useEffect(()=>{
        fetch(`http://localhost:3001/videogames/${id}`)
        .then(r =>{ 
            if(!r.ok){
                throw Error('could not fetch the data for that resource');
            } 
            return r.json()})
        .then(json=>{setGame({
            ...state, game:json
        })})
        .catch(err=>{ 
            setError(err.message)})
        setTimeout(() => {
            setLoading(true);
        }, 1700);
    },[])

    let game = state?.game;
    // id,description,genres,name,image,plataforms,rating,release_date
    let imggs=`https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg`; 
    if(state?.game.image?.length > 32){
        imggs = game.image;
    } 
    return(
        <Container>
            {loading?
                state?
                <ContainerDetail>
                    <ContainerImg>
                        <Name>{game?.name}</Name>
                        <Img
                            src={imggs}
                        />
                    </ContainerImg>
                    <ContainerRest>
                        <Description>Description:<br/>{game?.description}</Description>
                        <p>Genres: <br/>{game?.genres?.map(e=>{
                            return e.name
                        }).join(', ')}</p>
                        <p>Plataforms: <br/>{game?.platforms}</p>
                        <p>Rating: <br/>{game?.rating}</p>
                        <p>Release_date: <br/>{game?.release_date}</p>
                    </ContainerRest>
                </ContainerDetail>
                :<Error/>
            :<Loading/>
            }
    </Container>
    )
}

export default VideogameDetail;