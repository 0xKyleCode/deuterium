// @flow

// Config file for configing babel usage in a project.
import add from './add-packages'

const config = {
    presets: [],
    plugins: [],
}

/*
 * Generally add all necessary plugins and presets here. Depends on what user wants to use.
 */

/**
 *
 * PRESETS
 */
add.addPreset(config, '@babel/preset-env', true)
add.addPreset(config, '@babel/preset-react')
add.addPreset(config, '@babel/preset-flow')

/**
 *
 * PLUGINS
 */
add.addPlugin(config, '@babel/plugin-transform-runtime', false, { corejs: 2 })
add.addPlugin(config, '@babel/plugin-proposal-pipeline-operator', false, {
    proposal: 'minimal',
})
add.addPlugin(config, '@babel/plugin-proposal-do-expressions')
add.addPlugin(config, '@babel/plugin-proposal-nullish-coalescing-operator')
add.addPlugin(config, '@babel/plugin-proposal-optional-chaining')
add.addPlugin(config, 'babel-plugin-flow-react-proptypes')

export default config
