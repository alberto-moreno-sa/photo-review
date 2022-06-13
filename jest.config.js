module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '/node_modules/(?!lodash-es).+\\.js$',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  testMatch: ['<rootDir>/__tests__/**/?(*.)(spec|test).{js,jsx,mjs}'],
  transform: {
    '.+\\.(css|styl|less|sass|scss)$':
      '<rootDir>/node_modules/jest-css-modules-transform',
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^~(.*)$': '<rootDir>/src$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^configs/(.*)$': '<rootDir>/src/configs/$1',
    '^configs$': '<rootDir>/src/configs/index',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^utils$': '<rootDir>/src/utils/index',
    '^store/(.*)$': '<rootDir>/src/store/$1',
    '^store$': '<rootDir>/src/store/index',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^services/(.*)$': '<rootDir>/src/services/$1',
    '^services$': '<rootDir>/src/services/index',
    '^services$': '<rootDir>/src/services/index',
    '^mocks/(.*)': '<rootDir>/src/__mocks__/$1',
    '^testUtils$': '<rootDir>/__tests__/testUtils',
  },
};
