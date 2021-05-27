module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js')
      }
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: ['/^:is/']
      }
    ],
    'vue/attribute-hyphenation': [
      'error',
      'never',
      {
        ignore: []
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
