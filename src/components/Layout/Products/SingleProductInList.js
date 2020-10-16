import React from 'react'
import { Link } from 'react-router-dom'

const SingleProductInList = (props) => {
    const images = props.featuredProductParsedData[0].map(item => {
        
        return <div className="col-sm-4" key={item.id}>
                
                    <div className="product-image-wrapper">
                    <Link to={`/products/${item.id}`}>
                        <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src={require('../../../assets/images/home/product1.jpg')} alt="" />
                                    <h2>{item.defaultPrice}</h2>
                                    <p>{item.name}</p>
                                    <button className="hide btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>{item.defaultPrice}</h2>
                                        <p>{item.name}</p>
                                        <button className="hide btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                                <img src={require('../../../assets/images/home/sale.png')} className="new" alt=""></img>
                        </div>
                    </Link>
                        <div className="choose">
                            <ul className="nav nav-pills nav-justified">
                                <li><button className="customer-controls"><i className="fa fa-plus-square"></i>Add to wishlist</button></li>
                                <li><button className="customer-controls"><i className="fa fa-plus-square"></i>Add to cart</button></li>
                            </ul>
                        </div>
                    </div>
                
                </div>

    })
    return (
        images
    )
}

export default SingleProductInList
