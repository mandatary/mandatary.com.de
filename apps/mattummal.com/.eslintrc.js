/** @type {import('eslint').Linter.Config} */
module.exports = {
  settings: {
    next: {
      rootDir: 'apps/mattummal.com',
    },
  },
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['next-typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    //project: ['./tsconfig.json'],
    project: 'tsconfig.json',
  },
  rules: {
    '@next/next/no-html-link-for-pages': ['error', 'src/pages'],
    'react/no-unknown-property': ['error', { ignore: ['jsx'] }],
  },
};
