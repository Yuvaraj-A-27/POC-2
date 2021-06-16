import { ACTIVE_USER, ADD_TO_CART, CART_ACTIVE, CURRENT_PRODUCT, INITIAL_CATEGORY, INITIAL_PRODUCT, INITIAL_USER_DETAIL, LOGIN_ACTIVE, PRODUCT_POP_ACTIVE, PROFILE_ACTIVE } from "./ActionType";

const initialState ={
    category : [],
    product : [],
    userDetail : [],
    loginActive : false,
    productPopUpActive : false,
    profileActive : false,
    cartActive : false,
    activeUserDetail : '',
    currentProduct : 1,
    cart:[],
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
            loginActive : !state.loginActive,
            productPopUpActive : false,
            profileActive:false,
            cartActive : false
        }

        case PRODUCT_POP_ACTIVE: return{
            ...state,
            productPopUpActive : !state.productPopUpActive,
            loginActive : false,
            profileActive:false,
            cartActive : false
        }

        case ACTIVE_USER: return{
            ...state,
            activeUserDetail : action.payload
        }

        case CURRENT_PRODUCT: return{
            ...state,
            currentProduct : action.payload
        }

        case ADD_TO_CART : return{
            ...state,
            cart : [...state.cart, action.payload]
        }

        case PROFILE_ACTIVE: return{
            ...state,
            profileActive : !state.profileActive,
            loginActive : false,
            productPopUpActive:false,
            cartActive : false
        }

        case CART_ACTIVE: return{
            ...state,
            cartActive : !state.cartActive,
            loginActive : false,
            productPopUpActive:false,
            profileActive : false
        }

        default : return state
    }
}

export default Reducer;