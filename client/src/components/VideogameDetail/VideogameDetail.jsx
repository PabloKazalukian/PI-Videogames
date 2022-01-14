import React, { useState } from "react";
import {useParams} from 'react-router';
import { useEffect } from "react";

function VideogameDetail (){

    const[state,setGame] = useState(null);
    const[error,setError]= useState(null)
    const [loading,setLoading] = useState(false);

    let {id} = useParams();

    
    useEffect(()=>{
        fetch(`http://localhost:3001/videogames/${id}`)
        .then(r =>{ 
            console.log(r);
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

    return(
        <div>
            {loading?
            <>
                <div>
                    <h1>{game?.name}</h1>
                    <img
                        src={game?.image}
                        style={{width:'250px',height:'250px'}}
                    />
                </div>
                <div>
                    <p>Description:<br/>{game?.description}</p>
                    <p>Genres: <br/>{game?.genres?.map(e=>{
                        return e.name
                    }).join(', ')}</p>
                    <p>Plataforms: <br/>{game?.platforms}</p>
                    <p>Rating: <br/>{game?.rating}</p>
                    <p>Release_date: <br/>{game?.release_date}</p>
                </div> 
            </>            
            :<div><h2>Loading</h2></div>
            }
        </div>
    )
}

export default VideogameDetail;