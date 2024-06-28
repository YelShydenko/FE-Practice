import { createContext, useState } from "react";

export const todoContext = createContext()

export const TodoProvider = ({ children }) => {
   const [todoList, setTodoList] = useState([])
   
   const addTodo = (elem) => {
      setTodoList([...todoList, { id: Date.now(), text: elem }]);
   }

   const removeTodo = (todoId) => {
     setTodoList(todoList.filter((item) => item.id !== todoId));
   }

   const clearTodo = () => {
      setTodoList([])
   }

   return (
      <todoContext.Provider value={{todoList, addTodo, removeTodo, clearTodo}} >
         {children}
      </todoContext.Provider>
   )

}