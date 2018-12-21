// @flow
import { initServer as initServer1 } from '../index'
import { initServer as initServer2 } from '../initServer'

test('exports are correct', () => {
    expect(initServer1).toBe(initServer2)
})
