import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/Home/Home'
import ProductPage from '@/pages/Product/Product'
import ProductsPage from '@/pages/Products/Products'
import CartPage from '@/pages/Cart/Cart'
import Layout from '@/components/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './store/futures/productSlice'

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  return (
    <>

      <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<HomePage/>}/>
              <Route path='products' element={<ProductsPage />}/>
              <Route path='products/:productId' element={<ProductPage />}/>
              <Route path='cart' element={<CartPage />}/>
          </Route>
      </Routes>
    </>
  )
}

export default App