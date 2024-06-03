import React from "react";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Layout from "./Pages/Layout/Layout";
import { Route, Routes } from "react-router";
import Cart from "./Pages/Cart/Cart";
import Products from "./Pages/Products/Products";
import ProductItem from "./Pages/ProductItem/ProductItem";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<Home />}>
          <Route index path="/" element={<Products />} />
          <Route path="/categories/:categoryId" element={<Products />} />
        </Route>
        <Route path="/product/:productId" element={<ProductItem />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
