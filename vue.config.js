const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    compilerOptions: {
      isCustomElement: true
    }
  }
})
