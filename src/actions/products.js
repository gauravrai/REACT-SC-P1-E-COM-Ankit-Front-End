import { GET_PRODUCTS, GET_PRODUCTS_ERROR, GET_FILTERED_PRODUCTS, GET_FILTERED_PRODUCTS_ERROR } from './types'
import axios from '../config/axios'

export const getFeaturedProducts = () => async dispatch => {
    try {
        //fetch featured products
        const res = await axios.get('/product') 
        //dispatch product data
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data.data
        })
    } catch (e) {
        dispatch({
            type: GET_PRODUCTS_ERROR,
            payload: { msg: e.message, status: e.status}
        })
    }
}

export const getFilteredProducts = (filter_items = {}) => async (dispatch) => {
    let {category_id, subcategory_id, brand, max_price, min_price, brand_id, sort_name, sort_value, page_no} = filter_items;
    try 
    {
        let filter = `?filter=1`;
        if(filter_items){
            if(category_id) filter += `&categoryId=${category_id}`    
            if(subcategory_id) filter += `&subcategoryId=${subcategory_id}`    
            if(max_price) filter += `&maxPrice=${max_price}`    
            if(min_price) filter += `&minPrice=${min_price}`    
            if(brand_id) filter += `&brandId=${brand_id}`    
            if(sort_name) filter += `&sortName=${sort_name}` 
            if(sort_value) filter += `&sort_value=${sort_value}`    
            if(page_no) filter += `&pageno=${page_no}`
        }
        
        //fetch filtered products
        const res = await axios.get(`/product${filter}`) 
        
        if(res.data.data.length<=0){
            //dispatch product data
            dispatch({
                type: GET_FILTERED_PRODUCTS_ERROR,
                payload: { msg: res.message, status: res.status}
            })
            return true;
        }
        //dispatch product data
        dispatch({
            type: GET_FILTERED_PRODUCTS,
            payload: res.data.data
        })
    } catch (e) {
        dispatch({
            type: GET_FILTERED_PRODUCTS_ERROR,
            payload: { msg: e.message, status: e.status}
        })
    }
}

