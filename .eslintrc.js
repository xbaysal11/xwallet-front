module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    _BASE_URL: true,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
    ecmaVersion: 2017,
    sourceType: "module",
  },
  parser: "babel-eslint",
  plugins: ["react", "import", "prettier"],
  ignorePatterns: ["**/Icons/index.js"],
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        offsetTernaryExpressions: true,
        flatTernaryExpressions: true,
      },
    ],
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "before", ":": "before" } },
    ],
    "linebreak-style": ["error", "unix"],
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: ["error", "always"],
    "global-require": "off",
    // prettier
    "prettier/prettier": "error",
    // react
    "react/jsx-uses-vars": 1,
    "react/jsx-uses-react": 1,
    "react/prop-types": 2,
    "react/display-name": 0,
    // debug
    "no-console": 0,
    "no-debug": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".es6"],
      },
    },
  },
};
