import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { fetchTodos } from '../../features/todos/todoSlice'
import Todo from './Todo/Todo'
import './Todos.css'

const Todos = () =>  {
  const { todos } = useSelector(
    (state) => state.todos
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <main className = 'todo-container mt-5'>
      <h1 className= 'text-muted'> My todo tracker </h1>
      <ul className = 'list-group'>
      {todos.map((todo) => (
        <Todo todo = {todo} key = {todo._id} />
      ))}
      </ul>
      <span>
        <Link className = 'text-info text-decoration-none font-weight-bold' to = '/new'> Create a new todo </Link>
      </span>
    </main>
  )
}

export default Todos