import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { useLocation  } from "react-router";
import {searchVideogame,getVideogame} from '../../redux/actions';
import {Lin,NaviBar,SearchBar,NavUl,Linb,InputBar,ButtonBar} from './Navegation.js';




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
        // console.log(e.target.childNodes[0].value );
        dispatch(searchVideogame(state.gameSearch));
        // e.target.childNodes[0].value='';
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
                                        
                    <Linb onClick={restart} href={'/Api'}>V-Gamming</Linb>
                    { pathname.toLowerCase() === '/api' ?
                        <SearchBar onSubmit={handleSubmit}>
                            <InputBar 
                                name='gameSearch'
                                onChange={handleState}
                                value={state.gameSearch}
                                type="search" />
                            <ButtonBar type="submit" value='Search'/>
                            
                        </SearchBar>
                        : <p/> 
                    }
                    <Lin to={'/Api/Form'}>Add a Game</Lin>

                </NavUl>
            </NaviBar>
        </header>
    )
}