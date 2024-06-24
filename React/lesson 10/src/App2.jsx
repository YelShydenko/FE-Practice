import React from "react";
import ThemedComponent from "./Components/ThemedComponent";
import { ThemeProvider } from "./ThemeContext";
import "./App.scss";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
    </>
  );
};

export default App;
