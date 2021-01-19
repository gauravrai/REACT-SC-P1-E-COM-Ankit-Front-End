import axios from '../config/axios'
import { setAlert } from './alert'
import {v4 as uuid} from 'uuid'


import {
    WISHLIST_REQUEST,
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST,
    WISHLIST_ERROR,
    GET_WISHLIST_DATA
} from './types'

const getWishlistDataOfUser = () => async dispatch => {
    const userId = localStorage.getItem('user')
    try {
        const res = await axios.get('/getWishlistOfUser?userId=' + userId)
        
        dispatch({
            type: GET_WISHLIST_DATA,
            payload: res.data.data
        })
    }catch (e) {
        dispatch({
            type: WISHLIST_ERROR
        })
    }
}
//add product in WISHLIST
export const addToWishlist = (productDetail) => async dispatch => {

    let lbSessionId = localStorage.getItem('lbSessionId')
    if(!lbSessionId)
        lbSessionId = uuid()
    
    dispatch({type: WISHLIST_REQUEST})
    const { productId } = productDetail
    const userId = localStorage.getItem('user')
    const body = JSON.stringify({
        userId: userId,
        productId: productId
    })

    try {
        const res = await axios.post('/addWishlist', body)

        dispatch({
            type: ADD_PRODUCT_TO_WISHLIST,
            payload: res.data.data
        })
        dispatch(getWishlistDataOfUser())

        dispatch(setAlert('Item added in your wishlist', 'success'))
    } catch (e) {
        dispatch(setAlert('Error occurred while adding item in the wihslist', 'danger'))
        dispatch({
            type: WISHLIST_ERROR
        })
    }
}
//get wishlist data
export const getWishlistData = () => dispatch => {
    dispatch({type: WISHLIST_REQUEST})
    dispatch(getWishlistDataOfUser())  
}

//remove item from wishlist
export const removeProductFromWishlist = (productId) => async dispatch => {
    const userId = localStorage.getItem('user')
    const body = JSON.stringify({
        productId,
        userId
    })
    dispatch({type: WISHLIST_REQUEST})
    try {
        const res = await axios.post('/removeWishlist', body)
        dispatch({
            type: REMOVE_PRODUCT_FROM_WISHLIST,
            payload: res.data.data
        })

        dispatch(getWishlistDataOfUser())
        dispatch(setAlert('Item removed from your Wishlist', 'success'))
    } catch (e) {
        dispatch(setAlert('Error occurred while removing Wishlist items', 'danger'))
        dispatch({
            type: WISHLIST_ERROR
        })
    }
}
