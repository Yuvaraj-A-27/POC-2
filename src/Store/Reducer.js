import { ACTIVE_USER, ADD_TO_CART, ADD_TO_WISHLIST, CART_ACTIVE, CREATE_USER, CURRENT_PRODUCT, INITIAL_CATEGORY, INITIAL_PRODUCT, INITIAL_USER_DETAIL, LEFT_NAVBAR_ACTIVE, LOGIN_ACTIVE, PRODUCT_POP_ACTIVE, PROFILE_ACTIVE, REGISTER_ACTIVE, REMOVE_FROM_CART, WISHLIST_ACTIVE } from "./ActionType";

const initialState ={
    category : [],
    product : [],
    userDetail : [],
    loginActive : false,
    productPopUpActive : false,
    profileActive : false,
    cartActive : false,
    registerActive : false,
    leftNavBarActive : false,
    wishListActive: false,
    // loginError : false,
    activeUserDetail : '',
    currentProduct : 1,
    cart:[],
    wishList : []
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
            wishListActive: false,
        }

        case PRODUCT_POP_ACTIVE: return{
            ...state,
            productPopUpActive : !state.productPopUpActive,
            loginActive : false,
            profileActive:false,
            // cartActive : false,
            registerActive : false,
            // wishListActive: false,
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

        case REMOVE_FROM_CART : return{
            ...state,
            cart : action.payload
        }

        case PROFILE_ACTIVE: return{
            ...state,
            profileActive : !state.profileActive,
            loginActive : false,
            productPopUpActive:false,
            cartActive : false,
            registerActive : false,
            wishListActive: false,
        }

        case CART_ACTIVE: return{
            ...state,
            cartActive : !state.cartActive,
            loginActive : false,
            productPopUpActive:false,
            profileActive : false,
            registerActive : false,
            wishListActive: false,
        }

        case REGISTER_ACTIVE : return{
            ...state,
            registerActive : !state.registerActive,
            cartActive : false,
            loginActive : false,
            productPopUpActive:false,
            profileActive : false,
            wishListActive: false,
        }

        case CREATE_USER : return{
            ...state,
            userDetail : [...state.userDetail, action.payload]
        }

        case LEFT_NAVBAR_ACTIVE : return{
            ...state,
            leftNavBarActive : !state.leftNavBarActive
        }

        case WISHLIST_ACTIVE : return{
            ...state,
            registerActive : false,
            cartActive : false,
            loginActive : false,
            productPopUpActive:false,
            profileActive : false,
            wishListActive: !state.wishListActive,
        }

        case ADD_TO_WISHLIST : return{
            ...state,
            wishList : action.payload
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