import React from "react";
import { createElement } from "react";

const TodosItem = () => <li className="todos__item">Todo 1</li>;

const Todos = () => {
  return (
    <ul className="todos">
      <TodosItem />
      <TodosItem />
      <TodosItem />
      <TodosItem />
    </ul>
  );
};

const App = () => {
  const title = createElement(
    "h2",
    { className: "title" },
    "This is Todos!",
    createElement("span", { className: "text" }, " Here is span")
  );
  return (
    <>
      <h2 className="title">Todoss</h2>
      {title}
      <Todos />
    </>
  );
};

export default App;
