import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import Header from "../../Layout/Header/Header";
import Footer from '../../Layout/Footer/Footer'
import CustomerSideBar from './CustomerSideBar'
import Spinner from '../../Layout/Spinner/Spinner'

import { 
    removeProductFromWishlist
} from '../../../actions/wishlist'


const Wishlist = ({wishlist, removeProductFromWishlist}) => {
    
    let wishlistString = ''
    const removeItemHandler = e => {
        e.preventDefault()
        const wishlistItemId = e.target.getAttribute('data-cart-item-id')
        removeProductFromWishlist(wishlistItemId)
    }
    if(wishlist.wishlistItems.length){
        wishlistString = wishlist.wishlistItems.map(item => {
            return <tr key={item._id}>
                        <td className="cart_product">
                            <Link to=""><img src={`${item.thumbnailPath}${item.productData[0].image.thumbnail[0]}`} alt="" height="100" /></Link>
                        </td>
                        <td className="cart_description text-left">
                            <h4><Link to={`/products/${item.productData[0]._id}`}>{item.productData[0].name}</Link></h4>
                            <p>SKU: {item.productData[0].stock}</p>
                        </td>
                        <td className="cart_delete">
                            <Link 
                                className="cart_quantity_delete" 
                                to="#"
                                
                            ><i 
                                className="fa fa-times"
                                onClick={(e) => removeItemHandler(e)}
                                data-cart-item-id={item.productData[0]._id}
                            ></i></Link>
                        </td>
                    </tr>
        })
    }

    if(wishlist.loading)
        wishlistString = <Spinner />

    return (
        <Fragment>
            <Header />
            <div className="container">
                <div className="row">
                    <CustomerSideBar />
                    <div className="col-md-9 col-sm-7 col-xs-12">
                        <div className="row">    		
                            <h2 className="title text-center">Wishlist </h2>    			    				    				
                            <section id="cart_items">   
                                <div className="table-responsive cart_info">
                                    <table className="table table-condensed">
                                        <thead>
                                            <tr className="cart_menu">
                                                <td className="image">Item</td>
                                                <td className="description"></td>
                                                <td>&nbsp;</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wishlistString}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                        </div>
                           	
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
Wishlist.propTypes = {
    wishlist: PropTypes.object.isRequired,
}
const mapStateToProps = state => {
    return {
        wishlist: state.wishlist
    }
}


export default connect(mapStateToProps, {
    removeProductFromWishlist
})(Wishlist)
