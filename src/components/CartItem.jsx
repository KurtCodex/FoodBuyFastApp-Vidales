import React from 'react'

export const CartItem = ({ item, quantity, removeItem }) => {

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
