import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import Header from "../../../Layout/Header/Header";
import Footer from '../../../Layout/Footer/Footer'
import CartItem from '../Cart/CartItem'
import Spinner from '../../../Layout/Spinner/Spinner'
import helpers from '../../../../utils/helper'

import { 
    getCurrentProfile
} from '../../../../actions/profile'
import Dashboard from '../../Customer/Dashboard';


Checkout.propTypes = {
    auth: PropTypes.object.isRequired, //object ptor
    cart: PropTypes.object.isRequired,
};

function Checkout({cart, profile}) {
    console.log(profile)

    return (
        <Fragment>
            <Header />

            <section id="cart_items">
                <div class="container">
                    <div class="breadcrumbs">
                        <ol class="breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li class="active">Checkout</li>
                        </ol>
                    </div>
                    <div class="step-one">
                        <h2 className="heading">
                            Address
                            <Link className="btn btn-xs btn-success pull-right" to="/customer" >Edit</Link>
                        </h2>
                    </div>
                    {profile.loading? <Spinner /> : 
                    
                    'Profile Update'
                    }
                </div>
            </section> 
            <Footer />
        </Fragment>
    );
}
const mapStateToProps = state => {
    return {
        auth: state.auth,
        cart: state.cart,
        profile: state.profile
    }
}
export default connect(mapStateToProps)(Checkout);