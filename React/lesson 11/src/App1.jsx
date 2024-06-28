import './App.scss'
import TodoComponent from './Components/TodoComponent'
import { TodoProvider } from './todoContext'

function App() {
   return (
     <>
       <TodoProvider>
         <TodoComponent />
       </TodoProvider>
     </>
   );
}

export default App

// 1. У вас есть TodoProvider.
// 2. У TodoProvider есть состояние todos (массив).
// 3. Методы addTodo, removeTodo, clearTodo.
// 4. Компонент Todo, где у вас будет: div > input + button{ADD} + div > ul > li*2{Todo $} + button{REMOVE}.
// 5. Когда вы написали текст внутри input и нажали на кнопку ADD, нужно использовать метод addTodo.