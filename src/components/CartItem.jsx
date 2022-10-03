import React from 'react'
import '../styles/Cart.css'

export const CartItem = ({ item, quantity, removeItem }) => {

    return (
        <>
            <div className='container-item'>
                Nombre: {item.name} <br /> Precio Unidad: {item.price} <br />  Unidades: {quantity} <br /> Total: {item.price * quantity} <br />
                <div className='container-quantity'></div>
                <button onClick={() => removeItem(item)} className='btn-exit-cart'> Eliminar </button>
            </div>

        </>
    )
}
