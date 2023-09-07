/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    '@next/next/no-html-link-for-pages': [
      2,
      path.join(__dirname, 'custom-pages'),
    ],
  },
  settings: {
    next: {
      rootDir: 'apps/mattummal.com',
    },
  },
  root: true,
  extends: ['next-typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
