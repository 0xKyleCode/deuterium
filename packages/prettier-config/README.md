# `prettier-config`

prettier-config is an opinionated configuration for prettier.

## Usage

Install with yarn:

```bash
yarn add --dev prettier @deuterium/prettier-config 
```

For use with eslint, follow [@deuterium/eslint-config](https://github.com/kbromma/deuterium/tree/master/packages/eslint-config) and Ctrl+F prettier.

Create `.prettierrc.js` in your root and add:

```javascript
const prettierConfig = require('prettier-config')

module.exports = {
    ...prettierConfig,
}
```

## Rules

You can add more rules, but currently it sets:

```json
semi: false,
singleQuote: true,
trailingComma: 'es5',
tabWidth: 4
```
