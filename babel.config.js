// For entire full stack, enables babel 7 to work.

module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
    plugins: [
        ['@babel/plugin-transform-runtime', { corejs: 2 }],
        ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
        '@babel/plugin-proposal-do-expressions',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
        'babel-plugin-flow-react-proptypes',
    ],
}
