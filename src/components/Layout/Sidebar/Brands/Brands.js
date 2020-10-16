import React, { useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../../Spinner/Spinner'

import { getSideBar } from '../../../../actions/sidebar'

const Brands = ({getSideBar, brand: {brands, loading}}) => {
    useEffect(() => {
        getSideBar()
    }, [getSideBar])

    let brandsSection = null

    if(!loading){
        brandsSection = brands.map(item => {
            return <li key={item._id}><Link to={`/brand/${item._id}`}> <span className="pull-right hide">()</span>{item.name}</Link></li>
        })
    }

    return loading ? <Spinner /> : (
        <div className="brands_products">
            <h2>Brands</h2>
            <div className="brands-name">
                <ul className="nav nav-pills nav-stacked">
                    {brandsSection}
                </ul>
            </div>
        </div>

    )
}

Brands.propTypes = {
    getSideBar: PropTypes.func.isRequired,
    brand: PropTypes.object.isRequired,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}

const mapStateToProps = state => {
    return ({
        brand: state.sidebar
    })
}

export default connect(mapStateToProps, {
    getSideBar
})(Brands)
