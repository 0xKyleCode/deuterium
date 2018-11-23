# `eslint-config`

[eslint](https://eslint.org/) is useful for linting - spell checking, in a sense - your code. 

## Installation

Of course, eslint must be installed to use this config.

### Main

```bash
yarn add --dev eslint @deuterium/eslint-config
```

### Supports
This config supports a variety of eslint configurations.

#### If using babel
- [babel-eslint](https://github.com/babel/babel-eslint) - Allows for linking of babel code and eslint

```bash
yarn add --dev babel-eslint
```

Extra babel plugins are configured for use with babel-eslint:
- [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime) - Reduces bundle size
- [@babel/plugin-proposal-pipeline-operator](https://babeljs.io/docs/en/next/babel-plugin-proposal-pipeline-operator.html) - Allows chaining of functions
- [@babel/plugin-proposal-do-expressions](https://babeljs.io/docs/en/next/babel-plugin-proposal-do-expressions.html) - Allows more complex versions of ternary operator
- [@babel/plugin-proposal-nullish-coalescing-operator](https://babeljs.io/docs/en/next/babel-plugin-proposal-nullish-coalescing-operator.html) - Allows for testing of `null` or `undefined` using `??` operating
- [@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/next/babel-plugin-proposal-optional-chaining.html) - Allows for optional testing of nested variables.

```bash
yarn add --dev @babel/plugin-transform-runtime @babel/plugin-proposal-pipeline-operator @babel/plugin-proposal-do-expressions @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-optional-chaining
```

#### Airbnb configurations (use only one)
- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Uses Airbnb's eslint configurations
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import), [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react), and [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) are required.
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) - Uses Airbnb's eslint configurations without React config
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) is required.

Choose one of 

```bash
yarn add --dev eslint-config-airbnb eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
```

or

```bash
yarn add --dev eslint-config-airbnb-base eslint@^#.#.# eslint-plugin-import@^#.#.#
```
  
#### Using [Flow](https://flow.org/)
- [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype) - Allows for use of Flow types.
  - [flow-bin](https://github.com/flowtype/flow-bin) and [babel-eslint](https://github.com/babel/babel-eslint) are required.

```bash
yarn add --dev eslint-plugin-flowtype flow-bin babel-eslint
```

#### Using [Prettier](https://github.com/prettier/prettier)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Plugin to allow for linting using prettier config
  - [prettier](https://github.com/prettier/prettier) is required.
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Turns off eslint rules that conflict with prettier rules
  
```
yarn add --dev eslint-plugin-prettier prettier eslint-config-prettier
```

## Usage

In package.json
```json
"eslintConfig": {
    "extends": [
      "@deuterium"
    ]
  }
```

or in a .eslintrc file:

```
{
  "extends": "@deuterium"
}

```
