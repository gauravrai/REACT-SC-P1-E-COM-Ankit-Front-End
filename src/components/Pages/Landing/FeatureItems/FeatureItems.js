import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Spinner from '../../../Layout/Spinner/Spinner'
import { getFeaturedProducts } from '../../../../actions/products'
import SingleProductInList from '../../../Layout/Products/SingleProductInList'

const FeatureItems = ({getFeaturedProducts, featuredProducts: {featuredProducts, loading}}) => {
    useEffect(() => {
        getFeaturedProducts()
    }, [getFeaturedProducts])


    let featuredProductParsedData = []
    if(!loading){
        featuredProductParsedData.push(featuredProducts.map(item => {
            let itemPrice = 0
            
            if(item.inventory)
                itemPrice = item.inventory[0].price
            return {
                id: item._id,
                name: item.name, 
                defaultPrice: itemPrice,
                hasDiscount: item.discount,
                hasOffer: item.offer,
                outOfStock: item.outOfStock,
                smallImage: item.smallPath + item.image.small[0],
                thumbImage: item.thumbnailPath + item.image.thumbnail[0],
                inventory: item.inventory
            }
        }))
    }
    return (
        <div className="features_items">
            <h2 className="title text-center">Featured Items</h2>
            <div className="row">
                {loading? <Spinner /> : <SingleProductInList products={featuredProductParsedData}   />}
            </div>
        </div>
    
    )
}
FeatureItems.propTypes = {
    getFeaturedProducts: PropTypes.func.isRequired,
    featuredProducts: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        featuredProducts: state.products
    } 
}
export default connect(mapStateToProps, {
    getFeaturedProducts
})(FeatureItems)
