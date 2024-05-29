import React from 'react'
import { CiHome, CiShoppingBasket } from 'react-icons/ci'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

const Layout = () => {

    const setActiveLink = ({isActive}) => isActive ? 'nav__item nav__item-active' : 'nav__item'

    return (
        <>
            <aside className='sidebar'>
                <nav className='nav'>
                    <ul>
                        <li><NavLink to="/" className={setActiveLink}><CiHome /> <span>Home</span></NavLink></li>
                        <li><NavLink to="/cart" className={setActiveLink}><CiShoppingBasket /> <span>Cart</span></NavLink></li>
                    </ul>
                </nav>
            </aside>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout