const path = require("path");
// const createDefaultConfig = require("@open-wc/building-webpack/modern-and-legacy-config");

// // If you don't need IE11 support, use the modern-config instead
// // import createDefaultConfig from '@open-wc/building-webpack/modern-config';

// module.exports = createDefaultConfig({
//   input: path.resolve(__dirname, "./index.html")
// });

// -------------------

const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: {
  //   // main: "/src/index.js"
  // foo: "./web-components/my-element.js"
  // },
  // output: {
  //   filename: "[name].js",
  //   path: __dirname + "/dist"
  // },
  entry: {
    app: "./src/index.js",
    components: "./web-components/my-element.js"
    // search: './src/search.js'
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
      // {
      //   test: /\/web-components\//,
      //   use: {
      //     loader: "web-components-loader"
      //   }
      // }
    ]
  },
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: "./src/index.html",
  //     filename: "./index.html"
  //   }),
  //   new ScriptExtHtmlWebpackPlugin({
  //     // module: "my-element.js"
  //     sync: "src/my-element.js",
  //     defaultAttribute: "async"
  //   })
  // ]
  plugins: [
    new HtmlWebpackPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      // module: /\.js$/
      module: "components.js"
      // defaultAttribute: "async"
    })
  ]
};
