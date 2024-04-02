import { View, Text, Input, Picker, RadioGroup, Label, Radio, Textarea, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import './index.css'

import { getToday } from '@/utils/index'
import { memoType } from '@/typeMap/index'



export default function AddMemo() {

  const [mForm, setForm] = useState({
    mName: '',
    mRelation: '',
    mDate: getToday(),
    dType: 1,
    mType: 0,
    remark: ''
  })

  function onTypeChange(e) {
    setForm({
      ...mForm,
      mType: memoType[e.target.value].name
    })
  }

  function onChange(e, key) {
    setForm({
      ...mForm,
      [key]: e.target.value
    })
  }

  function onSubmit() {
    console.log(mForm);
    if (mForm.mName === '' || mForm.mRelation === '') {
      return
    }

    console.log('success');

  }

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='addMemo'>
      <View className='title'>添加一个纪念日</View>
      <View className='formContent'>
        <View className='item'>
          <Text className='item-title'>姓名</Text>
          <Input className='item-input' type='text' onChange={(e) => onChange(e, 'mName')} />
        </View>

        <View className='item'>
          <Text className='item-title'>关系</Text>
          <Input className='item-input' type='text' onChange={(e) => onChange(e, 'mRelation')} />
        </View>

        <View className='item'>
          <Text className='item-title'>日期</Text>
          <Picker mode='date' onChange={(e) => onChange(e, 'mDate')}>
            <View className='item-picker'>{mForm.mDate}</View>
          </Picker>
        </View>

        <View className='item'>
          <Text className='item-title'>公历/农历</Text>
          <RadioGroup onChange={(e) => onChange(e, 'dType')}>
            <Label className='example-body__label' for='1' key='1'>
              <Radio value='1' checked={+mForm.dType === 1}>公历</Radio>
            </Label>
            <Label className='example-body__label' for='0' key='0'>
              <Radio value='0' checked={+mForm.dType === 0}>农历</Radio>
            </Label>
          </RadioGroup>
        </View>

        <View className='item'>
          <Text className='item-title'>类型</Text>
          <Picker mode='selector' rangeKey="name" range={memoType} onChange={(e) => onChange(e, 'mType')}>
            <View className='item-picker'>{memoType[mForm.mType].name}</View>
          </Picker>
        </View>

        {/* <View className='item'>
          <Text className='item-title'>备注</Text>
          <Textarea
            className='item-input item-textarea'
            autoHeight
          />
        </View> */}
      </View>

      <Button className='btn-max-w' onClick={onSubmit}>提交</Button>
    </View>
  )
}
