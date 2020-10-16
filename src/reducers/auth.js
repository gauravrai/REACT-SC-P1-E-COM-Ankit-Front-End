import {
    AUTH_SUCCESS,
    AUTH_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    OTP_RECEIVED,
    OTP_REQUEST_SENT,
    OTP_VALIDATE_REQUEST, 
    LOGOUT
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null, //OTP validated
    loading: true,
    user: null,
    otpReceived: false,
}


export default function (state = initialState, action){
    const { type, payload } = action
    
    switch (type){
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case OTP_RECEIVED:
            return {
                ...state,
                ...payload,
                loading: false,
                otpReceived: true
            }
        case OTP_REQUEST_SENT:
            return {
                ...state,
                loading: true,
                otpReceived: false
            }
        case OTP_VALIDATE_REQUEST:
            return {
                ...state,
                loading: true,
                isAuthenticated: false
            }
        case AUTH_SUCCESS:
            localStorage.setItem('token', payload.token)
            localStorage.setItem('mobile', payload.customer.mobile)
            return {
                ...state,
                ...payload,
                loading: false,
                isAuthenticated: true
            }
        case AUTH_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
                localStorage.removeItem('token')
                localStorage.removeItem('mobile')
                return {
                    ...state,
                    token: null,
                    loading: false,
                    isAuthenticated: false,
                    otpReceived: false
                }
        default:
            return state
    }
}