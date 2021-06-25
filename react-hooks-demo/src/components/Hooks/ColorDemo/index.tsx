import Buttons from "./Buttons"
import {ColorComponent} from "./ColorComponent"
import ShowArea from './ShowArea'

const ColorDemo = () => {
    return (
        <div>
            <ColorComponent>
                <ShowArea />
                <Buttons />
            </ColorComponent>
        </div>
    )
}


export default ColorDemo