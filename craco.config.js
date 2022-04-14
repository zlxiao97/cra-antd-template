const path = require(`path`);
const CracoLessPlugin = require("craco-less");
const cracoPluginStyleResourcesLoader = require("craco-plugin-style-resources-loader");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        }
      }
    },
    {
      plugin: cracoPluginStyleResourcesLoader,
      options: {
        patterns: [
          path.join(__dirname, "src/theme/base/*.less"),
          path.join(__dirname, "src/theme/components/*.less"),
          path.join(__dirname, "src/theme/utils/*.less")
        ],
        styleType: "less"
      }
    }
  ]
};
