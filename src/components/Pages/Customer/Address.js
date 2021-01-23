import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


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

Address.propTypes = {
    
};

function Address({
            profile, 
            getCurrentProfile,
            updateProfile,
            getState,
            getCity,
            getPincode,
            getSociety,
            getArea,
            getTower,
            billingState,
            billingCity,
            billingPincode,
            billingArea,
            billingSociety,
            billingTower,
            shippingCity,
            shippingPincode,
            shippingArea,
            shippingSociety,
            shippingTower
        }) {

    
            useEffect(() => { 
                getCurrentProfile()
            }, [])
            
            const [ profileData, setProfileData ] = useState({})

            let billingStateStr = '', 
                billingCityStr = '',
                billingPincodeStr = '',
                billingAreaStr = '',
                billingSocietyStr = '',
                billingTowerStr = '',
                shipingStateStr = '',
                shippingCityStr = '',
                shippingPincodeStr = '',
                shippingAreaStr = '',
                shippingSocietyStr = '',
                shippingTowerStr = ''

            if(!profile.loading){
                console.log('PROFILE', profile.profile)
                if(!profileData.billingAddress && profile.profile.name){
                    setProfileData({
                        ...profile.profile
                    })
                    console.log('PROFILEDATA', profileData)
                }
                
                
                if(!billingState.loading && profileData.billingAddress){
                    console.log('-->', profileData)
                    billingStateStr = billingState.payload.map(item => {
                        return item._id === profileData.billingAddress.state ? 
                                    <option selected value={item._id}>{item.name}</option>
                                    :
                                    <option value={item._id}>{item.name}</option>
                    })
                }

                if(!billingCity.loading){
                    billingCityStr = billingCity.payload.map(item => {
                        return item._id === profile.profile.billingAddress.city ? 
                                    <option selected value={item._id}>{item.name}</option>
                                    :
                                    <option value={item._id}>{item.name}</option>
                        
                    })
                }

                if(!billingPincode.loading){
                    billingPincodeStr = billingPincode.payload.map(item => {
                        return item._id === profile.profile.billingAddress.pincode ? 
                                    <option selected value={item._id}>{item.pincode}</option>
                                    :
                                    <option value={item._id}>{item.pincode}</option>
                        
                    })
                }

                if(!billingArea.loading){
                    billingAreaStr = billingArea.payload.map(item => {
                        return item._id === profile.profile.billingAddress.area ? 
                                    <option selected value={item._id}>{item.name}</option>
                                    :
                                    <option value={item._id}>{item.name}</option>
                        
                    })
                }

                if(!billingSociety.loading){
                    billingSocietyStr = billingSociety.payload.map(item => {
                        return item._id === profile.profile.billingAddress.society ? 
                                    <option selected value={item._id}>{item.name}</option>
                                    :
                                    <option value={item._id}>{item.name}</option>
                        
                    })
                }

                if(!billingTower.loading){
                    billingTowerStr = billingTower.payload.map(item => {
                        return item._id === profile.profile.billingAddress.tower ? 
                                    <option selected value={item._id}>{item.name}</option>
                                    :
                                    <option value={item._id}>{item.name}</option>
                        
                    })
                }


                //shipping address
                if(!billingState.loading && profileData.shippingAddress){
                    shipingStateStr = billingState.payload.map(item => {
                        return item._id === profileData.shippingAddress.state ? 
                                    <option selected value={item._id}>{item.name}</option>
                                    :
                                    <option value={item._id}>{item.name}</option>
                        
                    })
                }
                if(!shippingCity.loading){
                    shippingCityStr = shippingCity.payload.map(item => {
                        return item._id === profileData.shippingAddress.city ? 
                                    <option selected value={item._id}>{item.name}</option>
                                    :
                                    <option value={item._id}>{item.name}</option>
                        
                    })
                }

                if(!shippingPincode.loading){
                    shippingPincodeStr = shippingPincode.payload.map(item => {
                        return item._id === profile.profile.shippingAddress.pincode ? 
                                    <option selected value={item._id}>{item.pincode}</option>
                                    :
                                    <option value={item._id}>{item.pincode}</option>
                        
                    })
                }

                if(!shippingArea.loading){
                    shippingAreaStr = shippingArea.payload.map(item => {
                        return item._id === profile.profile.shippingAddress.area ? 
                                    <option selected value={item._id}>{item.name}</option>
                                    :
                                    <option value={item._id}>{item.name}</option>
                        
                    })
                }

                if(!shippingSociety.loading){
                    shippingSocietyStr = shippingSociety.payload.map(item => {
                        return item._id === profile.profile.shippingAddress.society ? 
                                    <option selected value={item._id}>{item.name}</option>
                                    :
                                    <option value={item._id}>{item.name}</option>
                        
                    })
                }

                if(!shippingTower.loading){
                    shippingTowerStr = shippingTower.payload.map(item => {
                        return item._id === profile.profile.shippingAddress.tower ? 
                                    <option selected value={item._id}>{item.name}</option>
                                    :
                                    <option value={item._id}>{item.name}</option>
                        
                    })
                }
            }
            
            const getCityHandler = e => {
                const addressType = e.target.getAttribute('data-address-type')
                if(addressType === 'billingAddress'){
                    setProfileData({
                        ...profileData,
                        billingAddress: {
                            ...profileData.billingAddress,
                            state: e.target.value
                        } 
                    })
                }
                else{
                    setProfileData({
                        ...profileData,
                        shippingAddress: {
                            ...profileData.shippingAddress,
                            state: e.target.value
                        } 
                    })
                }
                
                getCity(e.target.value, addressType)
            }
            const getPincodeHandler = e => {
                const addressType = e.target.getAttribute('data-address-type')
                if(addressType === 'billingAddress'){
                    setProfileData({
                        ...profileData,
                        billingAddress: {
                            ...profileData.billingAddress,
                            city: e.target.value
                        } 
                    })
                }
                else{
                    setProfileData({
                        ...profileData,
                        shippingAddress: {
                            ...profileData.shippingAddress,
                            city: e.target.value
                        } 
                    })
                }
                getPincode(e.target.value, addressType)
            }
            const getAreaHandler = e => {
                const addressType = e.target.getAttribute('data-address-type')
                if(addressType === 'billingAddress'){
                    setProfileData({
                        ...profileData,
                        billingAddress: {
                            ...profileData.billingAddress,
                            pincode: e.target.value
                        } 
                    })
                }
                else{
                    setProfileData({
                        ...profileData,
                        shippingAddress: {
                            ...profileData.shippingAddress,
                            pincode: e.target.value
                        } 
                    })
                }
                getArea(e.target.value, addressType)
            }
            const getSocietyHandler = e => {
                const addressType = e.target.getAttribute('data-address-type')
                if(addressType === 'billingAddress'){
                    setProfileData({
                        ...profileData,
                        billingAddress: {
                            ...profileData.billingAddress,
                            area: e.target.value
                        } 
                    })
                }
                else{
                    setProfileData({
                        ...profileData,
                        shippingAddress: {
                            ...profileData.shippingAddress,
                            area: e.target.value
                        } 
                    })
                }
                getSociety(e.target.value, addressType)
            }
            const getTowerHandler = e => {
                const addressType = e.target.getAttribute('data-address-type')
                if(addressType === 'billingAddress'){
                    setProfileData({
                        ...profileData,
                        billingAddress: {
                            ...profileData.billingAddress,
                            society: e.target.value
                        } 
                    })
                }
                else{
                    setProfileData({
                        ...profileData,
                        shippingAddress: {
                            ...profileData.shippingAddress,
                            society: e.target.value
                        } 
                    })
                }
                getTower(e.target.value, addressType)
            }
            const onChangeHandler = e => {
                setProfileData({
                    ...profileData,
                    [e.target.name]: e.target.value
                })
            }
            const updateSameAsBillingHandler = e => {
                setProfileData({
                    ...profileData,
                    sameAsBillingAddress: !profileData.sameAsBillingAddress
                })
            }
            const onChangeCustomAddress = e => {
                const addressType = e.target.getAttribute('data-address-type')
                if(addressType === 'billingAddress'){
                    setProfileData({
                        ...profileData,
                        billingAddress: {
                            ...profileData.billingAddress,
                            address: e.target.value
                        }
                    })
                }
                else{
                    setProfileData({
                        ...profileData,
                        shippingAddress: {
                            ...profileData.shippingAddress,
                            address: e.target.value
                        }
                    })
                }
            }
            const updateProfileHandler = e => {
                e.preventDefault()
                setProfileData({
                    ...profileData,
                    billingAddress: {
                        ...profileData.billingAddress,
                        tower: document.getElementsByName("billingTower").value
                    },
                    shippingAddress: {
                        ...profileData.shippingAddress,
                        tower: document.getElementsByName("shippingTower").value
                    }
                })
                updateProfile(profileData)
            }

            return (
                <Fragment>
                    
                                <form action="" method="post" autoComplete="off" >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Full Name  *</label>
                                            <input type="text" className="form-control"  
                                                name="name" 
                                                value={profileData.name} 
                                                onChange={e => onChangeHandler(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email * </label>
                                            <input type="email" className="form-control" id="email" 
                                                name="email" 
                                                value={profileData.email} 
                                                onChange={e => onChangeHandler(e)} 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Mobile Number *</label>
                                            <input type="text" className="form-control"  
                                                name="mobile" 
                                                value={profileData.mobile} 
                                                onChange={e => onChangeHandler(e)} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>GST</label>
                                            <input type="text" className="form-control" id="gst" 
                                                name="gst" 
                                                value={profileData.gst} 
                                                onChange={e => onChangeHandler(e)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">    		
                                    <h2 className="title text-center mar40">Billing Address</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>State *</label>
                                            <select className="form-control" onChange={e => getCityHandler(e)} data-address-type="billingAddress">
                                                <option value="">Select State</option>
                                                {billingStateStr}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>City *</label>
                                            <select className="form-control" onChange={e => getPincodeHandler(e)} data-address-type="billingAddress">
                                                <option value="">Select City</option>
                                                {billingCityStr}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Pincode</label>
                                            <select className="form-control"  onChange={e => getAreaHandler(e)} data-address-type="billingAddress">
                                                <option value="">Select Pincode</option>
                                                {billingPincodeStr}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Area</label>
                                            <select className="form-control"  onChange={e => getSocietyHandler(e)} data-address-type="billingAddress">
                                                <option value="">Select Area</option>
                                                {billingAreaStr}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Society</label>
                                            <select className="form-control" onChange={e => getTowerHandler(e)} data-address-type="billingAddress">
                                                <option value="">Select Society</option>
                                                {billingSocietyStr}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Tower</label>
                                            <select className="form-control" name="billingTower" >
                                                <option value="">Select Tower</option>
                                                {billingTowerStr}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>If you don't find your location, enter your custom billing address</label>
                                            <textarea data-address-type="billingAddress" className="form-control" onChange={e => onChangeCustomAddress(e)}>{profile.profile.billingAddress.address}</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mar40">
                                    <div className="col-md-12">
                                        <input type="checkbox" name="sameAsBillingAddress" value="1"
                                            checked={profileData.sameAsBillingAddress}
                                            onClick={e => updateSameAsBillingHandler(e)}
                                        /> Shipping address same as billing address 
                                    </div>
                                </div>
                                <div className={profileData.sameAsBillingAddress? `row hide`: `row mar20`}>    		
                                    <h2 className="title text-center">Shipping Address</h2>
                                </div>
                                <div className={profileData.sameAsBillingAddress? `row hide`: `row`}>
                                    
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>State</label>
                                            <select className="form-control" onChange={e => getCityHandler(e)} data-address-type="shippingAddress">
                                                <option value="">Select State</option>
                                                {shipingStateStr}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>City</label>
                                            <select className="form-control" onChange={e => getPincodeHandler(e)} data-address-type="shippingAddress">
                                                <option value="">Select City</option>
                                                {shippingCityStr}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Pincode</label>
                                            <select className="form-control" onChange={e => getAreaHandler(e)} data-address-type="shippingAddress">
                                                <option value="">Select Pincode</option>
                                                {shippingPincodeStr}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className={profileData.sameAsBillingAddress? `row hide`: `row`}>
                                    
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Area</label>
                                            <select className="form-control" onChange={e => getSocietyHandler(e)} data-address-type="shippingAddress">
                                                <option value="">Select Area</option>
                                                {shippingAreaStr}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Society</label>
                                            <select className="form-control" onChange={e => getTowerHandler(e)} data-address-type="shippingAddress">
                                                <option value="">Select Society</option>
                                                {shippingSocietyStr}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Tower</label>
                                            <select className="form-control"  name="shippingTower">
                                                <option value="">Select Tower</option>
                                                {shippingTowerStr}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className={profileData.sameAsBillingAddress? `row hide`: `row`}>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>If you don't find your location, enter your custom shipping address</label>
                                            <textarea name="address" data-address-type="shippingAddress" className="form-control" onChange={e => onChangeCustomAddress(e)}>{profile.profile.shippingAddress.address}</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <button className="btn btn-success" onClick={e => updateProfileHandler(e)}>Save</button>
                                    </div>
                                </div>
                                <div className="row mar40"></div>
                                </form>
                        
                </Fragment>
            )
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
})(Address);