import "./App.scss";
import { FiSearch } from "react-icons/fi";
import pizzaBanner from "./assets/pizzaBanner.png";

function App() {
  return (
    <>
      <aside className="sidebar">
        <nav className="nav">
          <ul>
            <li className="nav__item">
              <a href="#">Home</a>
            </li>
            <li className="nav__item">
              <a href="#">Cart</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <div className="container">
          <div className="header">
            <div className="header__info">
              <h2>Hello John</h2>
              <p>Welcome Back</p>
            </div>

            <div className="header__search">
              <FiSearch className="search__icon" />
              <input type="search" placeholder="Search" />
            </div>
          </div>
          <div className="banner">
            <div className="banner__content">
              <h1>
                Make Your First Order and Get <span>50% Off</span>
              </h1>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without.
              </p>
              <button>Order Now</button>
            </div>
              <img src={pizzaBanner} alt="pizza" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
