// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require("@cypress/browserify-preprocessor");

module.exports = (on) => {
  const options = browserify.defaultOptions;
  options.browserifyOptions.plugin.unshift(['tsify']);
  // Or, if you need a custom tsconfig.json for your test files:
  // options.browserifyOptions.plugin.unshift(['tsify', {project: 'path/to/other/tsconfig.json'}]);

  on("file:preprocessor", cucumber(options));
};
