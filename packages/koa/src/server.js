// @flow

/**
 * This package is intended as a simple way to start a server. All options and routing and middleware should be done using
 * input and the returned server.
 */

// flow-disable-next-line
import { checkPackage, checkFile, appRoot } from '@deuterium/util'
// flow-disable-next-line
import { IN_TEST_ENV, TEST_PORT, PORT, NODE_ENV } from '@deuterium/env'

import colors from 'colors'

/**
 * Import using the user's installed versions, so they can tinker around rather than relying on this package
 */
// flow-disable-next-line
const Koa = checkPackage('koa', true) && require(`${appRoot}/node_modules/koa`) // eslint-disable-line

const Router =
    checkPackage('koa-router', true) &&
    // flow-disable-next-line
    require(`${appRoot}/node_modules/koa-router`) // eslint-disable-line

/**
 * Initialize important information like port
 */

const defaultTestPort: number = TEST_PORT || 8000
const defaultPort: number = PORT || 8001
const finalPort: number = IN_TEST_ENV ? defaultTestPort : defaultPort

const pre = colors.green('[deuterium/koa]')
type Options = {
    silent: boolean,
    port: number,
}
/**
 * Initialize a koa server using `routing` and `options`
 * @param {Function} routing A function that takes in the koa-router, and sets up all the different routes
 * @param {Options} options
 */
const initServer: Function = (routing: Function, options?: Options) => {
    /**
     * Intro to server intialization
     */

    if (!routing) throw Error(colors.red('Must include a routing function'))

    if (!options?.silent || IN_TEST_ENV)
        console.log(`${pre} Initializing server. `)

    // Start server
    const app = new Koa()
    const router = new Router()

    // Error handling

    app.use(async (ctx, next) => {
        try {
            next()
        } catch (err) {
            ctx.status = err.status || 500
            ctx.redirect('/error')
            ctx.app.emit('error', err, ctx)
        }
    })

    // Initialize use of pre-set middleware

    // Security
    if (checkPackage('koa-helmet')) {
        // flow-disable-next-line
        const helmet = require(`${appRoot}/node_modules/koa-helmet`) // eslint-disable-line
        app.use(helmet())
    }

    if (checkPackage('koa-sslify')) {
        // flow-disable-next-line
        const enforceHttps = require(`${appRoot}/node_modules/koa-sslify`) // eslint-disable-line
        const usingHeroku = checkFile('Procfile')
        app.use(enforceHttps({ trustProtoHeader: usingHeroku }))
    }

    if (checkPackage('@koa/cors')) {
        // flow-disable-next-line
        const cors = require(`${appRoot}/node_modules/@koa/cors`) // eslint-disable-line
        app.use(cors())
    }

    // Initialize use of all custom middleware

    // koa-morgan
    // koa-sslify

    // Let Koa use our routes
    routing(router)
    app.use(router.routes()).use(router.allowedMethods())

    const server = app.listen(options?.port || finalPort)

    if (!options?.silent || IN_TEST_ENV)
        console.log(
            `${pre} Server started on port: ${options?.port ||
                finalPort}, ENV: ${NODE_ENV}`
        )

    return server
}

// eslint-disable-next-line import/prefer-default-export
export { initServer }
