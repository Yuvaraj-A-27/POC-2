import { ACTIVE_USER, CURRENT_PRODUCT, INITIAL_CATEGORY, INITIAL_PRODUCT, INITIAL_USER_DETAIL, LOGIN_ACTIVE, PRODUCT_POP_ACTIVE } from "./ActionType";

const initialState ={
    category : [],
    product : [],
    userDetail : [],
    loginActive : false,
    productPopUpActive : false,
    activeUserDetail : '',
    currentProduct : 1,
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

        case PRODUCT_POP_ACTIVE: return{
            ...state,
            productPopUpActive : !state.productPopUpActive
        }

        case ACTIVE_USER: return{
            ...state,
            activeUserDetail : action.payload
        }

        case CURRENT_PRODUCT: return{
            ...state,
            currentProduct : action.payload
        }

        default : return state
    }
}

export default Reducer;