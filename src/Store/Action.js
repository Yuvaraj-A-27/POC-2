import { INITIAL_CATEGORY, INITIAL_PRODUCT, LOGIN_ACTIVE } from "./ActionType"

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

export const loginActive = ()=>{
    return{
        type: LOGIN_ACTIVE,
    }
}