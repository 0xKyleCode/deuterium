// @flow

import root from '../root'

// Test that we get the corrent appr-root
test('Root path name is same as current working directory', () => {
    expect(root.toLowerCase()).toEqual(process.cwd().toLowerCase())
})
