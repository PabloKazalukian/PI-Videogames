import {GET_VIDEOGAME,SORT,GET_VIDEOGAMES,GET_GENRE} from '../actions/index';

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
        case GET_VIDEOGAMES:
            return {...state,videogameFilter: action.payload}
        case SORT: 
        //Siempre pregunta si es ascendente
        //Si lo es lo ordena de una forma, o la otra
            let ordernamientoVG = [...state.videogame];
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
                videogame: ordernamientoVG}
        default:
            return state;
    }

}