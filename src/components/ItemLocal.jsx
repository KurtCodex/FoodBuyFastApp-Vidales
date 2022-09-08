import React from 'react'
import '../styles/local.css'

export const ItemLocal = ({ name, img, price, ibu }) => {
    return (
        <>
            <div className='container-ItemLocal'>
                <div className='card-Itemlocal'>
                    <img className='img-localbeer' src={img} alt="" />
                    <h3> Nombre: {name}</h3>
                    <h3> Precio: {price}</h3>
                    <h3> Ibu: {ibu}</h3>
                </div>
            </div>
        </>
    )
}
