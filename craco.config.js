const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      // 只在生产环境中设置 publicPath 为 /simple/
      if (env === 'production') {
        webpackConfig.output.publicPath = '/simple/';
      }
      
      // 添加 fallback 配置
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        crypto: require.resolve('crypto-browserify'),
        buffer: require.resolve('buffer/'),
        process: require.resolve('process/browser.js'),
        stream: require.resolve('stream-browserify'),
        vm: require.resolve('vm-browserify'),
      };
      
      // 允许导入 node_modules 外部的模块
      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
        plugin => plugin.constructor.name !== 'ModuleScopePlugin'
      );
      
      // 添加 ProvidePlugin 全局变量
      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
          process: 'process/browser.js',
        })
      );
      
      return webpackConfig;
    },
  },
}; 