import React from 'react'
import { useState } from 'react';


import '../styles/Cards.css'

export const ItemCount = () => { // value puede ser un valor traido de otro jsx, utilizarlo e incrementarlo

    const [counter, setCounter] = useState(1);

    const increment = () => { counter < 12 ? setCounter(counter + 1) : setCounter(counter) }
    const decrement = () => { counter > 1 ? setCounter(counter - 1) : setCounter(counter) }

    return (
        <>
            <button onClick={decrement} className='card-button-cant'> - </button>
            <h4 className='counter-value'> Cant: {counter} </h4>
            <button onClick={increment} className='card-button-cant'> + </button>
        </>
    )
}
