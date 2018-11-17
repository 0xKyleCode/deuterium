// @flow

import add from '../add-packages'

test('add @babel/preset-env to work', () => {
    let config = {
        presets: [],
        plugins: [],
    }
    config = add.addPreset(config, '@babel/preset-env', true)
    expect(config.presets).toEqual(['@babel/preset-env'])
})

test('add babel-plugin-flow-react-proptypes to work', () => {
    let config = {
        presets: [],
        plugins: [],
    }
    config = add.addPlugin(config, 'babel-plugin-flow-react-proptypes')
    expect(config.plugins).toEqual(['babel-plugin-flow-react-proptypes'])
})

test('Options added to plugin', () => {
    let config = { presets: [], plugins: [] }
    config = add.addPlugin(config, '@babel/plugin-transform-runtime', false, {
        corejs: 2,
    })
    expect(config.plugins).toEqual([
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 2,
            },
        ],
    ])
})

test('Options added to preset', () => {
    let config = { presets: [], plugins: [] }
    config = add.addPreset(config, '@babel/plugin-transform-runtime', false, {
        corejs: 2,
    })
    expect(config.presets).toEqual([
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 2,
            },
        ],
    ])
})

test('Add plugin does not add nonexistant package', () => {
    let config = { presets: [], plugins: [] }
    config = add.addPlugin(config, 'fakepackage')
    expect(config.plugins).toEqual([])
})

test('Add preset does not add nonexistant package', () => {
    let config = { presets: [], plugins: [] }
    config = add.addPreset(config, 'fakepackage')
    expect(config.presets).toEqual([])
})
