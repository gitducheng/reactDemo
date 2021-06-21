import React, { createContext, useReducer } from 'react'

interface IColorContext {
    textColor: string,
    dispatch: (value: any) => void
}

export const ColorContext = createContext<IColorContext>({textColor: "blue", dispatch: (value) => {}})

type Props = {
    children: Object
}
export const ColorComponent = (props: Props) => {
    const [textColor, dispatch] = useReducer((state: any, action: string) => {
        switch (action) {
            case 'red':
                return "red"
            case 'yellow':
                return "yellow"
            default:
                return state
        }
    }, "blue")
    return (
        <ColorContext.Provider value={{textColor, dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}
