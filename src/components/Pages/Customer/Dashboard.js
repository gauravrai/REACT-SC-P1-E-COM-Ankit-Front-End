import React, { Fragment } from 'react'



import Header from "../../Layout/Header/Header";
import Footer from '../../Layout/Footer/Footer'
import CustomerSideBar from './CustomerSideBar'
import PropTypes from 'prop-types'

const Dashboard = props => {
    return (
        <Fragment>
            <Header />
            <div className="container">
                <div className="row">
                    <CustomerSideBar />
                    <div className="col-md-9 col-sm-7 col-xs-12">
                        <div className="row">    		
                            <h2 className="title">Profile Information </h2>    			    				    				
                                
                        </div>
                        <form action="" method="post" autoComplete="off" >
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="fullName">Full Name</label>
                                    <input type="text" className="form-control" id="fullName" name="name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="fullName">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="mobileNumber">Mobile Number</label>
                                    <input type="text" className="form-control" id="mobileNumber" name="mobileNumber" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <button className="btn btn-success">Save</button>
                            </div>
                        </div>
                        </form>    	
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
