import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getVideogame,getComplete} from '../../redux/actions'
import Pagination from "../Pagination/Pagination.jsx";
import CardVideogame from "../CardVideogame/CardVideogame.jsx";
import Filters from "../Filters/Filters";

import {Container,ContainerCards} from './Videogame';

function Videogame(props){

    const err = useSelector(state => state.error);
    const [page,setPage] = useState([]);//contenedor total
    const [loading,setLoading] = useState((false));//controlador del loading
    const [currentPage,setCurrentPage] = useState(1);//pagina actual
    const [cantPage,setCantPage] = useState(15);//cantidad de paginas


    const dispatch = useDispatch();
    const videogameFilter = useSelector(state => state.videogameFilter);
    const complete = useSelector(state => state.complete);


    // useEffects
    useEffect(()=>{
        if(!err){
            setLoading(false);
            if(complete){
                dispatch(getComplete());
                
            }else{
                dispatch(getVideogame());
            }
            setLoading(true);                                  
        }
    },[])

    useEffect(()=>{
        if(!err){
            setLoading(false);        
            setPage(videogameFilter);
            setCurrentPage(1);
            setLoading(true);
        }
            
    },[videogameFilter])
    //end useEffects

    

    //1 * 8 , 8 - 8 , slice (0 , 8) case 1
    //2 * 8 , 16 - 8 , slice (8 , 16) case 2
    const indexOfLastPage = currentPage * cantPage;
    const indexOfFirstPage = indexOfLastPage - cantPage;
    const currentPost = page.slice(indexOfFirstPage,indexOfLastPage);
    
    // function Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return(
        <Container>
            <Filters/>
            {!err?
            <>

                <Pagination
                    cantPage={cantPage}
                    totalPage={page.length}
                    paginate={paginate}
                />
                <>
                    <ContainerCards>
                    {currentPost?.length>=1?  currentPost.map((game)=>{
                        return <CardVideogame
                        name={game.name}
                        images={game.image}
                        genres={game.genres}
                        rating={game.rating}
                        key={game.id}
                        id={game.id}
                        />
                    })
                    :<div><h2>Loading</h2></div>}
                    </ContainerCards>
                </>
            </>
            
            :<div><h2>Error</h2></div>
            }

        </Container>
    )

}

export default Videogame;