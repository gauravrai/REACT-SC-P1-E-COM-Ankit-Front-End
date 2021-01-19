import React, { Fragment, useState } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import Header from "../../../Layout/Header/Header";
import Footer from '../../../Layout/Footer/Footer'
import CartItem from './CartItem'
import Spinner from '../../../Layout/Spinner/Spinner'
import helpers from '../../../../utils/helper'

import { 
    removeProductFromCart,
    updateQuantityInCart 
} from '../../../../actions/cart'


const Cart = ({cart, removeProductFromCart, updateQuantityInCart}) => {

    const [ cartState, setCartState ] = useState({
        showCheckout: false
    })

    const RemoveItemFromCartHandler = e => {
        e.preventDefault()
        const cartItemId = e.target.getAttribute('data-cart-item-id')
        removeProductFromCart(cartItemId)
    }
    
    const RemoveQuantityInCartHandler = e => {
        e.preventDefault()
        const cartItemId = e.target.getAttribute('data-cart-item-id')
        const productId = e.target.getAttribute('data-product-id')
        const varientId = e.target.getAttribute('data-variant-id')
        const price = e.target.getAttribute('data-price')
        //update quantity in state after confirmation of sending request
        
        let quantity = e.target.getAttribute('data-quantity')
        const cartActionType = e.target.getAttribute('class')
        if(cartActionType=='cart_quantity_down'){
           if(quantity <= 1){
                removeProductFromCart(cartItemId)
                return
           }
           else{
               quantity = --quantity
           }
        }
        else{
            quantity = ++quantity
        }
        
        updateQuantityInCart({
            productId, 
            varientId,
            quantity, 
            price
        })
    }
    
    return (
        <Fragment>
            <Header />
            <section id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                            <li><Link to="#">Home</Link></li>
                            <li className="active">Cart</li>
                        </ol>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">Item</td>
                                    <td className="description"></td>
                                    <td className="price">Price</td>
                                    <td className="quantity">Quantity</td>
                                    <td className="total">Total</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </thead>
                            <tbody>
                                { cart.loading?<Spinner />:<CartItem 
                                                                cart={cart} 
                                                                removeItem={(e) => RemoveItemFromCartHandler}
                                                                removeQuantity={(e) => RemoveQuantityInCartHandler}
                                                            /> }
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        <Link className="btn btn-default update" to="/">Shop More</Link>
                                        <Link 
                                            className="btn btn-default check_out"
                                            to='/customer/checkout'
                                        >Check Out</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

Cart.propTypes = {
    auth: PropTypes.object.isRequired, //object ptor
    cart: PropTypes.object.isRequired,
}
const mapStateToProps = state => {
    return {
        auth: state.auth,
        cart: state.cart
    }
}


export default connect(mapStateToProps, {
    removeProductFromCart,
    updateQuantityInCart
})(Cart)
