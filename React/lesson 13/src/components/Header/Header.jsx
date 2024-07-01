import React from "react";
import "./Header.scss";
import ButtonComponent from "../UI/ButtonComponent/ButtonComponent";

const Header = () => {
  return (
    <header className="header">
      <img src="./images/bg-image.jpg" alt="" className="header__image" />

      <div className="header__content">
        <div>
          <span>🌱</span>
          <h2>The nature candle</h2>
          <p>
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments{" "}
          </p>
        </div>

        <ButtonComponent className="btn-default-size btn-default-color">
          Discovery our collection
        </ButtonComponent>
      </div>
    </header>
  );
};

export default Header;
