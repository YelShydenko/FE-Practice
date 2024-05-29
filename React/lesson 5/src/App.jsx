import React from 'react'
import "./App.scss";
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';
import { Route, Routes } from 'react-router';
import Cart from './Pages/Cart/Cart';
import Products from './Pages/Products/Products';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            <Route path='/categories/:categoryId' element={<Products />}/>
        

            <Route path="/cart" element={<Cart />}/>
        </Route>
    </Routes>
  )
}

export default App