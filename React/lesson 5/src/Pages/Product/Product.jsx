import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = ({ addProductToCart }) => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(0);

  const fetchProduct = async () => {
    try {
      let res = await fetch("/products.json");

      let data = await res.json();

      let filteredData = data.find((item) => item.id === productId);

      setProduct(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount((prevState) => prevState - 1);
    }
  };

  const addToCart = (product) => {
    addProductToCart({ ...product, count });
  };

  if (!product) return "Loading ...";

  return (
    <div className="container">
      <div className="product">
        <img
          src={product.image}
          alt={product.name}
          className="product__image"
        />

        <div className="product__info">
          <h1>{product.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            illo
          </p>
          <span>{product.price}$</span>

          <div className="product__count">
            <button onClick={decrementCount}>-</button>
            <input type="text" value={count} disabled readOnly />
            <button onClick={incrementCount}>+</button>
          </div>
          <button
            className="btn btn-bgorange"
            onClick={() => addToCart(product)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
