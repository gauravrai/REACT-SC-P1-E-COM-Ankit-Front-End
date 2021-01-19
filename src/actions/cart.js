import axios from '../config/axios'
import { setAlert } from './alert'
import {v4 as uuid} from 'uuid'
import {
    CART_REQUEST,
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    CART_ERROR,
    GET_CART_DATA
} from './types'


const getCartDataOfUser = () => async dispatch => {
    const userId = localStorage.getItem('user')
    try {
        const resp = await axios.get('/getCartData?userId=' + userId)
        
        dispatch({
            type: GET_CART_DATA,
            payload: resp.data.data
        })
    }catch (e) {
        dispatch({
            type: CART_ERROR
        })
    }
}

//add product in cart
export const addToCart = (productDetail) => async dispatch => {

    let lbSessionId = localStorage.getItem('lbSessionId')
    if(!lbSessionId)
        lbSessionId = uuid()
    
    dispatch({type: CART_REQUEST})
    const {productId, varientId, quantity, price} = productDetail
    const body = JSON.stringify({
        userId: localStorage.getItem('user'),
        productId: productId,
        varientId: varientId,
        price: price,
        quantity: quantity,
        moveToWishlist: 0,
        sessionId: lbSessionId
    })

    try {
        const res = await axios.post('/addToCart', body)

        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: res.data.data
        })

        dispatch(getCartDataOfUser())
        dispatch(setAlert('Item added in your cart', 'success'))
    } catch (e) {
        dispatch(setAlert('Error occurred while adding your product item', 'danger'))
        dispatch({
            type: CART_ERROR
        })
    }
}

//get cart data
export const getCartData = () => async dispatch => {
    
    dispatch({type: CART_REQUEST})
    try {
        dispatch(getCartDataOfUser())
    } catch (e) {
        //dispatch(setAlert('Your cart is empty', 'danger'))
        dispatch({
            type: CART_ERROR
        })
    }
}
//remove item from cart
export const removeProductFromCart = (cartItemId) => async dispatch => {
    const body = JSON.stringify({
        cartItemId : cartItemId
    })
    dispatch({type: CART_REQUEST})
    try {
        const res = await axios.post('/removeFromCart', body)
        
        dispatch({
            type: REMOVE_PRODUCT_FROM_CART,
            payload: res.data.data
        })

        dispatch(getCartDataOfUser())
        dispatch(setAlert('Item removed from your cart', 'success'))
    } catch (e) {
        dispatch(setAlert('Error occurred while removing cart items', 'danger'))
        dispatch({
            type: CART_ERROR
        })
    }
}

//update quantity in cart
export const updateQuantityInCart = (productDetail) => async dispatch => {
    let lbSessionId = localStorage.getItem('lbSessionId')
    dispatch({type: CART_REQUEST})
    const {productId, varientId, quantity, price} = productDetail
    const body = JSON.stringify({
        userId: localStorage.getItem('user'),
        productId: productId,
        varientId: varientId,
        price: price,
        quantity: quantity,
        moveToWishlist: 0,
        sessionId: lbSessionId
    })

    try {
        const res = await axios.post('/addToCart', body)

        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: res.data.data
        })
        dispatch(getCartDataOfUser())
        dispatch(setAlert('Quantity updated in your cart', 'success'))
    } catch (e) {
        dispatch(setAlert('Error occurred while adding your product item', 'danger'))
        dispatch({
            type: CART_ERROR
        })
    }
}
