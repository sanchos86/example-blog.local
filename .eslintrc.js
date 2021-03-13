module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    semi: ['error', 'always'],
    'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }],
    'space-before-function-paren': ['error', 'never'],
    'vue/no-v-html': 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
};
