import React from 'react'
import { Link } from 'react-router-dom'


const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <p className="pull-left">Copyright © 2020 {process.env.REACT_APP_SITE_NAME}. All rights reserved.</p>
                    <p className="pull-right">Designed by <span><Link target="_blank" to="http://www.softchilli.com">Soft Chilli</Link></span></p>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom
