import { Request, Response, NextFunction } from 'express'

import { info, errors } from './logger'

const requestLogger = (request, response, next) => {
  info('Method:', request.method)
  info('Path:  ', request.path)
  info('Body:  ', request.body)
  info('---')
  next()
}

const unknownEndpoint = (request: Request, response: Response, next: NextFunction) => {
  if (request.originalUrl !== '/graphql') response.status(404).send({ error: 'unknown endpoint' })
  else next()
}

const errorHandler = (error, request, response, next) => {
  errors(error.message)

  if (error.name === 'CastError') return response.status(400).send({ error: 'malformatted id' })
  if (error.name === 'ValidationError') return response.status(400).json({ error: error.message })

  next(error)
}

export { requestLogger, unknownEndpoint, errorHandler }
