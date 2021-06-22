import React, { useState, memo, useMemo, useCallback } from 'react'

interface Props {
    data?: string,
    onChangeData: Function
}

const Child = memo(
    (props: Props) => {
        console.log("render child component")
        return (
            <div>
                <p>text: {props.data}</p>
                <p>{new Date().getTime()}</p>
                <input type="text" onChange={(e) => props.onChangeData(e)}/>
            </div>
        )
    }
    // ,
    // (prev, next): boolean => {
    //     console.log(prev, next)
    //     return prev.data === next.data
    // }
)

const MemoDemo = () => {
    const [data, setData] = useState("Memo静态数据")
    const [data2, setData2] = useState("Memo动态数据")

    function initMemoDemo() {
        // console.log("init MemoDemo")
        return data + "!"
    }
    function initMemoDemo2() {
        // console.log("init MemoDemo2")
        return data2 + new Date().getTime()
    }

    const onChangeData = useCallback((e: any) => {
        setData(e.target.value)
    }, [])

    // 定义某个方法的是否执行与数据更新相关,data修改，console打印两行；data2修改，console打印一行。
    // 有一个警告，不知道什么原因
    const showData = useMemo(() => initMemoDemo(), [data])
    const showData2 = initMemoDemo2()

    return (
        <div>
            <p>{showData}</p>
            <p>{showData2}</p>
            <button onClick={() => setData("Memo静态数据已修改")}>修改memo的静态值</button>
            <button onClick={() => setData2("Memo动态数据已修改")}>修改memo的静态值2</button>
            {/* <Child data={data} onChangeData={onChangeData}/> */}
            <Child onChangeData={onChangeData}/>
        </div>
    )
}

export default MemoDemo