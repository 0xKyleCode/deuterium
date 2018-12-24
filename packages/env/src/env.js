// @flow

import 'dotenv/config'
import read from 'read-env'

const env: Object = read({ transformKey: false })

env.NODE_ENV = env.NODE_ENV ?? 'development'

env.IN_DEV_ENV = env.NODE_ENV === 'development'
env.IN_PROD_ENV = env.NODE_ENV === 'production'
env.IN_TEST_ENV = env.NODE_ENV === 'test'

module.exports = env
