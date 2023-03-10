import React from 'react'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { createTodo } from '../../features/todos/todoSlice'
import { useNavigate } from 'react-router-dom'

const TodoForm = () =>  {
  const [todo, setTodo] = useState({
    text: ''
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    dispatch(createTodo(todo))
    e.target.reset()
    navigate('/')
  }
  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div className = "container mt-5 pt-5 text-center">
      <h2> Write your task here </h2>
      <form onSubmit = {handleSubmit} className = "form-group">
        <input type="textarea" name="text" onChange = {handleChange} className = "form-control my-4"/>
        <input type="submit" value="Add" className = "btn btn-primary"/>
      </form>
    </div>
  )
}

export default TodoForm