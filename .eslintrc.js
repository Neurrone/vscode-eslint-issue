module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  // plugins: ['@typescript-eslint', 'mocha', 'import', 'security'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {args: 'all', argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true},
    ],
    'max-len': ['error', {code: 120}],
    'no-fallthrough': 'warn',
    'no-unused-vars': [
      'error',
      {args: 'all', argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true},
    ],
    'no-underscore-dangle': 'off',
    'no-caller': 'error',
    'no-eval': 'error',
    'no-console': 'error',
    'no-control-regex': 'error',
    'no-new-func': 'error',
    'func-style': ['warn', 'declaration', {allowArrowFunctions: true}],
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'no-implied-eval': 'error',
    'no-extra-bind': 'error',
    'no-undef-init': 'error',
    'no-array-constructor': 'error',
    semi: ['error', 'always'],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['src/*', 'scripts/*'],
      },
    ],
  },
};
