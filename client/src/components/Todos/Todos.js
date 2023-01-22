import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchTodos } from '../../features/todos/todoSlice'
import Todo from './Todo/Todo'

const Todos = () =>  {
  const { todos } = useSelector(
    (state) => state.todos
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <Todo todo = {todo} key = {todo._id} />
      ))}
    </div>
  )
}

export default Todos