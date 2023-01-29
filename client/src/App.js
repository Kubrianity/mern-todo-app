import React from 'react'
import TodoForm from './components/TodoForm/TodoForm'
import TodoEditForm from './components/TodoForm/TodoEditForm'
import Todos from './components/Todos/Todos'
import { Route, Routes } from "react-router-dom"

const App = () =>  {

  return (
    <div>
      <Routes>
        <Route path = '/todos/:id' element = {<TodoEditForm />} />
        <Route path = '/new' element = {<TodoForm />} />
      </Routes>
      <Todos />
    </div>
  )
}

export default App