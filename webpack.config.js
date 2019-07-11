const path = require("path");
const resolve = require("resolve");

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
  watch: true,
  // entry: {
  //   // main: "/src/index.js"
  // foo: "./web-components/my-element.js"
  // },
  // output: {
  //   filename: "[name].js",
  //   path: __dirname + "/dist"
  // },
  entry: {
    // web_component_polyfills: "./web-component-polyfills/index.js",
    web_components: "./web-components/index.js",
    app: "./src/index.js"
    // search: './src/search.js'
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        // test: /src\/(.*)\.js$/,
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
      },
      // {
      //   test: /\.less$/,
      //   // use: [ 'style-loader', 'postcss-loader', 'less-loader' ]
      // }
      {
        test: /\.less$/,
        use: [
          // { 
          //   loader: 'style-loader' // creates style nodes from JS strings
          // },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          }, 
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      },
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
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
    // new ScriptExtHtmlWebpackPlugin({
    //   // module: /\.js$/
    //   module: [/web_components\.js/]
    //   // defaultAttribute: "async"
    // })
  ]
};
