import axios from 'axios'

const url = 'http://localhost:5000/todos'

const fetchTodos = () => axios.get(url)
const createTodo = (newTodo) => axios.post(url, newTodo)
const updateTodo = (id, updatedTodo) => axios.patch(`${url}/${id}`, updatedTodo)
const deleteTodo = (id) => axios.delete(`${url}/${id}`)

export { fetchTodos, createTodo, updateTodo, deleteTodo } 