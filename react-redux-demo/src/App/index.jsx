import React, {useState} from 'react'
import {Input, Button, List} from 'antd'
import styles from '../styles/App.module.css'
import store from '../store';

const App = () => {
    // console.log(store.getState())
    // 获取redux初始化的值
    const listData = store.getState().listData
    const defInputValue = store.getState().inputValue

    // 使用hooks定义input的变量
    const [inputValue, setInputValue] = useState(defInputValue)

    // 定义input输入框的change监听事件，并通过store.dispatch()派发，更新redux的值
    const changeInputValue = (e) => {
      console.log(e.target.value)
      store.dispatch({type: "changeInput", value: e.target.value})
    }
    // 定义更新state状态函数，提供给store.subscribe()订阅注册
    const storeChange = () => {
      setInputValue(store.getState().inputValue)
    }

    // redux更新，会执行已订阅redux的所有函数
    store.subscribe(storeChange)

    return (
        <div>
            <Input className={styles.addInput} onChange={changeInputValue} placeholder={inputValue} />
            <Button type="primary">增加</Button>
            <p>{inputValue}</p>
            <div className={styles.listWrap}>
              <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={listData}
                renderItem={item => (
                  <List.Item>{item}</List.Item>
                )}
              />
            </div>
        </div>
    )
}

export default App