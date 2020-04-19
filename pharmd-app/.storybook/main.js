// Storybook is using the same webpack config file
// we used for our app. THis allows us to use css
// and scss for styling in storybook.
const custom = require("../webpack.config");

module.exports = {
  webpackFinal: config => {
    config.plugins.push(custom.plugins[2]);
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules }
    };
  }
};
