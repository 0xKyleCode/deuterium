// @flow

import base from '../../../../babel.config'
import config from '../config'

test('config to be equal to main repositories babel-config', () => {
    expect(config).toEqual(base)
})
