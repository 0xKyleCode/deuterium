// @flow

import env from '../env'

test('Check that env contains what it should', () => {
    expect(env.NODE_ENV).toBe('test')
})

test('Check test of environment', () => {
    expect(env.IN_TEST_ENV).toBeTruthy()
})
