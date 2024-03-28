export default definePageConfig({
  // 导航栏标题文字内容
  navigationBarTitleText: '首页',
  // 导航栏背景颜色，如 #000000
  navigationBarBackgroundColor: '#000000',
  // 导航栏标题颜色，仅支持 black / white
  navigationBarTextStyle: 'white',
  // 导航栏样式，仅支持以下值：default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮
  navigationStyle: 'default',
  // 导航栏透明设置。支持 always 一直透明 / auto 滑动自适应 / none 不透明
  transparentTitle: 'none',
  // 窗口的背景色
  backgroundColor: '#ffffff',
  // 下拉 loading 的样式，仅支持 dark / light
  backgroundTextStyle: 'light',
  // 顶部窗口的背景色，仅 iOS 支持
  backgroundColorTop: '#ffffff',
  // 底部窗口的背景色，仅 iOS 支持
  backgroundColorBottom: '#ffffff',
  // 是否开启当前页面的下拉刷新
  enablePullDownRefresh: false,
  // 页面上拉触底事件触发时距页面底部距离，单位为 px
  onReachBottomDistance: 50,
  // 屏幕旋转设置，支持 auto / portrait / landscape 详见 响应显示区域变化
  pageOrientation: 'portrait',
  // 设置为 true 则页面整体不能上下滚动。只在页面配置中有效，无法在 app.json 中设置
  disableScroll: false,
  // 禁止页面右滑手势返回
  disableSwipeBack: false,
  // 是否启用分享给好友
  enableShareAppMessage: true,
  // 是否启用分享到朋友圈
  enableShareTimeline: true,
  // 页面自定义组件配置，一般不需要配置，只有在需要与引用原生小程序组件的时候才需要配置
  // usingComponents: {},
  // 渲染后端
  // renderer: 'webview'
})
