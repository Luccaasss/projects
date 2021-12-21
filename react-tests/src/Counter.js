import React, {useState, useContext} from 'react'
import {ThemeContext} from './App'


export default function Counter(){
    const [count, setCount] = useState(0)
    const mystyle = useContext(ThemeContext)
    return (
        <div style={mystyle}>
            <h1>{count}</h1>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    )
}