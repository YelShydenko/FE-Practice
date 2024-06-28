import React, { useCallback, useEffect, useState } from "react";
import Color from "./Components/Color";
import Count from "./Components/Count";
import TodoList from "./Components/TodoList";

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("dark");

  //   useEffect(() => {
  //     console.log("App COMPONENT");
  //   });

  const updateOne = () => {
    console.log("Without useCallback");
  };

  const updateTwo = useCallback(() => {
    console.log("useCallback");
  }, [count]);

  const fetchDataByApi = () => {
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    return new Array(count).fill("").map((_, index) => `Post - ${index + 1}`);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
      <Color color={color} />
        <Count updateOne={updateOne} updateTwo={updateTwo} />
        <TodoList getItems = {fetchDataByApi} />
      <button onClick={() => setColor(color === "light" ? "dark" : "light")}>
        Change Color
      </button>
    </div>
  );
};

export default App;
