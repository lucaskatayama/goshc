const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "SMART Health Card";
      return args;
    });
  },
  devServer: {
    proxy: {
      "/v1": {
        target: "http://localhost:5050",
      },
    },
  },
});
