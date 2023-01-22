import React from 'react'
import TodoForm from './components/TodoForm/TodoForm'
import Todos from './components/Todos/Todos'

const App = () =>  {
  return (
    <div>
      <h1>App</h1>
      <Todos />
      <TodoForm />
    </div>
  )
}

export default App