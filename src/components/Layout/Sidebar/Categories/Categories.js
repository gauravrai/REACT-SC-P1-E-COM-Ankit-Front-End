import React, { Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSideBar } from '../../../../actions/sidebar'
import Spinner from '../../Spinner/Spinner'

const Categories = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSideBar())
    }, [dispatch])

    let sidebar = useSelector((state)=>state.sidebar)
    let { categories, loading, error } = sidebar
    
    let categoriesSection = null
    if(!loading){
        categoriesSection = categories.map(item => (
            <div className="panel panel-default" key={item._id}>
                <div className="panel-heading">
                    <h4 className="panel-title"><Link to={`/category/${item.slug}/${item._id}`}>{item.name}</Link></h4>
                </div>
            </div>
        ))
    }

    return (
        <Fragment>
            <h2>Category</h2>
            <div className="panel-group category-products" id="accordian">
                {categoriesSection}
            </div>                
        </Fragment>
    )
}

export default Categories
