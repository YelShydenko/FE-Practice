import React, { useEffect, useState } from 'react';
import { CiHome, CiSearch, CiShoppingBasket } from "react-icons/ci";
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import Products from '../Products/Products';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchCategories = async () => {
    let res = await fetch("/categories.json");

    let data = await res.json();

    setCategories(data);
  }

  const fetchProducts = async () => {
    let res = await fetch("/products.json");

    let data = await res.json();

    setProducts(data);
  }

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const setActiveLink = ({isActive}) => isActive ? "tab__item tab__item-active" : "tab__item";

  return (
    <div className="container">
      <div className="header">
        <div className="header__info">
          <h2>Hello John</h2>
          <p>Welcome Back</p>
        </div>

        <div className="search">
          <input type="text" placeholder="Search" className='search__input' />
          <CiSearch className='search__icon' />
        </div>
      </div>

      <div className="banner">
        <div className="banner__content">
          <h1>Make Your First Order and Get <span>50% Off</span></h1>

          <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.</p>

          <button className="btn btn-large btn-bgorange btn-white btn-radius">Order Now</button>
        </div>

        <img src="./images/pizza-banner.png" alt="" className='banner__image' />
      </div>

      <ul className="tab">
        <li>
              <NavLink to="/" className={setActiveLink}>All</NavLink>
        </li>
        {
          categories && categories.map(category => (
            <li key={category.id}>
              <NavLink to={`/categories/${category.id}`} className={setActiveLink}>{category.name}</NavLink>
            </li>
          ))
        }
      </ul>

      <div className="content">
        <div className="products">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home