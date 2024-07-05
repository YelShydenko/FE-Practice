import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((state) => state.products.cart);
  console.log(cartData);

  // const [cartQuantityValue, setCartQuantityValue] = useState(cartData.quantityValue);

  // const increment = () => {
  //   setCartQuantityValue(cartQuantityValue + 1);
  // };

  // const decrement = () => {
  //   if (cartQuantityValue > 1) {
  //     setCartQuantityValue(cartQuantityValue - 1);
  //   }
  // };

  return (
    <>
      <div className="cart__page">
        <div className="container">
          <div className="cart__header">
            <h3>Your cart items</h3>
            <Link to="/">Back to shopping</Link>
          </div>
          <table>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            {cartData &&
              cartData.map((elem) => (
                <tr className="cart__item" key={elem.id}>
                  <td>
                    <img src={elem.image} alt="" />
                    <div>
                      <h3>{elem.title}</h3>
                    </div>
                  </td>
                  <td>$ {elem.price}</td>
                  <td>
                    {/* <button onClick={increment}>+</button> */}
                    <span>{elem.quantityValue}</span>
                    {/* <button onClick={decrement}>-</button> */}
                  </td>
                  <td>$ {elem.price * elem.quantityValue}</td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
