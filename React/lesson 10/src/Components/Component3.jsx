import React, { useContext } from "react";
import { CounterContext } from "../context";

const Component3 = () => {
   const {increment} = useContext(CounterContext)
  return (
    <>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Component3;
