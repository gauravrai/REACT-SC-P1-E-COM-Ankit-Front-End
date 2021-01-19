import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import helpers from '../../../../utils/helper'

const CartItem = props => {
    let cartItem = ''
    
    if(props.cart.cartItems.cartItemData){
        
        cartItem = props.cart.cartItems.cartItemData.map(item => {
            return <tr key={item._id}>
                        <td className="cart_product">
                            <Link to=""><img src={`${item.thumbnailPath}${item.productData.image.thumbnail[0]}`} alt="" height="100" /></Link>
                        </td>
                        <td className="cart_description text-left">
                            <h4><Link to={`/products/${item.productData._id}`}>{item.productData.name}</Link></h4>
                            <p>SKU: {item.productData.stock}</p>
                        </td>
                        <td className="cart_price">
                            <p>{helpers.formatMoney(item.price)}</p>
                        </td>
                        
                        <td className="cart_quantity">
                            <div className="cart_quantity_button">
                                <Link 
                                    className="cart_quantity_up" 
                                    to="#"
                                    data-product-id={item.productData._id}
                                    data-variant-id={item.varientId}
                                    data-price={item.price}
                                    data-quantity={item.quantity}
                                    onClick={props.removeQuantity()}
                                    data-cart-item-id={item._id}
                                
                                > + </Link>
                                <input 
                                    className="cart_quantity_input" 
                                    type="text" 
                                    name="quantity" 
                                    value={item.quantity} 
                                    autocomplete="off" 
                                    size="2" 
                                    readOnly="true"
                                />
                                <Link 
                                    className="cart_quantity_down" 
                                    to="#"
                                    data-product-id={item.productData._id}
                                    data-variant-id={item.varientId}
                                    data-price={item.price}
                                    data-quantity={item.quantity}
                                    onClick={props.removeQuantity()}
                                    data-cart-item-id={item._id}
                                > - </Link>
                            </div>
                        </td>
                        <td className="cart_total">
                            <p className="cart_total_price text-right">
                            {helpers.formatMoney(item.totalPrice)}
                            </p>
                        </td>
                        <td className="cart_delete">
                            <Link 
                                className="cart_quantity_delete" 
                                to="#"
                                
                            ><i 
                                className="fa fa-times"
                                onClick={props.removeItem()}
                                data-cart-item-id={item._id}
                            ></i></Link>
                        </td>
                    </tr>
        })
    }
    return (
        <Fragment>
            {cartItem}
        </Fragment>
    );
};

CartItem.propTypes = {
    
};

export default CartItem;