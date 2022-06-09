const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  if (process.env.REACT_APP_MOCK === "none") {
    app.use(
      "/api",
      createProxyMiddleware({
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
        logLevel: "info"
      })
    );
  }
};
