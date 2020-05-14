module.exports = {
    plugins: {
      'autoprefixer': {
        browsers: ['Android >= 4.0', 'iOS >= 8']
      },
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*']
      },
       // 兼容浏览器，添加前缀
       'autoprefixer':{
        overrideBrowserslist: [
          "Android 4.1",
          "iOS 7.1",
          "Chrome > 31",
          "ff > 31",
          "ie >= 8"
          //'last 10 versions', // 所有主流浏览器最近10版本用
      ],
      grid: true
    }
    }
  }