import React from 'react'
import '../styles/Cart.css'
export const CartItem = ({ item, quantity, removeItem, clearAll }) => {

    return (
        <>
            <div className='container-item'>
                Nombre: {item.name} <br /> Precio: {item.price} <br />  Unidades: {quantity} <br /> Total: {item.price * quantity} <br />
                <div className='container-quantity'></div>
                <button onClick={() => removeItem(item.id)} className='btn-exit-cart'> Eliminar </button>
            </div>
        </>
    )
}
