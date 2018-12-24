// @flow

/**
 * This package is intended as a simple way to start a server. All options and routing and middleware should be done using
 * input and the returned server.
 */

// flow-disable-next-line
import { checkPackage, appRoot } from '@deuterium/util'
// flow-disable-next-line
import { IN_TEST_ENV, TEST_PORT, PORT, NODE_ENV } from '@deuterium/env'

import colors from 'colors'

/**
 * Import using the user's installed versions, so they can tinker around rather than relying on this package
 */
// flow-disable-next-line
const Koa = checkPackage('koa', true) && require(`${appRoot}/node_modules/koa`) // eslint-disable-line

/**
 * Initialize important information like port
 */

const defaultTestPort: number = TEST_PORT || 8000
const deafaultPort: number = PORT || 8001
const finalPort: number = IN_TEST_ENV ? defaultTestPort : deafaultPort

const pre = colors.green('[koa]')
type Options = {
    silent: boolean,
    port: number,
}
/**
 * Initialize a koa server using `routing` and `options`
 * @param {Function} routing
 * @param {Object} options
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

    app.use(async ctx => {
        ctx.body = 'Hello World'
    })

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
