module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['packages/**/*.{js,jsx}', '!**/node_modules/**'],
    roots: ['<rootDir>/packages'],
    testEnvironment: 'node',
    testPathIgnorePatterns: [
        '/node_modules/',
        '(lib/__tests__/.*|(\\.|/)(test|spec))\\.jsx?',
    ],
}
