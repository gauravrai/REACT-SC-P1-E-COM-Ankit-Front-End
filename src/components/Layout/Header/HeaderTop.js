import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import { logout } from '../../../actions/auth'
import { getCartData } from '../../../actions/cart'
import { getWishlistData } from '../../../actions/wishlist'


const HeaderTop = ({auth: { isAuthenticated, loading }, logout, getCartData, cart, getWishlistData, wishlist}) => {
    
    useEffect(() => {
        getCartData()
    }, [getCartData])
    useEffect(() => {
        getWishlistData()
    }, [getWishlistData])

    let cartItemCount = 0, 
        wishlistItemCount = 0
    
    if(cart.cartItems.cartData)
        cartItemCount = cart.cartItems.cartData.quantity
    if(wishlist.wishlistItems.length)
        wishlistItemCount = wishlist.wishlistItems.length

    let authLinks = <li><Link to="/auth"><i className="fa fa-lock"></i> Login/Register</Link></li>
    if(!loading){
        if(isAuthenticated){
            authLinks = <li><Link to="#!" onClick={logout}><i className="fa fa-power-off"></i> Logout</Link></li>
        }
    }
    return (
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="contactinfo">
                            <ul className="nav nav-pills">
                                <li><Link to="#"><i className="fa fa-phone"></i> {process.env.REACT_APP_SITE_PHONE}</Link></li>
                                <li><Link to="#"><i className="fa fa-envelope"></i> {process.env.REACT_APP_SITE_EMAIL}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="shop-menu pull-right">
                            <ul className="nav navbar-nav">
                                <li><Link to="/customer/"><i className="fa fa-user"></i> Account</Link></li>
                                <li><Link to="/customer/wishlist"><i className="fa fa-star"></i> Wishlist ({ wishlistItemCount })</Link></li>
                                <li><Link to="/customer/checkout"><i className="fa fa-crosshairs"></i> Checkout</Link></li>
                                <li><Link to="/cart"><i className="fa fa-shopping-cart"></i> Cart ({ cartItemCount })</Link></li>
                                { authLinks }
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-8 hide">
                        <div className="social-icons pull-right hide">
                            <ul className="nav navbar-nav">
                                <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-dribbble"></i></Link></li>
                                <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
HeaderTop.propTypes = {
    logout: PropTypes.func.isRequired,//logoutout action ptfr
    auth: PropTypes.object.isRequired, //object ptor
}
const mapStateToProps = state => {
    return {
        auth: state.auth,
        cart: state.cart,
        wishlist: state.wishlist
    }
}

export default connect(mapStateToProps, { 
    logout,
    getCartData,
    getWishlistData
})(HeaderTop)
