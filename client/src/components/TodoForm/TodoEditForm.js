import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../../features/todos/todoSlice'
import { useParams } from 'react-router-dom'

const TodoEditForm = () =>  {
  const [todo, setTodo] = useState({
    text: ''
  })

  const dispatch = useDispatch()
  const { id } = useParams()
  
  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(
      updateTodo({id, todo})
    )
  }
  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit = {handleEdit}>
        <input type = "textarea" name = "text"  onChange = {handleChange}/>
        <button type = "submit"> Edit </button>
      </form> 
    </div>
  )
}

export default TodoEditForm