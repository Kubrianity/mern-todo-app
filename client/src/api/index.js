import axios from 'axios'

const url = 'http://localhost:5000/todos'

export const fetchTodos = () => axios.get(url)