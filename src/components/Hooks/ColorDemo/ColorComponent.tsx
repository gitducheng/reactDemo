import { createContext, useReducer } from 'react'

export const ColorContext = createContext({color: {color: "blue"}, dispatch: {}})
// export const ColorContext = createContext({})

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
