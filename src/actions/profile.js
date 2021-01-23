import axios from '../config/axios'
import { setAlert } from './alert'


import {
    PROFILE_REQUEST,
    GET_PROFILE,
    PROFILE_ERROR,
    PROFILE_UPDATE,
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
} from '../actions/types'


//get current profile
export const updateProfile = (profile) => async dispatch => {
    dispatch({type: PROFILE_REQUEST})
    const body = JSON.stringify({
        ...profile, 
        billingCountry: 'India', 
        sameAsBillingAddress: profile.sameAsBillingAddress,
        billingState: profile.billingAddress.state, 
        billingCity: profile.billingAddress.city, 
        billingPincode: profile.billingAddress.pincode, 
        billingArea: profile.billingAddress.area, 
        billingSociety: profile.billingAddress.society, 
        billingTower: profile.billingAddress.tower, 
        billingAddress: profile.billingAddress.address,
        shippingAddress: profile.shippingAddress.address, 
        shippingCountry: 'India', 
        shippingState: profile.shippingAddress.state, 
        shippingCity: profile.shippingAddress.city,
        shippingPincode: profile.shippingAddress.pincode,
        shippingArea: profile.shippingAddress.area, 
        shippingSociety: profile.shippingAddress.society, 
        shippingTower: profile.shippingAddress.tower
    })
    
    const res = await axios.post('/update_customerprofile', body)
    try {
        dispatch({
            type: GET_PROFILE,
            payload: res.data.data
        })
    } catch (e) {
        
        dispatch(setAlert('Something went wrong', 'danger'))
        dispatch({
            type: PROFILE_ERROR
        })
    }
}
//get current profile
export const getCurrentProfile = () => async dispatch => {
    dispatch({type: PROFILE_REQUEST})
    try {
        const userId = localStorage.getItem('user')
        if(!userId){
            dispatch({
                type: PROFILE_ERROR
            })
        }

        const resp = await axios.get('/getUserData?userId='+userId)
        
        dispatch({
            type: GET_PROFILE,
            payload: resp.data.data
        })
        
        //get state
        const stateResp = await axios.get('/state')
        dispatch({
            type: GET_STATE_BILLING,
            payload: stateResp.data.data
        })

        //get city
        if(resp.data.data.billingAddress.state){
            const cityResp = await axios.get('/city?stateId=' + resp.data.data.billingAddress.state)
            dispatch({
                type: GET_CITY_BILLING,
                payload: cityResp.data.data
            })
        }

        if(resp.data.data.billingAddress.city){
            const pincodeResp = await axios.get('/pincode?cityId=' + resp.data.data.billingAddress.city)
            dispatch({
                type: GET_PINCODE_BILLING,
                payload: pincodeResp.data.data
            })
        }

        if(resp.data.data.billingAddress.pincode){
            const areaResp = await axios.get('/area?pincodeId=' + resp.data.data.billingAddress.pincode)
            dispatch({
                type: GET_AREA_BILLING,
                payload: areaResp.data.data
            })
        }

        if(resp.data.data.billingAddress.area){
            const societyResp = await axios.get('/societies?areaId=' + resp.data.data.billingAddress.area)
            dispatch({
                type: GET_SOCIETY_BILLING,
                payload: societyResp.data.data
            })
        }

        if(resp.data.data.billingAddress.society){
            const towerResp = await axios.get('/tower?societyId=' + resp.data.data.billingAddress.society)
            dispatch({
                type: GET_TOWER_BILLING,
                payload: towerResp.data.data
            })
        }


        //shipping address
        //get city
        if(resp.data.data.shippingAddress.state){
            const cityRespShipping = await axios.get('/city?stateId=' + resp.data.data.shippingAddress.state)
            dispatch({
                type: GET_CITY_SHIPPING,
                payload: cityRespShipping.data.data
            })
        }

        if(resp.data.data.shippingAddress.city){
            const pincodeRespShipping = await axios.get('/pincode?cityId=' + resp.data.data.shippingAddress.city)
            dispatch({
                type: GET_PINCODE_SHIPPING,
                payload: pincodeRespShipping.data.data
            })
        }

        if(resp.data.data.shippingAddress.pincode){
            const areaRespShipping = await axios.get('/area?pincodeId=' + resp.data.data.shippingAddress.pincode)
            dispatch({
                type: GET_AREA_SHIPPING,
                payload: areaRespShipping.data.data
            })
        }

        if(resp.data.data.shippingAddress.area){
            const societyRespShipping = await axios.get('/societies?areaId=' + resp.data.data.shippingAddress.area)
            dispatch({
                type: GET_SOCIETY_SHIPPING,
                payload: societyRespShipping.data.data
            })
        }

        if(resp.data.data.shippingAddress.society){
            const towerRespShipping = await axios.get('/tower?societyId=' + resp.data.data.shippingAddress.society)
            dispatch({
                type: GET_TOWER_SHIPPING,
                payload: towerRespShipping.data.data
            })
        }

    }catch (e) {
        
        dispatch({
            type: PROFILE_ERROR
        })
    }
    
}