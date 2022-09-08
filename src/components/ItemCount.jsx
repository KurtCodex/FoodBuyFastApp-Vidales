import React from 'react'
import { useState } from 'react';
import '../styles/Cards.css'

export const ItemCount = ({ stock, initial, average }) => {
    const [counter, setCounter] = useState(initial);

    const increment = () => { counter < stock ? setCounter(counter + 1) : setCounter(counter) }
    const decrement = () => { counter > initial ? setCounter(counter - 1) : setCounter(counter) }



    return (
        <>
            <div className='container-buttons-count'>
                <button onClick={increment} className='card-button-cant'> + </button>
                <h4 className='counter-value'> Cant: {counter} </h4>
                <button onClick={decrement} className='card-button-cant'> - </button>
            </div>
            <div className='container-button-addcart'>
                <button onClick={() => alert("añadido!")} className='card-button-addcart'> Al carrito!</button>
            </div>
        </>
    )
}
