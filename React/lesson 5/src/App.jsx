import React, { useState } from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import { Route, Routes } from "react-router";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";

const App = () => {
  const [carts, setCarts] = useState([]);

  const addProductToCart = (product) => {
    let foundProduct = carts.find((item) => item.id === product.id);

    if (foundProduct) {
      if (product.count === 0) {
        setCarts(carts.filter((item) => item.id !== product.id));
      } else {
        setCarts(
          carts.map((item) => {
            if (item.id === product.id) {
              item.count = product.count;
            }

            return item;
          })
        );
      }
    } else {
      if (product.count !== 0) {
        setCarts((prevState) => [...prevState, product]);
      }
    }
  };

  console.log(carts);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<Home />}>
          <Route index path="/" element={<Products />} />
          <Route path="/categories/:categoryId" element={<Products />} />
        </Route>
        <Route
          path="/product/:productId"
          element={<Product addProductToCart={addProductToCart} />}
        />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
