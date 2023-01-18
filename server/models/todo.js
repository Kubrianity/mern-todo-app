import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
  text: String,
  isDone: Boolean
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo