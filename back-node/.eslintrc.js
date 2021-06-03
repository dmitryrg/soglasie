module.exports = {
  // root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: [
    'prettier',
    'jest'
  ],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'prettier',
    'plugin:jest/recommended'
    // 'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'warn',
    'no-console': 'off',
    'no-useless-escape': 'off',
    'no-constant-condition': 'off',
    'use-isnan': 'off',
    'no-case-declarations': 'off',
    'no-inner-declarations': 'off',
    'no-throw-literal': 'warn',
    'node/no-deprecated-api': 'off',
    'object-curly-spacing': ['warn', 'always', {
      'objectsInObjects': true,
      'arraysInObjects': true
      }
    ],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
    // 'quotes': ['error', 'single']
    // 'node/no-unsupported-features': ['warn', {version: 8, ignores: ['syntax.asyncAwait']}]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};

// убираем когда ругается на key enter 'hasOwnProperty'. It will display 'Unfiltered for..in loop'
