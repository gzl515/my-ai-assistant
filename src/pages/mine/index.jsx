import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Mine() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='mine'>
      <Text>Hello world!</Text>
    </View>
  )
}
