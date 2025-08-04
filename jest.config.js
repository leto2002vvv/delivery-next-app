/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(ts|tsx)$': 'babel-jest',
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	transformIgnorePatterns: ['/node_modules/'],
}
