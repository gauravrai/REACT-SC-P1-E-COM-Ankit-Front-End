import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { setAlert } from '../../../actions/alert'
import { addToCart } from '../../../actions/cart'
import { addToWishlist } from '../../../actions/wishlist'

import helpers from '../../../utils/helper'

const SingleProductInList = (props) => {
    
    const productObjectForInputs = props.featuredProductParsedData[0].map(item => {
        return {
            select: {
                name: `selectVariant${item.id}`,
                value: ""
            },
            quantity: {
                name: `quantity${item.id}`,
                value: 1
            },
            product: {
                ...item
            }
        }
    })
    
    const [ productItems, setProductItemData ] = useState(productObjectForInputs)
    
    const onChangeHandler = e => {
        const index = e.target.getAttribute('data-index')
        let newProductObject = [
            ...productItems
        ]
        newProductObject[index].quantity.value = e.target.value
        
        setProductItemData(newProductObject)
    }
    const AddToCartHandler = e => {
        e.preventDefault()
        const productId = e.target.getAttribute('data-product-id')
        const variantSelect = document.getElementById(`variantSelect${productId}`)
        const varientId = variantSelect.value
        const price = variantSelect.options[variantSelect.selectedIndex].getAttribute('data-price')
        const quantity = document.getElementById(`quantity${productId}`).value
        
        props.addToCart({
            productId, 
            varientId,
            quantity, 
            price
        })
    }
    const AddToWishlist = e => {
        e.preventDefault()
        const productId = e.target.getAttribute('data-product-id')
        props.addToWishlist({
            productId
        })
    }
    const singleProduct = productItems.map((item, index) => {
        
        return (
                
                <div className="col-sm-6 col-md-4 col-xs-12 product-container" key={item.product.id}>
                    <form action="" method="post" id={`productForm${item.product.id}`}>
                    <div className="product-image-wrapper">
                        <div className="single-products">
                            
                                <div className="productinfo text-center">
                                    <img src={item.product.smallImage} alt="" className="product-image" />
                                    <h2>{helpers.formatMoney(item.product.defaultPrice)}</h2>
                                    <p>{item.product.name}</p>
                                    <button className="hide btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <img src={item.product.thumbImage} alt="" className="product-image-thumbnail" />
                                        <div className="row mar20">
                                            <div className="col-md-12">
                                                <div className="col-xs-12">
                                                    
                                                    <select name="" id={`variantSelect${item.product.id}`} name={item.select.name} className="form-control variant-select">
                                                        {item.product.inventory.map((variant, ind) => {
                                                            return (
                                                                <option 
                                                                    data-price={variant.price} 
                                                                    value={variant.varientId}
                                                                >
                                                                    {variant.varient} @ {helpers.formatMoney(variant.price)}
                                                                </option>)
                                                        })}
                                                        
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mar20">
                                            <div className="col-md-12">
                                                <div className="col-xs-12">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">Quantity</span>
                                                        <input type="number" 
                                                            className="form-control" 
                                                            placeholder="quantity" 
                                                            data-index={index}
                                                            onChange={e => onChangeHandler(e)} 
                                                            name={item.quantity.name} 
                                                            value={item.quantity.value}
                                                            id={`quantity${item.product.id}`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mar20">
                                            <div className="col-md-12">
                                                <div className="col-xs-6">
                                                    <div className="input-group">
                                                        <button 
                                                            className="btn btn-success btn-xs"
                                                            data-index={index}
                                                            data-product-id={item.product.id}
                                                            onClick={e => AddToCartHandler(e)}
                                                        >Add to cart</button>
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 text-right">
                                                    <div className="input-group">
                                                        <button 
                                                            className="btn btn-success btn-xs"
                                                            data-product-id={item.product.id}
                                                            onClick={e => AddToWishlist(e)}
                                                        >Add to wishlist</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={`/products/${item.product.id}`}>
                                            <h2>&nbsp;</h2>
                                            <p>{item.product.name}</p>
                                        </Link>
                                        <button 
                                            className="hide btn btn-default add-to-cart"
                                            data-index={index}
                                            data-product-id={item.product.id}
                                            onClick={e => AddToCartHandler(e)}
                                        ><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                </div>
                                <img src={require('../../../assets/images/home/sale.png')} className="new hide" alt=""></img>
                        </div>
                    
                        <div className="choose">
                            <ul className="nav nav-pills nav-justified">
                                <li><button 
                                    className="customer-controls"
                                    data-product-id={item.product.id}
                                    onClick={e => AddToWishlist(e)}
                                    ><i className="fa fa-plus-square"></i>Add to wishlist</button></li>
                                <li><button 
                                        className="customer-controls"
                                        data-index={index}
                                        data-product-id={item.product.id}
                                        onClick={e => AddToCartHandler(e)}
                                        name="addTOCartBtn"
                                    ><i className="fa fa-plus-square"></i>Add to cart</button></li>
                            </ul>
                        </div>
                    </div>
                                                        
                    </form>
                </div>
        )

    })

    

    return (
        singleProduct
    )
}


SingleProductInList.propTypes = {
    setAlert: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    addToWishlist: PropTypes.func.isRequired,
}
const mapStateToProps = state => {
    return ({
        cart: state.cart,
        wishlist: state.wishlist
    })
}
export default connect(mapStateToProps, { 
    setAlert,
    addToCart,
    addToWishlist
})(SingleProductInList)
