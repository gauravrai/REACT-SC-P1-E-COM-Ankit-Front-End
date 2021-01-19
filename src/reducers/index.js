import { combineReducers } from 'redux'

import alert from './alert'
import sidebar from './sidebar'
import auth from './auth'
import products from './products'
import profile from './profile'
import banner from './banner'
import cart from './cart'
import wishlist from './wishlist'
import location from './location'


export default combineReducers({
    alert,
    sidebar,
    auth,
    products,
    banner,
    cart,
    wishlist,
    profile,
    location
})