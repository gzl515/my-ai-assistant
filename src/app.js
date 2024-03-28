// 项目入口文件
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import './app.css'

const reducers = combineReducers({
  thread: (state = {}, action) => {
    if (action.type === 'SET_CURRENT_THREAD') {
      return {
        ...state,
        ...action.thread,
      }
    }
    return state
  },
})

const store = createStore(reducers)


class App extends Component {
  // 可以使用所有的 React 生命周期方法
  // componentDidMount() { }

  // 对应 onLaunch
  onLaunch() { }

  // // 对应 onShow，程序启动，或切前台时触发
  // componentDidShow(options) { }

  // // 对应 onHide，程序切后台时触发
  // componentDidHide() { }

  // // 小程序发生脚本错误或 API 调用报错时触发
  // onError(error) { }

  // // 程序要打开的页面不存在时触发
  // onPageNotFound(Object) { }

  // // 小程序有未处理的 Promise 拒绝时触发
  // onUnhandledRejection(Object) { }

  render() {
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    // this.props.children 是将要会渲染的页面
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App