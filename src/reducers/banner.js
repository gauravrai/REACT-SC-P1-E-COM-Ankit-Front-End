import {
    BANNER_REQUEST, 
    BANNER_GET, 
    BANNER_ERROR
} from '../actions/types'

const initialState = {
    banners: {},
    loading: true
}


export default function (state = initialState, action){
    const { type, payload } = action

    switch (type){
        case BANNER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case BANNER_GET:
            return {
                ...state,
                loading: false,
                banners: payload
            }
        case BANNER_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}