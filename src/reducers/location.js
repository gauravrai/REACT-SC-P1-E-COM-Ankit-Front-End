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
} from '../actions/types'

const initialState = {
    loading: true,
    billingAddress: {
        state: {
            loading: true
        },
        country: {},
        city: {
            loading: true
        },
        pincode: {
            loading: true
        },
        area: {
            loading: true
        },
        society: {
            loading: true
        },
        tower: {
            loading: true
        }
    },
    shippingAddress: {
        state: {
            loading: true
        },
        country: {},
        city: {
            loading: true
        },
        pincode: {
            loading: true
        },
        area: {
            loading: true
        },
        society: {
            loading: true
        },
        tower: {
            loading: true
        }
    }
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case GET_COUNTRY_BILLING:
            return {
                ...state,
                country: payload,
                loading: false
            }
        case GET_STATE_BILLING:
            return {
                ...state,
                billingAddress: {
                    ...state.billingAddress,
                    state: {
                        payload,
                        loading: false
                    }
                },
                loading: false
            }
        case GET_CITY_BILLING:
            return {
                ...state,
                billingAddress: {
                    ...state.billingAddress,
                    city: {
                        payload,
                        loading: false
                    },
                },
                
                loading: false
            }
        case GET_PINCODE_BILLING:
            return {
                ...state,
                billingAddress: {
                    ...state.billingAddress,
                    pincode: {
                        payload,
                        loading: false
                    },
                },
                
                loading: false
            } 
        case GET_AREA_BILLING:
            return {
                ...state,
                billingAddress: {
                    ...state.billingAddress,
                    area: {
                        payload,
                        loading: false
                    },
                },
                
                loading: false
            } 
        case GET_SOCIETY_BILLING:
            return {
                ...state,
                billingAddress: {
                    ...state.billingAddress,
                    society: {
                        payload,
                        loading: false
                    },
                },
                
                loading: false
            }
        case GET_TOWER_BILLING:
            return {
                ...state,
                billingAddress: {
                    ...state.billingAddress,
                    tower: {
                        payload,
                        loading: false
                    },
                },
                
                loading: false
            }
        case GET_STATE_SHIPPING:
            return {
                ...state,
                shippingAddress: {
                    ...state.shippingAddress,
                    state: {
                        payload,
                        loading: false
                    }
                },
                loading: false
            }
        case GET_CITY_SHIPPING:
            return {
                ...state,
                shippingAddress: {
                    ...state.shippingAddress,
                    city: {
                        payload,
                        loading: false
                    },
                },
                
                loading: false
            }
        case GET_PINCODE_SHIPPING:
            return {
                ...state,
                shippingAddress: {
                    ...state.shippingAddress,
                    pincode: {
                        payload,
                        loading: false
                    },
                },
                
                loading: false
            } 
        case GET_AREA_SHIPPING:
            return {
                ...state,
                shippingAddress: {
                    ...state.shippingAddress,
                    area: {
                        payload,
                        loading: false
                    },
                },
                
                loading: false
            } 
        case GET_SOCIETY_SHIPPING:
            return {
                ...state,
                shippingAddress: {
                    ...state.shippingAddress,
                    society: {
                        payload,
                        loading: false
                    },
                },
                
                loading: false
            }
        case GET_TOWER_SHIPPING:
            return {
                ...state,
                shippingAddress: {
                    ...state.shippingAddress,
                    tower: {
                        payload,
                        loading: false
                    },
                },
                
                loading: false
            }
        case LOCATION_REQUEST:
            return {
                ...state,
                loading: true
            }    
        case LOCATION_ERROR:
            return {
                ...state,
                loading: false
            }        
        default: 
            return state
    }
}