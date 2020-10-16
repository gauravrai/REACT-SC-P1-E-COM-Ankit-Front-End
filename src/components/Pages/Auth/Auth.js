import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Header from "../../Layout/Header/Header";
import Footer from '../../Layout/Footer/Footer'
import Spinner from '../../Layout/Spinner/Spinner'
import MobileNumberForm from './MobileNumberForm'
import EnterOtpForm from './EnterOtpForm'
import { setAlert } from '../../../actions/alert'
import { getOtp, matchOtpAndMobile } from '../../../actions/auth'


const Auth = ({ setAlert, getOtp, matchOtpAndMobile, auth: {otpReceived, loading, isAuthenticated} }) => {
    const [formData, setFormData] = useState({
        mobileNumber: '',
        otp: ''
    })
   
    const { mobileNumber, otp } = formData
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
    const onSubmitMobileHandler = e => {
        e.preventDefault()
        if(mobileNumber.length !== 10){
            setAlert('Please enter a valid mobile number', 'danger')
        }
        else{
            getOtp({
                mobileNumber
            })
        }
    }
    const onSubmitOtpHandler = e => {
        e.preventDefault()
        if(otp.length !== 4){
            setAlert('Please enter a valid OTP of 6 numbers', 'danger')
        }
        else{
            matchOtpAndMobile({
                mobileNumber,
                otp
            })
        }
    }
    let formContained = <MobileNumberForm 
                            onSubmit={onSubmitMobileHandler} 
                            mobileNumber={mobileNumber} 
                            onChange={onChange}
                        />
    if(otpReceived){
        formContained = <EnterOtpForm
                            onSubmit={onSubmitOtpHandler} 
                            otp={otp} 
                            onChange={onChange}
                        />
    }

    if(loading){
        formContained = <Spinner/>
    }

    //Redirect if Authenticated
    if(isAuthenticated){
        return <Redirect to="/customer" />
    }

    return (
        <Fragment>
            <Header />
            <section id="form">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-4">
                            <div className="login-form text-center">
                                {formContained}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

Auth.propTypes = {
    setAlert: PropTypes.func.isRequired,
    getOtp: PropTypes.func.isRequired,
    matchOtpAndMobile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => {
    return ({
        auth: state.auth
    })
}
export default connect(mapStateToProps, { 
    setAlert,
    getOtp,
    matchOtpAndMobile 
})(Auth)
