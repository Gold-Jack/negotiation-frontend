const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {  //设置本地默认端口
    port: 9000,   // 前端端口号
    proxy: {    //设置代理
      '/user-service': {     //设置拦截器  拦截器格式   斜杠+拦截器名字
        target: 'http://localhost:8081',     //代理的目标地址
        changeOrigin: true,        //是否设置同源，输入是的
        pathRewrite: {             //路径重写
          '^/user-service': ''     //选择忽略拦截器里面的内容
        }
      },
      '/question-service': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        pathRewrite: {
          '^/question-service': ''
        }
      },'/quiz-service': {
        target: 'http://localhost:8083',
        changeOrigin: true,
        pathRewrite: {
          '^/quiz-service': ''
        }
      },
      '/file-service': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        pathRewrite: {
          '^/file-service': ''
        }
      }
    },
    historyApiFallback: true,
    allowedHosts: "all",
  },
  transpileDependencies: true
})
