import React, { useContext, useState } from "react";
import { todoContext } from "../todoContext";

const TodoComponent = () => {
  const { todoList, addTodo, removeTodo, clearTodo } = useContext(todoContext);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    addTodo(inputValue);
    setInputValue("");
  };
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={handleAddTodo}>ADD</button>
        <button onClick={clearTodo}>Clear To Do</button>
        <div>
          <ul>
            {todoList &&
              todoList.map((elemTodo) => (
                <li key={elemTodo.id}>
                  {elemTodo.text}
                  <button onClick={() => removeTodo(elemTodo.id)}>
                    REMOVE
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoComponent;
