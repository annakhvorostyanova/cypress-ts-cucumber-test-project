module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: "module",
      allowImportExportEverywhere: true,
    },
  },
  extends: [
    'airbnb-base',
    'plugin:cypress/recommended',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'no-console': 0,
    quotes: 0,
    "import/extensions": "off",
  },
  env: {
    commonjs: true,
    node: true,
    mocha: true,
  },
  globals: {
    expect: true,
    sinon: true,
    cy: true,
    Cypress: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
