/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^\\$lib/(.*)$': '<rootDir>/src/lib/$1',
    '^\\$app/(.*)$': '<rootDir>/.svelte-kit/dev/runtime/app/$1',
  },
  testPathIgnorePatterns: ['cypress/(.*)', 'src/lib/components/(.*).test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  rootDir: '.',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/hooks.server.ts'],
  coveragePathIgnorePatterns: [
    '.*.d.ts',
    '.*.cjs',
    '.*.types.ts',
    '/config',
    'src/lib/config',
    '/constants/',
    '/routes/',
    '/coverage/',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
