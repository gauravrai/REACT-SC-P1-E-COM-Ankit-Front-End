import {
    GET_CATEGORY,
    GET_SIDEBAR_ERROR,
    GET_BRAND
} from '../actions/types'

const initialState = {
    categories: [],
    category: null,
    brands: [],
    brand: null,
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action
    
    switch(type){
        case GET_CATEGORY:
            return {
                ...state,
                categories: payload,
                loading: false
            }
        case GET_SIDEBAR_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case GET_BRAND:
            return {
                ...state,
                brands: payload,
                loading: false
            }
        default:
            return state
    }
}