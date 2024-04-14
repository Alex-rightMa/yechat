const tabbarConfig = require('./tabbar.config')

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/link/index',
    'pages/find/index',
    'pages/user/index'
  ],
  tabBar: tabbarConfig,
  window: {
    navigationStyle: 'custom',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  // renderer: 'skyline',
  // rendererOptions: {
  //   skyline: {
  //     defaultDisplayBlock: true,
  //     defaultContentBox: true
  //   }
  // },
  // lazyCodeLoading: 'requiredComponents',
  // componentFramework: "glass-easel",
})
