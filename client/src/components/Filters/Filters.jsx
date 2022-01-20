import React, { useEffect, useState } from "react";
import { useLocation  } from "react-router";
import {getGenre,sort,sortRating,filterGenre,filterDb,filterPlatforms} from '../../redux/actions'
import { useDispatch,useSelector } from "react-redux";
import {plataformsArray} from '../VariableSC';


import {Container,ContainerFilter,ShowFilter,ContainerSort,Sort,Filter,FilterBy,ButtonFilter,ButtonClear,ButtonFilterDB} from './Filters.js'


function Filters (props){

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);
    const complete = useSelector(state => state.complete);
    const {pathname} = useLocation();

    const initialState={
        filter:''
    }

    const [state,setState] = useState(initialState);
    const [stateP,setStateP] = useState(initialState);



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
        setState({...state,filter:value})
        setStateP({...state,filter:''})

    }

    function filterGenres(){
        const {filter} = state;
        const filterPlat = stateP.filter
        // dispatch(getComplete());
        
        if(filter){
            dispatch(filterGenre(filter));
            props.howShow(true);
        }else{
            if(filterPlat){
                dispatch(filterPlatforms(filterPlat));
                props.howShow(false);
            }else{
                //Nothing
            }
        }
    }
    
    function changePlataforms({target}){
        const {value}=target;

        setState({...state,filter:''})
        setStateP({...state,filter:value})
    }

    function clearGenres (){
        dispatch(filterGenre(''));
        setState({...state,filter:''})
        setStateP({...state,filter:''})
    }

    function filterDB(e){
        const {value} = e.target;
        dispatch(filterDb(value));
        // props.howShow(true);

    }

    function shows ({target}){
        const {value} = target;
        if(value === 'Genres'){
            props.howShow(true);
        }else{
            props.howShow(false);
        }


    }
    //end Selection


    return(

        <Container>
                
            <ContainerFilter>
                <Filter>
                    <FilterBy>Filter DB/API:</FilterBy>
                    <ButtonFilterDB value={'DB'} onClick={filterDB}>
                        Filter DB
                    </ButtonFilterDB>
                    <ButtonFilterDB value={'API'} onClick={filterDB}>
                        Filter API
                    </ButtonFilterDB>
                </Filter>
                <Filter>
                    <FilterBy>Filter by Platforms:</FilterBy>
                    <select name="plataforms"  onChange={changePlataforms}>
                            <option disabled selected>select</option>                   
                            {plataformsArray && plataformsArray?.map((e,i)=>{
                                return <option key={i} value={e} label={e}/>
                                }) 
                            }                            
                    </select>
                    <ShowFilter>{stateP.filter}</ShowFilter>

                </Filter>
                <Filter>
                    <div>
                        <FilterBy>Filter By Genres:</FilterBy>
                        <select name='selectFilter' onChange={changeGenre}  >
                            <option disabled selected>select</option>
                            {/* <option value='all'label={'all Genres'}/> */}
                            
                            { genres && genres.map( (g)=>{

                                return <option key={g.id} value={g.name} label={g.name}/>
                                
                            })}
                        </select>
                        <ShowFilter>{state.filter}</ShowFilter>
                    </div>
                </Filter>
                
                <Filter>
                    <FilterBy>Show Genres/Platforms:</FilterBy>
                        {/* <ButtonFilterDB value={'Genres'} onClick={shows}>
                            Show Genres
                        </ButtonFilterDB>
                        <ButtonFilterDB value={'Platforms'} onClick={shows}>
                            Show platforms
                        </ButtonFilterDB> */}
                    <select name='select' onChange={shows} >
                        <option disabled selected>select</option>
                        <option value="Genres" label='Show Genres'></option>
                        <option value="Platforms" label='Show platforms'></option>
                    </select>
                </Filter>
                <Sort>
                    <p>Sort by alphabet:</p>
                    <select name='select' onChange={selectionChange} >
                        <option disabled selected>select</option>
                        <option value="ascendente" label='A-Z'></option>
                        <option value="descendente" label='Z-A'></option>
                    </select>
                </Sort>
                <Sort>
                    <p>Sort by Rating:</p>
                    <select name='select' onChange={selectionChangeRT} >
                        <option disabled selected>select</option>
                        <option value="ascendente" label='5-0'></option>
                        <option value="descendente" label='0-5'></option>
                 </select>
                </Sort>
                
                <ButtonFilter onClick={filterGenres}>Filter</ButtonFilter>
                <ButtonClear onClick={clearGenres}>Clear All</ButtonClear>
            </ContainerFilter>

        </Container>
    )
}

export default Filters;