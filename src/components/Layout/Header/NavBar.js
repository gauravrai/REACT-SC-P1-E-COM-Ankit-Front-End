import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    
    const navigation = [
        {
            name: 'Home',
            slug: '/',
            isActive: 'active',
            key: 1
        },
        {
            name: 'About',
            slug: '/about',
            isActive: '',
            key: 2
        },
        {
            name: 'Contact Us',
            slug: '/contact-us',
            isActive: '',
            key: 3
        },
        {
            name: 'Stores',
            slug: '/stores',
            isActive: '',
            key: 4
        },
        {
            name: 'FAQ',
            slug: '/faq',
            isActive: '',
            key: 5
        }
    ]
    return (
        <Fragment>
            {navigation.map(item => (<li key={item.key}><Link className={item.isActive} to={item.slug}>{item.name}</Link></li>))}
        </Fragment>
    )
}


export default NavBar
