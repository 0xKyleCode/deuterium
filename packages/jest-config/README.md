# `jest-config`

`jest-config` is a simple config file to set up jest for testing in your package. 

## Installation
In order to properly work, jest-config requires jest to be installed.

```bash
yarn add -dev jest @deuterium/jest-config
```

If using `babel`, specifically `babel 7` we need to install a few more dependencies

```bash
yarn add -dev babel-jest babel-core@^7.0.0-bridge.0 @babel/core
```

## Usage

Create file `jest.config.js` and add

``` javascript
var jestConfig = require('jest-config');

module.exports = jestConfig('mainDir', ['ignoredir1', 'ignoredir2', ...])
```
