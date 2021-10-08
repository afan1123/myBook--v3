module.exports = {
  // 开发服务器配置(生产环境)
  devServer: {
    proxy: {
      '/api': {
        //  接口请求路径
        target: `http://127.0.0.1:4000/`,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
