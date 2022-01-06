
// export const  = '';
export const SORT = 'SORT';
export const  GET_VIDEOGAME= 'GET_VIDEOGAME';
export const  GET_VIDEOGAMES= 'GET_VIDEOGAMES';
export const FILTER_GENRE = 'FILTER_GENRE';
export const GET_GENRE = 'GET_GENRE';




export const getVideogame= ()=>{
    return function(dispatch){
        return fetch(`http://localhost:3001/videogames`)
        .then(r => r.json())
        .then(json=>{
            dispatch({type:GET_VIDEOGAME, payload: json});
        })
        .catch(err=>{
            console.log(err);
        })
    } 
}

export const searchVideogame= (name)=>{
    return function(dispatch){
        return fetch(`http://localhost:3001/videogames?name=${name}`)
        .then(r => r.json())
        .then(json=>{
            dispatch({type:GET_VIDEOGAMES, payload: json});
        })
        .catch(err=>{
            console.log(err);
        })
    } 
}

export const getVideogameID= (id)=>{
    return function(dispatch){
        return fetch(`http://localhost:3001/videogames/${id}`)
        .then(r => r.json())
        .then(json=>{
            dispatch({type:GET_VIDEOGAMES, payload: json});
        })
        .catch(err=>{
            console.log(err);
        })
    } 
}

export const sort = (order) => {
    //alphabetical
    return {
        type: SORT,
        payload: order,
    }

}

export const filterGenre = (genre) => {
    
    return {
        type: FILTER_GENRE,
        payload: genre,
    }

}

export const getGenre= ()=>{
    return function(dispatch){
        return fetch(`http://localhost:3001/genres`)
        .then(r => r.json())
        .then(json=>{
            dispatch({type:GET_GENRE, payload: json});
        })
        .catch(err=>{
            console.log(err);
        })
    } 
}
