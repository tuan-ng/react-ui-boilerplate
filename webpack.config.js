const path = require("path");

module.exports = {
  mode: "development",
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  entry: { app: ["./src/index.js"] },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js"
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
