import express from'express'
import bodyParser from 'body-parser'
import cors from'cors'
import databaseConnection from './mongoose-connection.js'
import todosRouter from './routes/todos.js'

const app = express()

app.use(cors())
app.use('/todos', todosRouter)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

databaseConnection
  .then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}`)))
  .catch(error => console.log(error))