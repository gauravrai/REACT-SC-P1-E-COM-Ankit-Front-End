import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Spinner from '../../../Layout/Spinner/Spinner'


import imgPricing from '../../../../assets/images/home/girl3.jpg'

import { getBanner } from '../../../../actions/banner'

const Banner = ({getBanner, banners: { banners, loading}}) => {
    useEffect(() => {
        getBanner()
    }, [getBanner])
    
    let bannerString = ''
    let bannerLinks = ''
    
    if(!loading){
        if(banners.length){
            let bannerLinkCounter = -1
            bannerLinks = banners.map(item => {
                bannerLinkCounter++
                return <li data-target="#slider-carousel" key={`banner${bannerLinkCounter}`} data-slide-to={bannerLinkCounter} className={(bannerLinkCounter===0)?"active":""}></li>
            })
            let counter = 0
            bannerString = banners.map(item => {
                counter ++
                let dateFrom = new Date(item.from)
                let dateTo = new Date(item.to)
                return <div className={(counter===1)?'item active': 'item'} key={`bannerItem${counter}`}>
                            <div className="col-sm-6">
                                <h1>{item.name}</h1>
                                <h2>
                                    {`${dateFrom.getDate()}-${dateFrom.getMonth()}-${dateFrom.getFullYear()}`} 
                                    &nbsp;to &nbsp; 
                                    {`${dateTo.getDate()}-${dateTo.getMonth()}-${dateTo.getFullYear()}`} 
                                </h2>
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <button type="button" className="btn btn-default get ">Get it now</button>
                            </div>
                            <div className="col-sm-6">
                                <img src={`${item.path}/${item.bannerImage}`} className="girl img-responsive" alt="" />
                                <img src={imgPricing}  className="pricing hide" alt="" />
                            </div>
                        </div>
            })
        }
    }
    

    return (
        <section id="slider">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                {loading?"": bannerLinks}
                                
                            </ol>
                            
                            <div className="carousel-inner">
                                
                                {loading? <Spinner /> : bannerString}
                            </div>
                            
                            <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                                <i className="fa fa-angle-left"></i>
                            </a>
                            <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}


Banner.propTypes = {
    getBanner: PropTypes.func.isRequired,
    banners: PropTypes.object.isRequired,
}
const mapStateToProps = state => {
    
    return ({
        banners: state.banner
    })
}

export default connect(mapStateToProps, { 
    getBanner
})(Banner)
