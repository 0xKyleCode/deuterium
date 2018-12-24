// @flow
import { initServer as initServer1 } from '../index'
import { initServer as initServer2 } from '../server'

test('exports are correct', () => {
    expect(initServer1).toBe(initServer2)
})
