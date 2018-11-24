// @flow

import 'dotenv/config'
import read from 'read-env'

const env = read({ transformKey: false })

module.exports = env
