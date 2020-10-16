import React from 'react'
import { Link } from 'react-router-dom'

const FooterTop = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="companyinfo">
                                <h2><span>Local</span>-Baniya</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="col-sm-3">
                                <div className="video-gallery text-center">
                                    <Link to="#">
                                        <div className="iframe-img">
                                            <img src={require('../../../assets/images/home/iframe1.png')} alt="" />
                                        </div>
                                        <div className="overlay-icon">
                                            <i className="fa fa-play-circle-o"></i>
                                        </div>
                                    </Link>
                                    <p>Circle of Hands</p>
                                    <h2>24 DEC 2014</h2>
                                </div>
                            </div>
                            
                            <div className="col-sm-3">
                                <div className="video-gallery text-center">
                                    <Link to="#">
                                        <div className="iframe-img">
                                            <img src={require('../../../assets/images/home/iframe2.png')} alt="" />
                                        </div>
                                        <div className="overlay-icon">
                                            <i className="fa fa-play-circle-o"></i>
                                        </div>
                                    </Link>
                                    <p>Circle of Hands</p>
                                    <h2>24 DEC 2014</h2>
                                </div>
                            </div>
                            
                            <div className="col-sm-3">
                                <div className="video-gallery text-center">
                                    <Link to="#">
                                        <div className="iframe-img">
                                            <img src={require('../../../assets/images/home/iframe3.png')} alt="" />
                                        </div>
                                        <div className="overlay-icon">
                                            <i className="fa fa-play-circle-o"></i>
                                        </div>
                                    </Link>
                                    <p>Circle of Hands</p>
                                    <h2>24 DEC 2014</h2>
                                </div>
                            </div>
                            
                            <div className="col-sm-3">
                                <div className="video-gallery text-center">
                                    <Link to="#">
                                        <div className="iframe-img">
                                            <img src={require('../../../assets/images/home/iframe4.png')} alt="" />
                                        </div>
                                        <div className="overlay-icon">
                                            <i className="fa fa-play-circle-o"></i>
                                        </div>
                                    </Link>
                                    <p>Circle of Hands</p>
                                    <h2>24 DEC 2014</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="address">
                                <img src={require('../../../assets/images/home/map.png')} alt="" />
                                <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
            
        </footer>
        

    )
}

export default FooterTop
