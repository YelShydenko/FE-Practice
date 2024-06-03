import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const ProductItem = () => {
  const { productId } = useParams();
   const [products, setProducts] = useState([]);
   
  const fetchProducts = async () => {
    let res = await fetch("/products.json");
    let data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterProduct = productId
    ? products.filter((item) => item.id === productId)
      : products;
   
  return (
    <>
      {filterProduct &&
        filterProduct.map((product) => (
          <div className="item" key={product.id}>
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <span>{product.price} $</span>
          </div>
        ))}
    </>
  );
};

export default ProductItem;
