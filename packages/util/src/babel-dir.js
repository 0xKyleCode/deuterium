// @flow

import { transform } from 'babel-core'
import globby from 'globby'
import fs from 'fs-extra'
import path from 'path'

async function transformFile(
    file: any,
    src: string,
    dest: string,
    options?: Object = {}
) {
    const filepath = path.join(src, file)
    const content = await fs.readFile(filepath)
    const destpath = path.join(dest, file.replace(/(.jsx)/, '.js'))
    const code = transform(content.toString(), options)

    return fs.outputFile(destpath, code.code)
}

export default (src: string, dest: string, options?: Object) => {
    function t(file) {
        return transformFile(file, src, dest, options)
    }

    return globby(['**/*.@(js|jsx)', '!**/*.test.js'], {
        cwd: src,
    })
        .then(files => {
            Promise.all(files.map(t))
        })
        .catch(err => {
            console.log(err)
        })
}
