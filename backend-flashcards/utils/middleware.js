const requestLogger = (request, response, next) => {
  console.log('Method: ', request.method)
  console.log('Body:', request.body)
  console.log('Path', request.path)
  console.log('------')
  next()
}

const unknownEndpoint = (request, response, next) =>{
  response.status(404).json({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) =>{
  console.error(error)
  return response.status(400).send({ error: error.message })
}

module.exports = { requestLogger, unknownEndpoint, errorHandler }