// @flow

import exp from '../index'
import env from '../env'

test('Module exports what it should', () => {
    expect(exp).toEqual(env)
})
