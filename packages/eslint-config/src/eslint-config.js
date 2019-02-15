// @flow
// flow-disable-next-line
import { checkPackage } from '@deuterium/util'

const config: Object = {
    extends: [],
    plugins: [],
    env: { browser: true },
    rules: {
        semi: [2, 'never'],
        'no-unexpected-multiline': 2,
        'linebreak-style': 0,
    },
}

// Check to see if they have eslint in the first place
checkPackage(('eslint': string), (true: boolean))
/**
 * Set up parser
 */
if (checkPackage('babel-eslint')) {
    config.parser = 'babel-eslint'
}

/**
 * Set up extends
 */

/**
 * airbnb
 */
if (
    checkPackage('eslint-config-airbnb') &&
    checkPackage('eslint-config-airbnb-base')
) {
    throw Error(
        'Can use eslint-config-airbnb and eslint-config-airbnb-base, but not both. Remove one.'
    )
}

// Add airbnb, check for dependencies
if (checkPackage('eslint-config-airbnb')) {
    config.extends.push('airbnb')

    if (!checkPackage('eslint-plugin-import')) {
        throw Error('eslint-config-airbnb requires eslint-plugin-import.')
    }

    if (!checkPackage('eslint-plugin-react')) {
        throw Error('eslint-config-airbnb requires eslint-plugin-react.')
    }

    if (!checkPackage('eslint-plugin-jsx-a11y')) {
        throw Error('eslint-config-airbnb requires eslint-plugin-jsx-a11y.')
    }
}

// Add airbnb-base and check for dependencies
if (checkPackage('eslint-config-airbnb-base')) {
    config.extends.push('airbnb-base')

    if (!checkPackage('eslint-plugin-import')) {
        throw Error('eslint-config-airbnb-base requires eslint-plugin-import.')
    }
}

// Check for eslint-plugin-flowtype and dependencies
if (checkPackage('eslint-plugin-flowtype')) {
    config.extends.push('plugin:flowtype/recommended')
    config.plugins.push('flowtype')

    if (!checkPackage('babel-eslint')) {
        throw Error('eslint-plugin-flowtype requires babel-eslint.')
    }

    if (!checkPackage('flow-bin')) {
        throw Error(
            'eslint-plugin-flowtype is pointless without flow-bin installed.'
        )
    }
}

// Check for eslint-config-prettier and dependencies
if (checkPackage('eslint-config-prettier')) {
    config.extends.push('plugin:prettier/recommended')

    if (!checkPackage('prettier')) {
        throw Error('eslint-config-pretter required prettier to be installed.')
    }
}

if (checkPackage('eslint-plugin-react-hooks')) {
    config.plugins.push('react-hooks')
    config.rules = {
        ...config.rules,
        'react-hooks/rules-of-hooks': 'error',
    }
}

if (checkPackage('eslint-plugin-prettier')) {
    // Set up eslint-plugin-prettier and dependencies
    config.plugins.push('prettier')

    if (!checkPackage('prettier')) {
        throw Error('eslint-plugin-pretter required prettier to be installed.')
    }
}

// Set up jest
if (checkPackage('jest')) {
    config.env.jest = true
}

// Set up all babel proposals
if (
    checkPackage('@babel/plugin-proposal-do-expressions') ||
    checkPackage('@babel/plugin-proposal-nullish-coalescing-operator') ||
    checkPackage('@babel/plugin-proposal-optional-chaining') ||
    checkPackage('@babel/plugin-proposal-pipeline-operator') ||
    checkPackage('@babel/plugin-transform-runtime')
) {
    if (!checkPackage('babel-eslint')) {
        throw Error('Any babel proposal requires babel-eslint. ')
    }
}
export default config
