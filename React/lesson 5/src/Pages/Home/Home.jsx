import React, { useEffect, useState } from 'react';
import {CiSearch } from "react-icons/ci";
import { NavLink, Outlet} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '@/store/features/product/productSlice';

const Home = () => {
  const categories = useSelector(state => state.product.categories)

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