import React from "react";
import { MdOutlinePersonOutline, MdOutlineShoppingCart } from "react-icons/md";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state.products);

  const setActiveLink = ({ isActive }) =>
    isActive
      ? "navbar-list__item navbar-list__item-active"
      : "navbar-list__item";

  return (
    <nav className="navbar">
      <div className="container">
        <div className="content">
          <Link to="/" className="navbar__logo">
            <img src="./logo.svg" alt="" />
          </Link>

          <ul className="navbar-list">
            <li>
              <NavLink to="/" className={setActiveLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={setActiveLink}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={setActiveLink}>
                Contact us
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-list">
            <li>
              <NavLink to="/profile" className="navbar-list__item">
                <MdOutlinePersonOutline className="navbar-list__icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="navbar-list__item">
                <MdOutlineShoppingCart className="navbar-list__icon" />
                <span className="count">{cart.length}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
