import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../../features/todos/todoSlice'
import { useNavigate } from 'react-router-dom'
import './Todo.css'

const Todo = ({ todo }) =>  {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(deleteTodo(todo._id))
  }
  const handleEdit = (id) => {
    navigate(`/${id}`)
  }

  return (
    <section className = 'container'>
      <li className = 'list-group-item d-flex justify-content-around'> { todo.text }
        <button className = 'btn btn-warning' type = 'button' onClick = {() => handleEdit(todo._id)}>Edit</button>
        <button className = 'btn btn-danger' type = 'submit' onClick = {handleClick}>Delete</button>
      </li>
    </section>
  )
}

export default Todo