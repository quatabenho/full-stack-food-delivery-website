import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={assets.nguyen} alt="nguyen-logo" />
        <ul className='navbar-menu'>
            <li>home</li>
            <li>menu</li>
            <li>mobile-app</li>
            <li>contact us</li>
        </ul>

        <div className='navbar-right'>
             <img src={assets.search} alt="Search icon" />
            <div className='navbar-search-icon'>
                <img src={assets.basket} alt="Basket icon" />
                <div className='dot'></div>
            </div>
        </div>
        <button>sign in</button>
    </div>
  )
}

export default Navbar