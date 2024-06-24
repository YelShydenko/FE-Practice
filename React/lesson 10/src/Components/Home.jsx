import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { ThemeContext } from "../ThemeContext";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`home ${theme ? "home-light" : "home-dark"}`}>
      <h2>Welcome to the Home Page!</h2>

      <h3>
        {isAuthenticated
          ? "You are logged in!"
          : "Please log in to access more features."}
      </h3>
    </div>
  );
};

export default Home;
