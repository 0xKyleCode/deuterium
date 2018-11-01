// @flow
import jestConfig from '../src/jest-config'

test('jest-config out puts correct collect coverage', () => {
    const config = jestConfig('packages')
    expect(config.collectCoverage).toBeTruthy()
})

test('jest-config collect coverage from with no ignore options to be correct', () => {
    const config = jestConfig('packages')
    expect(config.collectCoverageFrom).toEqual([
        'packages/**/*.{js,jsx}',
        '!**/node_modules/**',
    ])
})

test('jest-config collect coverage from with ignore options to be correct', () => {
    const config = jestConfig('packages', {
        node: 'node_modules',
        flow: 'flow_typed',
    })
    expect(config.collectCoverageFrom).toEqual([
        'packages/**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/flow_typed/**',
    ])
})

test('jest-config test Environment to be node', () => {
    const config = jestConfig('packages')
    expect(config.testEnvironment).toEqual('node')
})
