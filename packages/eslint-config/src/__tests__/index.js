// @flow

import all from '../../index'
import eslintConfig from '../eslint-config'

test('index.js exports all files', () => {
    expect(all).toEqual({ eslintConfig })
})
