import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../../features/todos/todoSlice'
import { useNavigate } from 'react-router-dom'

const Todo = ({ todo }) =>  {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(deleteTodo(todo._id))
  }
  const handleEdit = (id) => {
    navigate(`/todos/${id}`)
  }

  return (
    <div>
      <p>{ todo.text }</p>
      <button type="submit" onClick = {handleClick}>Delete</button>
      <button type="button" onClick = {() => handleEdit(todo._id)}>Edit</button>
    </div>
  )
}

export default Todo