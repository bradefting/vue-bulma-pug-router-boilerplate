module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 0,
    'no-use-before-define': ['error', { 'functions': false }],
    'import/extensions': 0,
    'no-console': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': ['error', {'props': true, 'ignorePropertyModificationsFor': ['state', 'Vue'] }],
    'arrow-parens': [2, 'as-needed', { 'requireForBlockBody': true }],
    'import/order': ['error', {'groups': ['index', 'external', 'sibling', 'parent', 'internal', 'builtin']}],
    'operator-linebreak': 'off',
    'no-else-return': [2, { 'allowElseIf': true }],
    'object-curly-newline': 'off',
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
    'operator-assignment': 'off',
    'no-alert': 'off'
  },
};
