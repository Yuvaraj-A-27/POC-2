import { ACTIVE_USER, ADD_TO_CART, CART_ACTIVE, CURRENT_PRODUCT, INITIAL_CATEGORY, INITIAL_PRODUCT, INITIAL_USER_DETAIL, LOGIN_ACTIVE, PRODUCT_POP_ACTIVE, PROFILE_ACTIVE } from "./ActionType"

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

export const addToCart = (id) =>{
    return{
        type:ADD_TO_CART,
        payload: id
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