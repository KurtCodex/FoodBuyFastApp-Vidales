import React from 'react'
import { useState } from 'react';
import '../styles/Cards.css'

export const ItemCount = ({ stock, initial, cantCart, setCantCart }) => {
    const [counter, setCounter] = useState(initial);

    const increment = () => { counter < stock ? setCounter(counter + 1) : setCounter(counter) }
    const decrement = () => { counter > initial ? setCounter(counter - 1) : setCounter(counter) }

    const onAdd = () => {
        setCantCart(cantCart + counter)
        alert(`añadidos ${counter}`)
        setCounter(initial)
    }

    return (
        <>
            <div className='container-buttons-count'>
                <button onClick={increment} className='card-button-cant'> + </button>
                <h4 className='counter-value'> Cant: {counter} </h4>
                <button onClick={decrement} className='card-button-cant'> - </button>
            </div>
            <div className='container-button-addcart'>
                <button onClick={() => { onAdd() }} className='card-button-addcart'> Al carrito!</button>
            </div>
        </>
    )
}
