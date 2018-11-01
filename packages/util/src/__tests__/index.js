// @flow

import all from '../../index'
import checkPackage from '../checkPackage'
import appRoot from '../root'

test('index.js has all exports', () => {
    expect(all).toEqual({
        checkPackage,
        appRoot,
    })
})
