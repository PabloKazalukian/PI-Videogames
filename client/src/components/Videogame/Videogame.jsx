import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getVideogame,getComplete} from '../../redux/actions'
import Pagination from "../Pagination/Pagination.jsx";
import CardVideogame from "../CardVideogame/CardVideogame.jsx";
import Filters from "../Filters/Filters.jsx";
import Loading from "../Loading/Loading.jsx";
import Error from "../Error404/Error404";
import Footer from "../Footer/Footer.jsx";

import {Container,ContainerCards,Total} from './Videogame';

function Videogame(){

    const err = useSelector(state => state.error);
    const [page,setPage] = useState([]);//contenedor total
    const [loading,setLoading] = useState((false));//controlador del loading
    const [currentPage,setCurrentPage] = useState(1);//pagina actual
    const [cantPage,setCantPage] = useState(15);//cantidad de paginas
    const [howShow,setHowShow]= useState(true);//true genres,false platforms

    const dispatch = useDispatch();
    const videogameFilter = useSelector(state => state.videogameFilter);
    const complete = useSelector(state => state.complete);


    // useEffects
    useEffect(()=>{
        if(!err){
            setLoading(false);
            // if(complete){
            //     dispatch(getComplete());
                
            // }else{
            dispatch(getVideogame());
            // }
            setTimeout(() => {
                setLoading(true);
            }, 600);
        }else{
            console.log('error, is empety ')
        }
    },[])

    useEffect(()=>{
        if(!err){
            if(videogameFilter.length<1){
                setLoading(false);
            }
            setPage(videogameFilter);
            setCurrentPage(1);
            setTimeout(() => {
                setLoading(true);
            }, 400);            
        }else{
            console.log('error, is empety ')
        }
            
    },[videogameFilter])
    //end useEffects


    //Is for send like a props to button in Error
    const refresh = ()=>{
        
        setLoading(false);
        if(complete){
                dispatch(getComplete());
        }else{
                dispatch(getVideogame());
        }
        dispatch(getVideogame());
        setLoading(true);

    }
    

    //1 * 8 , 8 - 8 , slice (0 , 8) case 1
    //2 * 8 , 16 - 8 , slice (8 , 16) case 2
    const indexOfLastPage = currentPage * cantPage;
    const indexOfFirstPage = indexOfLastPage - cantPage;
    const currentPost = page.slice(indexOfFirstPage,indexOfLastPage);
    
    
    // function Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);



    //Es para manda una funcion a filter y que alli pueda, por clousers,
    //cambiar el estado  que se manda a cada CardVideogame y saber que mostar
    //if show Genres or Platsforms
    const howShowFunc = (how)=>{
        setHowShow(how);
    }
    
    return(
        <Total>
        {loading?
            <Container>
                
                <Filters howShow={howShowFunc}/>
                {!err?
                    <>

                        <Pagination
                            cantPage={cantPage}
                            totalPage={page.length}
                            paginate={paginate}
                        />
                        <>
                            <ContainerCards>
                            { !currentPost?.length<1? currentPost?.map((game)=>{
                                return <CardVideogame
                                name={game.name}
                                images={game.image}
                                genres={game.genres}
                                platforms={game.platforms}
                                rating={game.rating}
                                howShow={howShow}
                                key={game.id}
                                id={game.id}
                                    />
                                })
                                :<Loading/>}
                                
                            </ContainerCards>
                        </>
                    </>
                
                :<Error clear={true} refresh={refresh}/>
                // :<div><h2>Eorr</h2></div>
            }
                <Footer/>
            </Container>
        :<Loading/>}
                            
        
        </Total>
    )

}

export default Videogame;