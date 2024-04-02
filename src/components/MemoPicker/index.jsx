import { View, Text, Input, Picker } from '@tarojs/components'
import { useState } from 'react'

// 纪念日类型
export function MemoType() {
  // TODO 自定义类型
  const [selector, setSelector] = useState(['生日', '恋爱', '结婚', '忌日', '其它'])
  const [selectorChecked, setSelectorChecked] = useState('生日')

  const onChange = e => {
    setSelectorChecked(selector[e.detail.value])
  }

  return (
    <View className='flex-row'>
      <Text>纪念日类型：</Text>
      <Picker mode='selector' range={selector} onChange={onChange}>
        {selectorChecked}
      </Picker>
    </View>
  )
}

// 纪念日日期
export function MemoDate() {
  const [dateSel, setDateSel] = useState('2018-04-22')

  const onDateChange = e => {
    setDateSel(e.detail.value)
  }

  return (
    <View className='flex-row'>
      <Text>纪念日日期：</Text>
      <Picker mode='date' onChange={onDateChange}>
        {dateSel}
      </Picker>
    </View>
  )
}