const requestLogger = (request, response, next) => {
  console.log('Method: ', request.method)
  console.log('Body:', request.body)
  console.log('Path', request.path)
  console.log('------')
  next()
}

const unknownEndpoint = (request, response, next) => {
  response.status(404).json({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  // console.log('heres the NAME',error.name)
  // console.log('heres the MESSAGE',error.message)
  if (error.name === 'ValidationError'){
    return response.status(409).json({ error: 'username already taken' })
  }
  // console.error(error)
  next(error)
}

module.exports = { requestLogger, unknownEndpoint, errorHandler }