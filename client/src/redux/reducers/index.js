import {GET_VIDEOGAME,SORT_RATING,SORT,GET_VIDEOGAME_NAME,GET_GENRE,FILTER_GENRE,GET_VIDEOGAMES} from '../actions/index';

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
            if(state.complete){
                return{...state,
                    videogameFilter:state.videogame
                }
            }else{
                return{
                    ...state,
                    videogame: action.payload,
                    videogameFilter: action.payload,
                    error:false,
                    complete:true
                }
            }
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
        case FILTER_GENRE:
            let filterGenre=[...state.videogame];
            filterGenre = filterGenre.filter((e)=>{
                if (e.genres?.find(elem=> elem.name.toLowerCase()===action.payload)){
                    return e;
                }

            });
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
        default:
            return state;
    }

}