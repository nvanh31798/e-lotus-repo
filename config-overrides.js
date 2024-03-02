const path = require("path");

process.env.SASS_PATH = path.resolve(__dirname, "src/styles/scss");

const { override, babelInclude } = require("customize-cra");

module.exports = override(
  
  babelInclude([path.resolve(__dirname, "src")], function override(config) {
    // New config, e.g. config.plugins.push...
    config.module.rules = [
      
      ...config.module.rules,
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ];

    return config;
  })
);
