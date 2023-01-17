import mongoose from 'mongoose'

async function main () {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost/mern-todo', {
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
        .then(() => console.log('Connected'))
        .catch(error => console.log(error))
    }      

export default main()