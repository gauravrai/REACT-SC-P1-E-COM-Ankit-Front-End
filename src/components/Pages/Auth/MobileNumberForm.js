import React, { Fragment } from 'react'

const MobileNumberForm = ({onSubmit, mobileNumber, onChange}) => {
    return (
        <Fragment>
            <h2 className="text-center">Login/Register to your account</h2>
            <form action="" onSubmit={e => onSubmit(e)}>
                <input 
                    name="mobileNumber"
                    className="text-center" 
                    type="text" 
                    placeholder="Enter you mobile number" 
                    value={mobileNumber}
                    onChange={e => onChange(e)}
                    required
                    maxLength="10"
                    minLength="10"
                />
                <button className="btn btn-block btn-default">Login/Register</button>
            </form>
        </Fragment>
    )
}

export default MobileNumberForm
