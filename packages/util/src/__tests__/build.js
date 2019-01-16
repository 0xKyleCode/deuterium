// @flow

import fs from 'fs-extra'

import { removeDir, babelifyDir } from '../build'
import appRoot from '../root'

const lib = `${appRoot}\\lib`
beforeAll(() => {
    // Create directory called lib in app Root
    fs.ensureDirSync(lib)
})

afterAll(() => {
    fs.removeSync(lib)
})

describe('Testing build', () => {
    test('libe exists', () => {
        expect(fs.existsSync(lib)).toBeTruthy()
    })
    test('Remove lib', () => {
        removeDir(lib)
        expect(fs.existsSync(lib)).toBeFalsy()
    })

    test('babelify a directory', async () => {
        // flow-disable-next-line
        const babelOptions = require(`${appRoot}\\babel.config.js`) // eslint-disable-line

        await babelifyDir(`${appRoot}\\packages\\util\\src`, lib, babelOptions)
        expect(fs.existsSync(lib)).toBeTruthy()
    })
})
