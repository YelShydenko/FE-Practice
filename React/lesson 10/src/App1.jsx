import { useState } from "react";
import "./App.scss";
import Component1 from "./Components/Component1";
import { CounterContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <>
      <CounterContext.Provider
        value={{
          count,
          increment,
        }}
      >
        <Component1 />
      </CounterContext.Provider>
    </>
  );
}

export default App;
