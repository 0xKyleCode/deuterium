// @flow

import request from 'supertest'
import helmet from 'koa-helmet'
// flow-disable-next-line
import { appRoot } from '@deuterium/util'
import { initServer } from '../index'

let server

beforeAll(() => {
    const routing = router => {
        router.get('/', ctx => {
            ctx.body = 'Hello World'
        })
    }

    const addOns = [
        {
            func: app => {
                app.use(helmet())
            },
        },
    ]
    const options = {
        key: `${appRoot}/server.key`,
        cert: `${appRoot}/server.crt`,
    }

    server = initServer(routing, addOns, options)
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
