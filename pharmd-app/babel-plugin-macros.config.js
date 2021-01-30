// babel-plugin-macros.config.js
module.exports = {
  tailwind: {
    config: "./src/tailwind.config.js",
    styled: "styled-components/macro"
  },
  twin: {
    config: "./src/tailwind.config.js",
    preset: "styled-components",
    autoCssProp: true,
    debugProp: true,
    debugPlugins: false,
    debug: false,
  }
};
