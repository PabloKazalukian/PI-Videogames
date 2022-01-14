import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getVideogame,getGenre,sort,sortRating,filterGenre} from '../../redux/actions'
import Pagination from "../Pagination/Pagination.jsx";
import CardVideogame from "../CardVideogame/CardVideogame.jsx";

function Videogame(props){

    const err = useSelector(state => state.error);
    const [page,setPage] = useState([]);//contenedor total
    const [loading,setLoading] = useState((false));//controlador del loading
    const [currentPage,setCurrentPage] = useState(1);//pagina actual
    const [cantPage,setCantPage] = useState(15);//cantidad de paginas


    const dispatch = useDispatch();
    const videogame = useSelector(state => state.videogame)
    const videogameFilter = useSelector(state => state.videogameFilter)
    const genres = useSelector(state => state.genres)

    // useEffects
    useEffect(()=>{
        if(!err){    
            setLoading(false);
            dispatch(getVideogame());
            dispatch(getGenre())
            setTimeout(() => {
                setLoading(true);
            }, 100);                                   
        }
    },[])
    useEffect(()=>{
        if(!err){
            setLoading(false);        
            setPage(videogameFilter);
            setCurrentPage(1);
            setTimeout(() => {
                setLoading(true);
            }, 100);             
        }
            
    },[videogameFilter])
    //end useEffects

    //Selection
    function selectionChange(e){
        if(e.target.value==='none') {dispatch(getVideogame());}
        else {dispatch(sort(e.target.value))};
    }

    function selectionChangeRT(e){
        if(e.target.value==='none') {dispatch(getVideogame());}
        else {dispatch(sortRating(e.target.value))};
    }
    function changeTemp(e){
        if(e.target.value === 'all') {
            dispatch(getVideogame());
        }
        dispatch(filterGenre(e.target.value));
    }

    //end Selection

    //1 * 8 , 8 - 8 , slice (0 , 8) case 1
    //2 * 8 , 16 - 8 , slice (8 , 16) case 2
    const indexOfLastPage = currentPage * cantPage;
    const indexOfFirstPage = indexOfLastPage - cantPage;
    const currentPost = page.slice(indexOfFirstPage,indexOfLastPage);
    
    // function Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return(
        <div>
            {loading?
            <>
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
                        <option value='none'label={'none'}/>
                        <option value="ascendente" label='ascendant'></option>
                        <option value="descendente" label='descendent'></option>
                    </select>
                    <p>Sort by Rating:</p>
                    <select name='select' onChange={selectionChangeRT} >
                        <option disabled selected>select</option>
                        <option value='none'label={'none'}/>
                        <option value="ascendente" label='ascendant'></option>
                        <option value="descendente" label='descendent'></option>
                    </select>
                    
                </div>
                <Pagination
                    cantPage={cantPage}
                    totalPage={page.length}
                    paginate={paginate}
                />
                <>
                    {currentPost?.map((game)=>{
                        return <CardVideogame
                        name={game.name}
                        images={game.image}
                        genres={game.genres}
                        rating={game.rating}
                        key={game.id}
                        id={game.id}
                        />
                    })}
                </>
            </>
            
            :<div><h2>Loading</h2></div>
            }


        </div>
    )

}

export default Videogame;