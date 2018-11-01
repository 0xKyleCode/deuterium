// @flow

import checkPackage from '../checkPackage'

test('checkPackage sees dependency', () => {
    expect(checkPackage('@babel/runtime')).toBeTruthy()
})

test('checkPackage sees devDependency', () => {
    expect(checkPackage('jest')).toBeTruthy()
})

test('check package for non existent package', () => {
    expect(checkPackage('fakepackage')).toBeFalsy()
})

/**
 * Test to run to check package for non-existent required package
 */
function checkRequiredPackage() {
    checkPackage('fakepackage', true)
}

test('check package for non-existent required package', () => {
    expect(checkRequiredPackage).toThrow(Error)
})
