const tabbarConfig = {
  custom: true,
  selectedColor: '#fed802',
  list: [
    {
      pagePath: 'pages/index/index',
      text: '首页',
    },
    {
      pagePath: 'pages/link/index',
      text: '连接',
    },
    {
      pagePath: 'pages/find/index',
      text: '发现',
    },
    {
      pagePath: 'pages/user/index',
      text: '我的',
      iconPath: './assets/icons/user.png',
      selectedIconPath: './assets/icons/user_selected.png',
    },
  ],
}

module.exports = tabbarConfig
