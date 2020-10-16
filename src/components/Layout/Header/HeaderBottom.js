import React from 'react'

import NavBar from './NavBar'

const HeaderBottom = () => {
    return (
        <div className="header-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="mainmenu pull-left">
                            <ul className="nav navbar-nav collapse navbar-collapse">
                                
                                <NavBar />
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="search_box pull-right">
                            <input type="text" placeholder="Search anything..."/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default HeaderBottom
