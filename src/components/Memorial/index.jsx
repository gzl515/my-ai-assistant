import { View, Text, Input } from '@tarojs/components'
import { MemoType, MemoDate } from '../MemoPicker'

import './index.css'
export default function MemorialFrom() {
  return (
    <View className='container'>
      <View className='flex-row'>
        <Text>姓名：</Text>
        <Input type='text' placeholder='姓名' />
      </View>

      <MemoType></MemoType>
      <MemoDate></MemoDate>
    </View>

  )
}