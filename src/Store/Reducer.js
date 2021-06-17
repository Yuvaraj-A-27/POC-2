import { ACTIVE_USER, ADD_TO_CART, CART_ACTIVE, CREATE_USER, CURRENT_PRODUCT, INITIAL_CATEGORY, INITIAL_PRODUCT, INITIAL_USER_DETAIL, LOGIN_ACTIVE, LOGIN_ERROR, LOGIN_ERROR_TYPING, PRODUCT_POP_ACTIVE, PROFILE_ACTIVE, REGISTER_ACTIVE } from "./ActionType";

const initialState ={
    category : [],
    product : [],
    userDetail : [],
    loginActive : false,
    productPopUpActive : false,
    profileActive : false,
    cartActive : false,
    registerActive : false,
    // loginError : false,
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
            cartActive : false,
            registerActive : false,
        }

        case PRODUCT_POP_ACTIVE: return{
            ...state,
            productPopUpActive : !state.productPopUpActive,
            loginActive : false,
            profileActive:false,
            cartActive : false,
            registerActive : false,
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
            cartActive : false,
            registerActive : false,
        }

        case CART_ACTIVE: return{
            ...state,
            cartActive : !state.cartActive,
            loginActive : false,
            productPopUpActive:false,
            profileActive : false,
            registerActive : false,
        }

        case REGISTER_ACTIVE : return{
            ...state,
            registerActive : !state.registerActive,
            cartActive : false,
            loginActive : false,
            productPopUpActive:false,
            profileActive : false
        }

        case CREATE_USER : return{
            ...state,
            userDetail : [...state.userDetail, action.payload]
        }

        // case LOGIN_ERROR : return{
        //     ...state,
        //     loginError : true
        // }

        // case LOGIN_ERROR_TYPING : return{
        //     ...state,
        //     loginError : false
        // }

        default : return state
    }
}

export default Reducer;