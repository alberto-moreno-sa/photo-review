module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['next/core-web-vitals', 'plugin:react/recommended'],
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    babelOptions: {
      presets: ['next/babel'],
      caller: {
        // Eslint supports top level await when a parser for it is included. We enable the parser by default for Babel.
        supportsTopLevelAwait: true,
      },
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/internal-regex': '^next/',
  },
  plugins: ['react', 'react-hooks', 'jest', 'import'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
