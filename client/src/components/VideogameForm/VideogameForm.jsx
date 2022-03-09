import React from 'react';
import {useEffect, useState} from 'react'
import { getGenre} from '../../redux/actions';
import { useDispatch,useSelector } from 'react-redux';
import {plataformsArray} from '../VariableSC';
import axios from 'axios';


import {Container,BottomReturn,ContainerForm,Form,ContainerTemp,TempShow,TempName,DeleteTemp,Submit,Error} from './VideogameForm'

const validate = values =>{
    const errors ={}

    if(!values.name){
        errors.name = 'This field is required';
    }else{
        if(values.name.length<5 || values.name.length>16){
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

    if(values.plataforms.length<1){
        errors.platforms = 'This field is required';
    }else{
        if(values.plataforms.length>5){
            errors.platforms = 'The maximum is 5';
        }
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

    const [state,setState] = useState({errors:{},genre:[],plataforms:[]});
    const [genreShow, setGenreShow] = useState(initialGenre);
    const [showPlataforms,setShowPlataforms] = useState({plataforms:[]})
    const [submitComp,setSumbit] = useState(false);

    useEffect(()=>{
        dispatch(getGenre());
    },[])
      
    const addGame = (game) =>{
        return axios.post(`/videogame`, game)
            .catch(err=>{
                setSumbit(false);
                // alert(err);
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
            setSumbit(true);
        }
        //not validate

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

    const selectPlataforms =({target})=>{
        const {value,name} =target;
        if(!state.plataforms.includes(value)){
            setState({...state,plataforms:[...state.plataforms,value]})
            setShowPlataforms({
                ...showPlataforms,
                plataforms:[...showPlataforms.plataforms,value]
            });
            
        }else{
            //is repeated
        }
        
    }
    const deletePlataforms = (e)=>{
        e.preventDefault();
        
        const {value,name} =e.target;        
        setShowPlataforms({
            ...showPlataforms,
            plataforms:showPlataforms.plataforms.filter(elem => elem.toLowerCase() !== value.toLowerCase())
        })
        setState({
            ...state,
            plataforms: state.plataforms.filter(e => e.toLowerCase() !== value.toLowerCase() )
        });
        
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
            <Container>
        {
            !submitComp?
            <ContainerForm>   
                <h2>Created a Videogame!</h2>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input name='name' onChange={handleChange}/>
                        {errors.name? <Error>{errors.name}</Error>:<Error/>}
                        
                    </div>
                    <div>
                        <label>Description: </label>
                        <input type='text' name='description' onChange={handleChange} />
                        {errors.description? <Error>{errors.description}</Error>:<Error> </Error>}

                    </div>
                    <div>
                        <label>Image: </label>
                        <input type='text' name='image' onChange={handleChange} />

                    </div>
                        <br/>
                    <div>
                        <label>Realease_Date: </label>
                        <input type="date" name='release_date' onChange={handleChange} />
                        {errors.release_date? <Error>{errors.release_date}</Error>:<Error> </Error>}

                    </div>
                    <div>
                        <label>Rating: </label>
                        <input type="number" name='rating' onChange={handleChange}/>
                        {errors.rating?  <Error>{errors.rating}</Error>:<Error> </Error>}

                    </div>
                    <div>
                        <label>Plataforms: </label>
                        <select name="plataforms"  onChange={selectPlataforms}>
                            <option disabled selected>select</option>                   
                            {plataformsArray && plataformsArray?.map((e,i)=>{
                                return <option key={i} value={e} label={e}/>
                                }) 
                            }
                            
                        </select>
                        {errors.platforms? <Error>{errors.platforms}</Error>:<Error> </Error>}
                        <ContainerTemp> 
                        {showPlataforms?.plataforms?.map(e =>(
                            <TempShow key ={e}>
                                <TempName >{e}</TempName>
                                <DeleteTemp 
                                onClick={deletePlataforms}
                                value={e}>X</DeleteTemp>
                            </TempShow>
                            ))}
                        </ContainerTemp>

                    </div>
                    <br/>

                    <div>
                        <label>Genres:</label>
                        <select name='selectFilter' onChange={selectGenres}  >
                            <option disabled selected>select</option>                   
                            { genres && genres.map( (g)=>{

                                return <option key={g.id} value={g.id} label={g.name}/>
                                
                            })}
                        </select>
                        {errors.genre? <Error>{errors.genre}</Error>:<Error> </Error>}
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
                    </div>


                    <Submit type='submit' value={'Submit'}></Submit>
                </Form>
            </ContainerForm>
            
            :<ContainerForm>
                <p>Game added successfully!</p>
                <BottomReturn href={'/Api'}>Back to Home</BottomReturn>
            </ContainerForm>
    }
            </Container>
    )
}

export default VideogameForm;