import { ACTIVE_USER, ADD_TO_CART, ADD_TO_WISHLIST, CART_ACTIVE, CREATE_USER, CURRENT_PRODUCT, INITIAL_CATEGORY, INITIAL_PRODUCT, INITIAL_USER_DETAIL, LEFT_NAVBAR_ACTIVE, LOGIN_ACTIVE, PRODUCT_POP_ACTIVE, PROFILE_ACTIVE, REGISTER_ACTIVE, REMOVE_FROM_CART, WISHLIST_ACTIVE } from "./ActionType"

export const initialCategory = (value) =>{
    return{
        type: INITIAL_CATEGORY,
        payload : value
    }
}

export const initialProduct = (value) =>{
    return{
        type: INITIAL_PRODUCT,
        payload : value
    }
}

export const initialUserDetail = (value) =>{
    return{
        type:INITIAL_USER_DETAIL,
        payload : value
    }
}


export const loginActive = ()=>{
    return{
        type: LOGIN_ACTIVE,
    }
}

export const activeUser = (value)=>{
    return{
        type: ACTIVE_USER,
        payload: value
    }
}

export const productPopUpActive = ()=>{
    return{
        type: PRODUCT_POP_ACTIVE,
    }
}

export const currentProduct = (id) =>{
    return{
        type: CURRENT_PRODUCT,
        payload : id
    }
}

export const addToCart = (productId, userId) =>{
    return{
        type:ADD_TO_CART,
        payload: {
            productId,
            userId
        }
    }
}

export const removeFromCart = (value) =>{
    return{
        type : REMOVE_FROM_CART,
        payload : value
    }
}

export const profileActive = ()=>{
    return{
        type:PROFILE_ACTIVE,
    }
}

export const cartActive = () =>{
    return{
        type: CART_ACTIVE,
    }
}

export const registerActive = () =>{
    return{
        type : REGISTER_ACTIVE,
    }
}

export const createUser = (value) =>{
    return{
        type : CREATE_USER,
        payload : value
    }
}

export const leftNavBarActive = () =>{
    return{
        type: LEFT_NAVBAR_ACTIVE
    }
}

export const wishListActive = () =>{
    return{
        type : WISHLIST_ACTIVE
    }
}

export const addToWishList = (value) =>{
    return{
        type : ADD_TO_WISHLIST,
        payload : value
    }
}
// export const loginError = ()=>{
//     return{
//         type : LOGIN_ERROR
//     }
// }

// export const loginErrorTyping = () =>{
//     return{
//         type : LOGIN_ERROR_TYPING
//     }
// }