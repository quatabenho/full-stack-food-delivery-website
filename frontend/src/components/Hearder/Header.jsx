import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'> 
        <div className='header-contents'>
            <h2>Order your favourite food here</h2>
            <p>Order your favourite food from our menu and we will deliver it to your doorsteps</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header