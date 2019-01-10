// @flow

import fs from 'fs'
import rootPath from './root'

/**
 * Checks if a file exists or not.
 * @param {string} fileName Name of file to look up in root directory
 * @param {boolean} required Required filed or not
 */
function checkFile(fileName: string, required?: boolean = false): boolean {
    if (fs.existsSync(`${rootPath}/${fileName}`)) {
        return true
    }

    if (required)
        throw Error(`${fileName} is required. Please add it then continue.`)
    return false
}

export default checkFile
