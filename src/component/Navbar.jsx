import React from 'react'

const Navbar = () => {
    const logo = "https://group.jumia.com/download/images/press/hd/logos/mall.png"
  return (
    <div className='Navbar'>
        <div className='logo'>
            <img className='img' src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default Navbar