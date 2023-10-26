const express = require('express')
require('express-async-errors')
const mongoose = require('mongoose')
const app = express()

const usersRouter = require('./controllers/users')
const { MDB_URI } = require('./utils/config')
const middleware = require('./utils/middleware')
const flashcardsRouter = require('./controllers/cards')
const loginRouter = require('./controllers/login')

app.use(express.json())

mongoose.set('strictQuery',false)
mongoose
  .connect(MDB_URI)
  .then(() => {
    console.log('connected to MDB')
  })
  .catch((error) => {
    console.log(error)
  })


app.use(middleware.requestLogger)

app.use('/api/users',usersRouter)
app.use('/api/flashcards',flashcardsRouter)
app.use('/api/login', loginRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app