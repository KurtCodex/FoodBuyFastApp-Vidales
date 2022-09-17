import React from 'react'

export const CartItem = ({ item }) => {
    return (
        <>

            <div className='container-item'>
                {item.name}

                <div className='container-quantity'></div>
                <button className='btn-exit-cart'> X </button>
            </div>
        </>
    )
}
