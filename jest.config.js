module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['packages/**/*.{js,jsx}', '!**/node_modules/**'],
    roots: ['<rootDir>/packages/'],
    testEnvironment: 'node',
}
