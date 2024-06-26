import React, { useEffect, useState } from 'react'
import "@/App.scss";
import Home from '@/pages/Home/Home';
import Layout from '@/pages/Layout/Layout';
import { Route, Routes } from 'react-router';
import Cart from '@/pages/Cart/Cart';
import Products from '@/pages/Products/Products';
import Product from '@/pages/Product/Product';
import ProductAdmin from '@/pages/Admin/ProductAdmin/ProductAdmin';
import { useDispatch } from 'react-redux';
import { fetchCategories, fetchProducts } from '@/store/features/product/productSlice';
import CategoryAdd from '@/pages/CategoryAdd/CategoryAdd';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts())
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<Home />}>
          <Route index path='/' element={<Products />} />
          <Route path='/categories/:categoryId' element={<Products />} />
        </Route>
        
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/product/add" element={<ProductAdmin />} />
        <Route path="/category/add" element={<CategoryAdd />} />
      </Route>
    </Routes>
  )
}

export default App