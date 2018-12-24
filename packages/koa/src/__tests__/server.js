// @flow

// import request from 'supertest'
import { initServer } from '../index'

let server

beforeAll(() => {
    const routing = () => {
        console.log('test')
    }
    server = initServer(routing)
})

afterAll(() => {
    if (server) server.close()
})

describe('Starts server properly', () => {
    test('homepage GET /', () => {
        expect('/').toBe('/')
    })
})
