import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Other3() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='other3'>
      <Text>Hello world!</Text>
    </View>
  )
}
