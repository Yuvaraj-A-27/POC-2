import { ACTIVE_USER, INITIAL_CATEGORY, INITIAL_PRODUCT, INITIAL_USER_DETAIL, LOGIN_ACTIVE } from "./ActionType"

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