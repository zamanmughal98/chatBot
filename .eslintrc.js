module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "sonarjs"],
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "arrow-body-style": "warn",
    "no-await-in-loop": "warn",
    "no-continue": "warn",
    "no-restricted-syntax": "warn",
    "@typescript-eslint/brace-style": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "prettier/prettier": "error",
  },
};
