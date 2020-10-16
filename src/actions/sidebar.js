import { GET_CATEGORY, GET_SIDEBAR_ERROR, GET_BRAND } from './types'
//import { v4 as uuid } from 'uuid'
import axios from '../config/axios'
//import { setAlert } from './alert'


export const getSideBar = () => async dispatch => {
    try {
        //fetch categories
        const res = await axios.get('/categories') 
        //dispatch category data
        dispatch({
            type: GET_CATEGORY,
            payload: res.data.data
        })

        //fetch brands
        const brands = await axios.get('/brand')
        dispatch({
            type: GET_BRAND,
            payload: brands.data.data
        })
    } catch (e) {
        dispatch({
            type: GET_SIDEBAR_ERROR,
            payload: { msg: e.message, status: e.status}
        })
    }
}
