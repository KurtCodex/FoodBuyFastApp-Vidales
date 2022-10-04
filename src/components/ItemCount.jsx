import React, { useState } from 'react'

import '../styles/Cards.css'

export const ItemCount = ({ stock, initial, cantCart, setCantCart }) => {
    const [counter, setCounter] = useState(initial);

    const increment = () => {
        if (cantCart < stock) {
            setCounter(counter + 1)
            setCantCart(cantCart + counter)
            setCounter(initial)
        } else {
            setCounter(counter)
        }
    }
    const decrement = () => {
        if (cantCart > initial) {
            setCounter(counter + 1)
            setCantCart(cantCart - counter)
            setCounter(initial)
        } else {
            setCounter(counter)
        }
    }

    return (
        <>
            <div className='container-buttons-count'>
                <button onClick={() => { increment() }} className='card-button-cant'> + </button>
                <h3>
                    Cantidad: {cantCart}
                </h3>
                <button onClick={() => { decrement() }} className='card-button-cant'> - </button>
            </div>

        </>
    )
}
