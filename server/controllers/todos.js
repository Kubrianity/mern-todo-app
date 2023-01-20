import Todo from '../models/todo.js'

const getTodos = async (req,res) => {
  try {
    const todos = await Todo.find()
    res.status(200).json(todos)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

const getTodo = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const todo = await Todo.findById(_id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({ message: error.message });
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

const updateTodo = async (req, res) => {
  const { id: _id } = req.params;
  const todo = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(_id, todo, { new: true });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

const deleteTodo = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const deletedTodo = await Post.findByIdAndRemove(_id);
    res.status(200).json(deletedTodo);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
}