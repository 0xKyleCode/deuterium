// @flow

import config from '../prettier-config'

test('Prettier config is same as that in base', () => {
    const base = {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        tabWidth: 4,
    }
    expect(config).toEqual(base)
})
