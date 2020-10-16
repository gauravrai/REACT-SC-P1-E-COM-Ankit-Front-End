import React, { Fragment } from 'react'


import Header from "../../Layout/Header/Header";
import SideBar from "../../Layout/Sidebar/SideBar";
import Footer from '../../Layout/Footer/Footer'

const About = () => {
    return (
        <Fragment>
            <Header />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <SideBar />
                        </div>
                        <div className="col-sm-9 padding-right">                            
                            <h3 className="text-center">About Us</h3>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default About
