import React from 'react'
import { MdOutlinePersonOutline, MdOutlineShoppingCart  } from "react-icons/md";
import "./Navbar.scss"


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='container'>
            <div className="content">
                <a href="/" className='navbar__logo'>
                  <img src="./logo.svg" alt="" />
                </a>

                <ul className='navbar-list'>
                    <li><a href="/" className='navbar-list__item navbar-list__item-active'>Home</a></li>
                    <li><a href="/" className='navbar-list__item'>About</a></li>
                    <li><a href="/" className='navbar-list__item'>Contact us</a></li>
                </ul>

                <ul className='navbar-list'>
                    <li><a href="/" className='navbar-list__item'><MdOutlinePersonOutline className='navbar-list__icon'/></a></li>
                    <li><a href="/" className='navbar-list__item'><MdOutlineShoppingCart className='navbar-list__icon'/></a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar