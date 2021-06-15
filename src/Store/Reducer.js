import { ACTIVE_USER, INITIAL_CATEGORY, INITIAL_PRODUCT, INITIAL_USER_DETAIL, LOGIN_ACTIVE } from "./ActionType";

const initialState ={
    category : [],
    product : [],
    userDetail : [],
    loginActive : false,
    activeUserDetail : ''
}

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

        case INITIAL_USER_DETAIL:return{
            ...state,
            userDetail : [...action.payload]
        }

        case LOGIN_ACTIVE: return{
            ...state,
            loginActive : !state.loginActive
        }
        case ACTIVE_USER: return{
            ...state,
            activeUserDetail : action.payload
        }

        default : return state
    }
}

export default Reducer;