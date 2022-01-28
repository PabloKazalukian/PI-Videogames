
// export const  = '';
export const SORT = 'SORT';
export const SORT_RATING = 'SORT_RATING';
export const GET_VIDEOGAME= 'GET_VIDEOGAME';
export const GET_VIDEOGAMES= 'GET_VIDEOGAMES';
export const GET_VIDEOGAME_NAME= 'GET_VIDEOGAME_NAME';
export const FILTER_GENRE = 'FILTER_GENRE';
export const FILTER_DB = 'FILTER_DB';
export const FILTER_PLATFORMS = 'FILTER_PLATFORMS';
export const GET_GENRE = 'GET_GENRE';
export const FILTER_RATING = 'FILTER_RATING';




export const filterRat = () =>{
    //alphabetical
    return {
        type: FILTER_RATING,
        payload: '',
    }
}

export const getVideogame= ()=>{
    return  function(dispatch){
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
export const getComplete = ()=>{
    return {
        type:GET_VIDEOGAME,
        payload: ''
    }
}


export const searchVideogame= (name)=>{
    return  function(dispatch){

        return fetch(`http://localhost:3001/videogames?name=${name}`)
        .then(r => r.json())
        .then(json=>{
            dispatch({type:GET_VIDEOGAME_NAME, payload: json});
        })
        .catch(err=>{
            console.log(err);
        })
    } 
}

// export const getVideogameID= (id)=>{
//     return function(dispatch){
//         return fetch(`http://localhost:3001/videogames/${id}`)
//         .then(r => r.json())
//         .then(json=>{
//             dispatch({type:GET_VIDEOGAMES, payload: json});
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     } 
// }

export const sort = (order) => {
    //alphabetical
    return {
        type: SORT,
        payload: order,
    }

}


export const sortRating = (order) => {
    //alphabetical
    return {
        type: SORT_RATING,
        payload: order,
    }

}

export const filterDb = (db) => {
    console.log(db)
    
    return {
        type: FILTER_DB,
        payload: db,
    }

}

export const filterPlatforms = (platforms) => {
    
    return {
        type: FILTER_PLATFORMS,
        payload: platforms,
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
