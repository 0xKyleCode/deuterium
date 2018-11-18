// @flow

import eslintConfig from '../eslint-config'

// Test based on my package.json
// #TODO: figure out a way to make up a fake package.json for checking package.

test('eslint-config parser is correct output', () => {
    const config = eslintConfig
    expect(config.parser).toEqual('babel-eslint')
})

test('eslint-config extends is correct output', () => {
    const config = eslintConfig
    expect(config.extends).toEqual([
        'airbnb',
        'plugin:flowtype/recommended',
        'plugin:prettier/recommended',
    ])
})

test('eslint-config plugins is correct output', () => {
    const config = eslintConfig
    expect(config.plugins).toEqual(['flowtype', 'prettier'])
})

test('eslint-config plugins is correct output', () => {
    const config = eslintConfig
    expect(config.plugins).toEqual(['flowtype', 'prettier'])
})

test('eslint-config env to be correct output', () => {
    const config = eslintConfig
    expect(config.env).toEqual({ browser: true, jest: true })
})

test('eslint-config rules to be correct output', () => {
    const config = eslintConfig
    expect(config.rules).toEqual({
        semi: [2, 'never'],
        'no-unexpected-multiline': 2,
        'linebreak-style': 0,
    })
})
