
const nextJest = require("next/jest")
const createJestConfig = nextJest({
    dir: "./",
})


const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',
    clearMocks: true,
    moduleDirectories: ["node_modules", "src"],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testMatch: [
        "**/?(*.)+(test).tsx?(x)"
    ],
}

module.exports = createJestConfig(customJestConfig)