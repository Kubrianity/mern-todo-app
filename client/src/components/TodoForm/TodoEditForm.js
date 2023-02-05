import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTodo, updateTodo } from '../../features/todos/todoSlice'
import { useParams, useNavigate, Link } from 'react-router-dom'

const TodoEditForm = () =>  {
  const [todo, setTodo] = useState({
    text: ''
  })

  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(
      updateTodo({id, todo})
    )
    navigate('/')
  }
  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    const fetchTodoData = () => {
      dispatch(fetchTodo(id)).then((data) => {
      setTodo(data.payload)
    })
    }
    fetchTodoData()
  }, [id, dispatch])
  return (
    <div>
      <form onSubmit = {handleEdit}>
        <input type = "textarea" name = "text"  value = {todo.text} onChange = {handleChange}/>
        <button type = "submit"> Edit </button>
      </form> 
      <Link to = '/'> Cancel </Link>
    </div>
  )
}

export default TodoEditForm