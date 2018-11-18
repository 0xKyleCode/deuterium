// @flow

import all from '../index'
import jestConfig from '../jest-config'

test('All exports are correct for jestConfig', () => {
    expect(all).toEqual({ jestConfig })
})
