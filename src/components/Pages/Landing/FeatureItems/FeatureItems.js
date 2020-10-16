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
            return {
                id: item._id,
                name: item.name,
                defaultPrice: item.inventory[0][0].price,
                hasDiscount: item.discount,
                hasOffer: item.offer,
                outOfStock: item.outOfStock,
                smallImage: item.image.small[0],
                variant: item.inventory[0]
            }
        }))
        console.log(featuredProductParsedData)
    }
    return (
        <div className="features_items">
            <h2 className="title text-center">Featured Items</h2>
            {loading? <Spinner /> : <SingleProductInList featuredProductParsedData={featuredProductParsedData}   />}
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
