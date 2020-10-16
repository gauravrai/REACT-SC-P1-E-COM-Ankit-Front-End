import React, { Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSideBar } from '../../../../actions/sidebar'
import Spinner from '../../Spinner/Spinner'

const Categories = ({ getSideBar, category: {categories, loading} }) => {
    useEffect(() => {
        getSideBar()
    }, [getSideBar])
    
    let categoriesSection = null

    if(!loading){
        categoriesSection = categories.map(item => (
            <div className="panel panel-default" key={item._id}>
                <div className="panel-heading">
                    <h4 className="panel-title"><Link to={"/category/" + item.slug}>{item.name}</Link></h4>
                </div>
            </div>
        ))
    }

    return loading ? <Spinner /> : (
        <Fragment>
            <h2>Category</h2>
            <div className="panel-group category-products" id="accordian">
                {categoriesSection}
            </div>                
        </Fragment>
    )
}
Categories.propTypes = {
    getSideBar: PropTypes.func.isRequired,
    category: PropTypes.object.isRequired,
}
const mapStateToProps = state => {
    return ({
        category: state.sidebar
    })
}
export default connect(mapStateToProps, { 
    getSideBar
})(Categories)
