import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import { logout } from '../../../actions/auth'
import Logo from '../../../assets/images/home/logo.png'

//pull out auth and then destructure it, also pull out logout action below
const HeaderMiddle = ({auth: { isAuthenticated, loading }, logout}) => {

    let authLinks = <li><Link to="/auth"><i className="fa fa-lock"></i> Login/Register</Link></li>
    
    
    if(!loading){
        if(isAuthenticated){
            authLinks = <li><Link to="#!" onClick={logout}><i className="fa fa-power-off"></i> Logout</Link></li>
        }
    }

    return (
        <div className="header-middle">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="logo pull-left">
                            <Link to="/"><img src={Logo} alt="" width="120" /></Link>
                        </div>
                        <div className="btn-group pull-right hide">
                            <div className="btn-group">
                                <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                    USA
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link to="#">Canada</Link></li>
                                    <li><Link to="#">UK</Link></li>
                                </ul>
                            </div>
                            
                            <div className="btn-group">
                                <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                    DOLLAR
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link to="#">Canadian Dollar</Link></li>
                                    <li><Link to="#">Pound</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="shop-menu pull-right">
                            <ul className="nav navbar-nav">
                                <li><Link to="/customer/"><i className="fa fa-user"></i> Account</Link></li>
                                <li><Link to="/customer/wishlist"><i className="fa fa-star"></i> Wishlist</Link></li>
                                <li><Link to="/checkout"><i className="fa fa-crosshairs"></i> Checkout</Link></li>
                                <li><Link to="/cart"><i className="fa fa-shopping-cart"></i> Cart</Link></li>
                                { authLinks }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
HeaderMiddle.propTypes = {
    logout: PropTypes.func.isRequired,//logoutout action ptfr
    auth: PropTypes.object.isRequired, //object ptor
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(HeaderMiddle)
