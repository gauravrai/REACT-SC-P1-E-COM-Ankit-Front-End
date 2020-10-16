import React, { Fragment } from 'react'



import Header from "../../Layout/Header/Header";
import Banner from "../../Pages/Landing/Banner/Banner";
import SideBar from "../../Layout/Sidebar/SideBar";
import Footer from '../../Layout/Footer/Footer'
import FeatureItems from "./FeatureItems/FeatureItems";
import RecommendedItems from "./RecommendedItems/RecommendedItems";
import BestSellerItems from "./BestSellerItems/BestSellerItems";




//instead of using props, destructuring has been done  const Landing = (props) to ({setLert})
const Landing = () => {
    
    return (
        <Fragment>
            <Header />
            <Banner />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <SideBar />
                        </div>
                        <div className="col-sm-9 padding-right">                            
                            <FeatureItems />
                            
                            
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}



export default Landing