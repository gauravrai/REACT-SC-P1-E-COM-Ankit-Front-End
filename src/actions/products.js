import { GET_PRODUCTS, GET_PRODUCTS_ERROR } from './types'
import axios from '../config/axios'

export const getFeaturedProducts = () => async dispatch => {
    try {
        //fetch featured products
        const res = await axios.get('/product') 
        //dispatch product data
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data.data
        })
    } catch (e) {
        dispatch({
            type: GET_PRODUCTS_ERROR,
            payload: { msg: e.message, status: e.status}
        })
    }
}
