import React from 'react'
import { Link } from 'react-router-dom'

import SingleProductSlider from '../../../Layout/Products/SingleProductSlider'

const RecommendedItems = () => {
    return (
        <div className="recommended_items">
            <h2 className="title text-center">Recommended Items</h2>
            
            <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <SingleProductSlider  />
                </div>
                <Link className="left recommended-item-control" to="#recommended-item-carousel" data-slide="prev">
                    <i className="fa fa-angle-left"></i>
                </Link>
                <Link className="right recommended-item-control" to="#recommended-item-carousel" data-slide="next">
                    <i className="fa fa-angle-right"></i>
                </Link>			
            </div>
        </div>
    
    )
}

export default RecommendedItems
