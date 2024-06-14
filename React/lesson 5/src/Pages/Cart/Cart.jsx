import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
} from "../../store/features/product/productSlice";

const Cart = () => {
  const [promo, setPromo] = useState([
    {
      id: "1",
      name: "promo2024",
      sale: 10,
    },
    {
      id: "2",
      name: "sale20percent",
      sale: 20,
    },
  ]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.carts);

  const [inputValue, setInputValue] = useState("");

  const decrementCountProduct = (id) => {
    dispatch(decrement(id));
  };

  const incrementCountProduct = (id) => {
    dispatch(increment(id));
  };

  let sum = data.reduce((acc, current) => {
    return (acc += current.price * current.count);
  }, 0);

  const handleSale = (sum) => {
    const foundSale = promo.find((item) => item.name === inputValue);

    console.log(sum - sum * (foundSale.sale / 100));
  };

  return (
    <div className="container">
      <h2>Cart</h2>

      <div>
        {data &&
          data.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.image} className="product__image" />

              <div className="product__info">
                <h1>{item.name}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, illo
                </p>
                <span>{(item.price * item.count).toFixed(2)}$</span>

                <div className="product__count">
                  <button onClick={() => decrementCountProduct(item.id)}>
                    -
                  </button>
                  <input type="text" value={item.count} disabled readOnly />
                  <button onClick={() => incrementCountProduct(item.id)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => handleSale(sum)}>Get Sale</button>
        <h2>Sum: {sum.toFixed(2)}$</h2>
      </div>
    </div>
  );
};

export default Cart;
