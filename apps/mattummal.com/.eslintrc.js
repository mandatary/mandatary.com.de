/** @type {import('eslint').Linter.Config} */
module.exports = {
  settings: {
    next: {
      rootDir: 'apps/mattummal.com',
    },
  root: true,
  extends: ['next-typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
