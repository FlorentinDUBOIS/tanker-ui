const { resolve } = require("path");

module.exports = {
  entry: resolve("src/tanker.bootstrap.js"),
  output: {
    path: resolve("dist"),
    filename: "tanker.bundle.js"
  },

  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};
