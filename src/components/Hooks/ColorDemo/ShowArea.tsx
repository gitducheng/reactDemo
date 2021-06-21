import React, {useContext} from 'react'
import {ColorContext} from './ColorComponent'

const ShowArea = () => {
    const {textColor} = useContext(ColorContext)
    return (
        <p style={{color: textColor}}>ColorDemo{textColor}</p>
    )
}

export default ShowArea