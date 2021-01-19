import React from 'react'


import Categories from './Categories/Categories'
import Brands from './Brands/Brands'
import PriceRange from './PriceRange/PriceRange'
//import Offers from './Offers/Offers'

const SideBar = () => {
    return (
        <div className="left-sidebar">
            <Categories />
            <Brands />
            <PriceRange />
            
        </div>
    )
}

export default SideBar
