import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
  const setActiveLink = ({ isActive }) =>
    isActive ? "navbar__item navbar__item-active" : "navbar__item";
  return (
    <>
      <header>
        <nav>
          <ul className="navbar">
            <li>
              <NavLink to="/" className={setActiveLink}>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={setActiveLink}>
                О себе
              </NavLink>
            </li>
            <li>
              <NavLink to="/posts" className={setActiveLink}>
                Посты
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>This is footer</footer>
    </>
  );
};
export default Layout;
