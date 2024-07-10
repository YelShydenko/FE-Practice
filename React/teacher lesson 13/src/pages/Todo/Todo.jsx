import React, { useEffect, useState } from 'react'
import "./Todo.scss"
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  const { register, handleSubmit, watch, setError, formState: { errors }, reset } = useForm()

  const [todos, setTodos] = useState([]);

  const onSubmit = (data) => {
    setTodos([...todos, {id: uuidv4(), ...data}]);

    reset();
  }

  const searchLabel = watch("search", "");

  const filteredTodos = todos.filter(item => item.label.toLowerCase().includes(searchLabel.toLowerCase()));

  const data = filteredTodos.length > 0 || searchLabel.length > 0 ? filteredTodos : todos;

  return (
    <div className='todo'>
        <div className='todo__header'>
          <input type="text"  {...register("search")}/>
          <form onSubmit={handleSubmit(onSubmit)}>
              <input 
                type="text" 
                className='form-control'
                {...register("label", {require: "This field is required!"})}
              />
              <button className='btn btn-success'>ADD</button>
          </form>
        </div>
        <div className='todo__content'>
            <ul>
                {
                  data && data.map(item => <li key={item.id}>{item.label}</li>)
                }
            </ul>
        </div>
    </div>
  )
}

export default Todo