import React, { useState, useEffect } from 'react'


export default function Home() {
    
    const [count, setCount] = useState<number>(0)
    const [message, setMessage] = useState<string>("")

    useEffect(() => {
        setMessage(String(Math.random()))
    }, [count])

    return (
        <div>
            Hello :)
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Up count</button>
            <p>Random num: {message}</p>
        </div>
    )
}