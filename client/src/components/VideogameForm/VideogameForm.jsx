import React from 'react';
import {useEffect, useState} from 'react'
import { getGenre} from '../../redux/actions';
import { useDispatch,useSelector } from 'react-redux';

const validate = values =>{
    const errors ={}

    if(!values.name){
        errors.name = 'This field is required'
    }else{
        if(values.name.length<5 || values.name.length>15){
            errors.name = 'The data is invalid'
        }
    }

    if(!values.description){
        errors.description = 'This field is required'
    }else{
        if(values.description.length<5 || values.description.length>64){
            errors.description = 'The data is invalid'
        }
    }

    if(!values.release_date){
        errors.release_date = 'This field is required'
    }

    if(!values.platforms){
        errors.platforms = 'This field is required'
    }

    if(!values.rating){
        errors.rating = 'This field is required'
    }
    
    return errors;
}


function VideogameForm (){
    
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);


    const [state,setState] = useState({errors:{}});

    const [submitComp,setSumbit] = useState(false);

    useEffect(()=>{
        dispatch(getGenre());
    },[])
      
    const addGame = (game) =>{
        return fetch(`http://localhost:3001/videogame`, {
            method: 'POST',
            body: JSON.stringify(game),
            headers:{
                'Content-Type': 'application/json'},
            })
            .then(r => r.json())
            .catch(err=>{
                setSumbit(false);
                alert(err);
            })
    }
    
    
    
    const handleChange =(e)=>{
        const {name,value} = e.target
        setState({...state, [name]:value })        
    }
    
    const handleSubmit = e =>{
        e.preventDefault();
        const {errors,...sinErrors} = state;
        const result = validate(sinErrors);
        setState({...state,errors:result})
        if(!Object.keys(result).length){
            //enviar formulario
            console.log('formulario valido');
        }
        //falta validar
        // setSumbit(true);

    }
    const {errors} = state;
    return(
        <div>
            <h2>Created a Videogame!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input 
                        // placeholder='5-40 characters'
                        name='name' 
                        onChange={handleChange}
                        // value={state.name}
                        />
                        {errors.name && <p>{errors.name}</p>}
                </div>
                <div>
                    <label>Description: </label>
                    <input 
                        type='text'
                        name='description'
                        onChange={handleChange}
                    />
                    {errors.description && <p>{errors.description}</p>}

                </div>
                <div>
                    <label>Imagen: </label>
                    <input type='text' name='image' onChange={handleChange} />

                </div>
                <div>
                    <label>Realease_Date: </label>
                    <input type="text" name='release_date' onChange={handleChange} />
                    {errors.release_date && <p>{errors.release_date}</p>}

                </div>
                <div>
                    <label>Rating: </label>
                    <input type="number" name='rating' onChange={handleChange}/>
                    {errors.rating && <p>{errors.rating}</p>}

                </div>
                <div>
                    <label>Plataforms: </label>
                    <input type="text" name='platforms' onChange={handleChange}/>
                    {errors.platforms && <p>{errors.platforms}</p>}

                </div>
                <div>
                    <label>Filter By:</label>
                    <select name='selectFilter'  >
                        <option disabled selected>select</option>                        
                        { genres && genres.map( (g)=>{

                            return <option key={g.id} value={g.name} label={g.name}/>
                            
                        })}
                    </select>
                </div>
                <input type='submit'></input>
            </form>

        </div>
    )
}

export default VideogameForm;