import axios from '../config/axios'
import { setAlert } from './alert'
import {v4 as uuid} from 'uuid'


import {
    GET_COUNTRY_BILLING,
    GET_STATE_BILLING,
    GET_CITY_BILLING,
    GET_PINCODE_BILLING,
    GET_AREA_BILLING,
    GET_SOCIETY_BILLING,
    GET_TOWER_BILLING,
    GET_STATE_SHIPPING,
    GET_CITY_SHIPPING,
    GET_PINCODE_SHIPPING,
    GET_AREA_SHIPPING,
    GET_SOCIETY_SHIPPING,
    GET_TOWER_SHIPPING,
    LOCATION_REQUEST,
    LOCATION_ERROR
} from './types'

export const getCountry = () => async dispatch => {
    dispatch({
        type: GET_COUNTRY_BILLING
    })
}

//state
export const getState = () => async dispatch => {
    dispatch({
        type: LOCATION_REQUEST
    })
    try {
        const res = await axios.get('/state')
        
        dispatch({
            type: GET_STATE_BILLING,
            payload: res.data.data
        })
    }catch (e) {
        dispatch({
            type: LOCATION_ERROR
        })
    }
}

export const getCity = (stateId, addressType = 'billingAddress') => async dispatch => {
    dispatch({
        type: LOCATION_REQUEST
    })
    console.log('state', stateId)
    try {
        const res = await axios.get('/city?stateId=' + stateId)
        
            let dispatchObj = {
                type: GET_CITY_BILLING,
                payload: res.data.data
            }
            if(addressType === 'shippingAddress'){
                dispatchObj = {
                    type: GET_CITY_SHIPPING,
                    payload: res.data.data
                }
            }
        

        dispatch(dispatchObj)
    }catch (e) {
        dispatch({
            type: LOCATION_ERROR
        })
    }
}

export const getPincode = (cityId, addressType = 'billingAddress') => async dispatch => {
    dispatch({
        type: LOCATION_REQUEST
    })
    try {
        const res = await axios.get('/pincode?cityId=' + cityId)
        let dispatchObj = {
            type: GET_PINCODE_BILLING,
            payload: res.data.data
        }
        if(addressType === 'shippingAddress'){
            dispatchObj = {
                type: GET_PINCODE_SHIPPING,
                payload: res.data.data
            }
        }
        dispatch(dispatchObj)
    }catch (e) {
        dispatch({
            type: LOCATION_ERROR
        })
    }
}

export const getArea = (pincodeId, addressType = 'billingAddress') => async dispatch => {
    dispatch({
        type: LOCATION_REQUEST
    })
    try {
        const res = await axios.get('/area?pincodeId=' + pincodeId)
        let dispatchObj = {
            type: GET_AREA_BILLING,
            payload: res.data.data
        }
        if(addressType === 'shippingAddress'){
            dispatchObj = {
            type: GET_AREA_SHIPPING,
            payload: res.data.data
        }
        }
        dispatch(dispatchObj)
    }catch (e) {
        dispatch({
            type: LOCATION_ERROR
        })
    }
}

export const getSociety = (areaId, addressType = 'billingAddress') => async dispatch => {
    dispatch({
        type: LOCATION_REQUEST
    })
    try {
        const res = await axios.get('/societies?areaId=' + areaId)
        let dispatchObj = {
            type: GET_SOCIETY_BILLING,
            payload: res.data.data
        }
        if(addressType === 'shippingAddress'){
            dispatchObj = {
            type: GET_SOCIETY_SHIPPING,
            payload: res.data.data
        }
        }
        dispatch(dispatchObj)
    }catch (e) {
        dispatch({
            type: LOCATION_ERROR
        })
    }
}



export const getTower = (societyId, addressType = 'billingAddress') => async dispatch => {
    dispatch({
        type: LOCATION_REQUEST
    })
    try {
        const res = await axios.get('/tower?societyId=' + societyId)
        let dispatchObj = {
            type: GET_TOWER_BILLING,
            payload: res.data.data
        }
        if(addressType === 'shippingAddress'){
            dispatchObj = {
                type: GET_TOWER_SHIPPING,
                payload: res.data.data
            }
        }
        dispatch(dispatchObj)
    }catch (e) {
        dispatch({
            type: LOCATION_ERROR
        })
    }
}