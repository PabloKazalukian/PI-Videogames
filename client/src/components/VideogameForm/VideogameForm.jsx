import React from 'react';
import {useEffect, useState} from 'react'
import { getGenre} from '../../redux/actions';
import { useDispatch,useSelector } from 'react-redux';

import {Container,ContainerTemp,TempShow,TempName,DeleteTemp} from './VideogameForm'

const validate = values =>{
    const errors ={}

    if(!values.name){
        errors.name = 'This field is required';
    }else{
        if(values.name.length<5 || values.name.length>15){
            errors.name = 'The data is invalid';
        }
    }

    if(!values.description){
        errors.description = 'This field is required';
    }else{
        if(values.description.length<5 || values.description.length>64){
            errors.description = 'The data is invalid';
        }
    }

    if(!values.release_date){
        errors.release_date = 'This field is required';
    }else{
        const {release_date} = values;
        if( parseInt(release_date.split('-')[0],10)<1995
        || parseInt(release_date.split('-')[0],10)>2022 ){
            errors.release_date = 'The date is invalid';
        }
    }

    if(!values.platforms){
        errors.platforms = 'This field is required';
    }

    if(!values.rating){
        errors.rating = 'This field is required';
    }else{
        if(values.rating<1 || values.rating>5){
            errors.rating = 'Between 1 and 5';
        }
    }

    if(values.genre.length<1){
        errors.genre = 'This field is required';
    }else{
        if(values.genre.length>3){
            errors.genre = 'The maximum is 3';
        }
            
    }
    
    return errors;
}


function VideogameForm (){
    
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);
    const initialGenre={
        genreShow: []
    }

    const [state,setState] = useState({errors:{},genre:[]});
    const [genreShow, setGenreShow] = useState(initialGenre);

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
        //change format need let in value
        // if(name==='release_date'){
        //     let arr = value.split('-');
        //     let [year,...last] = arr;
        //     value =last.join('-') + '-'+year;
        // }
        setState({...state, [name]:value })
        
    }
    
    const handleSubmit = e =>{
        e.preventDefault();
        const {errors,...sinErrors} = state;
        const result = validate(sinErrors);
        setState({...state,errors:result})
        if(!Object.keys(result).length){
            //enviar formulario
            console.log(state);
            console.log('formulario valido');
            addGame(state);
        }
        //falta validar
        // setSumbit(true);

    }

    const selectGenres = ({target})=>{
        const {value} =target;
        // console.log(value);
        if(!state.genre.includes(parseInt(value,10))){
            setState({...state, genre:[...state.genre,parseInt(value,10)] })
            //show genres
            let [item] = genres.filter(elem =>{if (elem.id == (value)){
                return elem.name;
              }});              
            setGenreShow({
                ...state,
                genreShow:[...genreShow.genreShow,item.name]
            })
            
        }else{
            //is repeated
        }
        
    }


    const deleteGenre = (e)=>{
        e.preventDefault();

        //obtengo el id de temp, por su name, para eliminarlo
        let [item] = genres.filter(elem =>{if (elem.name == (e.target.value)){
          return elem.id;
        }});
        setState({
          ...state,
          genre: state.genre.filter(e => e !== item.id )
        });
        setGenreShow({
          ...genreShow,
          genreShow: genreShow.genreShow.filter(elem => elem !== e.target.value)
        });
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
                        {errors.name? <p>{errors.name}</p>:<p> </p>}
                </div>
                <div>
                    <label>Description: </label>
                    <input 
                        type='text'
                        name='description'
                        onChange={handleChange}
                    />
                    {errors.description? <p>{errors.description}</p>:<p> </p>}

                </div>
                <div>
                    <label>Imagen: </label>
                    <input type='text' name='image' onChange={handleChange} />

                </div>
                <div>
                    <label>Realease_Date: </label>
                    <input type="date" name='release_date' onChange={handleChange} />
                    {errors.release_date? <p>{errors.release_date}</p>:<p> </p>}

                </div>
                <div>
                    <label>Rating: </label>
                    <input type="number" name='rating' onChange={handleChange}/>
                    {errors.rating?  <p>{errors.rating}</p>:<p> </p>}

                </div>
                <div>
                    <label>Plataforms: </label>
                    <input type="text" name='platforms' onChange={handleChange}/>
                    {errors.platforms? <p>{errors.platforms}</p>:<p> </p>}

                </div>
                <div>
                    <label>Filter By:</label>
                    <select name='selectFilter' onChange={selectGenres}  >
                        <option disabled selected>select</option>                   
                        { genres && genres.map( (g)=>{

                            return <option key={g.id} value={g.id} label={g.name}/>
                            
                        })}
                    </select>
                </div>
                {errors.genre? <p>{errors.genre}</p>:<p> </p>}
                <ContainerTemp> 
                    {genreShow?.genreShow?.map(e =>(
                    <TempShow key ={e}>
                        <TempName >{e}</TempName>
                        <DeleteTemp 
                        onClick={deleteGenre}
                        value={e}>X</DeleteTemp>
                    </TempShow>
                    ))}
                </ContainerTemp>
                <input type='submit'></input>
            </form>

        </div>
    )
}

export default VideogameForm;