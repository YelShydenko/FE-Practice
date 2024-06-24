import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { LuSunMedium, LuMoon } from "react-icons/lu";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleChangeSwitch = (e) => {
    toggleTheme(e.target.checked);
  };

  return (
    <nav className={`nav ${theme ? "nav-light" : "nav-dark"}`}>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        {isAuthenticated ? (
          <li>
            <a href="">Posts</a>
          </li>
        ) : null}
      </ul>

      <div className="nav__action">
        <label className={`switch ${theme ? "switch-active" : ""}`}>
          <input type="checkbox" onChange={handleChangeSwitch} value={theme} />
          <span className="switch__slider">
            {theme ? <LuSunMedium size={12} /> : <LuMoon size={12} />}
          </span>
        </label>

        {!isAuthenticated ? (
          <button onClick={login}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
