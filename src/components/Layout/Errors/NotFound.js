import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="container text-center">
            <div className="logo-404">
                <Link to="/"><img src={require('../../../assets/images/home/logo.png')} alt="" width="120" /></Link>
            </div>
            <div className="content-404">
                <img src={require('../../../assets/images/404/404.png')} className="img-responsive" width="200" alt="" />
                <h1><b>OPPS!</b> We Couldn’t Find this Page</h1>
                <p>Uh... So it looks like you brock something. The page you are looking for has up and Vanished.</p>
                <h2><Link to="/">Bring me back Home</Link></h2>
            </div>
        </div>
    )
}

export default NotFound
