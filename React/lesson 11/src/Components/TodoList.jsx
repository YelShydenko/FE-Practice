import React, { useEffect, useState } from "react";

const TodoList = ({ getItems }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = getItems();
    setTodos(data);
    console.log("Component TodoList");
  }, [getItems]);

  return (
    <ul>{todos && todos.map((item, index) => <li key={index}>{item}</li>)}</ul>
  );
};

export default TodoList;
