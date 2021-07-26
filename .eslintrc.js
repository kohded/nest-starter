module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    jest: true,
    mongo: true,
    node: true,
  },
  extends: [
    // Waiting on base support, don't need React: https://github.com/iamturns/eslint-config-airbnb-typescript/issues/6
    // https://github.com/iamturns/eslint-config-airbnb-typescript#user-content-i-wish-this-config-would-support-
    // Sets up: @typescript-eslint/eslint-plugin, import, jsx-a11y, react, react-hooks
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:eslint-comments/recommended',
    // https://github.com/prettier/eslint-plugin-prettier#user-content-recommended-configuration
    // Sets up: eslint-config-prettier, eslint-plugin-prettier
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['build', 'coverage'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    // Nest specific rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // Nest specific rules
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'import/prefer-default-export': 'off',
    'no-param-reassign': [
      'error',
      // Immer - https://github.com/immerjs/immer/issues/189#issuecomment-703083451
      { props: true, ignorePropertyModificationsForRegex: ['^draft'] },
    ],
  },
};
