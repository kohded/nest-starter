module.exports = {
  '*.{js,json,md,ts,yml}': 'prettier --debug-check -c',
  '*.{js,ts}': [
    () => 'eslint', // https://github.com/okonet/lint-staged/issues/825#issuecomment-620018284
    'jest --bail --ci --findRelatedTests --passWithNoTests',
  ],
};
