import React from "react";
import '../styles/itemDetailContainer.css';


export const ItemDetail = ({ price, idx }) => {
    console.log(price)
    return (
        <>
            <div className='ItemDetail-img'>
                <img
                    className='card-img'
                    src=""
                    alt="beer"
                />
            </div>
            <div className='ItemDetail'> price: {price} </div>
            {/* <div className='ItemDetail'> titulo: {title} </div>
            <div className='ItemDetail'> precio: {price} </div>
            <div className='ItemDetail'> reviews {reviews}</div> */}
        </>
    )
}
