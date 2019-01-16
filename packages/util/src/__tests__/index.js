// @flow

import all from '../index'
import checkPackage from '../checkPackage'
import appRoot from '../root'
import { removeDir, babelifyDir, build, initWebpack } from '../build'

test('index.js has all exports', () => {
    expect(all).toEqual({
        checkPackage,
        appRoot,
        removeDir,
        babelifyDir,
        build,
        initWebpack,
    })
})
