// @flow

import checkFile from '../checkFile'

test('check file finds a base file', () => {
    expect(checkFile('lerna.json')).toBeTruthy()
})

test('check file is there when required', () => {
    expect(checkFile('package.json', true)).toBeTruthy()
})

function throwError() {
    checkFile('fakefile.js', true)
}

test('check file that doesnt exist sends error', () => {
    expect(throwError).toThrow(Error)
})
