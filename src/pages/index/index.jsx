import { View, Text, Image } from '@tarojs/components'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Taro, { useLoad } from '@tarojs/taro'

import './index.css'
import { AIType } from '@/typeMap/index'

function onClick(route) {
  Taro.navigateTo({
    url: route.path,
  })
}

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className="index" >
      {
        AIType.map(route => (
          <View key={route.tid} className='box' onClick={() => onClick(route)}>
            <Image
              className='icon'
              src={route.tIcon}
            />
            <Text className='text'>{route.tName}</Text>
          </View>
        ))
      }
    </View>
  )
}