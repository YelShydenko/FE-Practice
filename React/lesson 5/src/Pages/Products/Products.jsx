import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  const fetchProducts = async () => {
    let res = await fetch("/products.json");
    let data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterProducts = categoryId
    ? products.filter((item) => item.categoryId === categoryId)
    : products;

  return (
    <>
      {filterProducts &&
        filterProducts.map((product) => (
          <div className="item" key={product.id}>
            <img src={product.image} alt="" />
            <h2>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </h2>
            <span>{product.price} $</span>
          </div>
        ))}
    </>
  );
};

export default Products;
