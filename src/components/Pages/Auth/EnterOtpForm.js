import React, { Fragment } from 'react'

const EnterOtpForm = ({onSubmit, otp, onChange}) => {
    return (
        <Fragment>
            <h2 className="text-center">Enter OTP to proceed</h2>
            <form action="" onSubmit={e => onSubmit(e)} >
                <input 
                    name="otp"
                    className="text-center" 
                    type="text" 
                    placeholder="Enter OTP" 
                    value={otp}
                    onChange={e => onChange(e)}
                    required
                    maxLength="4"
                    //minLength="6"
                />
                <button className="btn btn-block btn-default">Verify</button>
            </form>
        </Fragment>
    )
}

export default EnterOtpForm
