const express = require('express')
const mongoose = require('mongoose')
const app = express()

const usersRouter = require('./controllers/users')
const { MDB_URI } = require('./utils/config')
const { requestLogger } = require('./utils/middleware')
const { unknownEndpoint } = require('./utils/middleware')

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


app.use(requestLogger)
app.use('/api/users',usersRouter)


app.use(unknownEndpoint)

module.exports = app