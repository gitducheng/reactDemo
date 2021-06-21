import React, {useContext} from 'react'
import {ColorContext} from "./ColorComponent"

const Buttons = () => {
    let {textColor, dispatch} = useContext(ColorContext)
    const onChangeColor = (val: string) => {
        console.log(val, textColor)
        dispatch(val)
    }

    return (
        <div>
            <button onClick={() => onChangeColor("red")}>红</button>
            <button onClick={() => onChangeColor("yellow")}>黄</button>
        </div>
    )
}

export default Buttons