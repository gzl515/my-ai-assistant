import { View, Text, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.css'

import { memoList, memoType } from '@/typeMap/index'

function getMemoType(id) {
  return memoType.find(item => item.tid === id)
}

function onAdd() {
  Taro.navigateTo({
    url: 'pages/addMemo/index',
  })
}

function onDetail() {
  Taro.navigateTo({
    url: 'pages/memoDetail/index',
  })
}

export default function MemoList() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='memoList'>
      <View>
        {
          memoList.map((memo) => (
            <View key={memo.mid} className='item' onClick={() => onDetail()}>
              <Text className='name'>{memo.mName}</Text>
              <Text>
                <Text className='date'>{memo.mDate}</Text>
                <Text className='type'>{getMemoType(memo.mType).name}</Text>
              </Text>
            </View>
          ))
        }
      </View>

      <Button className='btn' onClick={() => onAdd()}>添加一个纪念日</Button>
    </View>
  )
}
