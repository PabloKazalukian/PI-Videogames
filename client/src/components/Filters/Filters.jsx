import React, { useEffect, useState } from "react";
import { useLocation  } from "react-router";
import {getVideogame,getGenre,sort,sortRating,filterGenre,getComplete,filterDb} from '../../redux/actions'
import { useDispatch,useSelector } from "react-redux";


import {Container,ContainerFilter,ShowFilter,ContainerSort,ButtonFilter,ButtonClear} from './Filters.js'


function Filters (){

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);
    const complete = useSelector(state => state.complete);
    const {pathname} = useLocation();

    const initialState={
        filter:''
    }

    const [state,setState] = useState(initialState);


    useEffect(()=>{
        dispatch(getGenre());

    },[])

    //Selection
    function selectionChange(e){
        // if(e.target.value==='none') {dispatch(getVideogame());}
        // else {
            dispatch(sort(e.target.value))
        // };
    }

    function selectionChangeRT(e){
        // if(e.target.value==='none') {dispatch(getVideogame());}
        // else {
            dispatch(sortRating(e.target.value))
        // };
    }
    function changeGenre(e){
        const {value} = e.target;
        setState({
            ...state,
            filter:value
        })
    }

    function filterGenres(){
        const {filter} = state;
        // dispatch(getComplete());
        dispatch(filterGenre(filter));
        

    }
    function clearGenres (){
        dispatch(filterGenre(''));
        setState({
            ...state,
            filter:''
        })

    }

    function filterDB(e){
        const {value} = e.target;
        dispatch(filterDb(value));
        

    }
    //end Selection


    return(

        <Container>

            {
                <ContainerFilter>
                    <p>Filter By:</p>
                    <select name='selectFilter' onChange={changeGenre}  >
                        <option disabled selected>select</option>
                        {/* <option value='all'label={'all Genres'}/> */}
                        
                        { genres && genres.map( (g)=>{

                            return <option key={g.id} value={g.name} label={g.name}/>
                            
                        })}
                    </select>
                    <ShowFilter>{state.filter}</ShowFilter>

                    <ButtonFilter onClick={filterGenres}>
                        Filter
                    </ButtonFilter>
                    

                        <p>Filter DB/API:</p>
                        <ButtonFilter value={'DB'} onClick={filterDB}>
                            Filter DB
                        </ButtonFilter>
                        <ButtonFilter value={'API'} onClick={filterDB}>
                            Filter API
                        </ButtonFilter>
                    
                    {/* <select name='select' onChange={filterDB} >
                        <option disabled selected>select</option>
                        <option value="DB" label='Data Base'></option>
                        <option value="API" label='API'></option>
                    </select> */}

                </ContainerFilter>
            }
            <ContainerSort>
                <ContainerFilter>
                    <p>Sort by alphabet:</p>
                    <select name='select' onChange={selectionChange} >
                        <option disabled selected>select</option>
                        <option value="ascendente" label='A-Z'></option>
                        <option value="descendente" label='Z-A'></option>
                    </select>
                </ContainerFilter>
                <ContainerFilter>
                    <p>Sort by Rating:</p>
                    <select name='select' onChange={selectionChangeRT} >
                        <option disabled selected>select</option>
                        <option value="ascendente" label='5-0'></option>
                        <option value="descendente" label='0-5'></option>
                    </select>
                </ContainerFilter>
            </ContainerSort>
            <ButtonClear onClick={clearGenres}>Clear All</ButtonClear>
        </Container>
    )
}

export default Filters;