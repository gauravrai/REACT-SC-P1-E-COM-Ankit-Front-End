import {
    SET_ALERT,
    REMOVE_ALERT,
    CART_REQUEST,
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    CART_ERROR,
    GET_CART_DATA
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    loading: false,
    cartItems: {},
    cartModified: true,
    user: localStorage.getItem('user')
}


export default function (state = initialState, action){
    const { type, payload } = action
    
    switch (type){
        case CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                loading: false,
                isAuthenticated: false
            }
        case GET_CART_DATA:
            return {
                ...state,
                loading: false,
                cartItems: payload
            }
        case REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                loading: false,
                cartItems: payload
            }
        case CART_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}