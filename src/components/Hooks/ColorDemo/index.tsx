import {useContext} from 'react'
import Buttons from "./Buttons"
import {ColorComponent, ColorContext} from "./ColorComponent"

const ColorDemo = () => {
    let {color} = useContext(ColorContext)

    const onChangeColor = (newColor: any) => {
        color = newColor
        console.log(color)
    }

    return (
        <div>
            <ColorComponent>
                <p style={color}>ColorDemo{color}</p>
                <Buttons onChangeColor={onChangeColor}/>
            </ColorComponent>
        </div>
    )
}


export default ColorDemo