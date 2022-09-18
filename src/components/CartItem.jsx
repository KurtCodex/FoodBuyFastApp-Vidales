import React from 'react'
import '../styles/Cart.css'
export const CartItem = ({ item, quantity, removeItem, clearAll }) => {

    return (
        <>
            <div className='container-item'>
                Nombre: {item.name} <br /> Precio: {item.price} - Unidades: {quantity}
                <div className='container-quantity'></div>
                <button onClick={() => removeItem(item.id)} className='btn-exit-cart'> Eliminar </button>
            </div>
        </>
    )
}
