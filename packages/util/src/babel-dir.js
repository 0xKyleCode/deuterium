// @flow

import globby from 'globby'
import fs from 'fs-extra'
import path from 'path'
import checkPackage from './checkPackage'
import appRoot from './root'

async function transformFile(
    file: any,
    src: string,
    dest: string,
    options: Object = {}
) {
    const filepath = path.join(src, file)
    const content = await fs.readFile(filepath)
    const destpath = path.join(dest, file.replace(/(.jsx)/, '.js'))

    checkPackage('@babel/core', true)
    // flow-disable-next-line
    const babel = require(`${appRoot}/node_modules/@babel/core`) // eslint-disable-line
    const code = babel.transform(content.toString(), options)

    return fs.outputFile(destpath, code.code)
}

export default async (src: string, dest: string, options: Object) => {
    function t(file) {
        return transformFile(file, src, dest, options)
    }

    const files = globby.sync(['**/*.+(js|jsx)', '!**/*.test.js'], {
        cwd: src,
    })
    await Promise.all(files.map(t))
}
