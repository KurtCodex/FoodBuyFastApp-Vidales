import React, { useContext } from 'react'
import { CContext, FontAwesomeIcon, faCartShopping } from "./index";



export const CartWidget = () => {
    const { itemsCart } = useContext(CContext);
    let num = itemsCart.length
    return (
        <>
            {
                itemsCart.length !== 0 ? (<div className='navbar-cart'>
                    <FontAwesomeIcon className='cart' icon={faCartShopping} />
                    <div className='container-circle-num-cant'>
                        <p className='circle-num-cant'>{num}</p>
                    </div>
                </div>) : (<></>)
            }
        </>
    )
}
