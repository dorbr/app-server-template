module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 0,
    'import/no-import-module-exports': 0,
    'import/no-unresolved': 0,
    'no-plusplus': 0,
    'consistent-return': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': ['error', 'never'],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
  },
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*.spec.ts',
        '**/*.spec.tsx',
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.ts',
        '**/*.test.tsx',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
