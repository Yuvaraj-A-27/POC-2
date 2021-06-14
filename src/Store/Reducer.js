import { INITIAL_CATEGORY, INITIAL_PRODUCT } from "./ActionType";

const initialState ={
    category : [],
    product : [],
}
console.log(initialState);

const Reducer = (state = initialState, action)=>{
    switch(action.type){
        case INITIAL_CATEGORY: return{
            ...state,
            category : [...action.payload]
        }
        case INITIAL_PRODUCT:return{
            ...state,
            product : [...action.payload]
        }
        default : return state
    }
}

export default Reducer;