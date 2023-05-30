const path = require('path');


const px2Config = {
  baseFontSize: 16,
  minRootSize: 6,
  // mediaQuery: false,
  maxRootSize: 32
}

const config = {
  projectName: "mini",
  date: "2023-4-1",
  designWidth: 375,
  deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      828: 1.81 / 2,
      375: 2,
  },
  sourceRoot: "src",
  
  outputRoot: "dist",
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  compiler: 'webpack5',
  cache: {
    enable: true // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: px2Config,
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      pxtransform: {
        enable: true,
        config: px2Config,
      },
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  alias: {
    '@/function': path.resolve(__dirname, '..', 'src/function'),
    '@/hooks': path.resolve(__dirname, '..', 'src/hooks'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/const': path.resolve(__dirname, '..', 'src/const'),
    '@/stores': path.resolve(__dirname, '..', 'src/stores'),
    '@/images': path.resolve(__dirname, '..', 'src/images'),
    '@/types': path.resolve(__dirname, '..', 'src/types'),
    '@/helpers': path.resolve(__dirname, '..', 'src/helpers'),
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
