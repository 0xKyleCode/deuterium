# `@deuterium/env`

A useful package for reading environmental variables.

## Installation

```bash
yarn add @deuterium/env
```

## Usage

Use of `@deuterium/env` returns a javascript object with all of the individual env objects in your `.env` file and beyond, as a result of use of `read-env` and `dotenv`.

For example, with a `.env` file containing:
```env
WEB_PORT=8000
```

We have 
```javascript
import { WEB_PORT, NODE_ENV } from '@deuterium/env'

console.log(WEB_PORT) // 8000
console.log(NODE_ENV) // 'development'
```

If no `NODE_ENV` is defined, then it automatically sets it to `development`, otherwise defaults to set `NODE_ENV`. Also allows for testing of current environment with `IN_DEV_ENV`, `IN_PROD_ENV`, `IN_TEST_ENV` which default to true/false based on `NODE_ENV`.
