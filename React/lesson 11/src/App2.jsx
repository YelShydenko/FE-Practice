import React, { useMemo, useState } from "react";

function func(num) {
  for (let index = 0; index < 1000000000; index++) {}

  return num ** 2;
}

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);

  const numSquare = useMemo(() => {
    return func(count);
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color ? "green" : "red" }}>Number: {numSquare}</h1>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        INCREMENT
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        DECREMENT
      </button>
      <button onClick={() => setColor(!color)}>CHANGE COLOR</button>
    </div>
  );
};
export default App;
