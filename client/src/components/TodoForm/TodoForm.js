import React from 'react'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { createTodo } from '../../features/todos/todoSlice'

const TodoForm = () =>  {
  const [todo, setTodo] = useState({
    text: ''
  })
  const dispatch = useDispatch()

  const handleSubmit = async(e) => {
    e.preventDefault()
    dispatch(createTodo(todo))
  }
  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <input type="textarea" name="text" onChange = {handleChange}/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default TodoForm