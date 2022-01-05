import {} from '../actions/index';

let initalState={
    dogs:[],
    dog:[],
    temp:[],
    error:false
}

export default function rootReducer(state=initalState,action){

    switch(action.type){
        default:
            return state;
    }

}