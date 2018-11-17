# @deuterium/babel-preset

This package utilizies **babel 7** and allows compiling of ES2015+ to a backwards compatible ES5 standard.

# Install

You will need to install the base babel 7

## Main

```bash
yarn add --dev @deuterium/babel-preset @babel/core @babel/preset-env
```

If you want command line usage, you can use it with `babel-node` and `babel` by adding

```bash
yar add --dev @babel/cli @babel/node
```
## Plugins 

There are also many optional babel transformations (or plugins) that you can add and it wil be automatically configured to work.

- [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime) - Reduces bundle size
- [@babel/plugin-proposal-pipeline-operator](https://babeljs.io/docs/en/next/babel-plugin-proposal-pipeline-operator.html) - Allows chaining of functions
- [@babel/plugin-proposal-do-expressions](https://babeljs.io/docs/en/next/babel-plugin-proposal-do-expressions.html) - Allows more complex versions of ternary operator
- [@babel/plugin-proposal-nullish-coalescing-operator](https://babeljs.io/docs/en/next/babel-plugin-proposal-nullish-coalescing-operator.html) - Allows for testing of `null` or `undefined` using `??` operating
- [@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/next/babel-plugin-proposal-optional-chaining.html) - Allows for optional testing of nested variables.

To install all of these, 

```bash
yarn add --dev @babel/plugin-transform-runtime @babel/plugin-proposal-pipeline-operator @babel/plugin-proposal-do-expressions @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-optional-chaining
```

# Usage

In your `package.json`, add

```json
  "babel": {
    "presets": [
      "@deuterium"
    ]
  }
```



