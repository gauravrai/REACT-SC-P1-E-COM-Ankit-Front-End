import axios from '../config/axios'
import { setAlert } from './alert'
import setAuthTOken from '../utils/setAuthToken'
import {
    AUTH_FAIL,
    AUTH_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    OTP_RECEIVED,
    OTP_REQUEST_SENT,
    OTP_VALIDATE_REQUEST,
    LOGOUT
} from './types'

//load user
export const loadUser = () => async dispatch => {
    console.log(localStorage.token)
    if(localStorage.token){
        setAuthTOken(localStorage.token)
    }
    try {
        
        const res = await axios.post('/customer')
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

//authenticate user
export const getOtp = ({mobileNumber}) => async dispatch => {
    const body = JSON.stringify({ "mobile": mobileNumber })

    try {
        dispatch({type: OTP_REQUEST_SENT})
        const res = await axios.post('/addcustomer', body)
        dispatch({
            type: OTP_RECEIVED,
            payload: res.data
        })
    } catch (e) {
        let errors = e.response.data.error
        if(errors){
            errors.forEach(err => dispatch(setAlert(err.message, 'danger')))
        }
        dispatch({
            type: AUTH_FAIL
        })
    }
}

//authenticate user
export const matchOtpAndMobile = ({mobileNumber, otp}) => async dispatch => {
    const body = JSON.stringify({
        mobile: mobileNumber,
        otp: otp
    })

    try {
        
        dispatch({type: OTP_VALIDATE_REQUEST})
        const res = await axios.post('/checkcustomerotp', body)

        //const localStorageToken = localStorage.getItem('token')

        // if(!localStorageToken)
        //     localStorage.setItem('token', res.data.data.token)
        // const expirationDate = new Date (new Date().getTime() + (100 * 100000))
        // localStorage.setItem('expirationDate', expirationDate)
        // localStorage.setItem('mobile', res.data.data.customer.mobile)
        dispatch({
            type: AUTH_SUCCESS,
            payload: res.data.data
        })
    } catch (e) {
        
        dispatch(setAlert('Enter correct OTP', 'danger'))
        dispatch({
            type: AUTH_FAIL
        })
    }
}

//logout
export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}