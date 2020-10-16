import { combineReducers } from 'redux'

import alert from './alert'
import sidebar from './sidebar'
import auth from './auth'
import products from './products'
import profile from './profile'


export default combineReducers({
    alert,
    sidebar,
    auth,
    products
})