import {GET_VIDEOGAME,SORT_RATING,SORT,GET_VIDEOGAME_NAME,FILTER_RATING,FILTER_DB,GET_GENRE,FILTER_GENRE,FILTER_PLATFORMS} from '../actions/index';

let initalState={
    videogame:[],
    videogameFilter: [],
    genres:[],
    error:false,
    complete:false
}

export default function rootReducer(state=initalState,action){

    switch(action.type){
        case GET_VIDEOGAME:
            // if(state.complete){
            //     return{...state,
            //         videogameFilter:state.videogame
            //     }
            // }
            // else{
                return{
                    ...state,
                    videogame: action.payload,
                    videogameFilter: action.payload,
                    error:false,
                    complete:true
                }
            // }
        case GET_GENRE:
            return{ ...state,genres:action.payload}
        case GET_VIDEOGAME_NAME:
            if(action.payload.length>=1){
                return {
                    ...state,
                    videogame: action.payload,
                    videogameFilter: action.payload,
                    error:false,
                    complete:false,
                }
            }else{
                return{
                    ...state,
                    videogame: action.payload,
                    videogameFilter: action.payload,
                    error:true,
                    complete:false,
                }
            }

        case SORT_RATING:
            let ordernamientoRT = [...state.videogameFilter];
            ordernamientoRT = ordernamientoRT.sort((a, b)=> {
                if (a.rating > b.rating) {
                    return action.payload === 'ascendente'? -1 : 1;
                }
                if (a.rating < b.rating) {
                    return action.payload === 'ascendente'? 1 : -1;
                }
                return 0;
            })
            return{...state,videogameFilter:ordernamientoRT}
        case SORT: 
        //Siempre pregunta si es ascendente
        //Si lo es lo ordena de una forma, o la otra
            let ordernamientoVG = [...state.videogameFilter];
            ordernamientoVG = ordernamientoVG.sort((a, b)=> {
                if (a.name < b.name) {
                    return action.payload === 'ascendente'? -1 : 1;
                }
                if (a.name > b.name) {
                    return action.payload === 'ascendente'? 1 : -1;
                }
                return 0;
            })
            return{...state,
                videogameFilter: ordernamientoVG}
        case FILTER_DB:
            let filterDB=[...state.videogame];
            
            if(action.payload ==='DB'){
                filterDB = filterDB.filter((e)=>{
                    return e.id.length > 8
                });

            }else{
                filterDB = filterDB.filter((e)=>{
                    return typeof e.id !=='string'
                });
            }

            if(filterDB.length>=1){
                return{
                    ...state,
                    videogameFilter: filterDB,
                    error:false
                }
            } else{
                return{
                    ...state,
                    videogameFilter: filterDB,
                    error: true,
                }

            }
            
        case FILTER_GENRE:
            let filterGenre=[...state.videogame];
            console.log(filterGenre)
            console.log(state.videogame)
            if(action.payload !==''){
                filterGenre = filterGenre?.filter((e)=>{
                    if (e.genres?.find(elem=> elem.name.toLowerCase()===action.payload)){
                        return e;
                    }
    
                });
            }
            if(filterGenre.length>=1){
                return{
                    ...state,
                    videogameFilter: filterGenre,
                    error:false
                }
            } else{
                return{
                    ...state,
                    videogameFilter: filterGenre,
                    error: true,
                }

            }

        case FILTER_PLATFORMS:
        let filterPlatforms=[...state.videogame];
        // platforms
        if(action.payload !==''){
            filterPlatforms = filterPlatforms.filter((e)=>{
                if (e.platforms?.includes(action.payload)){
                    return e;
                }                
            });
        }
        if(filterPlatforms.length>=1){
            return{
                ...state,
                videogameFilter: filterPlatforms,
                error:false
            }
        } else{
            console.log(action.payload);
            return{
                ...state,
                videogameFilter: filterPlatforms,
                error: true,
            }

        }
        case FILTER_RATING:
        let filterRating=[...state.videogame];
        
        filterRating = filterRating.filter((e)=>{
            if (parseInt(e.rating,10) < 4){
                return e;
            }                
        });
        if(filterRating.length>=1){
            return{
                ...state,
                videogameFilter: filterRating,
                error:false
            }
        } else{
            return{
                ...state,
                videogameFilter: filterRating,
                error: true,
            }

        }
        default:
            return state;
    }

}