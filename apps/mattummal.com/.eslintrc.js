/** @type {import('eslint').Linter.Config} */
module.exports = {
  //settings: {
  //next: {
  //   rootDir: 'apps/mattummal.com',
  // },
  //},
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['next-typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    //project: ['./tsconfig.json'],
    project: 'tsconfig.json',
  },
};
