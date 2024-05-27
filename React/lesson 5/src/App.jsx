import "./App.scss";
import { FiSearch } from "react-icons/fi";
import pizzaBanner from "./assets/pizzaBanner.png";
import { FiHome } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";

const categoriesData = [
  {
    id: "1",
    name: "Pizza",
  },
  {
    id: "2",
    name: "Burger",
  },
  {
    id: "3",
    name: "Fries",
  },
  {
    id: "4",
    name: "Pack",
  },
];

const productsData = [
  {
    id: "1",
    categoryId: "1",
    name: "Classic Cheese Pizza",
    price: 8.4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
  },
  {
    id: "2",
    categoryId: "1",
    name: "Supreme Pizza",
    price: 10.4,
    image:
      "https://cuocsongtiennghi.com/Systems/2023/12/29/cach-bao-quan-pizza-de-banh-pizza-va-cach-ham-nong-banh-pizza-avt-1200x676.jpg",
  },
  {
    id: "3",
    categoryId: "2",
    name: "Classic Cheeseburger",
    price: 16.4,
    image:
      "https://www.modernhoney.com/wp-content/uploads/2022/05/Double-Double-Cheeseburger-with-Fries-Recipe-scaled.jpg",
  },
  {
    id: "4",
    categoryId: "2",
    name: "Beetroot Lamb Burgers",
    price: 25.4,
    image:
      "https://images.squarespace-cdn.com/content/v1/5ec1febb58a4890157c8fbeb/19ebb9ed-4862-46e1-9f7c-4e5876730227/Beetroot-Burger.jpg",
  },
  {
    id: "5",
    categoryId: "3",
    name: "Air Fryer Sweet Potato Fries",
    price: 4.0,
    image:
      "https://www.budgetbytes.com/wp-content/uploads/2023/10/Air-Fryer-Sweet-Potato-Fries-Plated.jpg",
  },
];

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([])

  useEffect(() => {
    setCategories(categoriesData);
    setProducts(productsData);
  }, []);

  return (
    <>
      <aside className="sidebar">
        <nav className="nav">
          <ul>
            <li className="nav__item">
              <a href="#">
                Home <FiHome />
              </a>
            </li>

            <li className="nav__item">
              <a href="#">
                Cart
                <FiShoppingCart />
              </a>
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
          <ul className="tab">
            {categories &&
              categories.map((category) => (
                <li key={category.id}>
                  <a href="/burger" className="tab__item">
                    {category.name}
                  </a>
                </li>
              ))}
          </ul>
          <div className="content">
            <div className="products">
              {products &&
                products.map((item) => (
                  <div className="item" key={item.id}>
                    <img
                      src={item.image}
                      alt="food image"
                    />
                    <h2>{item.name}</h2>
                    <span>{item.price} $</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
