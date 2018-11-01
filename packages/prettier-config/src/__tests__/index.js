// @flow

import all from '../../index'
import prettierConfig from '../prettier-config'

test('Index exports are correct', () => {
    expect(all).toEqual({
        prettierConfig,
    })
})
