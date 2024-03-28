import Taro from '@tarojs/taro'
import React from 'react'
import { View } from '@tarojs/components'

import './index.css'

class Index extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    try {
      setTimeout(() => {
        this.setState({
          loading: false,
        })
      }, 3000)

    } catch (error) {
      Taro.showToast({
        title: '载入远程数据错误',
      })
    }
  }

  render() {
    const { loading } = this.state
    return (
      <View className="index">
        index
      </View>
    )
  }
}

export default Index