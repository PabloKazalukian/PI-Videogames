import {GET_VIDEOGAME,SORT_RATING,SORT,GET_VIDEOGAME_NAME,GET_GENRE,FILTER_GENRE} from '../actions/index';

let initalState={
    videogame:[],
    videogameFilter: [],
    genres:[],
    error:false
}

export default function rootReducer(state=initalState,action){

    switch(action.type){
        case GET_VIDEOGAME:
            return{
                ...state,
                videogame: action.payload,
                videogameFilter: action.payload,
                error:false
            }
        case GET_GENRE:
            return{ ...state,genres:action.payload}
        case GET_VIDEOGAME_NAME:
            return {...state,videogameFilter: action.payload}
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
            return{...state,videogameFilter:state.videogame.filter((e)=>{
                // console.log(e);
                // console.log(action.payload);
                if (e.genres?.find(elem=> elem.name.toLowerCase()===action.payload)){
                    return e;
                }

            })}
        default:
            return state;
    }

}