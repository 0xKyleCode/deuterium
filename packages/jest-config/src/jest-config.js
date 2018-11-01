// @flow

function jestConfig(
    mainFolder: string,
    ignore?: Object = { node: 'node_modules' }
) {
    // The folder want to look for our tests and coverage
    const coverageMain = `${mainFolder}/**/*.{js,jsx}`

    // The folders we want to ignore for coverages
    const coverageIgnore = []
    Object.keys(ignore).forEach(key => {
        coverageIgnore.push(`!**/${ignore[key]}/**`)
    })

    // Finally, the root files
    const rootFiles = `<rootDir>/${mainFolder}/`

    const config = {
        collectCoverage: true,
        collectCoverageFrom: [coverageMain, ...coverageIgnore],
        roots: [rootFiles],
        testEnvironment: 'node',
    }

    return config
}

export default jestConfig
