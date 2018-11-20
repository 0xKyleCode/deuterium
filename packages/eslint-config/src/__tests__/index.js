// @flow

import all from '../index'
import config from '../eslint-config'

test('index.js exports all files', () => {
    expect(all).toEqual(config)
})
