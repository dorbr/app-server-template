import express from 'express'
import cors from 'cors'
import path from 'path'
import { requestLogger, errorHandler, unknownEndpoint } from './utils/middleware'

const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, '../../client/build')))
app.use(express.json())
app.use(requestLogger)

app.get('/', (req, res) => {
  res.sendFile('./index.html')
})
app.use(unknownEndpoint)
app.use(errorHandler)

export default app
