module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    // NOTE: Probably don't need this
    // "@babel/plugin-transform-regenerator"


    // "@babel/plugin-syntax-dynamic-import",
    // "@babel/plugin-proposal-object-rest-spread",
    // "@babel/plugin-proposal-class-properties"
  ]
  // env: {
  //   webpack: {
  //     presets: [["@babel/preset-env", { modules: false }]],
  //     plugins: [
  //       "@babel/plugin-transform-regenerator"[
  //         // "@babel/plugin-syntax-dynamic-import",
  //         // "@babel/plugin-proposal-object-rest-spread",
  //         // "@babel/plugin-proposal-class-properties",
  //         ("transform-imports",
  //         {
  //           lodash: {
  //             transform: "lodash/${member}" // eslint-disable-line no-template-curly-in-string
  //           }
  //         })
  //       ]
  //     ]
  //   }
  // }
};
