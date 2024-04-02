import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Other2() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='other2'>
      <Text>Hello world!</Text>
    </View>
  )
}
