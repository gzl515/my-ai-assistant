export default definePageConfig({
  navigationBarTitleText: 'AI助手',
  navigationBarBackgroundColor: '#000000',
  navigationBarTextStyle: 'white',
  navigationStyle: 'default',
  transparentTitle: 'none',
  backgroundColor: '#ffffff',
  backgroundTextStyle: 'light',
  backgroundColorTop: '#ffffff',
  backgroundColorBottom: '#ffffff',
  enablePullDownRefresh: false,
  onReachBottomDistance: 50,
  pageOrientation: 'portrait',
  disableScroll: false,
  disableSwipeBack: false,
  enableShareAppMessage: true,
  enableShareTimeline: true,
  // 页面自定义组件配置，一般不需要配置，只有在需要与引用原生小程序组件的时候才需要配置
  // usingComponents: {},
  // 渲染后端
  // renderer: 'webview'
})
