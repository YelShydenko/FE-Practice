import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={ <h1>Eroor 404 Not Found</h1> } />
        </Route>
      </Routes>
    </>
  );
};

export default App;
