// @flow
// Script to build and run production.

import colors from 'colors'
import shell from 'shelljs'
import babelDir from './babel-dir'
import checkPackage from './checkPackage'
import appRoot from './root'

process.env.NODE_ENV = 'production'
process.env.BABEL_ENV = 'production'

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason) // eslint-disable-line no-console
    // application specific logging, throwing an error, or other logic here
})

const pre = colors.green('[deuterium/util]')

export const removeDir = (dir: string) => {
    shell.rm('-rf', dir)
    console.log(`${pre} Removed ${dir}.`)
}

export const babelifyDir = async (
    src: string,
    dest: string,
    options: Object
) => {
    await babelDir(src, dest, options)
    console.log(`${pre} Babelified ${src} into ${dest}.`)
}

export const initWebpack = (config: Object) => {
    // Requires webpack and @babel/polyfill
    checkPackage('webpack', true)

    // flow-disable-next-line
    const webpack = require(`${appRoot}/node_modules/webpack`) // eslint-disable-line

    checkPackage('@babel/polyfill', true)

    webpack(config, (err, stats) => {
        if (err || stats.hasErrors()) {
            console.log(`${pre} ${err}`)
            console.log(stats)
            process.exit(2)
        }
        console.log(`${pre} Webpack created.`)
    })
}

export const build = (
    src: string,
    lib: string,
    babelOptions: Object,
    webpackConfig: Object
) => {
    console.log(`${pre} Starting build.`)
    removeDir(lib)
    babelifyDir(src, lib, babelOptions)
    initWebpack(webpackConfig)

    console.log(`${pre} Build complete.`)
}
