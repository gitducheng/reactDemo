import React, { useState, useEffect, useContext } from 'react'

const HooksContext = React.createContext(0)

const Hooks = () => {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(10)

    useEffect(() => {
        console.log('useEffect' + count)
    }, [count])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>click</button>

            <p>My age {age}</p>
            <button onClick={() => setAge(age+1)}>add age</button>

            <HooksContext.Provider value={count}>
                <HooksChild />
            </HooksContext.Provider>
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