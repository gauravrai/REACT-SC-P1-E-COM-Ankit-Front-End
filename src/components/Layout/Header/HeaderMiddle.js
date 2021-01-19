import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import { logout } from '../../../actions/auth'
import Logo from '../../../assets/images/home/logo.png'
import NavBar from './NavBar'


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
                    <div className="col-sm-3">
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
                    <div className="col-sm-6">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="mainmenu pull-left">
                            <ul className="nav navbar-nav collapse navbar-collapse">
                                
                                <NavBar />
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="search_box pull-right">
                            <input type="text" placeholder="Search anything..."/>
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
