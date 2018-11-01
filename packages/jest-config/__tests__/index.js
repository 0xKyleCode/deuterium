// @flow

import all from '../index'
import jestConfig from '../src/jest-config'

test('All exports are correct for jestConfig', () => {
    expect(all).toEqual({ jestConfig })
})
