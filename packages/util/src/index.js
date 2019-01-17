// @flow
import checkPackage from './checkPackage'
import appRoot from './root'
import checkFile from './checkFile'
import { removeDir, babelifyDir, initWebpack, build } from './build'

module.exports = {
    checkPackage,
    appRoot,
    removeDir,
    babelifyDir,
    initWebpack,
    build,
    checkFile,
}
