import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'



import Header from "../../Layout/Header/Header";
import SideBar from "../../Layout/Sidebar/SideBar";
import Footer from '../../Layout/Footer/Footer'
import OfferBar from '../../Layout/OfferBar/OfferBar'
import SingleProductInList from '../../Layout/Products/SingleProductInList'
import Spinner from '../../Layout/Spinner/Spinner'
import { getFeaturedProducts } from '../../../actions/products'

const Products = ({getFeaturedProducts, featuredProducts: {featuredProducts, loading}}) => {
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
        <Fragment>
            <Header />
            <OfferBar />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <SideBar />
                        </div>
                        <div className="col-sm-9 padding-right">
                        <div className="features_items">
                            <h2 className="title text-center">Products</h2>
                            {loading? <Spinner /> : <SingleProductInList featuredProductParsedData={featuredProductParsedData}   />}
                            
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

Products.propTypes = {
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
})(Products)
