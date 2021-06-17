import React, { useState, useEffect, useContext, useReducer } from 'react'

const HooksContext = React.createContext(0)

const Hooks = () => {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(10)
    const [reducerCount, handleReducer] = useReducer((state: number, action: string) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    }, 1)

    useEffect(() => {
        console.log('useEffect' + count)
    }, [count])

    return (
        <div>
            {/* useState */}
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>click</button>

            <p>My age {age}</p>
            <button onClick={() => setAge(age+1)}>add age</button>

            {/* useContext */}
            <HooksContext.Provider value={count}>
                <HooksChild />
            </HooksContext.Provider>

            {/* useReducer */}
            <h2>reducerCount: {reducerCount}</h2>
            <button onClick={() => handleReducer('add')}>+ 1</button>
            <button onClick={() => handleReducer('sub')}>- 1</button>
        </div>
    )
}

const HooksChild = () => {
    const count = useContext(HooksContext)
    return (
        <h2>context: {count}</h2>
    )
}

export default Hooks