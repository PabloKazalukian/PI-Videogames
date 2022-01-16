import React, { useEffect, useState } from "react";
import { useLocation  } from "react-router";
import {getVideogame,getGenre,sort,sortRating,filterGenre,getComplete} from '../../redux/actions'
import { useDispatch,useSelector } from "react-redux";


import {Container,ContainerFilter,ShowFilter,ContainerSort,ButtonFilter} from './Filters.js'


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
        console.log(state.filter)
    }

    function filterGenres(){
        const {filter} = state;
        // dispatch(getComplete());
        dispatch(filterGenre(filter));
        

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
                </ContainerFilter>
            }
            <ContainerSort>
                <ContainerFilter>
                    <p>Sort by alphabet:</p>
                    <select name='select' onChange={selectionChange} >
                        <option disabled selected>select</option>
                        {/* <option value='none'label={'none'}/> */}
                        <option value="ascendente" label='ascendant'></option>
                        <option value="descendente" label='descendent'></option>
                    </select>
                </ContainerFilter>
                <ContainerFilter>
                    <p>Sort by Rating:</p>
                    <select name='select' onChange={selectionChangeRT} >
                        <option disabled selected>select</option>
                        {/* <option value='none'label={'none'}/> */}
                        <option value="ascendente" label='ascendant'></option>
                        <option value="descendente" label='descendent'></option>
                    </select>
                </ContainerFilter>
            </ContainerSort>
        </Container>
    )
}

export default Filters;