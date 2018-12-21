// @flow

import Koa from 'koa'

const initServer = () => {
    const app = new Koa()

    app.use(async ctx => {
        ctx.body = 'Hello World'
    })

    const server = app.listen(3000)
    return server
}

// eslint-disable-next-line import/prefer-default-export
export { initServer }
