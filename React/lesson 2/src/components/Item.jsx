import React, { useEffect } from "react";

const Item = () => {
  useEffect(() => {
    return () => {
      console.log("useEffect Remove!!!");
    };
  }, []);

  return <div>Item</div>;
};

export default Item;
