import React, { Fragment } from 'react'



import Header from "../../Layout/Header/Header";
import Footer from '../../Layout/Footer/Footer'
import CustomerSideBar from './CustomerSideBar'

const Wishlist = () => {
    return (
        <Fragment>
            <Header />
            <div className="container">
                <div className="row">
                    <CustomerSideBar />
                    <div className="col-md-9 col-sm-7 col-xs-12">
                        <div className="row">    		
                            <h2 className="title">Wishlist </h2>    			    				    				
                                
                        </div>
                           	
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Wishlist
