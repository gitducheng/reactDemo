import React from 'react'
import {Input, Button, List} from 'antd'
import styles from '../styles/App.module.css'
import store from '../store';

const App = () => {
    console.log(store.getState())
    const listData = store.getState().listData
    return (
        <div>
            <Input className={styles.addInput} placeholder="react-redux-demo" />
            <Button type="primary">增加</Button>
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