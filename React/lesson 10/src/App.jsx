import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "./AuthContext";
import "./App.scss";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "./ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <Navbar />
          <Home />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
