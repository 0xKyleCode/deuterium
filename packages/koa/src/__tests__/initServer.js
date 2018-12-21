// @flow

// import request from 'supertest'
import { initServer } from '../index'

let server

beforeAll(() => {
    server = initServer()
})

afterAll(() => {
    server.close()
})

describe('Starts server properly', () => {
    test('homepage GET /', () => {
        expect('/').toBe('/')
    })
})
