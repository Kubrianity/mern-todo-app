import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../../features/todos/todoSlice'

const Todo = ({ todo }) =>  {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(deleteTodo(todo._id))
  }
  return (
    <div>
      <p>{ todo.text }</p>
      <button type="submit" onClick = {handleClick}>Delete</button>
    </div>
  )
}

export default Todo