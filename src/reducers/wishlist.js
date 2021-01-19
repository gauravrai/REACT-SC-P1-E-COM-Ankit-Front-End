import {
    WISHLIST_REQUEST,
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST,
    WISHLIST_ERROR,
    GET_WISHLIST_DATA
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    loading: false,
    wishlistItems: {},
    wishlistModified: true, //remove this one also
    user: localStorage.getItem('user') //REMOVE THIS IF NOT REQUIRED
}


export default function (state = initialState, action){
    const { type, payload } = action
    
    switch (type){
        case WISHLIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_PRODUCT_TO_WISHLIST:
            return {
                ...state,
                loading: false,
                isAuthenticated: false
            }
        case GET_WISHLIST_DATA:
            return {
                ...state,
                loading: false,
                wishlistItems: payload
            }
        case REMOVE_PRODUCT_FROM_WISHLIST:
            return {
                ...state,
                loading: false,
                wishlistItems: payload
            }
        case WISHLIST_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}