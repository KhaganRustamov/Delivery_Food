"use strict";

let path = require("path");

module.exports = {
  mode: "development",
  entry: "./FoodDist/js/script.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/FoodDist/js",
  },
  watch: true,

  devtool: "source-map",

  module: {},
};
