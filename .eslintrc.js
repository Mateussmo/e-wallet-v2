module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
      },
    ],
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-console": "off",
    "@typescript-eslint/camelcase": "off",
    "class-methods-use-this": "off",
  },
};
