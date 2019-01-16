// @flow

function jestConfig(
    mainFolder: string,
    coverageIgnore?: Object = { node: 'node_modules' },
    testIgnore?: Array<string> = ['/node_modules/']
) {
    // The folder want to look for our tests and coverage
    const coverageMain = `${mainFolder}/**/*.{js,jsx}`

    // The folders we want to ignore for coverages
    const coverageIgnoreArray = []
    Object.keys(coverageIgnore).forEach(key => {
        coverageIgnoreArray.push(`!**/${coverageIgnore[key]}/**`)
    })

    // Finally, the root files
    const rootFiles = `<rootDir>/${mainFolder}/`

    const config = {
        collectCoverage: true,
        collectCoverageFrom: [coverageMain, ...coverageIgnore],
        roots: [rootFiles],
        testEnvironment: 'node',
        testPathIgnorePatterns: testIgnore,
    }

    return config
}

export default jestConfig
