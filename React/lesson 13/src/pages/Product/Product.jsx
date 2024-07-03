import React, { useState } from "react";
import "./Product.scss";
import Button from "../../components/Button/Button";

const Product = () => {
  const [quantityValue, setQuantityValue] = useState(1);

  const increment = () => {
    setQuantityValue(quantityValue + 1);
  };
  const decrement = () => {
    if (quantityValue > 1) {
      setQuantityValue(quantityValue - 1);
    }
  };
  return (
    <div className="product__page">
      <div className="container">
        <div className="product__content">
          <div className="product__content-left">
            <div className="product__content-left__image">
              <img src=".././images/products/product-1.png" alt="" />
            </div>
            <div className="product__content-left__description">
              <p>
                All hand-made with natural soy wax, Candleaf is made for your
                pleasure moments.
              </p>
              <p>🚚 FREE SHIPPING</p>
            </div>
          </div>
          <div className="product__content-right">
            <h2>Spiced Mint Candleaf®</h2>
            <div className="product__content-right__info">
              <div className="price__quantity">
                <span className="price">$ 9.99</span>
                <div className="quantity">
                  <p>Quantity</p>
                  <div className="quantity__value">
                    <button onClick={increment}>+</button>
                    <span>{quantityValue}</span>
                    <button onClick={decrement}>-</button>
                  </div>
                </div>
              </div>
              <div className="purchase__subscription">
                <div className="first__radio">
                  <label htmlFor="radio__one">
                    <input
                      className="radio"
                      type="radio"
                      id="radio__one"
                      name="radio__one"
                      value="one__time"
                      required
                    />
                    One time purchase
                  </label>
                </div>
                <div className="second__radio">
                  <div className="radio__delivery">
                    <label htmlFor="radio__two">
                      <input
                        className="radio"
                        type="radio"
                        id="radio__two"
                        name="radio__two"
                        value="subscription"
                        checked
                        required
                      />
                      Subscribe and delivery every
                    </label>
                    <select name="" id="">
                      <option value="2 weeks">2 week</option>
                      <option value="4 weeks">4 weeks</option>
                      <option value="1 month">1 month</option>
                      <option value="2 month">2 month</option>
                    </select>
                  </div>

                  <p>
                    Subscribe now and get the 10% of discount on every recurring
                    order. The discount will be applied at checkout.
                    <span> See details</span>
                  </p>
                </div>
                <Button className="btn-default-size btn-default-color">
                  + Add to cart
                </Button>
              </div>
            </div>
            <div className="product__content-right__description">
              <p>
                <span>Wax:</span> Top grade Soy wax that delivers a smoke less,
                consistent burn
              </p>
              <p>
                <span>Fragrance:</span> Premium quality ingredients with natural
                essential oils
              </p>
              <div className="product__content-right__description-specific">
                <p>
                  <span>Burning Time: 70-75 hours</span> 70-75 hours
                </p>
                <p>
                  <span>Dimension:</span> 10cm x 5cm
                </p>
                <p>
                  <span>Weight:</span> 400g
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
