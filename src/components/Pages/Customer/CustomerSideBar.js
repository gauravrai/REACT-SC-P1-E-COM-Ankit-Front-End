import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Customer.module.css'

const CustomerSideBar = (props) => {
    
    return (
        <div className="col-md-3 col-sm-5 col-xs-12">
            <div className={classes.wrapper}>
                <nav id={classes.sidebar}>
                    <div className={classes.sidebarHeader}>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <img src={require('../../../assets/img/default-user.png')} className={classes.sideBarProfile}  alt="Profile" />
                            </div>
                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <h3 className={classes.headingBlock}>
                                    Hey Man
                                </h3>
                            </div>
                        </div>
                    </div>
                    <p className={classes.addBreak}>&nbsp;</p>
                    <ul className={classes.components}>
                        
                        <li>
                            <Link to="/customer/orders">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i> &nbsp; 
                                MY ORDERS
                            </Link>
                        </li>
                        <li className={classes.active}>
                            <Link to="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="fa fa-cog" aria-hidden="true"></i> &nbsp; 
                            ACCOUNT SETTINGS 
                            </Link>
                            <ul className="list-unstyled" id="homeSubmenu">
                                <li>
                                    <Link to="/customer/">My Profile</Link>
                                </li>
                                <li>
                                    <Link to="/customer/address">My Address</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#paymentTab" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="fa fa-money" aria-hidden="true"></i> &nbsp; 
                                PAYMENTS
                            </Link>
                            <ul className="list-unstyled" id="paymentTab">
                                <li>
                                    <Link to="/customer/wallet/">Wallet</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#myStuff" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="fa fa-trophy" aria-hidden="true"></i> &nbsp; 
                                MY STUFF
                            </Link>
                            <ul className="list-unstyled" id="myStuff">
                                <li>
                                    <Link to="/customer/coupons">My Coupons</Link>
                                </li>
                                <li>
                                    <Link to="/customer/wishlist">My Wishlist</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default CustomerSideBar
