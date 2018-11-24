// @flow
// flow-disable-next-line
import { checkPackage } from '@deuterium/util'
/**
 * @param  {Object} config
 * @param  {string} file
 * @param  {boolean=false} required?
 * @param  {Object} options?
 * @returns Object
 */
function addPreset(
    config: Object,
    file: string,
    required?: boolean = false,
    options?: Object
): Object {
    // Checks if the package is in our package.json.
    if (checkPackage(file, required)) {
        if (options) {
            config.presets.push([file, options])
        } else {
            config.presets.push(file)
        }
    }
    return config
}

/**
 * @param  {Object} config
 * @param  {string} file
 * @param  {boolean=false} required?
 * @param  {Object} options?
 * @returns Object
 */
function addPlugin(
    config: Object,
    file: string,
    required?: boolean = false,
    options?: Object
) {
    // Checks if the package is in our package.json.
    if (checkPackage(file, required)) {
        if (options) {
            config.plugins.push([file, options])
        } else {
            config.plugins.push(file)
        }
    }
    return config
}

export default {
    addPlugin,
    addPreset,
}
