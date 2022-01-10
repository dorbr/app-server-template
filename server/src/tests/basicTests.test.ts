import supertest from 'supertest'
import app from '../app'
import { info } from '../utils/logger'

const api = supertest(app)

const initialData = []

beforeEach(async () => {
  info('Initial Data : ', initialData)
  info('Starting tests...')
})
describe('Server Basic Setup:', () => {
  test('Server Is up and running', async () => {
    await api.get('/').expect(200)
  }, 5000)
})

afterAll(() => {
  info('Tests finished.')
})
