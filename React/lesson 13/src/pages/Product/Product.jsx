import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProductsById,
  addProductToCart,
  removeProductFromCart,
  decrementProduct,
  incrementProduct,
} from "@/store/futures/productSlice";
import Button from "@/components/Button/Button";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Product.scss";

const Product = () => {
  const dispatch = useDispatch();
  const { product, cart, loading } = useSelector((state) => state.products);

  const [count, setCount] = useState(0);

  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchProductsById(productId));
  }, [productId]);

  useEffect(() => {
    let cartFound = cart.find((item) => item.id === product?.id);

    if (cartFound) {
      setCount(cartFound.count);
    } else {
      setCount(0);
    }
  }, [cart, product]);

  const removeCart = () => {
    dispatch(removeProductFromCart(product.id));

    setCount(1);
  };
  return (
    <div className="product">
      <div className="container">
        <div className="content">
          <div className="product__details">
            <div className="product__image">
              <img src={`../${product?.image}`} alt={product?.title} />
            </div>
            <div className="product__info">
              <div>
                <h1 className="product__title">{product?.title}®</h1>
                <h4 className="product__price">$ {product?.price}</h4>
              </div>

              <div className="product__actions">
                {count > 0 && (
                  <div className="quantity">
                    <button
                      onClick={() => dispatch(decrementProduct(product?.id))}
                    >
                      <FaMinus className="quantity__icon" />
                    </button>
                    <span>{count}</span>
                    <button
                      onClick={() => dispatch(incrementProduct(product?.id))}
                    >
                      <FaPlus className="quantity__icon" />
                    </button>
                  </div>
                )}

                {count > 0 ? (
                  <Button
                    className="btn-default-size btn-danger-color"
                    onClick={removeCart}
                  >
                    Remove from cart
                  </Button>
                ) : (
                  <Button
                    className="btn-default-size btn-default-color btn-icon"
                    onClick={() => dispatch(addProductToCart(product))}
                  >
                    {" "}
                    <MdOutlineShoppingCart size={16} /> + Add to cart
                  </Button>
                )}
              </div>

              <h6 className="product__banner">
                All hand-made with natural soy wax, Candleaf is made for your
                pleasure moments. <br /> <span>🚚 FREE SHIPPING</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
