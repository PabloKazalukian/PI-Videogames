import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { useLocation  } from "react-router";
import {searchVideogame,getVideogame} from '../../redux/actions';

import {Lin,NaviBar,SearchBar,NavUl,InputBar,ButtonBar,Lupa} from './Navegation.js';
import {HiSearch} from 'react-icons/hi';




export default function NavBar(){
    const dispatch = useDispatch();
    const initialState ={
        gameSearch: ""
    }
    const {pathname} = useLocation(); 
    
    const [state,setstate] = useState(initialState);

    const handleState = (e) =>{
        setstate({
          ...state,
          [e.target.name]: e.target.value
        });
    }
     
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(state.gameSearch);
        dispatch(searchVideogame(state.gameSearch));
    }
    function restart  (){
        if(pathname.toLowerCase() === '/api'){
        dispatch(getVideogame());
        }
    }


    return (
        <header className="navBar">
            <NaviBar>
                <NavUl>
                                        
                    <Lin onClick={restart} to={'/Api'}>V-Gamming </Lin>
                    { pathname.toLowerCase() === '/api' ?
                        <SearchBar onSubmit={handleSubmit}>
                            <InputBar 
                                type="text"
                                name='gameSearch'
                                onChange={handleState}
                                value={state.gameSearch}
                                type="search" />
                            <ButtonBar type="submit" value='Search'></ButtonBar>
                            <Lupa><HiSearch/></Lupa>
                            
                        </SearchBar>
                        : <p/> 
                    }
                    <Lin to={'/Api/Form'}>Add a Game</Lin>

                </NavUl>
            </NaviBar>
        </header>
    )
}