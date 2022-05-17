const path = require(`path`);
const CracoLessPlugin = require("craco-less");
const { loaderByName, addAfterLoaders } = require("@craco/craco");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
    configure: (webpackConfig) => {
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        fallback: {
          ...webpackConfig.resolve.fallback,
          fs: false,
          tls: false,
          net: false,
          path: false,
          zlib: false,
          http: false,
          https: false,
          stream: false,
          crypto: false,
          util: false,
          url: false,
          assert: false,
          querystring: false
        }
      };
      return webpackConfig;
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
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          const styleResourceLoader = {
            loader: "style-resources-loader",
            options: {
              patterns: [
                path.join(__dirname, "src/theme/base/*.less"),
                path.join(__dirname, "src/theme/components/*.less"),
                path.join(__dirname, "src/theme/utils/*.less")
              ]
            }
          };
          addAfterLoaders(
            webpackConfig,
            loaderByName("less-loader"),
            styleResourceLoader
          );
          return webpackConfig;
        }
      }
    }
  ]
};
