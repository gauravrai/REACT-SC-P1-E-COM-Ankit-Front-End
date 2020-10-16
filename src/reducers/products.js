import { GET_PRODUCTS, GET_PRODUCTS_ERROR } from "../actions/types"

const initialState = {
    featuredProducts: [],
    loading: true,
    filter: null,
    error: {}
}

export default function (state = initialState, action){
    const { type, payload } = action

    switch (type){
        case GET_PRODUCTS:
            return {
                ...state,
                featuredProducts: payload,
                loading: false
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}