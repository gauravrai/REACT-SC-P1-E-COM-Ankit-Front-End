import {
    PROFILE_REQUEST,
    GET_PROFILE,
    PROFILE_ERROR,
    PROFILE_UPDATE
} from '../actions/types'

const initialState = {
    profile: null,
    loading: true
}

export default function (state = initialState, action){
    const { type, payload } = action

    switch (type){
        case PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_PROFILE:
            return {
                ...state,
                loading: false,
                profile: payload
            }
        case PROFILE_UPDATE:
            return {
                ...state,
                loading: false,
                profile: payload
            }
        case PROFILE_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}