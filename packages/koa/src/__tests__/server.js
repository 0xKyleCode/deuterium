// @flow

import request from 'supertest'
import { initServer } from '../index'

let server

beforeAll(() => {
    const routing = router => {
        router.get('/', ctx => {
            ctx.body = 'Hello World'
        })
    }
    server = initServer(routing)
})

afterAll(() => {
    if (server) server.close()
})

describe('Starts server properly', () => {
    test('homepage GET /', async () => {
        const response = await request(server).get('/')
        expect(response.status).toEqual(200)
        expect(response.text).toContain('Hello World')
    })
})
