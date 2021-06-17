import React, { useState, useEffect } from 'react'

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
        </div>
    )
}

export default Hooks