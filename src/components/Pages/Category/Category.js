import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import Header from "../../Layout/Header/Header";
import SideBar from "../../Layout/Sidebar/SideBar";
import Footer from '../../Layout/Footer/Footer'
import OfferBar from '../../Layout/OfferBar/OfferBar'
import SingleProductInList from '../../Layout/Products/SingleProductInList'
import Spinner from '../../Layout/Spinner/Spinner'
import { getFilteredProducts } from '../../../actions/products'



const Category = ({match})=> {
    const dispatch = useDispatch();

    let params = match.params;
    let filter_params = {};

    if(params.id) filter_params['category_id'] = params.id;
    
    useEffect(() => {
        dispatch(getFilteredProducts(filter_params))
    }, [dispatch, params])
    
    let products = useSelector((state)=> state.products);
    
    let { loading, error, filteredProducts} = products;
    console.log("=============#############=======", products)
    
    let filtered_products = []
    
    if(!loading){
        filtered_products.push(filteredProducts.map(item => {
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
                            {loading? <Spinner /> : <SingleProductInList products={filtered_products}   />}
                            
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}


export default Category;
