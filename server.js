require("dotenv").config();
const express = require("express");

const app = express();

const enableHMR = (process.env.ENABLE_HRM || "true") === "true";

if (enableHMR && process.env.NODE_ENV !== "production") {
  console.log("Adding dev middleware, enabling HMR");
  const webpack = require("webpack");
  const devMiddleware = require("webpack-dev-middleware");
  const hotMiddleware = require("webpack-hot-middleware");

  const config = require("./webpack.config.js");
  config.entry.app.push("webpack-hot-middleware/client");
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.use(express.static("public"));

const port = process.env.UI_SERVER_PORT || 8000;

app.listen(port, function() {
  console.log(`... running UI server on port ${port}`);
});
