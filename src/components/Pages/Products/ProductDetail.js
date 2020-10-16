import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


import Header from "../../Layout/Header/Header";
import SideBar from "../../Layout/Sidebar/SideBar";
import Footer from '../../Layout/Footer/Footer'

const ProductDetail = () => {
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
                            <div className="product-details">
                            <div className="col-sm-5">
                                <div className="view-product">
                                    <img src={require('../../../assets/images/product-details/1.jpg')} alt="" />
                                </div>
                                <div id="similar-product" className="carousel slide" data-ride="carousel">
                                    
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <Link to=""><img src={require('../../../assets/images/product-details/similar1.jpg')} alt="" /></Link>
                                                <Link to=""><img src={require('../../../assets/images/product-details/similar2.jpg')} alt="" /></Link>
                                                <Link to=""><img src={require('../../../assets/images/product-details/similar3.jpg')} alt="" /></Link>
                                            </div>
                                            <div className="item">
                                                <Link to=""><img src={require('../../../assets/images/product-details/similar1.jpg')} alt="" /></Link>
                                                <Link to=""><img src={require('../../../assets/images/product-details/similar2.jpg')} alt="" /></Link>
                                                <Link to=""><img src={require('../../../assets/images/product-details/similar3.jpg')} alt="" /></Link>
                                            </div>
                                            <div className="item">
                                                <Link to=""><img src={require('../../../assets/images/product-details/similar1.jpg')} alt="" /></Link>
                                                <Link to=""><img src={require('../../../assets/images/product-details/similar2.jpg')} alt="" /></Link>
                                                <Link to=""><img src={require('../../../assets/images/product-details/similar3.jpg')} alt="" /></Link>
                                            </div>
                                            
                                        </div>

                                    
                                    <Link className="left item-control" to="#similar-product" data-slide="prev">
                                        <i className="fa fa-angle-left"></i>
                                    </Link>
                                    <Link className="right item-control" to="#similar-product" data-slide="next">
                                        <i className="fa fa-angle-right"></i>
                                    </Link>
                                </div>

                            </div>
                            <div className="col-sm-7">
                                <div className="product-information">
                                    <img src={require('../../../assets/images/product-details/new.jpg')} className="newarrival" alt="" />
                                    <h2>Anne Klein Sleeveless Colorblock Scuba</h2>
                                    <p>Product ID: 1089772</p>
                                    
                                    <span>
                                        <span>Rs 59</span>
                                        <label>Quantity:</label>
                                        <input type="text" value="3" />
                                        <button type="button" className="btn btn-fefault cart">
                                            <i className="fa fa-shopping-cart"></i>
                                            Add to cart
                                        </button>
                                    </span>
                                    <p><b>Availability:</b> In Stock</p>
                                    <p><b>Condition:</b> New</p>
                                    <p><b>Brand:</b> Local Buniya</p>
                                    <Link to=""><img src={require('../../../assets/images/product-details/share.png')} className="share img-responsive"  alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default ProductDetail
