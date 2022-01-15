import React, { useEffect, useState } from "react";
import {getVideogame,getGenre,sort,sortRating,filterGenre,getComplete} from '../../redux/actions'
import { useDispatch,useSelector } from "react-redux";





function Filters (){
    const genres = useSelector(state => state.genres);
    const dispatch = useDispatch();
    const complete = useSelector(state => state.complete);


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
    function changeTemp(e){
        if(e.target.value === 'all') {
            if(complete){
                dispatch(getComplete());                
            }else{
                dispatch(getVideogame());
            }
        }else{
            dispatch(filterGenre(e.target.value));
        }
    }

    //end Selection

    return(

        <div>
            <p>Filter By:</p>
                    <select name='selectFilter' onChange={changeTemp}  >
                        <option disabled selected>select</option>
                        <option value='all'label={'all Genres'}/>
                        
                        { genres && genres.map( (g)=>{

                            return <option key={g.id} value={g.name} label={g.name}/>
                            
                        })}
                    </select>
                    <p>Sort by alphabet:</p>
                    <select name='select' onChange={selectionChange} >
                        <option disabled selected>select</option>
                        {/* <option value='none'label={'none'}/> */}
                        <option value="ascendente" label='ascendant'></option>
                        <option value="descendente" label='descendent'></option>
                    </select>
                    <p>Sort by Rating:</p>
                    <select name='select' onChange={selectionChangeRT} >
                        <option disabled selected>select</option>
                        {/* <option value='none'label={'none'}/> */}
                        <option value="ascendente" label='ascendant'></option>
                        <option value="descendente" label='descendent'></option>
                    </select>
        </div>
    )
}

export default Filters;