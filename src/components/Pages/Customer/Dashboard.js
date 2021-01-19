import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from "../../Layout/Header/Header";
import Footer from '../../Layout/Footer/Footer'
import CustomerSideBar from './CustomerSideBar'
import Spinner from '../../Layout/Spinner/Spinner'
import Address from './Address'

import { 
    getCurrentProfile,
    updateProfile
} from '../../../actions/profile'
import { 
    getState,
    getCity,
    getPincode,
    getSociety,
    getArea,
    getTower
} from '../../../actions/location'

const Dashboard = ({
                    profile, 
                    getCurrentProfile,
                }) => {

                useEffect(() => { 
                    getCurrentProfile()
                }, [])
    
    return (
        <Fragment>
            <Header />
            <div className="container">
                <div className="row">
                    <CustomerSideBar />
                    <div className="col-md-9 col-sm-7 col-xs-12">
                        <div className="row">    		
                            <h2 className="title text-center">Profile Information </h2>
                        </div>
                        {profile.loading? <Spinner /> : <Address profile={profile} />}   	
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

Dashboard.propTypes = {

}
const mapStateToProps = state => {
    
    return {
        profile: state.profile,
        billingState: state.location.billingAddress.state,
        billingCity: state.location.billingAddress.city,
        billingPincode: state.location.billingAddress.pincode,
        billingArea: state.location.billingAddress.area,
        billingSociety: state.location.billingAddress.society,
        billingTower: state.location.billingAddress.tower,

        
        shippingCity: state.location.shippingAddress.city,
        shippingPincode: state.location.shippingAddress.pincode,
        shippingArea: state.location.shippingAddress.area,
        shippingSociety: state.location.shippingAddress.society,
        shippingTower: state.location.shippingAddress.tower
    }
}

export default connect(mapStateToProps, {
    getCurrentProfile,
    updateProfile,
    getState,
    getCity,
    getPincode,
    getSociety,
    getArea,
    getTower
})(Dashboard)
