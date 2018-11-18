// @flow

import all from '../index'
import babelConfig from '../config'

test('exports to be equal to expected', () => {
    expect({ babelConfig: all() }).toEqual({ babelConfig })
})
