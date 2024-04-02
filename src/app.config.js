// 项目入口配置，配置项遵循微信小程序规范
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/other2/index',
    'pages/other3/index',
    'pages/other4/index',
    'pages/memoList/index',
    'pages/addMemo/index',
    'pages/memoDetail/index',
  ],
  // 分包结构配置，H5 和 RN 会把 subPackages 合入 pages
  // 分包加载：https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages.html
  // subpackages: [
  //   {
  //     "root": "pages",
  //     "pages": [
  //     ]
  //   }
  // ],
  tabBar: {
    list: [
      {
        // iconPath: 'assets/5.jpg',
        // selectedIconPath: 'assets/5.jpg',
        pagePath: 'pages/index/index',
        text: 'AI助手',
      },
      {
        // iconPath: 'resource/hotest.png',
        // selectedIconPath: 'resource/hotest_on.png',
        pagePath: 'pages/mine/index',
        text: '我的',
      },
    ],
    color: '#000000',
    selectedColor: '#56abe4',
    backgroundColor: '#fff',
    borderStyle: 'white',
    position: 'bottom',
    custom: false,
  },
  // 全局的默认窗口表现
  window: {
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'WeChat',
    navigationStyle: 'default',
    backgroundColor: '#ffffff',
    backgroundTextStyle: 'light',
    backgroundColorTop: '#ffffff',
    backgroundColorBottom: '#ffffff',
    enablePullDownRefresh: false,
    onReachBottomDistance: 50,
    pageOrientation: 'portrait'
  }
  // 小程序端特有属性，只在部分小程序中支持的属性，H5、RN 均不支持。各小程序支持情况不同
  // https://taro-docs.jd.com/docs/app-config#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%AB%AF%E7%89%B9%E6%9C%89%E5%B1%9E%E6%80%A7
  // 微信小程序特有属性
  // https://taro-docs.jd.com/docs/app-config#%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%89%B9%E6%9C%89%E5%B1%9E%E6%80%A7
})
