import React, {useState, useEffect} from 'react'
import {Input, Button, List} from 'antd'
import styles from '../styles/App.module.css'
import store from '../store';

const App = () => {
    // console.log(store.getState())
    // 获取redux初始化的值
    // const defListData = store.getState().listData
    // const defInputValue = store.getState().inputValue

    // 使用hooks定义input的变量
    const [inputValue, setInputValue] = useState(store.getState().inputValue)
    const [listData, setListData] = useState(store.getState().listData)

    // 定义input输入框的change监听事件，并通过store.dispatch()派发，更新redux的值
    const changeInputValue = (e) => {
      store.dispatch({type: "changeInput", value: e.target.value})
    }
    // 定义更新state状态函数，提供给store.subscribe()订阅注册
    const storeChange = () => {
      setInputValue(store.getState().inputValue)
      setListData([...store.getState().listData])  // 特别注意：需要创建新数组进行更新，否则删除时视图不更新
      console.log(store.getState())
    }

    // 定义按钮点击事件，触发redux更新list值
    const addList = () => {
      store.dispatch({type: "addList"})
    }

    // 点击list项时进行删除
    const delList = (index) => {
      store.dispatch({type: "delList", index})
    }

    // store.subscribe迁移到useEffect中
    useEffect(() => {
      const unsubscribe = store.subscribe(storeChange)
      return () => {
        unsubscribe()
      }
    })

    // redux更新，会执行已订阅redux的所有函数
    // store.subscribe(storeChange)

    return (
        <div>
            <Input className={styles.addInput} value={inputValue} onChange={changeInputValue} placeholder={inputValue} />
            <Button type="primary" onClick={addList}>增加</Button>
            <div className={styles.listWrap}>
              <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={listData}
                renderItem={(item, index) => (
                  <List.Item onClick={() => delList(index)}>{item}</List.Item>
                )}
              />
            </div>
        </div>
    )
}

export default App