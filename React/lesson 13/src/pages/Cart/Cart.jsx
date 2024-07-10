import { useSelector } from "react-redux";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  decrementProduct,
  incrementProduct,
  removeProductFromCart,
} from "../../store/futures/productSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const { product, cart, loading } = useSelector((state) => state.products);

  return (
    <>
      <div className="cart__page">
        <div className="container">
          <div className="cart__header">
            <h3>Your cart items</h3>
            <Link to="/">Back to shopping</Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th colSpan={2}>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {cart &&
                cart.map((elem) => (
                  <tr className="cart-item" key={elem.id}>
                    <td className="table-w-10">
                      <div className="cart-item__image">
                        <img src={elem.image} alt="" />
                      </div>
                    </td>
                    <td className="table-w-30">
                      <div className="cart-item__block">
                        <h2 className="cart-item__title">{elem.title}®</h2>
                        <button
                          className="btn"
                          onClick={() =>
                            dispatch(removeProductFromCart(elem.id))
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                    <td>$ {elem.price}</td>

                    <td className="cart-item__actions">
                      <div className="quantity">
                        <button
                          onClick={() =>
                            dispatch(decrementProduct(product?.id))
                          }
                        >
                          <FaMinus className="quantity__icon" />
                        </button>
                        <span>{elem.count}</span>
                        <button
                          onClick={() =>
                            dispatch(incrementProduct(product?.id))
                          }
                        >
                          <FaPlus className="quantity__icon" />
                        </button>
                      </div>
                    </td>

                    <td className="cart-item__total">
                      $ {elem.price * elem.count}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {/* <table>
            <tr className="table__header">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            {cart &&
              cart.map((elem) => (
                <tr className="cart__item" key={elem.id}>
                  <td className="table__image">
                    <img src={elem.image} alt="" />
                    <div>
                      <h3>{elem.title}®</h3>
                      <button>Remove</button>
                    </div>
                  </td>
                  <td className="table__price">$ {elem.price}</td>
                  <td className="table__quantity">
                    <button
                      onClick={() => dispatch(decrementProduct(product?.id))}
                    >
                      -
                    </button>
                    <span>{elem.count}</span>
                    <button
                      onClick={() => dispatch(incrementProduct(product?.id))}
                    >
                      +
                    </button>
                  </td>
                  <td className="table__total-price">
                    $ {elem.price * elem.count}
                  </td>
                </tr>
              ))}
          </table> */}
        </div>
      </div>
    </>
  );
};

export default Cart;
