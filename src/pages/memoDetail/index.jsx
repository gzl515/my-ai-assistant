import { View, Text, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import './index.css'

import { generJWT } from '@/utils/index'

export default function MemoDetail() {

  useLoad(() => {
    // generJWT()
    console.log('Page loaded.')
  })

  const [msg, setMsg] = useState('')



  function onAdd() {
    fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInNpZ25fdHlwZSI6IlNJR04iLCJ0eXAiOiJKV1QifQ.eyJhcGlfa2V5IjoiYjk5YjhjZDA0MmQ0MzQ2ZjdiZjA4YmVmZmNhNTgzZGMiLCJleHAiOjE3MTE3MjM5NzEyNDksInRpbWVzdGFtcCI6MTcxMTcyMjk3MTI0OX0.96Tqrk-sFsxA38EAsLPtLd4W6F-xfL3pX52nlTvo9i0',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "model": "glm-4",
        "messages": [
          { "role": "system", "content": "你是我" },
          { "role": "user", "content": "我很思念我的朋友高园园，请你帮我写一段对她思念的话" }
        ]
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        let content = data.choices[0].message.content
        let res = content.includes('\n\n') ? data.choices[0].message.content.split('\n\n')[1] : content
        console.log(res)
        setMsg(res)
      })
      .catch(error => console.error('Error:', error));
  }

  return (
    <View className='memoDetail'>
      <Button className='btn' onClick={() => onAdd()}>获取纪念日祝福</Button>
      <View>{msg}</View>
    </View>
  )
}
