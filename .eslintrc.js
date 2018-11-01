const path = require('path')

module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'plugin:flowtype/recommended',
        'plugin:prettier/recommended',
        'plugin:monorepo/recommended',
    ],
    plugins: ['flowtype', 'prettier'],
    env: {
        jest: true,
    },
    rules: {
        semi: [2, 'never'],
        'no-unexpected-multiline': 2,
        'linebreak-style': 0,
        'prettier/prettier': 'error',
    },
    settings: {
        'import/resolver': {
            'eslint-import-resolver-lerna': {
                packages: path.resolve(__dirname, 'packages'),
            },
        },
    },
}
