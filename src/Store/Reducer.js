import { INITIAL_CATEGORY, INITIAL_PRODUCT, LOGIN_ACTIVE } from "./ActionType";

const initialState ={
    category : [],
    product : [],
    loginActive : false,
    activeUserDetail : ''
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
        case LOGIN_ACTIVE: return{
            ...state,
            loginActive : !state.loginActive
        }
        default : return state
    }
}

export default Reducer;