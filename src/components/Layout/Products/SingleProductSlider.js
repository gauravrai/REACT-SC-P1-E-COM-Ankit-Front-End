import React from 'react'
import { Link } from 'react-router-dom'

const SingleProductSlider = () => {
    
    return (
        <div className="item active">
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img src={require('../../../assets/images/home/recommend1.jpg')} alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img src={require('../../../assets/images/home/recommend2.jpg')} alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img src={require('../../../assets/images/home/recommend3.jpg')} alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductSlider
