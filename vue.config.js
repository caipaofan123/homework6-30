const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { // 自定义服务配置
    open: true, // 自动打开浏览器
    port: 3000,
    host: 'localhost',
  },
  lintOnSave: false // 关闭eslint检查

})
