// @flow

import root from './root'

// flow-disable-next-line
const mainPackage = require(`${root}/package.json`) // eslint-disable-line

/**
 * @param  {string} pckg
 * @param  {boolean=false} required?
 * @returns boolean
 */

const checkPackage = (pckg: string, required?: boolean = false): boolean => {
    // flow-disable-next-line
    const { dependencies, devDependencies } = mainPackage
    // If the package is in either our dependencies or devDependencies, we can assume its in the program

    if (
        (dependencies && dependencies[pckg]) ||
        (devDependencies && devDependencies[pckg])
    ) {
        return true
    }

    if (required) throw Error(`Package ${pckg} required.`)

    return false
}

export default checkPackage
