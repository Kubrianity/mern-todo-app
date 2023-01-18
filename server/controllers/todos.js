import Todo from '../models/todo.js'

const getTodos = async (req,res) => {
  try {
    const todos = await Todo.find()
    res.status(200).json(todos)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
const createTodo = async (req,res) => {
  const todo = req.body
  const newTodo = new Todo(todo)
  try {
    await newTodo.save()
    res.status(201).json(newTodo)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export {
  getTodos,
  createTodo
}