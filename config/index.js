// 默认配置

import { defineConfig } from '@tarojs/cli'
const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

import devConfig from './dev'
import prodConfig from './prod'

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig(async (merge, { command, mode }) => {
  const baseConfig = {
    projectName: 'MyAIAssistant',
    date: '2024-3-27',
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: ['@tarojs/plugin-html',],
    defineConstants: {
      'process.env': JSON.stringify(process.env)
    },
    copy: {
      patterns: [
      ],
      options: {
      }
    },
    framework: 'react',
    compiler: 'webpack5',
    cache: {
      enable: true,  // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    alias: {
      '@/assets': path.resolve(__dirname, '..', 'src/assets'),
      '@/typeMap': path.resolve(__dirname, '..', 'src/typeMap'),
      '@/pages': path.resolve(__dirname, '..', 'src/pages'),
      '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    },
    // 小程序端专用配置
    mini: {
      postcss: {
        pxtransform: {
          enable: true,
          config: {
            // 设置 1px 是否需要被转换
            onePxTransform: true,
            // REM 单位允许的小数位
            unitPrecision: 5,
            // 允许转换的属性
            propList: ['*'],
            // 黑名单里的选择器将会被忽略
            selectorBlackList: [],
            // 直接替换而不是追加一条进行覆盖
            replace: true,
            // 允许媒体查询里的 px 单位转换
            mediaQuery: false,
            // 设置一个可被转换的最小 px 值
            minPixelValue: 0
          }
        },
        // 小程序端样式引用本地资源内联配置
        url: {
          enable: true,
          config: {
            limit: 1024 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      // 自定义 Webpack 配置
      // webpackChain(chain, webpack) {
      //   chain.plugin('analyzer')
      //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
      // }
    },
    // H5 端专用配置
    h5: {
      publicPath: '/',
      staticDirectory: 'static',
      router: {
        mode: 'browser',
      },
      output: {
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js'
      },
      miniCssExtractPluginOption: {
        ignoreOrder: true,
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[name].[chunkhash].css'
      },
      postcss: {
        pxtransform: {
          enable: true,
          config: {
            onePxTransform: true,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
            // H5 字体尺寸大小基准值
            baseFontSize: 20,
            // H5 根节点 font-size 的最大值
            maxRootSize: 40,
            // H5 根节点 font-size 的最小值
            minRootSize: 20,
            // 转换后的单位
            targetUnit: 'rem'
          }
        },
        autoprefixer: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      // 自定义 Webpack 配置
      webpackChain(chain, webpack) {
        chain.plugin('polyfills').use(NodePolyfillPlugin)
        chain.resolve.fallback = {
          "crypto": false,
          "stream": false,
        }
        return chain;
      },
      devServer: {},
    },
    rn: {
      appName: 'taroDemo',
      postcss: {
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        }
      }
    }
  }
  if (process.env.NODE_ENV === 'development') {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig)
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig)
})
