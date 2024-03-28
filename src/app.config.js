// 项目入口配置，配置项遵循微信小程序规范
export default defineAppConfig({
  // 页面路径列表
  pages: [
    'pages/index/index',
    'pages/my/my',
    // 'pages/nodes/nodes', 把要分包的页面从 `pages` 字段中删除
  ],
  // 分包结构配置，H5 和 RN 会把 subPackages 合入 pages
  // 分包加载：https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages.html
  // subpackages: [
  //   {
  //     "root": "pages",
  //     "pages": [
  //       "nodes/nodes"
  //     ]
  //   }
  // ],
  // 底部 tab 栏的表现
  tabBar: {
    // tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab
    list: [
      {
        // iconPath: 'resource/latest.png',
        // selectedIconPath: 'resource/lastest_on.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        // iconPath: 'resource/hotest.png',
        // selectedIconPath: 'resource/hotest_on.png',
        pagePath: 'pages/my/my',
        text: '我的',
      },
    ],
    // tab 上的文字默认颜色，仅支持十六进制颜色
    color: '#000',
    // tab 上的文字选中时的颜色，仅支持十六进制颜色
    selectedColor: '#56abe4',
    // tab 的背景色，仅支持十六进制颜色
    backgroundColor: '#fff',
    // tabbar 上边框的颜色， 仅支持 black / white
    borderStyle: 'white',
    // tabBar 的位置，仅支持 bottom / top
    position: 'bottom',
    // 自定义 tabBar
    custom: false,
  },
  // 全局的默认窗口表现
  window: {
    // 下拉 loading 的样式，仅支持 dark / light
    backgroundTextStyle: 'light',
    // 导航栏背景颜色，如 #000000
    navigationBarBackgroundColor: '#fff',
    // 导航栏标题文字内容
    navigationBarTitleText: 'WeChat',
    // 导航栏标题颜色，仅支持 black / white
    navigationBarTextStyle: 'black',
    // 导航栏样式，仅支持以下值：default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮
    navigationStyle: 'default',
    // 窗口的背景色
    backgroundColor: '#ffffff',
    // 顶部窗口的背景色，仅 iOS 支持
    backgroundColorTop: '#ffffff',
    // 底部窗口的背景色，仅 iOS 支持
    backgroundColorBottom: '#ffffff',
    // 是否开启当前页面的下拉刷新
    enablePullDownRefresh: false,
    // 页面上拉触底事件触发时距页面底部距离，单位为 px
    onReachBottomDistance: 50,
    // 屏幕旋转设置，支持 auto / portrait / landscape 详见 响应显示区域变化
    pageOrientation: 'portrait'
  }
  // 小程序端特有属性，只在部分小程序中支持的属性，H5、RN 均不支持。各小程序支持情况不同
  // https://taro-docs.jd.com/docs/app-config#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%AB%AF%E7%89%B9%E6%9C%89%E5%B1%9E%E6%80%A7
  // 微信小程序特有属性
  // https://taro-docs.jd.com/docs/app-config#%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%89%B9%E6%9C%89%E5%B1%9E%E6%80%A7
})
