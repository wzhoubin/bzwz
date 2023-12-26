// const { defineConfig } = require('@vue/cli-service')
// let externals = {}
// const isProduction = process.env.NODE_ENV === 'production'
// // 判断是否是生产环境
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
//   externals: {
//     /**
//     * externals 对象属性解析：
//     * '包名' : '在项目中引入的名字'
//   */
//     'vue': 'createApp',
//     './App.vue': 'App',
//     'vue-router': 'VueRouter',
//     'vue-router': 'useRouter',
//     'vue-route': 'useRoute',
//     'element-plus': 'ElementPlus',
//     'pinia-plugin-persistedstate': 'piniaPluginPersistedstate',
//     'pinia': 'createPinia',
//     'vue-lazyload': 'VueLazyload',
//     'moment': 'moment'
//   },
//   // config.optimization.splitChunks({
//   //   cacheGroups: {
//   //     common: {//commons 一般是是个人定义的
//   //       name: 'chunk-common', // 打包后的文件名
//   //       chunks: 'initial',
//   //       minChunks: 1,
//   //       maxInitialRequests: 5,
//   //       minSize: 0,
//   //       priority: 1,
//   //       reuseExistingChunk: true
//   //     },
//   //     vendors: {//vendor 是导入的 npm 包
//   //       name: 'chunk-vendors',
//   //       test: /[\\/]node_modules[\\/]/,
//   //       chunks: 'initial',
//   //       maxSize: 600000,
//   //       maxInitialRequests: 20,
//   //       priority: 2,
//   //       reuseExistingChunk: true,
//   //       enforce: true
//   //     },
//   //     antDesignVue: {//把antDesignVue从chunk-vendors.js提取出来。当然我们也可以把mixins，vue.min.js等等也按照类似配置提取出来
//   //       name: 'chunk-ant-design-vue',
//   //       test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
//   //       chunks: 'initial',
//   //       priority: 3,
//   //       maxSize: 600000,
//   //       reuseExistingChunk: true,
//   //       enforce: true
//   //     }
//   //   }
//   // })
// }
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
  configureWebpack: {
    // externals: ['element-plus'],
    // 包名:具体名字
    plugins: [new BundleAnalyzerPlugin()]
  },
  productionSourceMap: false,
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  devServer: {
    port: 8848,
    open: true,
    proxy: {
      '/': {
        changerOrigin: true,
        target: 'http://localhost:3000',
        ws: false,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  }
};
