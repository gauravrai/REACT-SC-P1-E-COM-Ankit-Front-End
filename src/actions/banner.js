import { BANNER_REQUEST, BANNER_GET, BANNER_ERROR } from './types'
import axios from '../config/axios'

export const getBanner = () => async dispatch => {
    try {
        //fetch featured products
        const res = await axios.get('/getOffer?requestFrom=website') 
        //dispatch product data
        dispatch({
            type: BANNER_GET,
            payload: res.data.data
        })
    } catch (e) {
        dispatch({
            type: BANNER_ERROR,
            payload: { msg: e.message, status: e.status}
        })
    }
}
